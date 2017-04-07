var footer = (function () {
	var fooT = document.getElementById('foot');
	var bodyer =  document.body.clientHeight;
	var bodyer1 = document.body.scrollHeight;
	
	return function () {
		if(bodyer1 > bodyer){
			fooT.style.top = bodyer1 - 119 - 30 - 465 - 30 - 90 + 'px';
		}
	}
})(footer);

footer();