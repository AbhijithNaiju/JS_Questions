var printLocation;
var printValue;
// Print data
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

// Qn 21
function hundredNoLoop(number)
{	
	document.write(number+"<br>")
	if(number==100)
	{
		return;
	}
	hundredNoLoop(number+1)
}
// Qn 22
function oneToHundred()
{	
	for(i=1;i<=100;i++)
	{
		document.write(i+"<br>");
	}
}
// Qn 23
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
// Qn 24
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
// Qn 25
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
// Qn 26
function  multiplicationTable()
{
	let number=document.getElementById("numberOne").value;
	if(checkIsEmpty(number))
		{
			for(i=1;i<=10;i++)
			{
				document.write(i+"x"+number+"="+i*number+"<br>");
			}
		}
	else
	{
		printOutput("error","Please enter the number");
	}	
}
// Qn 27
function  nNatural()
{
	let number=document.getElementById("numberOne").value;
	if(checkIsEmpty(number))
		{
			for(i=1;i<=number;i++)
			{
				document.write(i+"<br>");
			}
		}
	else
	{
		printOutput("error","Please enter the number");
	}	
}
// Qn 28
function  nNaturalReverse()
{
	let number=document.getElementById("numberOne").value;
	if(checkIsEmpty(number))
		{
			for(i=number;i>=1;i--)
			{
				document.write(i+"<br>");
			}
		}
	else
	{
		printOutput("error","Please enter the limit");
	}	
}
// Qn 29
function  multipleOf5And11()
{
	let number=document.getElementById("numberOne").value;
	if(checkIsEmpty(number))
	{
		array1=[];
		for(i=1;i<=number;i++)
		{
			if(i%5==0 && i%11==0)
			{
				array1.push(i);
			}
		}
		if(!array1[0])
		{
			printOutput("error","No multiple of 5 and 11 found");
		}
		else
		{
			printOutput("answermultipleOf5And11",array1);
			printOutput("error","");
		}	
	}
	else
	{
		printOutput("error","Please enter the limit");
	}	
}
// Qn 30
function oddToN()
{
	numberOne=document.getElementById("numberOne").value;
	const array1=[];
	if(checkIsEmpty(numberOne))
	{
		for(i=1;i<=Number(numberOne);i++)
		{
			if((i%2)!=0)
			{
				array1.push(i);
			}
		}
		printOutput("answerOddToN",array1);
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}
// Qn 31
function digitsProduct()
{
	let numberOne=document.getElementById("numberOne").value;
	let product=1;
	let rem;
	if(checkIsEmpty(numberOne))
		{
		while(parseInt(numberOne)!=0)
		{
			rem=parseInt(numberOne)%10;
			product=product*rem;
			numberOne=parseInt(numberOne)/10;	
		}
		printOutput("answerDigitsProduct",product);	
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}
// Qn 32
function stringPalindrome()
{
	let str1=document.getElementById("strOne").value;
	let rev="";
	if(checkIsEmpty(str1))
	{
		strLength=str1.length;
		for(i=strLength-1;i>=0;i--)
		{
			rev=rev+str1[i];
		}
		if(rev==str1)
		{
			printOutput("answerStringPalindrome","String is Palindrome");	
		}
		else
		{
			printOutput("answerStringPalindrome","String is Not a Palindrome");
		}
	}
	else
	{
	printOutput("error","Please enter the string");
	}
}
// Qn 33
function perfectNumber()
{
	let num1=document.getElementById("numberOne").value;
	let sumFacors=0;
	if(checkIsEmpty(num1))
	{
		for(i=1;i<=Number(num1)/2;i++)
		{
			if((num1%i)==0)
			{
				sumFacors=sumFacors+i;
			}
		}
		if(num1==sumFacors)
		{
			printOutput("answerPerfectNumber","Perfect Number");
		}
		else
		{
			printOutput("answerPerfectNumber","Not a perfect number");
		}
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}
// Qn 34
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
// Qn 35
function positiveOrNegative()
{
	let num1=document.getElementById("numberOne").value;
	if(checkIsEmpty(num1))
	{
		num1=Number(num1);
		if(num1>0)
		{
			printOutput("answerPositiveOrNegative","Positive");
		}
		else if(num1<0)
		{
			printOutput("answerPositiveOrNegative","Negative");
		}
		else 
		{
			printOutput("answerPositiveOrNegative","Zero");
		}
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}

//36
function countNotes()
{
	let num1=document.getElementById("numberOne").value;
	var countNotes500;
	var countNotes200;
	var countNotes100;
	var countNotes50;
	var countNotes20;
	var countNotes10;
	var countNotes5;
	if(checkIsEmpty(num1))
	{
		num1=Number(num1);
		countNotes500=parseInt(num1/500);
		num1=num1-(countNotes500*500);

		countNotes200=parseInt(num1/200);
		num1=num1-(countNotes200*200);

		countNotes100=parseInt(num1/100);
		num1=num1-(countNotes100*100);

		countNotes50=parseInt(num1/50);
		num1=num1-(countNotes50*50);

		countNotes20=parseInt(num1/20);
		num1=num1-(countNotes20*20);

		countNotes10=parseInt(num1/10);
		num1=num1-(countNotes10*10);

		countNotes5=parseInt(num1/5);
		num1=num1-(countNotes5*5);

		printOutput("answerCountNotes500",countNotes500);
		printOutput("answerCountNotes200",countNotes200);
		printOutput("answerCountNotes100",countNotes100);
		printOutput("answerCountNotes50",countNotes50);
		printOutput("answerCountNotes20",countNotes20);
		printOutput("answerCountNotes10",countNotes10);
		printOutput("answerCountNotes5",countNotes5);
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}

// Qn 37
function evenToN()
{
	numberOne=document.getElementById("numberOne").value;
	const array1=[];
	if(checkIsEmpty(numberOne))
	{
		for(i=1;i<=Number(numberOne);i++)
		{
			if((i%2)==0)
			{
				array1.push(i);
			}
		}
		printOutput("answerEvenToN",array1);
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}
// Qn 38
function sumAvgToN()
{
	numberOne=document.getElementById("numberOne").value;
	let sum=0;
	if(checkIsEmpty(numberOne))
	{
		for(i=1;i<=Number(numberOne);i++)
		{
			sum=sum+i;
		}
		printOutput("answerSumAvgToN","Sum = "+sum+" Average = "+sum/Number(numberOne));
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}

// Qn39
function sumEvenToN()
{
	numberOne=document.getElementById("numberOne").value;
	let sum=0;
	if(checkIsEmpty(numberOne))
	{
		for(i=1;i<=Number(numberOne);i++)
		{
			if(i%2==0)
			{
				sum=sum+i;
			}
		}
		printOutput("answerSumEvenToN",sum);
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}

// Qn40
function sumEvenAndOddToN()
{
	numberOne=document.getElementById("numberOne").value;
	let oddSum=0;
	let evenSum=0;
	if(checkIsEmpty(numberOne))
	{
		for(i=1;i<=Number(numberOne);i++)
		{
			if(i%2==0)
			{
				evenSum=evenSum+i;
			}
			else
			{
				oddSum=oddSum+i;
			}
		}
		printOutput("answerSumEvenAndOddToN","Sum of odd numbers= "+oddSum+" Sum of even numbers = "+evenSum);
		printOutput("error","");
	}
	else
	{
	printOutput("error","Please enter some values");
	}
}