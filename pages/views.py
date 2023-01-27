
from contextlib import redirect_stderr
from tkinter.messagebox import showerror
from django.shortcuts import render
from django.shortcuts import redirect
from atexit import register
from sre_parse import State
from pages.models import StudForm

# Create your views here.


def nhome(request):
    return render(request, 'newhome.html')


def index(request):
    return render(request, "index.html")


def addpage(request):
    sname = request.POST.get('sname')
    id = request.POST.get('sid')
    date = request.POST.get('sBirthdate')
    gpa = request.POST.get('sgpa')
    gen = request.POST.get('sgender')
    level = request.POST.get('slevel')
    state = request.POST.get('sstate')
    department = request.POST.get('sdepartment')
    mail = request.POST.get('semail')
    mobile = request.POST.get('smobile')
    data = StudForm(sname=sname, id=id, gen=gen, date=date, gpa=gpa, level=level,
                    state=state,department=department ,mail=mail, mobile=mobile)
    data.save()
    return render(request, 'add.html')


def searchpage(request):
    return render(request, 'search.html', {'student': StudForm.objects.filter(state="active")})


def assignpage(request, id):
    s_id=StudForm.objects.get(id=id)
    if request.method=='POST' and (s_id.level==3 or s_id.level==4):
        s_id.department=request.POST['sdepartment']
        s_id.save()
        return redirect('search')
    return render(request,'assign.html',{'student':s_id})
    
    
def viewpage(request):
    return render(request, 'view.html', {'student': StudForm.objects.all()})


def editpage(request,id):
    s_id=StudForm.objects.get(id=id)
    if request.method=='POST':
        s_id.sname=request.POST['sname']
        s_id.id=request.POST['sid']
        s_id.date=request.POST['sBirthdate']
        s_id.gpa=request.POST['sgpa']
        s_id.gen=request.POST['sgender']
        s_id.level=request.POST['slevel']
        s_id.state=request.POST['sstate']
        s_id.department=request.POST['sdepartment']
        s_id.mail=request.POST['semail'] 
        s_id.mobile=request.POST['smobile']
        s_id.save()
        return redirect('view')
    return render(request,'edit.html',{'student':s_id})    


def DeleteStudent(request, id):
    Student = StudForm.objects.get(id=id)
    Student.delete()
    return redirect('view')


def changestate(request, id):
    student = StudForm.objects.get(id=id)
    if student.state == "active" or student.state == "Active":
        StudForm.objects.filter(id=id).update(state="inactive")
    else:
        StudForm.objects.filter(id=id).update(state="active")
    return redirect('view')
