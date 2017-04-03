var navShow = (function () {
	var show = document.getElementById('top_other_nav');
	var none = document.getElementById('nav');
	var timer;
	
	showTime = function () {
		none.style.display = 'block';
		none.style.opacity = 1;
		clearInterval(timer);
	}
	noneTime = function () {
		var a = 10;
		timer = setInterval(function () {
			a--;
			none.style.opacity = a / 10;
			if(a == 0){
				none.style.display = 'none';
				clearInterval(timer);
			}
		}, 50)
	}
	
	return {
		showTime:showTime,
		noneTime:noneTime
	}
})(navShow)

var footer = (function () {
	var fooT = document.getElementById('foot');
	var bodyer =  document.body.clientHeight;
	var bodyer1 = document.body.scrollHeight;
	
	var Foot = function () {
		if(bodyer1 > bodyer){
			fooT.style.top = bodyer1 - 119 - 90 + 'px';
		}
	}
	
	return {
		Foot:Foot
	}
})(footer);
//footer.Foot();

