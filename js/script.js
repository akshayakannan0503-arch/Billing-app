let serial = 1

function addRow(){

let table = document.getElementById("billTable")

let row = table.insertRow()

row.innerHTML = `
<td>${serial++}</td>
<td><input type="date"></td>
<td><input type="text"></td>
<td><input type="text"></td>
<td><input type="text"></td>
<td><input type="number"></td>
<td><input type="number"></td>
<td class="tonnage"><input type="number"></td>
<td class="rate"><input type="number"></td>
<td class="rowTotal">0</td>
`
}

function calculateTotal(){

let rows = document.querySelectorAll("#billTable tr")

let subtotal = 0

for(let i=1;i<rows.length;i++){

let tonnage = rows[i].cells[7].children[0].value
let rate = rows[i].cells[8].children[0].value

let total = tonnage * rate

rows[i].cells[9].innerHTML = total.toFixed(3)

subtotal += total
}

let service = subtotal * 0.02
let sgst = (subtotal + service) * 0.09
let cgst = (subtotal + service) * 0.09

let grand = subtotal + service + sgst + cgst

document.getElementById("subtotal").innerHTML =
"Subtotal : "+subtotal.toFixed(3)

document.getElementById("service").innerHTML =
"Service Charge 2% : "+service.toFixed(3)

document.getElementById("sgst").innerHTML =
"SGST 9% : "+sgst.toFixed(3)

document.getElementById("cgst").innerHTML =
"CGST 9% : "+cgst.toFixed(3)

document.getElementById("grandTotal").innerHTML =
"Total Value : ₹"+grand.toFixed(2)

}
