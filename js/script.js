function addRow(){

	let table = document.getElementById("invoiceTable")

	let row = table.insertRow()

	row.innerHTML = `
	<td><input type="date"></td>
	<td><input type="text"></td>
	<td><input type="text"></td>
	<td><input type="text"></td>
	<td><input type="number" class="qty"></td>
	<td><input type="number" class="weight"></td>
	<td><input type="number" class="tonnage"></td>
	<td><input type="number" class="rate"></td>
	<td class="rowTotal">0</td>
	`

}

function calculate(){

	let tonnage = document.querySelectorAll(".tonnage")
	let rate = document.querySelectorAll(".rate")
	let totalCells = document.querySelectorAll(".rowTotal")

	let subtotal = 0

	for(let i=0;i<tonnage.length;i++){

		let total = tonnage[i].value * rate[i].value
		totalCells[i].innerHTML = total.toFixed(3)

		subtotal += total

	}

	let service = subtotal * 0.02
	let sgst = (subtotal + service) * 0.09
	let cgst = (subtotal + service) * 0.09

	let grand = subtotal + service + sgst + cgst

	document.getElementById("subtotal").innerHTML =
		"Subtotal: "+subtotal.toFixed(3)

	document.getElementById("service").innerHTML =
		"Service Charge 2%: "+service.toFixed(3)

	document.getElementById("sgst").innerHTML =
		"SGST 9%: "+sgst.toFixed(3)

	document.getElementById("cgst").innerHTML =
		"CGST 9%: "+cgst.toFixed(3)

	document.getElementById("grand").innerHTML =
		"Total Value: ₹"+grand.toFixed(2)

}
