/*var a = 5;
var b = 10;
var total = a+b;*/

function myFunction(a, b, c){
	
	/*var total = a+b;
	document.write("<h1>The total is: "+ total +"</h2>");*/

	//return document.write((a+b)+c);

	var total = ((a+b)+c);
	return total;
}
var output = myFunction(6,4, "Apu");
document.writeln("<h2>The output is: "+output+"</h2>");