document.getElementById("add").addEventListener("click", addTable);
var buttonStr = "<button id='remove'>x</button>"

function addTable(){  
  var table = document.getElementById("formData")
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
 
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  
  cell1.innerHTML = firstName;
  cell2.innerHTML = lastName;
  cell3.innerHTML = email;
  cell4.innerHTML = buttonStr;
}

