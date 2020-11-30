from django.shortcuts import render, redirect
from django.core.exceptions import ObjectDoesNotExist
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import Usuario
from .forms import UserRegisterForm
# Create your views here.

def registro(request):
    if request.user.is_authenticated:
        return redirect('inicio')
    else:
        if request.method == 'POST':
            myForm = UserRegisterForm(request.POST)
            if myForm.is_valid():
                codigo = request.POST['txtCodigo']
                clave1 = myForm.cleaned_data['password1']
                clave2 = myForm.cleaned_data['password2']
                if clave1 == clave2:
                    if codigo == 'SUPERUSER24':
                        myForm.Meta.model.objects.create_superuser(
                            myForm.cleaned_data['username'],
                            myForm.cleaned_data['email'],
                            myForm.cleaned_data['nombres'],
                            myForm.cleaned_data['apellidos'],
                            myForm.cleaned_data['password1'],
                        )
                    else:
                        myForm.Meta.model.objects.create_user(
                            myForm.cleaned_data['username'],
                            myForm.cleaned_data['email'],
                            myForm.cleaned_data['nombres'],
                            myForm.cleaned_data['apellidos'],
                            myForm.cleaned_data['password1'],
                        )
                    username = myForm.cleaned_data['username']
                    messages.success(request, f"Usuario {username} creado")
                    return redirect('login')
                else:
                    messages.error(request, 'Las contraseñas deben coincidir')
        else:
            myForm = UserRegisterForm()
    context = {'form' : myForm}
    return render(request, 'usuarios/registro.html', context)

def logear(request):
    if request.user.is_authenticated:
        return redirect('panel')
    if request.method == 'POST':
        username = request.POST['usuario']
        contraseña = request.POST['contraseña']

        user = authenticate(request, username=username, password=contraseña)

        if user is not None:
            login(request, user)
            messages.success(request, f'Bienvenido {username}')
            return redirect('inicio')
        else:
            messages.error(request, 'Usuario o contraseña incorrecto')

    context = {}
    return render(request, 'usuarios/login.html', context)

def deslogear(request):
    logout(request)
    messages.success(request, 'Sesion terminada')
    return redirect('login')

@login_required(login_url = 'login')
def panel(request):
    return render(request, 'usuarios/panel.html', {})

@login_required(login_url = 'login')
def agregarUsuario(request):
    if request.user.is_superuser == False:
        return redirect('panel')
    if request.method == 'POST':
        usuario = Usuario()
        clave1  = request.POST['pass1']
        clave2  = request.POST['pass2']
        tipo    = request.POST['tipo_usuario']
        if clave1 == clave2:
            if tipo == 'cliente':
                usuario.is_superuser = False
                usuario.is_staff     = False
            else:
                usuario.is_superuser = True
                usuario.is_staff     = True
            usuario.nombres   = request.POST['nombre']
            usuario.apellidos = request.POST['apellido']
            usuario.username  = request.POST['username']
            usuario.email     = request.POST['email']
            usuario.estado    = request.POST['estado']
            usuario.credito   = request.POST['credito'] 
            usuario.set_password(clave1)
            usuario.save()
            messages.success(request, 'Muy bien usuario agregado')
        else:
            messages.error(request, 'Las contraseñas no coinciden')

    return render(request, 'usuarios/crud/agregar.html', {})

@login_required(login_url = 'login')
def buscar_para_modificar(request):
    if request.user.is_superuser == False:
        return redirect('panel')
    return render(request, 'usuarios/crud/buscar.html', {})

@login_required(login_url = 'login')
def mostrar_para_modificar(request):
    if request.user.is_superuser == False:
        return redirect('panel')
    try:
        if request.method == 'POST':
            username = request.POST['username']
            usuario  = Usuario.objects.get(username = username)
            context = {'usuario' : usuario}
        return render(request, 'usuarios/crud/modificar.html', context)
    except ObjectDoesNotExist:
        return render(request, 'usuarios/error/error201.html', {})

@login_required(login_url = 'login')
def modificarUsuario(request):
    if request.user.is_superuser == False:
        return redirect('panel')
    if request.method == 'POST':
        id = request.POST['idUsuario']
        usuario  = Usuario.objects.get(id = id)
        clave1   = request.POST['pass1']
        clave2   = request.POST['pass2']
        tipo     = request.POST['tipo_usuario']
        if clave1 == clave2:
            if tipo == 'cliente':
                usuario.is_superuser = False
                usuario.is_staff     = False
            else:
                usuario.is_superuser = True
                usuario.is_staff     = True
            usuario.username  = request.POST['username']
            usuario.nombres   = request.POST['nombre']
            usuario.apellidos = request.POST['apellido']
            usuario.username  = request.POST['username']
            usuario.email     = request.POST['email']
            usuario.estado    = request.POST['estado']
            usuario.credito   = request.POST['credito'] 
            usuario.set_password(clave1)
            usuario.save()
            messages.success(request, 'Muy bien usuario modificado')
        else:
            messages.error(request, 'Las contraseñas no coinciden')

    return render(request, 'usuarios/crud/modificar.html', {})

@login_required(login_url = 'login')
def listarUsuarios(request):
    if request.user.is_superuser == False:
        return redirect('panel')
    usuarios = Usuario.objects.all()
    context  = {'usuarios' : usuarios}
    return render(request, 'usuarios/crud/listar.html', context)

@login_required(login_url = 'login')
def listarUsuarios_con_filtro(request):
    if request.user.is_superuser == False:
        return redirect('panel')
    usuarios = Usuario.objects.filter(estado = 'NO DISPONIBLE', credito__gt = 0)
    context  = {'usuarios' : usuarios}
    return render(request, 'usuarios/crud/listar.html', context)

@login_required(login_url = 'login')
def listarUsuariosDisponibles(request):
    usuarios = Usuario.objects.filter(estado = 'DISPONIBLE')
    context  = {'usuarios' : usuarios}
    return render(request, 'usuarios/crud/listar.html', context)

@login_required(login_url = 'login')
def eliminarUsuario(request):
    if request.user.is_superuser == False:
        return redirect('panel')
    try:
        if request.method == 'POST':
            username = request.POST['username']
            usuario  = Usuario.objects.get(username = username)
            usuario.delete()
            messages.success(request, 'Usuario eliminado')
        return render(request, 'usuarios/crud/eliminar.html', {})
    except ObjectDoesNotExist:
        return render(request, 'usuarios/error/error201.html', {})

def catalogo_xone(request):
    return render(request, 'usuarios/catalogo/catalogo-xone.html', {})

@login_required(login_url = 'login')
def cambiar_imagen_usuario(request):
    if request.method == 'POST':
        username = request.user.username
        usuario  = Usuario.objects.get(username = username)
        usuario.imagen = request.FILES['imagen']
        usuario.save()
        messages.success(request, 'Muy bien imagen actualizada')
    return render(request, 'usuarios/cambiar_imagen.html', {})

def inicio(request):
    return render(request, 'usuarios/index.html', {})