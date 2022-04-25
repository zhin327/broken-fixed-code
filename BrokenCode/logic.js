$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * booFacts.length));
	$("#factText").text(booFacts[number])
})
// quotations were in the wrong locations, each block needs to be inside of quotations and separated with commas
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]


// color pink was not in quotes""
$("#textPink").on("click", function() {
	
	$("#funText").css("color", "pink")
})
// color orange
$("#textOrange").on("click", function() {

	$("#funText").css("color", "orange")
})
// color green
$("#textGreen").on("click", function() {

	$("#funText").css("color", "green")
})

// grow height
$("#boxGrow").on("click", function() {

	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})
// shrink height
$("#boxShrink").on("click", function() {

	$("#box").animate({height:"-=35px",width:"-=35px"}, "fast");

})