var ocUl = (function (obj) {
	return function (obj) {
		if(obj.style.display == ''){
			obj.style.display = 'none';
		}
		else if(obj.style.display == 'none'){
			obj.style.display = '';
		}
	}
})(ocUl)
