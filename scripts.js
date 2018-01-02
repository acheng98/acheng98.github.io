/* Whenever one of the tabs is pressed, fade in the pressed tab's content. */
function change_tab(tab_name) {
	$('#Home, #Coursework, #Projects, #Misc').hide();
	$(tab_name).fadeIn(500);
}

//Initializes everything, defaults to showing home page
function main() {
	$('#Home, #Coursework, #Projects, #Misc').hide();
	$('#Home').show();
}

$(document).ready(main);