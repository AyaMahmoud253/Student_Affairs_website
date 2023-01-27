function show_confirm(){
    var r=confirm("Change Student Status");
    if (r==true)
      {
        alert("Student status Changed Successfully!");
        return true;
      }
    else
      {
        alert("changing Status canceld!");
        return false;
      }
}


function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search")
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }       
    }
}