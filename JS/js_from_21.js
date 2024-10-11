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


function hundredNoLoop(number)
{	
	document.write(number+"<br>")
	if(number==100)
	{
		return;
	}
	hundredNoLoop(number+1)
}
function oneToHundred()
{	
	for(i=1;i<=100;i++)
	{
		document.write(i+"<br>");
	}
}
function factors()
{
	numberOne=document.getElementById("numberOne").value;
	const array1=[];
	if(checkIsEmpty(numberOne))
	{
		for(i=1;i<=Number(numberOne);i++)
		{
			if((numberOne%i)==0)
			{
				array1.push(i);
			}
		}
		printOutput("answerFactors",array1);
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}
function factorial()
{
	numberOne=document.getElementById("numberOne").value;
	if(checkIsEmpty(numberOne))
	{
		var fact=1;
		for(i=1;i<=Number(numberOne);i++)
		{
			fact=fact*i;
		}
		printOutput("answerFactorial",fact);
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}
function firstAndLastDigit()
{
	let numberOne=document.getElementById("numberOne").value;
	let first=0;
	let last=0;
	if(checkIsEmpty(numberOne))
	{
		last=parseInt(numberOne)%10;
		while(parseInt(numberOne)!=0)
		{
			rem=parseInt(numberOne)%10;
			first=first*0+rem;
			numberOne=parseInt(numberOne)/10;	
		}
		printOutput("answerFirstAndLastDigit","First Digit : "+ first +", Last Digit : " +last);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the number");
	}	
}