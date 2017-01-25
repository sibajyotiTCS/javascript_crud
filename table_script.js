function init() {
//Global variable to store Employee collection
var Emps=[];
var table=document.getElementById("data_table");
//table.addEventListener("dblclick",editData);
}

function editData(this){
	console.log(this);
}


function addEmp(emp){
	Emps.push(emp);
}

function removeEmp(index){
	 Emps.splice(index, 1);
}

function delete_row(x)
{
 removeEmp(x);
 displayTable(Emps);
}


function add_row()
{
 var new_Id=document.getElementById("new_Id").value;
 var new_Name=document.getElementById("new_Name").value;
 var new_Desg=document.getElementById("new_Desg").value;
 if(new_Id=='')
 	return;
 addEmp({Emp_id:new_Id, Emp_Name:new_Name,Emp_Des:new_Desg});
 displayTable(Emps);
 clearInputField();
}

function displayTable(emps){
	var table=document.getElementById("data_table");
	clearTable(table);
	emps.forEach(function(e,i){
	var row = table.insertRow(i+2).innerHTML=
	"<tr id='row"+i+"'><td id='Id_row"+i+"'>"+e.Emp_id+"</td>"
	+"<td id='Name_row"+i+"'>"+e.Emp_Name+"</td>"
	+"<td id='Desg_row"+i+"'>"+e.Emp_Des+"</td>"
	+"<td><input type='button' value='-' class='delete' "
	+"onclick='delete_row("+i+")'></td></tr>";
	});
}

function  clearInputField() {
	document.getElementById("new_Id").value="";
 	document.getElementById("new_Name").value="";
 	document.getElementById("new_Desg").value="";
}

function clearTable(table) {
  var rows = table.rows;
  var i = rows.length;
  while (--i>1) {
    table.deleteRow(i);
  }
}