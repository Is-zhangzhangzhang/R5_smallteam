var footer = (function () {
	var fooT = document.getElementById('foot');
	var bodyer =  document.body.clientHeight;
	var bodyer1 = document.body.scrollHeight;
	
	return function () {
		if(bodyer1 > bodyer){
			fooT.style.top = bodyer1 - 119 - 30 - 576 - 30 - 90 + 'px';
		}
	}
})(footer);

footer();

var model = (function () {
	var Model = document.getElementById('model');
	var bodyer =  document.body.clientHeight;
	var bodyer1 = document.body.scrollHeight;
	if(bodyer1 > bodyer){
		Model.style.height = document.body.scrollHeight + 'px';
	}
	else{
		Model.style.height = document.body.scrollHeight + 'px';
	}
	
	var show = function () {
		Model.style.display = 'block';
		Model.style.opacity = 1;
	}
	var cancel = function () {
		var b = 10;
		var timer = setInterval(function () {
			Model.style.opacity = b-- / 10;
			if(b == 0){
				clearInterval(timer);
				Model.style.display = 'none';
			}
		}, 50)
	}
	
	return {
		show:show,
		cancel:cancel
	}
})(model);


