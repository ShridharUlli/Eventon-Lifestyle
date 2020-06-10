function hamburgerAnimation(x) {
  x.classList.toggle("change");
}

$(document).ready(function(){
	$("#navLayover").click(function(){
		$(".nav-layover").toggle();
	});
});