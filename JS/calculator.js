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
function operationAdd()
{
	document.getElementById("calculatorOperator").value="+";
}
function operationSub()
{
	document.getElementById("calculatorOperator").value="-";
}
function operationMultiply()
{
	document.getElementById("calculatorOperator").value="×";
}
function operationDivide()
{
	document.getElementById("calculatorOperator").value="÷";
}

function calculator()
{
	let num1=document.getElementById("numberOne").value;
	let num2=document.getElementById("numberTwo").value;
	let operator=document.getElementById("calculatorOperator").value
	if(checkIsEmpty(num1) && checkIsEmpty(num2))
	{
		printOutput("error","");
		num1=parseInt(num1);
		num2=parseInt(num2);
		switch(operator)
		{
			case "+":
				printOutput("answerCalculator",num1+num2);
				break;
			case "-":
				printOutput("answerCalculator",num1-num2);
				break;
			case "×":
				printOutput("answerCalculator",num1*num2);
				break;
			case "÷":
				if(num2==0)
				{
					printOutput("error","Math Error");
					printOutput("answerCalculator","");
				}
				else
				{
					printOutput("answerCalculator",num1/num2);
				}
				break;
			default:
				printOutput("error","Please enter a valid operator");
				printOutput("answerCalculator","");
		}
	}
	else
	{
		printOutput("error","Please enter the number");
	}	
}