// check off specific to do by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click X to delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	// this stops it from effecting the other parent containers
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		// grabbing new text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-minus-circle'></i></span> " + todoText + "</li>")
	}
});

$(".fa-pencil-square-o").click(function(){
	$("input[type='text'").fadeToggle();
});