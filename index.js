function openNav() {
 document.getElementById("myNav").style.width = "36%";
}


function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}





/*$(document).ready(function() {
	
	$("body").css("display", "none");

    $("body").fadeIn(3000);
    
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(3000, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});*/