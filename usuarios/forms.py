from django import forms
from .models import Usuario

class UserRegisterForm(forms.ModelForm):
    password1 = forms.CharField(label="Contraseña", widget=forms.PasswordInput)
    password2 = forms.CharField(label="Confirma contraseña", widget=forms.PasswordInput)

    class Meta:
        model = Usuario
        fields = ['nombres', 'apellidos', 'username', 'email', 'password1', 'password2']