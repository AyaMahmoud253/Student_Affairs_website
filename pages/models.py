from tkinter import Widget
from django.db import models
from asyncio.windows_events import NULL

# Create your models here.
from asyncio.windows_events import NULL
import email
class StudForm(models.Model):
    
    x=[('General','General'),
       ('Information System', 'Information System'),
       ('Computer Science', 'Computer Science'),
       ('Information Technology', 'Information Technology'),
       ('Artificial Inteligence', 'Artificial Inteligence'), ]
    
    sname = models.CharField(max_length=35, null=True)
    id = models.CharField(max_length=8, primary_key=True, null=False)
    gen = models.CharField(max_length=35, null=True)
    state = models.CharField(max_length=10, null=True)
    mail = models.EmailField(max_length=50, null=True)
    date = models.CharField(max_length=35, null=True)
    level = models.IntegerField(max_length=1, null=True)
    gpa = models.DecimalField(max_digits=3, decimal_places=2, null=True)
    department = models.CharField(max_length=50,choices=x, null=True)
    mobile = models.CharField(max_length=12, null=True)