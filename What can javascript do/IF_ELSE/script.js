//console.log();
//document.write();	
//window.alert();
var a = -6;
document.write("<h2>The input number is:</h2>"+a);
if(a > 0)
{
	document.write("<h1>This is a Positive number</h1>");
	document.write("<h2>Now Checking number is Even or ODD:</h2> ");
	if (a%2==0) {
		document.write("<h1>Number is positive and also even number</h1>");
	}else{
		document.write("<h1>The Number is positive but an odd number</h1>");
	}

}else if(a < 0)	
{
	document.write("<h1>This is a Negative number</h1>")
	document.write("<h2>Now Checking number is Even or ODD:</h2> ");
	if (a%2==0) {
		document.write("<h1>Number is Negative and also even number</h1>");
	}else{
		document.write("<h1>The Number is Negative but an odd number</h1>");
	}
}else
{
	document.write("this is not a number");
}
//Now we can check it using logical operator.
var u = -10;
document.write("<h2>The input is: </h2>"+u);
if(u>0 && u%2==0){
	document.write("<h2>The number is positive and even(jor) also.</h2>");	
}
