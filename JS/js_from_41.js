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
// Qn 41
function calculateElectricity()
{
    consumption=document.getElementById("consumption").value;
    if(checkIsEmpty(consumption) && Number(consumption>0))
        {
            if(consumption<=50)
            {
                billAmount=consumption*2.60;
            }
            else if(consumption<=100)
            {
                billAmount=(50*2.60)+(consumption-50)*3.25;
            }
            else if(consumption<=200)
            {
                billAmount=(50*2.60)+(50*3.25)+(consumption-100)*5.65;
            }
            else if(consumption>200)
            {
                billAmount=(50*2.60)+(50*3.25)+(100*5.65)+(consumption-200)*7.25;
            }
            if(consumption>700)
            {
                billAmount=billAmount+(billAmount*(0.5/100));
            }
            printOutput("answerCalculateElectricity",billAmount);
            printOutput("error","");
        }
        else
        {
        printOutput("error","Please enter your electricity consumption");
        }
}
// Qn 42
function calculateSalary()
{
    basicSalary=document.getElementById("basicSalary").value;
    if(checkIsEmpty(basicSalary) && Number(basicSalary>0))
        {
            basicSalary=Number(basicSalary);
            grossSalary=0;
            if(basicSalary<=10000)
            {
                grossSalary=basicSalary+(basicSalary*(8/100))+(basicSalary*(10/100));
            }
            else if(basicSalary<=20000)
            {
                grossSalary=basicSalary+(basicSalary*(18/100))+(basicSalary*(20/100));
            }
            else if(basicSalary>20000)
            {
                grossSalary=basicSalary+(basicSalary*(24/100))+(basicSalary*(30/100));
            }
            printOutput("answerCalculateSalary",grossSalary    );
            printOutput("error","");
        }
        else
        {
        printOutput("error","Please enter your salary");
        }
}
// Qn 43
function calculateCone()
{
    const pi=3.14;
    radius=document.getElementById("radius").value;
    coneLength=document.getElementById("coneLength").value;
    height=document.getElementById("height").value;
    if(checkIsEmpty(radius) && checkIsEmpty(coneLength) && checkIsEmpty(height))
        {
            radius=Number(radius);
            coneLength=Number(coneLength);
            height=Number(height);
            surfaceArea=pi*radius*coneLength+pi*(radius**2);
            volume=(1/3)*pi*(radius**2)*height;
            lateralSurface=pi*radius*coneLength;
            printOutput("answerCalculateSurfaceCone",surfaceArea);
            printOutput("answerCalculateVolumeCone",volume);
            printOutput("answerCalculateLateralCone",lateralSurface);
            printOutput("error","");
        }
        else
        {
        printOutput("error","Please enter the dimentions");
        }
}
// Qn 44
function calculateCube()
{
    cubeLength=document.getElementById("cubeLength").value;
    if(checkIsEmpty(cubeLength))
        {
            cubeLength=Number(cubeLength);
            surfaceArea=6*(cubeLength**2);
            volume=(cubeLength**3)
            lateralSurface=4*(cubeLength**2);
            printOutput("answerCalculateSurfaceCube",surfaceArea);
            printOutput("answerCalculateVolumeCube",volume);
            printOutput("answerCalculateLateralCube",lateralSurface);
            printOutput("error","");
        }
        else
        {
        printOutput("error","Please enter the length");
        }
}
// Qn 45
function calculateCuboid()
{
    cuboidLength=document.getElementById("cuboidLength").value;
    cuboidwidth=document.getElementById("cuboidwidth").value;
    cuboidheight=document.getElementById("cuboidheight").value;
    if(checkIsEmpty(cuboidLength) && checkIsEmpty(cuboidwidth) && checkIsEmpty(cuboidheight))
        {
            cuboidLength=Number(cuboidLength);
            cuboidwidth=Number(cuboidwidth);
            cuboidheight=Number(cuboidheight);
            surfaceArea=(2*cuboidLength*cuboidwidth)+(2*cuboidLength*cuboidheight)+(2*cuboidwidth*cuboidheight);
            volume=cuboidLength*cuboidwidth*cuboidheight
            lateralSurface=2*cuboidheight*(cuboidLength+cuboidwidth)
            printOutput("answerCalculateSurfaceCuboid",surfaceArea);
            printOutput("answerCalculateVolumeCuboid",volume);
            printOutput("answerCalculateLateralCuboid",lateralSurface);
            printOutput("answerCalculateTopBottomCuboid",lateralSurface);
            printOutput("error","");
        }
        else
        {
        printOutput("error","Please enter the length");
        }
}
// Qn 46
function calculateCylinder()
{
    const pi=3.14;
    radius=document.getElementById("radius").value;
    height=document.getElementById("height").value;
    if(checkIsEmpty(height) && checkIsEmpty(radius))
        {
            height=Number(height);
            radius=Number(radius);
            surfaceArea=2*pi*(radius**2)+pi*radius*height;
            volume=pi*height*radius**2;
            lateralSurface=2*pi*radius*height
            topBottomSurface=pi*radius**2;
            printOutput("answerCalculateSurfaceCylinder",surfaceArea);
            printOutput("answerCalculateVolumeCylinder",volume);
            printOutput("answerCalculateLateralCylinder",lateralSurface);
            printOutput("answerCalculateTopBottomCylinder",topBottomSurface);
            printOutput("error","");
        }
        else
        {
        printOutput("error","Please enter the length");
        }
}
// Qn 47
function calculateSphere()
{
    const pi=3.14;
    radius=document.getElementById("radius").value;
    if(checkIsEmpty(radius))
        {
            radius=Number(radius);
            sphereSurfaceArea=4*pi*(radius**2);
            volume=(4/3)*pi*(radius**3);
            printOutput("answerCalculateSurfaceSphere",sphereSurfaceArea);
            printOutput("answerCalculateVolumeSphere",volume);
            printOutput("error","");
        }
        else
        {
        printOutput("error","Please enter the Radius");
        }
}
// Qn 48
function digitCount()
{
	let num1=document.getElementById("numberOne").value;
	let count=0;
	if(checkIsEmpty(num1))
	{
		while(parseInt(num1)!=0)
		{
			count+=1;
			num1=parseInt(num1)/10;	
		}
		printOutput("answerDigitCount",count);
		printOutput("error","");
	}
	else
	{
        printOutput("answerDigitCount","");
		printOutput("error","Please enter the number");
	}	
}
// Qn 49
function fibonacci()
{
	let limit=document.getElementById("limit").value;
	var array1=[];
    var b=0;
    var c=1;
	if(checkIsEmpty(limit))
	{
        for(i=1;i<=Number(limit);i++)
        {
            a=b;
            b=c;
            c=a+b;
            array1.push(a);
        }
        printOutput("answerFibonacci",array1);
		printOutput("error","");
	}
	else
	{
        printOutput("answerFibonacci","");
		printOutput("error","Please enter the limit");
	}	
}
// Qn 51
function palindromeNumber()
{
	let numberOne=document.getElementById("numberOne").value;
	let rev=0;
	let rem=0;
    orginalNumber=parseInt(numberOne);
	if(checkIsEmpty(numberOne))
	{
		while(parseInt(numberOne)!=0)
		{
			rem=parseInt(numberOne)%10;
			rev=rev*10+rem;
			numberOne=parseInt(numberOne)/10;	
		}
        if(orginalNumber==rev)
        {
            printOutput("answerPalindromeNumber","Palindrome");
        }
		else
        {
            printOutput("answerPalindromeNumber","Not palindrome");
        }
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the number");
	}	
}
// Qn 52
function stringConcat()
{
    let string1=document.getElementById("string1").value;
    let string2=document.getElementById("string2").value;
    addedString=string1+" "+string2;
    printOutput("answerStringConcat",addedString);
}
// Qn 53
function printAscii()
{
	let string1=document.getElementById("string1").value;
	if(checkIsEmpty(string1) && string1.length==1)
	{
		let asciiValue=string1.charCodeAt(0);
		printOutput("answerPrintAscii",asciiValue);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter one Character");
	}	
}
// Qn 54
function stringConcatMethod()
{
    let string1=document.getElementById("string1").value;
    let string2=document.getElementById("string2").value;
    addedString=string1.concat(string2);
    printOutput("answerStringConcatMethod",addedString);
}
// Qn 55
function byteToString()
{
    var array1=[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100];
    for(i=0;i<array1.length;i++)
	{
		document.write(String.fromCharCode(array1[i]));
	}
    printOutput("answerByteToString",addedString);
}
// Qn 56
function stringFirstChar()
{
    let string1=document.getElementById("string1").value;
    if(checkIsEmpty(string1))
        {
            printOutput("answerStringFirstChar",string1[0]);
            printOutput("error","");
        }
        else
        {
            printOutput("error","Please enter the string");
        }	
}
// Qn 57
function stringLastChar()
{
    let string1=document.getElementById("string1").value;
    if(checkIsEmpty(string1))
        {
            string1Length=string1.length;
            printOutput("answerStringLastChar",string1[string1Length-1]);
            printOutput("error","");
        }
        else
        {
            printOutput("error","Please enter the string");
        }	
}
// Qn 58
function stringMiddleChar()
{
    let string1=document.getElementById("string1").value;
    if(checkIsEmpty(string1))
        {
            string1Length=string1.length;
            if(string1Length%2 != 0)
            {
                Middle=(string1Length-1)/2;
                printOutput("answerStringMiddleChar",string1[Middle]);
                printOutput("error","");
            }
            else
            {
                printOutput("answerStringMiddleChar","");
                printOutput("error","The string has no perfect middle element.");
            }
        }
        else
        {
            printOutput("error","Please enter the string");
        }	
}
// Qn 59
function printStringChar()
{
    let array1=[];
    let string1=document.getElementById("string1").value;
    if(checkIsEmpty(string1))
        {
            string1Length=string1.length;
            for(i=0;i<string1Length;i++)
            {
                // document.write(string1[i]);
                array1.push(string1[i]);
            }
            printOutput("answerPrintStringChar",array1);
            printOutput("error","");
        }
        else
        {
            printOutput("error","Please enter the string");
        }	
}
// Qn 60
function printStringLength()
{
    let string1=document.getElementById("string1").value;
    if(checkIsEmpty(string1))
        {
            stringLengthMethod=string1.length;
            stringLength=0;
            while(string1[stringLength]!=undefined)
            {
                stringLength+=1;
            }
            printOutput("answerPrintStringLength","Using method length = "+stringLengthMethod+", Without Using method = "+stringLength);
            printOutput("error","");
        }
        else
        {
            printOutput("error","Please enter the string");
        }	
}
// Qn 61
function printStringCharIndex()
{
    let string1=document.getElementById("string1").value;
    let charector=document.getElementById("charector").value;
    if(checkIsEmpty(string1) && checkIsEmpty(charector))
        {
            stringLength=string1.length;
           for(i=0;i<stringLength;i++)
            {
                if(string1[i]==charector)
                {
                    printOutput("answerStringCharIndex",i);
                    printOutput("error","");
                    return;
                }
            }
            printOutput("error","Charector not found");
        }
        else
        {
            printOutput("error","Please enter the string and charector to search");
        }	
}
// Qn 62
function printStringCharOccurance()
{
	let string1=document.getElementById("string1").value;
	let charector=document.getElementById("charector").value;
	if(checkIsEmpty(string1) && checkIsEmpty(charector))
	{
		stringLength=string1.length;
		for(i=0;i<stringLength;i++)
		{
			if(string1[i]==charector)
			{
				printOutput("answerStringCharOccurance","The charector is present in the string");
				printOutput("error","");
				return;
			}
		}
		printOutput("answerStringCharOccurance","Charector not found in the string");
	}
	else
	{
		printOutput("error","Please enter the string and charector to search");
	}	
}
// Qn 63
function checkStringPrefix()
{
	let string1=document.getElementById("string1").value;
	let subString=document.getElementById("subString").value;
	requiredPrefix="";
	if(checkIsEmpty(string1) && checkIsEmpty(subString))
	{
		substringLength=subString.length;
		for(i=0;i<substringLength;i++)
		{
			requiredPrefix+=string1[i];
		}
		if(subString==requiredPrefix)
		{
			printOutput("answerStringPrefix","Specified substring is the prefix of the given string");
		}
		else
		{
			printOutput("answerStringPrefix","Specified substring is not the prefix of the given string");
		}
	}
	else
	{
		printOutput("error","Please enter the string and substring to search");
	}	
}
// Qn 64
function replaceString()
{	
	let string1=document.getElementById("string1").value;
	let replacewith=document.getElementById("replacewith").value;
	let stringToReplace=document.getElementById("stringToReplace").value;
	if(checkIsEmpty(string1) && checkIsEmpty(replacewith) && checkIsEmpty(stringToReplace))
        {
		string2=string1.replace(stringToReplace,replacewith);
		printOutput("answerReplaceString",string2);
		printOutput("error","");
	}
        else
        {
		printOutput("error","Please enter the string and charector to search");
        }	
}
// Qn 65
function reverseCase()
{
	let string1=document.getElementById("string1").value;
	stringOutput="";
	lowerCaseList=/[a-z]/;
	upperCaseList=/[A-Z]/;
	if(checkIsEmpty(string1))
        {
		for(i=0;i<(string1.length);i++)
		{
			if(lowerCaseList.test(string1[i]))
			{
				stringOutput+=string1[i].toUpperCase();
			}
			else if(upperCaseList.test(string1[i]))
			{
				stringOutput+=string1[i].toLowerCase();
			}
		}
		printOutput("answerReverseCase",stringOutput);
		printOutput("error","");
	}
	else
        {
		printOutput("error","Please enter the string");
        }	
}
// Qn 66
function reverseVowels()
{
	let string1=document.getElementById("string1").value;
	vowelsCheckList=['a','e','i','o','u','A','E','I','O','U'];
	string1Vowels=[];
	string2="";
	string1Length=string1.length;
	if(checkIsEmpty(string1))
        {
		for(i=0;i<string1Length;i++)
		{
			if(vowelsCheckList.includes(string1[i]))
			{
				string1Vowels.unshift(string1[i]);
			}
		}
		for(i=0;i<string1Length;i++)
		{
			if(vowelsCheckList.includes(string1[i]))
			{
				string2+=string1Vowels.shift(string1[i]);
			}
			else
			{
				string2+=string1[i];
			}
		}
		printOutput("answerReverseVowels",string2);
		printOutput("error","");
	}
	else
        {
		printOutput("error","Please enter the string and character to search");
        }	
}
// Qn 67
function countSymbolDigits()
{
	let string1=document.getElementById("string1").value;
	alphabetCheck=/[A-Za-z]/;
	digitsCheck=/[0-9]/;
	alphabetCount=0;
	digitsCount=0;
	specialCount=0;
	string1=string1.trim();
	string1Length=string1.length;
	if(checkIsEmpty(string1))
	{
		for(i=0;i<string1Length;i++)
		{
			if(alphabetCheck.test(string1[i]))
			{
				alphabetCount+=1;
			}
			else if(digitsCheck.test(string1[i]))
			{
				digitsCount+=1;
			}
			else
			{
				specialCount+=1;
			}
		}
		printOutput("answerCountAlphabets",alphabetCount);
		printOutput("answerCountDigits",digitsCount);
		printOutput("answerCountSymbols",specialCount);
		printOutput("error","");
	}
	else
	{
		printOutput("error","Please enter the string and character to search");
	}	
}
// Qn 68
function countVovelsAndCons()
{
	let string1=document.getElementById("string1").value;
	vowelsList=['a','e','i','o','u','A','E','I','O','U'];
	vowelCount=0;
	ConsCount=0;
	string1=string1.trim();
	string1Length=string1.length;
	if(checkIsEmpty(string1))
        {
		for(i=0;i<string1Length;i++)
		{
			if(vowelsList.includes(string1[i]))
			{
				vowelCount+=1;
			}
			else
			{
				ConsCount+=1;
			}
		}
		printOutput("answerCountVovelsAndCons","Number of vowels = "+vowelCount+", Number of consonents = "+ ConsCount);
		printOutput("error","");
	}
	else
        {
		printOutput("error","Please enter the string and character to search");
        }	
}
// Qn 69
function checkBrackets()
{
	let string1=document.getElementById("string1").value;
	string1Length=string1.length;
	parenthesis=0;
	squareBrackets=0;
	curleyBraces=0;
	if(checkIsEmpty(string1))
        {
		for(i=0;i<string1Length;i++)
		{
			if( string1[i]=='(' )
			{
				parenthesis+=1;
			}
			else if( string1[i]==')' )
			{
				if(parenthesis==0)
				{
					printOutput("answerCheckBrackets","");
					printOutput("error","invalid ) in string");
					return;
				}
				else
				{
					parenthesis--;
				}
			}
			else if( string1[i]=='[' )
			{
				squareBrackets+=1;
			}
			else if( string1[i]==']' )
			{
				if(squareBrackets==0)
				{
					printOutput("answerCheckBrackets","");
					printOutput("error","invalid ] in string");
					return;
				}
				else
				{
					squareBrackets--;
				}
			}
			else if( string1[i]=='{' )
			{
				curleyBraces+=1;
			}
			else if( string1[i]=='}' )
			{
				if(curleyBraces==0)
				{
					printOutput("answerCheckBrackets","");
					printOutput("error","invalid } in string");
					return;
				}
				else
				{
					curleyBraces--;
				}
			}
		}
		if(parenthesis!=0 || squareBrackets!=0 || curleyBraces!=0)
		{
			printOutput("error","Unclosed Brackets in the string");	
			printOutput("answerCheckBrackets","");	
		}
		else
		{
			printOutput("answerCheckBrackets","String is ok");
			printOutput("error","");
		}

	}
	else
        {
		printOutput("error","Please enter the string and character to search");
        }	
}