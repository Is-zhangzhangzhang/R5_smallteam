var dispalyShow = (function () {
	var oul = document.getElementsByClassName('body_li_ul')[0];
	
	return function () {
		if(oul.style.display == 'none'){
			oul.style.display = '';
		}
		else if(oul.style.display == ''){
			oul.style.display = 'none';
		}
	}
})(dispalyShow)
