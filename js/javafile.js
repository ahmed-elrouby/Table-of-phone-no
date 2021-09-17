let createtable = document.querySelectorAll('button')[0];
let removetable = document.querySelectorAll('button')[1];
let table = document.createElement('table');
createtable.style="background:green;padding:10px; border-radius:5px;";
removetable.style="background:red;padding:10px; border-radius:5px";
table.style = "border:1px solid black; background:blue; width:350px; margin:auto; border-collapse:collapse;";
//create row button
let createrow = document.createElement('button');
createrow.innerHTML = "Create Row";
createrow.style = "background:green; padding:10px;border-radius:5px;";
//remove row button
let removerow = document.createElement('button');
removerow.innerHTML = "Remove Row";
removerow.style = "background:yellow; padding:10px;border-radius:5px;margin-left:10px;";

let tabler = document.createElement('tr');
let tableh1 = document.createElement('th');
let tableh2 = document.createElement('th');
tableh1.style = "border:1px solid black;";
tableh2.style = "border:1px solid black;";
let tname = document.createTextNode('Name');
let tphone = document.createTextNode('Phone');
tableh1.append(tname);
tableh2.append(tphone);
tabler.append(tableh1);
tabler.append(tableh2);
table.append(tabler);

//table header
tableh1.appendChild(tname);
tableh2.appendChild(tphone);
//create and delete row
createrow.addEventListener('click',CreateR);
removerow.addEventListener('click',RemoveR);
//create and delete table 
createtable.addEventListener('click', CreateT);
removetable.addEventListener('click', RemoveT);
//create table fun
function CreateT(e) {
  e.preventDefault();
  document.body.appendChild(table);
  document.body.appendChild(createrow);
  document.body.appendChild(removerow);
}
//remove table fun
function RemoveT(e) {
  e.preventDefault();
  document.body.removeChild(table);
  document.body.removeChild(createrow);
  document.body.removeChild(removerow);
}
//add row
function CreateR() {
  let trow= document.createElement('tr');
  let tablec1= document.createElement('td');
  let tablec2= document.createElement('td');
  let cname= document.createElement('input');
  cname.setAttribute('type','text');
  let cphone= document.createElement('input');
  cphone.setAttribute('type','tel');
  tablec1.appendChild(cname);
  tablec2.appendChild(cphone);
  trow.appendChild(tablec1);
  trow.appendChild(tablec2);
  table.appendChild(trow);
}
//remove row
function RemoveR() {
  let row=table.querySelectorAll('tr');
  if(row.length-1>0)
  {
    table.removeChild(row[row.length-1]);
  }
}