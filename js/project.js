/*
	Create a grid using jQuery when the document initially loaded and ready
*/


$(document).ready(function() {

	//create a default grid loaded initially every time
	number_squared = prompt("Initial size of grid");
	gridCreator(number_squared);

	$("#color").addClass('active');
	$("#multicolor").addClass('multicolor');


	$("#color").click(function() {
		number_squared = prompt("COLOR clicked : how many rows/columns do you need?");
		clearGrid(number_squared);
		gridCreator(number_squared);
	});

	$("#multicolor").click(function() {
		number_squared = prompt("RANDOM clicked : how many rows/columns do you need?");
		clearGrid(number_squared);
		gridCreator(number_squared);
	});

	$("#random").click(function() {
		number_squared = prompt("INCREMENTAL clicked : how many rows/columns do you need?");
		clearGrid(number_squared);
		gridCreator(number_squared);
	});

	$("#clear").click(function() {
		for (var row = 0; row < number_squared; row++) {
			for (var column = 0; column < number_squared; column++) {
				$("div").remove(".row");
			}
			$("div").remove(".column");
		}
	});

	$(".row").mouseenter(function() {
		$(this).addClass("red");
	});

	$(".column").mouseenter(function() {
		$(this).addClass("red");
	});

});



function gridCreator(number) {

	var numRows = number;
	var numColumns = number;

	//draw the rows
	for (var i = 0; i < numRows; i++) {
		for (var j = 0; j < numColumns; j++) {
			$("#container").append("<div class='row'></div>");
		}
		$("#container").append("<div class='column'></div>");
	}

	// If color is clicked...
	$("#color").click(function() {
		$(".row").mouseenter(function() {
			$(this).addClass("red");
		});

		$(".column").mouseenter(function() {
			$(this).addClass("red");
		});
	});

	// if MultiColor is clicked...
	$("#multicolor").click(function() {

		$(".row").mouseenter(function() {
			$(this).addClass("multicolor");
		});

		$(".column").mouseenter(function() {
			$(this).addClass("multicolor");
		});
	});

	// if Random is clicked...
	$("#random").click(function() {

		$(".row").mouseenter(function() {
			$(this).css("background-color", randomColor());

		});

		$(".column").mouseenter(function() {
			$(this).css("background-color", randomColor());
		});
	});


}

function clearGrid(number) {
	for (var row = 0; row < number; row++) {
		for (var column = 0; column < number; column++) {
			$("div").remove(".row");
		}
		$("div").remove(".column");
	}	
}




function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + "," +  g + ","+ b + ")";
}






