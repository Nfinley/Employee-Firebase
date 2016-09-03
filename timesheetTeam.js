
// Config of firebase
var config = {
   apiKey: "AIzaSyD7lGK-twjoEcgmhIyS4LtUfqh-UCLUxrs",
   authDomain: "employee-tracking-d73f8.firebaseapp.com",
   databaseURL: "https://employee-tracking-d73f8.firebaseio.com",
   storageBucket: "",
 };
 firebase.initializeApp(config);

 var database = firebase.database();



getDatabase();

$('#button').on('click', function(){
	var name = $('#employeeName').val().trim();
	var role = $('#role').val().trim();
	var startDate = $('#datepicker').val().trim();
	var monthlyRate = parseInt($('#monthlyRate').val());

	console.log(name, role, startDate, monthlyRate);

	database.ref().push({
		name: name,
		role: role,
		startDate: startDate,
		monthlyRate: monthlyRate,
		created: firebase.database.ServerValue.TIMESTAMP,
		modified: firebase.database.ServerValue.TIMESTAMP

	});
	$('input').val("");


});

function getDatabase(){
	database.ref().on("child_added", function(snapshot) {
		var databaseObject = snapshot.val();
		console.log(snapshot.val());

		// start date to get the salary as a variable
		var salaryDate = databaseObject.startDate.trim();

		// Monthly salary
		var monthlySalary = databaseObject.monthlyRate;

		var beginDate = moment(salaryDate);
		console.log("This is the start date:" + beginDate);

		// gets current date
		var currentDate = moment();
		console.log("This is the current date:" + currentDate);

		// USING MOMENT JS
		var months = currentDate.diff(beginDate, 'months');
		console.log("Months: " + months);


		// NOT USING MOMENT.JS 
		// var months; 
		// months = (currentDate.getFullYear() - beginDate.getFullYear()) *12;
		// months -= beginDate.getMonth() +1 ;
		// months += currentDate.getMonth();
		// months += 1;

		// console.log(months +1);

		


		// Total Billed
		var totalBilled = months * monthlySalary;


		var row= "";
		row += "<tr>"+
				"<td>" + databaseObject.name + "</td>" + 
				"<td>" + databaseObject.role + "</td>" +
				"<td>" + salaryDate + "</td>" +
				"<td>" + months + "</td>" +
				"<td>$" + monthlySalary + "</td>" +
				"<td>$" + totalBilled + "</td>" +
				"</tr>";

		$('#tbody').append(row);

	});	
}




