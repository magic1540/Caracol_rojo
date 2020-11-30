from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.

class UsuarioManager(BaseUserManager):
    def _create_user(self, username, email, nombres, apellidos, password, is_staff, is_superuser, **extra_fields):
        if not email:
            raise ValueError("El usuario debe tener correo electronico")
        usuario = self.model(
            username = username,
            email = self.normalize_email(email),
            nombres = nombres,
            apellidos = apellidos,
            is_staff = is_staff,
            is_superuser = is_superuser,
            **extra_fields
        )
        usuario.set_password(password)
        usuario.save(using=self.db)
        return usuario
    
    def create_user(self, username, email, nombres, apellidos, password, **extra_fields):
        usuario = self._create_user(
            username,
            email,
            nombres,
            apellidos,
            password,
            False,
            False,
            **extra_fields
        )

    def create_superuser(self, username, email, nombres, apellidos, password, **extra_fields):
        usuario = self._create_user(
            username,
            email,
            nombres,
            apellidos,
            password,
            True,
            True,
            **extra_fields
        )


class Usuario(AbstractBaseUser, PermissionsMixin):
    username  =  models.CharField('Nombre de usuario', unique = True, max_length = 100)
    email     =  models.EmailField('Correo electronico', unique = True, max_length = 250)
    nombres   =  models.CharField('Nombre completo', max_length = 200)
    apellidos =  models.CharField('Apellidos', max_length = 200)
    estado    =  models.CharField('Estado', max_length = 50, default = 'DISPONIBLE')
    credito   =  models.FloatField('Credito', default = 0)
    imagen    =  models.ImageField('Imagen de perfil', upload_to = 'perfil', blank = True, null = True)
    is_active =  models.BooleanField(default = True)
    is_staff  =  models.BooleanField(default = False)
    objects   = UsuarioManager()

    USERNAME_FIELD  = 'username'
    REQUIRED_FIELDS = ['email', 'nombres', 'apellidos']

    def __str__(self):
        return "Username: " + self.username + ", " + "Nombre: " + self.nombres + ", " + "Estado: " + self.estado + ", " + "Credito: " + str(self.credito)
        