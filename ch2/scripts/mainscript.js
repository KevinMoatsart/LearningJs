window.onload = yesNo;

function writeMessage(){
	document.getElementById("mainheader").
		innerHTML = "Be Javvy";

	document.getElementById("mainarticle").
		innerHTML = "Has been changed!";
}

function alertConsumer(){
	alert("You have just opened my Javascript page!");

}

function yesNo(){
	if(confirm("Counter Strike?")){
		alert("You said yes");
	}
	else{
		alert("You said no");
}

}