/* Adding listener for 'add' button click. Also setting gobal variables for the table, a runtime function for random which will 
generate a variable between 5 and 10. Followed by a timer which will execute the removeTable() function at every rand second
interval*/

document.getElementById("add").addEventListener("click", addTable);
var table = document.getElementById("formData");
var rand = random();
var timer = setInterval(function() {removeTable()}, (rand * 1000));

/* Created a function called addTable() which will store the values of the initializer row and pass them to an entirely new row
which an x button at the end which has an innerHTML that executes the removeRow() function when clicked. After creating a new
row with the values in the initalizer row, the clearInitRow() function is called which clears the values the user has added
to the initializer row  to set the user up for the next addition. */

function addTable() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var buttonStr = "<button id='remove' onclick='removeTable()'>x</button>";
  var row = table.insertRow(1);
  row.class = "added";
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = firstName;
  cell2.innerHTML = lastName;
  cell3.innerHTML = email;
  cell4.innerHTML = buttonStr;
  clearInitRow();
}

/* removes the first table row as long as it's one of the rows that has been added by the user, not the initalizer row */
function removeTable() {
  if (table.rows[1].class === "added") {
    table.deleteRow(1);
  }
}

//Generates and returns a random number between 1 and 10 and rounds down to the nearest whole number.
function random() {
  return Math.floor(Math.random() * (10 - 5) + 5);
}

function clearInitRow() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
}