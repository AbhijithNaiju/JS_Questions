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

function findArithemetic()
{
	let num1=document.getElementById("num1").value;
	let num2=document.getElementById("num2").value;
	let operator=document.getElementById("operator").value
	if(checkIsEmpty(operator))
	{
		printOutput("error","");
		num1=parseInt(num1);
		num2=parseInt(num2);
		switch(operator)
		{
			case "1":
				printOutput("answerArithemetic",num1+num2);
				break;
			case "2":
				printOutput("answerArithemetic",num1-num2);
				break;
			case "3":
				printOutput("answerArithemetic",num1*num2);
				break;
			case "4":
				if(num2==0)
				{
					printOutput("error","Math Error");
					printOutput("answerArithemetic","");
				}
				else
				{
					printOutput("answerArithemetic",num1/num2);
				}
				break;
			case "5":
				document.getElementById("calculateButton").style.display = "none";
				document.getElementById("menuInputContainer").style.display = "none";
				document.getElementById("menuShowButton").style.display = "unset";
				printOutput("error","");
				break;
			default:
				printOutput("error","Please enter a valid operator");
				printOutput("answerArithemetic","");
		}
	}
	else
	{
		printOutput("error","Please select the operation");
	}
}