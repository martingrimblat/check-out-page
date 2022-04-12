var data1 = 1
var data2 = 1
var shipping = 19
var total
var product1 = 54.99
var product2 = 74.99

document.getElementById("counter-1").innerText=1
document.getElementById("counter-2").innerText=1

product1 = product1 * data1
product2 = product2 * data2

total = product2 + product1 + shipping

document.getElementById("total-cost").innerText=total;


function decrement_1(){
	if(data1>1){
		data1--;
		document.getElementById("counter-1").innerText=data1;
		product1 = product1 - 54.99
		total = product2 + product1 + shipping
		document.getElementById("total-cost").innerText=total.toFixed(2);
	}

	
}

function increment_1(){
	data1++;
	document.getElementById("counter-1").innerText=data1;

	product1 = product1 + 54.99	
	total = product2 + product1 + shipping
	document.getElementById("total-cost").innerText=total.toFixed(2);
}

function decrement_2(){
	if(data2>1){
		data2--;
		document.getElementById("counter-2").innerText=data2;
		product2 = product2 - 74.99	
		total = product2 + product1 + shipping
		document.getElementById("total-cost").innerText=total.toFixed(2);
	}
}

function increment_2(){
	data2++;
	document.getElementById("counter-2").innerText=data2;
	product2 = product2 + 74.99	
	total = product2 + product1 + shipping
	document.getElementById("total-cost").innerText=total.toFixed(2);
}


