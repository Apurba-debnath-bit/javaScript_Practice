//In javaScript we can use String, Number or Boolean for switch expression.
var day = "Tuesday";
switch(day){
	case "Sunday":
		
		document.writeln("<h2>The day is: Sunday</h2>");
		break;
	case "Monday":
		document.writeln("<h2>The day is: Monday</h2>");
		break;
	case "Tuesday":
		document.writeln("<h2>From Script2 file</h2>");
		document.writeln("<h2>The day is: Tuesday</h2>");
		break;
	case "Wednesday":
		document.write("<h2>The day is: Wednesday</h2>");
		break;
	case "Thrusday":
		document.write("<h2>The day is: Thrusday</h2>");
		break;
	case "Friday":
		document.write("<h2>The day is: Friday</h2>");
		break;
	case "Saturday":
		document.writeln("<h2>The day is: Saturday </h2>");
	default:
		document.writeln("<h3>Worng value!!</h3>");
};