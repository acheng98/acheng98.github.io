function change_tab(tab_name) {
	$('#Home, #Coursework, #Projects, #Misc').hide();
	$(tab_name).fadeIn(500);
}