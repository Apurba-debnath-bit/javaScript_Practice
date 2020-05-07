var day = 1;
// number, String, Boolean values
// In switch case expression , we can concatenate another string.
switch(day){

	case 1: 
		document.writeln("<h2>From Script1 file</h2>");
		document.write("<h2>Sunday</h2>");
		break;

	case 2: 
		document.write("<h2>Monday</h2>");
		break;

	case 3: 
		document.writeln("<h1>Tuesday</h2>");
		break;

	case 4: 
		document.writeln("<h1>Wednesday</h2>");
		break;

	case 5: 
		document.writeln("<h1>Thrusday</h2>");
		break;
	case 6: 
		document.writeln("<h1>Friday</h2>");
		break;
	case 7: 
		document.writeln("<h1>Saturday</h2>");
		break;
	default:
		document.writeln("Wrong input")

};