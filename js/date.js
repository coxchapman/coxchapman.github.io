
var dt = new Date()
var date = dt.getDate();
var day = dt.getDay();
var year = dt.getFullYear();
var month = dt.getMonth();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var order = ["first","second","third","fourth","fifth"]

for (i = 0; i < 12 ; i++) {
	if (i == month) {
		month1 = months[i]
	};
};

for (i = 0; i < 7 ; i++) {
	if (i == day) {
		day1 = weeks[i]
	};
};

for (i = 0; i < 6; i++) {
	if (date / 7 > i) {
		today = order[i]
	}
};

document.getElementById("todaysdate").innerHTML = month1+" "+date+", "+year ;
document.getElementById("count").innerHTML = today;
document.getElementById("weekday").innerHTML = day1;






