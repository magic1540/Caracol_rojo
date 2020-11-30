from django.test import TestCase
import unittest
from .models import Usuario
# Create your tests here.

class testUsuario(unittest.TestCase):

    def test_val_permisos_admin(self):
        usuario = Usuario.objects.get(username = 'admin')
        self.assertTrue(usuario.is_superuser, True)

    def test_val_permisos_cliente(self):
        usuario = Usuario.objects.get(username = 'vegeta1')
        self.assertFalse(usuario.is_superuser, False)
