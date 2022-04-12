var data=1
document.getElementById("counter").InnerText=0

function decrement(){
	if(data>=0){
		data--;
		document.getElementById("counter").InnerText=data;
	}
}

function increment(){
	data++;
	document.getElementById("counter").InnerText=data;
}