const btnop1 = document.getElementById("op-1");
const btnop2 = document.getElementById("op-2");
const op1Text = document.getElementById("op-1-text");
const op2Text = document.getElementById("op-2-text");

btnop1.onclick = function(){
	op1Text.style.display = "block";
	op2Text.style.display = "none";
	btnop1.style.borderBottom = "8px solid #1f0000";
	btnop2.style.borderBottom = "none";
}

btnop2.onclick = function(){
	op1Text.style.display = "none";
	op2Text.style.display = "block";
	btnop1.style.borderBottom = "none";
	btnop2.style.borderBottom = "8px solid #1f0000";
}
