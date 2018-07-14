var citystore = new Array();
citystore[0] = ['CA','San Francisca'];
citystore[1] = ['CA','Los Angeles'];
citystore[2] = ['CA','San Diego'];
citystore[3] = ['MO','St. Louis'];
citystore[4] = ['MO','Kansas City'];
citystore[5] = ['WA','Seattle'];
citystore[6] = ['WA','Spokane'];
citystore[7] = ['WA','Redmond'];

window.onload=function(){
	document.getElementById('state').onchange = filterCities;
}

function filterCities(){
	var st = document.getElementById('state').value;
	var city = document.getElementById('cities');
	city.options.length = 0;  //当重新选择第一项时，第二项清零
	for (var i = 0; i < citystore.length; i++) {
		if(st == citystore[i][0]){
			var opt = new Option(citystore[i][1]);
		    try{
		    	city.add(opt,null);
		    }catch(e){
		    	cityadd(opt);
		    }
		}
	}
}