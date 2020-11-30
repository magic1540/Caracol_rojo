from django.conf.urls import url
from django.urls import path, include
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('registro', views.registro, name="registro"),
    path('login', views.logear, name="login"),
    path('logout', views.deslogear, name="logout"),
    path('inicio', views.inicio, name="inicio"),
    path('catalogo-xone', views.catalogo_xone, name="catalogo-xone"),
    path('panel', views.panel, name="panel"),
    path('cambiar_imagen', views.cambiar_imagen_usuario, name="cambiar_imagen"),
    path('agregar', views.agregarUsuario, name="agregar"),
    path('buscar', views.buscar_para_modificar, name="buscar"),
    path('mostrar', views.mostrar_para_modificar, name="mostrar"),
    path('modificar', views.modificarUsuario, name="modificar"),
    path('listar', views.listarUsuarios, name="listar"),
    path('listar_con_filtro', views.listarUsuarios_con_filtro, name="listar_con_filtro"),
    path('listar_disponibles', views.listarUsuariosDisponibles, name="listar_disponibles"),
    path('eliminar', views.eliminarUsuario, name="eliminar"),
    path('recuperar_contraseña', 
    auth_views.PasswordResetView.as_view(template_name = 'usuarios/recuperar_contraseña.html'),
    name="password_reset"),
    path('recuperar_contraseña_mensaje', 
    auth_views.PasswordResetDoneView.as_view(template_name = 'usuarios/recuperar_contraseña_mensaje.html'),
    name = 'password_reset_done'),
    path('reset/<uidb64>/<token>/', 
    auth_views.PasswordResetConfirmView.as_view(template_name = 'usuarios/recuperar_contraseña_reset.html'),
    name = 'password_reset_confirm'),
    path('recuperar_contraseña_completado', 
    auth_views.PasswordResetCompleteView.as_view(template_name = 'usuarios/recuperar_contraseña_completado.html'),
    name = 'password_reset_complete'),
]