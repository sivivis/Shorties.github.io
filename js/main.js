function getGeoLocation(){
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(DisplayLocation);
    } else {
	   //Error MSG
       $("#get_location").text("Geolocation is not susported by this browser.");
    }
}

function VerifyLocation(Location,lat,lng){
	var targetLat = 0;
	var targetLng = 0;
	switch (Location){
		case "Queen Street":
			targetLat = -27.469366;
			targetLng = 153.025199;
			break;
		case "Toowong":
			targetLat = -27.561073;
			targetLng = 151.948808;
			break;
		case "Indooroopilly":
			targetLat = -27.499278;
			targetLng = 152.972655;
			break;
		case "St Lucia":
			targetLat = -27.499311;
			targetLng = 153.015034;
			break;
		case "GardenCity":
			targetLat = -27.562747;
			targetLng = 153.082502;
			break;
	}
	
	return Math.sin(lat * Math.PI) * Math.sin(targetLat * Math.PI) +
      Math.cos(lat * Math.PI) * Math.cos(targetLat * Math.PI) * Math.cos(Math.abs(lng - targetLng) * Math.PI);
}

function DisplayLocation(geoLocation){
	var lat = parseFloat(geoLocation.coords.latitude);
	var lng = parseFloat(geoLocation.coords.longitude);
	var latlng = lat+","+lng;
	var apiKey = "AIzaSyAdj18Y63tPJiv-xYoOMAyn5yz3Jbibo9M";
	var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+latlng+"&key="+apiKey;
	//reverse geolocation
	$.getJSON(url,function( data ){
		var getCurrLocation = data.results[0].address_components[1].short_name;
		if(VerifyLocation(getCurrLocation,lat,lng)>0.9999){
			//alert("Yes "+VerifyLocation(getCurrLocation,lat,lng));
			$("#get_location").html("Current Location: " + getCurrLocation);
		}else{
			//alert("No "+VerifyLocation(getCurrLocation,lat,lng));
			$("#get_location").html("You are out of area");
		}
	});	
}

function goToPreviousLocation(){
	$( "#loadPage" ).load("preLocation.php");
	$(".header_title").html('<img id="bt_back" src="img/back.png" onclick="ChangeFragment(this)" alt="Back">Previous Location');
}

function goToViewNews(place){
	$( "#loadPage" ).load("news_viewonly.php");
	$(".header_title").html('<img id="bt_back" src="img/back.png" onclick="ChangeFragment(this)" alt="Back">Local News Views Only');
}

function goToPreviousLocation1(){
	$( "#loadPage" ).load("preLocation1.php");
	$(".header_title").html('<img id="bt_back" src="img/back.png" onclick="ChangeFragment(this)" alt="Back">Previous Location');
}

function goToViewMsgs(place){
	$( "#loadPage" ).load("yourthoughts_view.php");
	$(".header_title").html('<img id="bt_back" src="img/back.png" onclick="ChangeFragment(this)" alt="Back">Local News Views Only');
}


function ChangeFragment(Event){
	$("#loadPage" ).empty();
	switch(Event.id){
		case "bt_news":
			$("#loadPage" ).load("news.php");
			$(".header_title").html('<img id="bt_back" src="img/back.png" onclick="ChangeFragment(this)" alt="Back">Local News');
			$('#bt_back').css('display','block');
			break;
		case "bt_yourThought":
			$("#loadPage" ).load("yourthoughts.php");
			$(".header_title").html('<img id="bt_back" src="img/back.png" onclick="ChangeFragment(this)" alt="Back">Your Thoughts');
			$('#bt_back').css('display','block');
			break;
		case "bt_qr":
			$("#loadPage" ).load("qr.php");
			$(".header_title").html('<img id="bt_back" src="img/back.png" onclick="ChangeFragment(this)" alt="Back">Scan QR Code');
			$('#bt_back').css('display','block');
			break;
		case "bt_back":
			$( "#loadPage" ).load("homepage.php");
			$(".header_title").html("Notice Me");
			break;
	}

}

$( document ).ready(function() {
		/*
			Menu
		*/
		$( "#loadPage" ).load("homepage.php");
		
		/*
			Location
		*/
		getGeoLocation();
});
