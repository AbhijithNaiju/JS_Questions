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
			expectedNext=string1[i].charCodeAt(0)+1;
			if(expectedNext!=(string1[i+1].charCodeAt(0)))
			{
				array1.push(String.fromCharCode(expectedNext));
			}
		}
		if(array1.length==0)
		{
			printOutput("answerMissingLetter","There is no missing letter!");	
		}
		else
		{
			printOutput("answerMissingLetter","There missing letters : "+array1);
		}
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the string to change");
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