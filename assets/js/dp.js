// Establish reliable container
var html = '<div class="drunk-ass-div"></div>';

// Initialize global array var, to allow for major program scope penetration
var masterPackageArray = ["dp1", "dp2", "dp3", "dp4"];

// Loop through items inside of masterPackageArray, assigning part of it to private var each time, for maintaining proper fidelity
var stuff = "";
masterPackageArray.forEach(function(dickPick) {

	// Establish private ownership
	var myPeePee = dickPick;

	// Build html string to throw into its proper package
	stuff += '<img src="' + myPeePee + '">';
});

// Put packages into their reliable container, and reveal to user
$('.drunk-ass-div').html(stuff);