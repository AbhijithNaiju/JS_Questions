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

// Qn1
function helloWorld()
{
	document.write("Hello World")
}

// Qn2
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

// Qn4
function averageOfThree()
{
	let NumberOne=document.getElementById("NumberOne").value;
	let NumberTwo=document.getElementById("NumberTwo").value;
	let NumberThree=document.getElementById("NumberThree").value;
	printOutput("answerFourSum",Number(NumberOne)+Number(NumberTwo)+Number(NumberThree));
	printOutput("answerFourAverage",(Number(NumberOne)+Number(NumberTwo)+Number(NumberThree))/3);
}

// Qn5
function simpleInterest()
{
	let amount=document.getElementById("amount").value;
	let rate=document.getElementById("rate").value;
	let years=document.getElementById("years").value;
	printOutput("answerSimpleInterest",(Number(amount)*Number(rate)*Number(years))/100);
}

// Qn6
function compountInterest()
{
	let amount=parseFloat(document.getElementById("amount").value);
	let rate=parseFloat(document.getElementById("rate").value);
	let years=parseFloat(document.getElementById("years").value);
	answer=(amount*(1+(rate/100))**years)-amount
	printOutput("answerCompountInterest",answer);
}

// Qn7
function areaOfCircle()
{
	const pi=3.14;
	let radius=document.getElementById("radius").value;
	printOutput("answerCircleArea",pi*Number(radius)**2);
}

// Qn8
function calculateFloatNumbers()
{
	let numberOne=parseFloat(document.getElementById("numberOne").value);
	let numberTwo=parseFloat(document.getElementById("numberTwo").value);
	printOutput("answerFloatSum",(numberOne+numberTwo).toFixed(2));
	printOutput("answerFloatDifference",(numberOne-numberTwo).toFixed(2));
	printOutput("answerFloatProduct",(numberOne*numberTwo).toFixed(2));
	if(numberTwo!=0)
	{
		printOutput("answerFloatQuotient",(numberOne/numberTwo));
	}
	else
	{
		printOutput("answerFloatQuotient","Division by 0 is not possible");	
	}
}

// Qn9
function cubeOfNumber()
{
	let numberOne=parseInt(document.getElementById("numberOne").value);
	printOutput("answerCube",numberOne**3);	
}

// Qn10
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

// Qn11
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

// Qn12
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

// Qn13
function numberPower()
{
	let numberOne=parseInt(document.getElementById("numberOne").value);
	let power=parseInt(document.getElementById("power").value);	
	printOutput("answerPower",numberOne**power);	
}

// Qn14
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

// Qn15
function reverseNumber()
{
	let numberOne=document.getElementById("numberOne").value;
	let rev=0;
	let rem=0;
	if(checkIsEmpty(numberOne))
	{
		while(parseInt(numberOne)!=0)
		{
			rem=parseInt(numberOne)%10;
			rev=rev*10+rem;
			numberOne=parseInt(numberOne)/10;	
		}
		printOutput("answerReverse",rev);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the number");
	}	
}

// Qn16
function smallAndLarge()
{
	let num1=document.getElementById("numberOne").value;
	let num2=document.getElementById("numberTwo").value;
	let num3=document.getElementById("numberThree").value;
	if(checkIsEmpty(num1) && checkIsEmpty(num2) && checkIsEmpty(num3))
	{
		num1=Number(num1);
		num2=Number(num2);
		num3=Number(num3);
		if(num1>num2 && num1>num3)
		{
			large=num1;
			if(num2<num3)
			{
				small=num2;
			}
			else
			{
				small=num3;
			}
		}
		else if(num2>num3)
		{
			large=num2;
			if(num1<num3)
			{
				small=num1;
			}
			else
			{
				small=num3;
			}
		}
		else
		{
			large=num3;
			if(num1<num2)
			{
				small=num1;
			}
			else
			{
				small=num2;
			}
		}
		printOutput("answerLargeOf3",large);
		printOutput("answerSmallOf3",small);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter 3 numbers");
	}	
}

// Qn17
function primeOrNot()
{
	let num1=document.getElementById("numberOne").value;
	if(checkIsEmpty(num1))
	{
		num1=parseInt(num1);
		flag=0;
		if(num1==1)
		{
			printOutput("answerPrimeOrNot","The number is neither prime nor composite");
		}
		else
		{
			for(i=2;i<=(num1/2);i++)
			{
				if(num1%i==0)
				{
					flag=1;
				}
			}
			if(flag==1)
			{
				printOutput("answerPrimeOrNot","Not Prime");
			}
			else
			{
				printOutput("answerPrimeOrNot","Prime");
			}
			printOutput("error","");
		}
	}
	else
	{
		printOutput("error","Please enter the number");
	}	
}

// Qn18
function findEligibility()
{
	let physics=document.getElementById("physics").value;
	let chemistry=document.getElementById("chemistry").value;
	let maths=document.getElementById("maths").value;
	if(checkIsEmpty(physics) && checkIsEmpty(chemistry) && checkIsEmpty(maths))
	{
		printOutput("error","");
		physics=Number(physics);
		chemistry=Number(chemistry);
		maths=Number(maths);
		if(maths>=65 && physics>=55 && chemistry>=50 && ((physics+chemistry+maths)>=190 || (maths+physics)>=140))
		{
			printOutput("answerEligibility","Eligible");
		}
		else
		{
			printOutput("answerEligibility","Not Eligible");
		}
	}
	else
	{
		printOutput("error","Please enter all the marks");	
	}
}
// Qn19
function dayName()
{
	let num1=document.getElementById("numberOne").value;
	if(checkIsEmpty(num1))
	{
		printOutput("error","");
		num1=parseInt(num1);
		switch(num1)
		{
			case 1:
				printOutput("answerDayName","Sunday");
				break;
			case 2:
				printOutput("answerDayName","Monday");
				break;
			case 3:
				printOutput("answerDayName","Tuesday");
				break;
			case 4:
				printOutput("answerDayName","Wednesday");
				break;
			case 5:
				printOutput("answerDayName","Thursday");
				break;
			case 6:
				printOutput("answerDayName","Friday");
				break;
			case 7:
				printOutput("answerDayName","Saturday");
				break;
			default:
				printOutput("error","Please enter a valid number");
				printOutput("answerDayName","");
		}
	}
	else
	{
		printOutput("error","Please enter the number");
	}	
}