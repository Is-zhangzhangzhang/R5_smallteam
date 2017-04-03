window.onload = function () {
	photoRun.star();
	photoRun.change();
	newsChange(document.getElementsByClassName('body_span')[0]);
}

var photoRun = (function () {
	var photo = document.getElementsByClassName('photo');
	var photoLi = document.getElementsByClassName('photo_li');
	var timer;
	var timer2;
	var j;
	var c = 5;
	
	for(var i = 0; i < photo.length; i++){
		photo[i].style.opacity = 0;
	}
	photo[0].style.opacity = 1;

	var runleft = function () {
			var a = 10;
			var b = 0;
		for(var i = 0; i < photo.length; i++){
			if(photo[i].style.opacity == 1){
				j = i;
			}
		}
		clearTimeout(timer2);
		timer = setInterval(function () {
			a--;
			b++;
			photo[j].style.opacity = a / 10;
			if(j == photo.length - 1){
				photo[j - 1].style.opacity = b / 10;
			}
			else{
				photo[j + 1].style.opacity = b / 10;
			}
			if(a == 0){
				clearInterval(timer);
				change();
				star();
			}
		}, 10)
	}
	
	var runright = function () {
			var a1 = 10;
			var b1 = 0;
		for(var i = 0; i < photo.length; i++){
			if(photo[i].style.opacity == 1){
				j = i;
			}
		}
		clearTimeout(timer2);
		timer = setInterval(function () {
			a1--;
			b1++;
			photo[j].style.opacity = a1 / 10;
			if(j == 0){
				photo[j + 1].style.opacity = b1 / 10;
			}
			else{
				photo[j - 1].style.opacity = b1 / 10;
			}
			if(a1 == 0){
				clearInterval(timer);
				change();
				star2();
			}
		}, 10)
	}
	var stop = function () {
		clearTimeout(timer2);
	}
	var star = function () {
		timer2 = setTimeout(function () {
			if(j == photo.length - 1){
				runright();
				clearTimeout(timer2);
			}
			else{
				runleft();
				clearTimeout(timer2);
			}
		}, 3000)
	}
	var star2 = function () {
		timer2 = setTimeout(function () {
			if(j == 0){
				runleft();
				clearTimeout(timer2);
			}
			else{
				runright();
				clearTimeout(timer2);
			}
		}, 3000)
	}
	var change = function () {
		if(photo[0].style.opacity == 1){
			photoLi[0].style.display = 'inline-block';
			photoLi[1].style.display = 'none';
		}
		else{
			photoLi[1].style.display = 'inline-block';
			photoLi[0].style.display = 'none';
		}
		
		if(photo[photo.length - 1].style.opacity == 1){
			photoLi[3].style.display = 'inline-block';
			photoLi[2].style.display = 'none';
		}
		else{
			photoLi[2].style.display = 'inline-block';
			photoLi[3].style.display = 'none';
		}
	}
	
	return {
		runleft:runleft,//向左跑
		runright:runright,//向右跑
		star:star,//计时器开始--转runleft
		star2:star2,//计时器开始--转runright
		stop:stop,//计时器清除
		change:change//按钮控制
	}
})(photoRun)

var newsChange = (function (obj) {
	var one = document.getElementsByClassName('body_span');
	var two = document.getElementsByClassName('body_middle_passage');
	
	return function (obj) {
		var j;
		for(var i = 0; i < one.length; i++){
			if(obj == one[i]){
				j = i;
			}
		}
		
		for(var i = 0; i < one.length;i++){
			one[i].style.textDecoration = 'none';
			two[i].style.display = 'none';
		}
		one[j].style.textDecoration = 'overline';
		two[j].style.display = 'block';
	}
})(newsChange)
