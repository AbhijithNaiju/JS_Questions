var printLocation;
var printValue;

function printOutput(printLocation,printValue)
{
	document.getElementById(printLocation).innerHTML = printValue;
}
function checkIsEmpty(checkValue)
{
	if(checkValue.trim().length==0)
	{
		return false;
	}	
	else
	{ 
		return true;
	}
}
function printMenuArithemetic()
{
	document.getElementById("calculateButton").style.display = "unset";
	document.getElementById("menuInputContainer").style.display = "unset";
	document.getElementById("menuShowButton").style.display = "none";
}