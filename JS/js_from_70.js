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
// Qn 70
function printLargeSmallString()
{
	let string1=document.getElementById("string1").value;
	string1+=" ";
	string1Length=string1.length;
	checkForSpace=/\s/
	var large;
	var small;
	var check="";
	if(checkIsEmpty(string1))
	{
		for(i=0;i<string1Length;i++)
		{
			if(checkForSpace.test(string1[i])!=true)
			{
				check+=string1[i];
				continue;
			}
			if(typeof large==='undefined' || check.length>large.length)
			{
				large=check;
			}
			if(typeof small==='undefined' || small.length>check.length)
			{
				small=check;
			}
			check="";
		}
		printOutput("answerPrintLargeSmallString","Large = "+large+" small= "+small);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the string");
	}
}
// Qn 71
function changeLetter()
{
	let string1=document.getElementById("string1").value;
	string1=string1.toLowerCase();
	stringLength=string1.length;
	string2="";
	if(checkIsEmpty(string1))
	{
		for(i=0;i<stringLength;i++)
		{
			charAscii=string1[i].charCodeAt(0);
			if(charAscii==122)
			{
				string2+=String.fromCharCode(97);
			}
			else
			{
			string2+=String.fromCharCode(charAscii+1);
			}
		}
		printOutput("answerChangeLetter",string2);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the string to change");
	}
}
// Qn 72
function missingLetter()
{
let string1=document.getElementById("string1").value;
	string1=string1.toLowerCase();
	stringLength=string1.length;
	array1=[];
	if(checkIsEmpty(string1))
	{
		for(i=0;i<stringLength-1;i++)
		{

			expectedNext=(string1[i].charCodeAt(0)+1);
			limit=1;
			if((string1[i].charCodeAt(0)+1)!=(string1[i+1].charCodeAt(0)))
			{
				while((string1[i+1].charCodeAt(0))!=expectedNext)
					{
						array1.push(String.fromCharCode(expectedNext));
						expectedNext++;
						limit++;
						if(limit>=26)
						{
							printOutput("answerMissingLetter","");
							printOutput("error","Please enter the letters in ascending order");
							return;
						}
					}
			}
		}
		if(array1.length==0)
		{
			printOutput("answerMissingLetter","There is no missing letter!");	
		}
		else
		{
			printOutput("answerMissingLetter","Missing letters - "+array1);
		}
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the letters");
	}
}
	
// Qn 73
function deleteConsonent()
{
	let string1="Hello, have a good day";
	var outputString="";
	vowelsList=['a','e','i','o','u','A','E','I','O','U'];
	checkForSpace=/\s/;
	string1Length=string1.length;
	if(checkIsEmpty(string1))
	{
		for(i=0;i<string1Length;i++)
		{
			if(vowelsList.includes(string1[i]) || checkForSpace.test(string1[i]))
			{
				outputString+=(string1[i]);
			}
		}
		printOutput("answerDelConsBefore",string1);
		printOutput("answerDelConsAfter",outputString);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the string and character to search");
	}	
}
// Qn 74
function alphabetCount()
{
	let string1=document.getElementById("string1").value;
	string1=string1.toLowerCase();
	stringLength=string1.length;
	arrayAlphabets=[];
	arrayAlphabetCount=[];
	arrayCountOfAlphabets=[];
	if(checkIsEmpty(string1))
	{
		for(i=0;i<stringLength;i++)
		{
			if(string1[i]==" ")
			{
				continue;
			}
			else if(arrayAlphabets.includes(string1[i]))
			{
				elementPosition=arrayAlphabets.indexOf(string1[i]);
				arrayAlphabetCount[elementPosition]+=1;
		
			}
			else
			{
				arrayAlphabetCount.push(1);
				arrayAlphabets.push(string1[i]);
			}
		}
		max=0;
		for(j=0;j<arrayAlphabetCount.length;j++)
		{
			if(arrayAlphabetCount[j]>arrayAlphabetCount[max])
			{
				max=j;
			}
			arrayCountOfAlphabets.push(arrayAlphabets[j] +" "+ arrayAlphabetCount[j]);
		}
		printOutput("answerAlphabetCount","Alphabet occurance : "+ arrayCountOfAlphabets);
		printOutput("answerMostOccurance","Alphabet with most occurance : "+arrayAlphabets[max] +" : "+ arrayAlphabetCount[max]);
	}
	else
	{
		printOutput("error","Please enter the string");
	}
}
// Qn 75
function hidePalindrome()
{
	let string1=document.getElementById("string1").value;
	string1+=" ";
	outputString="";
	string1Length=string1.length;
	checkForSpace=/\s/
	var check="";
	if(checkIsEmpty(string1))
	{
		for(i=0;i<string1Length;i++)
		{
			if(checkForSpace.test(string1[i])!=true)
			{
				check+=string1[i];
			}
			else
			{
				const checkRev =  check.split('').reverse().join('');
				if(checkRev==check)
				{
					checkLength=check.length;
					for(j=0;j<checkLength;j++)
					{
						outputString+='*';
					}
				}
				else
				{
					outputString+=check;
				}
				outputString+=" ";
				check="";
			}
		}
		printOutput("answerHidePalindrome",outputString);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the string");
	}
}