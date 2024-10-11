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


function helloWorld()
{
	document.write("Hello World")
}

function addTwoNum()
{
	let NumberOne=document.getElementById("NumberOne").value;
	let NumberTwo=document.getElementById("NumberTwo").value;
	if(checkIsEmpty(NumberOne) && checkIsEmpty(NumberTwo))
	{
		printOutput("answerTwo",Number(NumberOne)+Number(NumberTwo));
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}

function averageOfThree()
{
	let NumberOne=document.getElementById("NumberOne").value;
	let NumberTwo=document.getElementById("NumberTwo").value;
	let NumberThree=document.getElementById("NumberThree").value;
	printOutput("answerFourSum",Number(NumberOne)+Number(NumberTwo)+Number(NumberThree));
	printOutput("answerFourAverage",(Number(NumberOne)+Number(NumberTwo)+Number(NumberThree))/3);
}

function simpleInterest()
{
	let amount=document.getElementById("amount").value;
	let rate=document.getElementById("rate").value;
	let years=document.getElementById("years").value;
	printOutput("answerSimpleInterest",(Number(amount)*Number(rate)*Number(years))/100);
}

function compountInterest()
{
	let amount=parseFloat(document.getElementById("amount").value);
	let rate=parseFloat(document.getElementById("rate").value);
	let years=parseFloat(document.getElementById("years").value);
	answer=(amount*(1+(rate/100))**years)-amount
	printOutput("answerCompountInterest",answer);
}

function areaOfCircle()
{
	const pi=3.14;
	let radius=document.getElementById("radius").value;
	printOutput("answerCircleArea",pi*Number(radius)**2);
}

function calculateFloatNumbers()
{
	let numberOne=parseFloat(document.getElementById("numberOne").value);
	let numberTwo=parseFloat(document.getElementById("numberTwo").value);
	printOutput("answerFloatSum",(numberOne+numberTwo).toFixed(2));
	printOutput("answerFloatDifference",(numberOne-numberTwo).toFixed(2));
	printOutput("answerFloatProduct",(numberOne*numberTwo).toFixed(2));
	if(numberTwo!=0)
	{
		printOutput("answerFloatQuotient",(numberOne/numberTwo).toFixed(2));
	}
	else
	{
		printOutput("answerFloatQuotient","Division by 0 is not possible");	
	}
}
function cubeOfNumber()
{
	let numberOne=parseInt(document.getElementById("numberOne").value);
	printOutput("answerCube",numberOne**3);	
}
function evenOrOdd()
{
	let numberOne=parseInt(document.getElementById("numberOne").value);
	if(numberOne%2==0)
	{
		printOutput("answerEvenOrOdd","Even");	
	}
	else
	{
		printOutput("answerEvenOrOdd","Odd");
	}
}

function leapYearOrNot()
{
	let numberOne=parseInt(document.getElementById("numberOne").value);
	if(numberOne%100==0 && numberOne%400==0)
	{
		printOutput("answerLeapYear","Leap Year");
	}
	else if(numberOne%100!=0 &&numberOne%4==0)
	{
		printOutput("answerLeapYear","Leap Year");
	}
	else
	{
		printOutput("answerLeapYear","Not a Leap Year");
	}
}

function swapNumbers()
{
	let numberOne=parseInt(document.getElementById("numberOne").value);
	let numberTwo=parseInt(document.getElementById("numberTwo").value);
	printOutput("answerBeforeSwap","Number 1: "+numberOne + ",  Number 2: " + numberTwo);
	numberOne=numberOne+numberTwo;
	numberTwo=numberOne-numberTwo;
	numberOne=numberOne-numberTwo;
	printOutput("answerAfterSwap","Number 1: "+ numberOne +", Number 2: "+ numberTwo);
}
function numberPower()
{
	let numberOne=parseInt(document.getElementById("numberOne").value);
	let power=parseInt(document.getElementById("power").value);	
	printOutput("answerPower",numberOne**power);	
}
function digitsSum()
{
	let numberOne=parseInt(document.getElementById("numberOne").value);
	let sum=0;
	let rem=0;
	while(parseInt(numberOne)!=0)
	{
		rem=parseInt(numberOne)%10;
		sum=sum+rem;
		numberOne=parseInt(numberOne)/10;	
	}
	printOutput("answerDigitsSum",sum);	
}
function reverseNumber()
{
	let numberOne=parseInt(document.getElementById("numberOne").value);
	let rev=0;
	let rem=0;
	while(parseInt(numberOne)!=0)
	{
		rem=parseInt(numberOne)%10;
		rev=rev*10+rem;
		numberOne=parseInt(numberOne)/10;	
	}
	printOutput("answerReverse",rev);	
}