
function generateTable() {
var getData = document.getElementById("number").value;
var putData = document.getElementById("display");
var i, temp; 
for (i = 1; i <= 10; i++)
putData.innerHTML +=getData+ " X " +i+ " = "+getData*i+ "<br>"
};

function generateTable() {
    var number = document.getElementById('number').value;
    var display = document.getElementById('display');
    display.innerHTML = ''; // Clear previous table (if any)

    var table = document.createElement('table');
    table.setAttribute('class', 'responsive-table');

    for (var i = 1; i <= 10; i++) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.textContent = number + " X " + i;
        cell2.textContent = number * i;
    }

    display.appendChild(table);
}
