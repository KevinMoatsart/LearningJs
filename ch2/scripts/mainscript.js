window.onload = initSquareRoot;

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

function askForAnswer(){

	var answer;
	answer = prompt("What game do you want to play?", "CSGO");

	if(answer == "CSGO")
		if(confirm("Are you sure you want to play CSGO?"))
		{
			alert("You smart");
		}
		else{
			alert("You are a literal scrub");
		}
	else
		alert("WARNING: You are literally a scrub!!");
	
}

function initAll(){

	document.getElementById("toRedirect").
		onclick=initRedirect;
}

function initRedirect(){

	if(confirm("Are you sure you want to leave this website?")){
			window.location = "destination.html";
	}
	else{
		alert("Thanks for staying");
	}
	return false;
}

function initAllAnimals(){

	document.getElementById("horse").
		onclick=animals;
	document.getElementById("cow").
		onclick=animals;
	document.getElementById("cat").
		onclick=animals;
}

function animals(){

	switch(this.id){

		case "horse":
			alert("NAAAAY");
			break;
		case "cow":
			alert("MOOO");
			break;
		case "cat":
			alert("MEOW");
			break;

	}
}

function initSquareRoot(){

	squareRoot();
}

function squareRoot(){

	var ans = prompt("Enter a number and i'll tell ya the square root buddy.")
	try{
		if(!ans || isNaN(ans) || ans < 0){
			throw new Error("Not a valid number :(");
		}

		alert("The square root of " + ans + " is: " + Math.sqrt(ans));
	}
	catch(errMsg){
		alert(errMsg.message);
	}
}