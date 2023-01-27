from django.urls import path
from . import views
from django.conf.urls import include
from .views import editpage
urlpatterns = [
    path('', views.nhome),
    path("index/", views.index, name='index'),
    path('add/', views.addpage, name='add'),
    path('search/', views.searchpage, name='search'),
    path('assign/<id>', views.assignpage, name='assign'),
    path('view/', views.viewpage, name='view'),
    path('edit/<id>', views.editpage, name='edit'),
    path('DeteleStudent/<id>', views.DeleteStudent, name='DeleteStudent'),
    path('changestate/<id>', views.changestate, name='changestate'),
]
