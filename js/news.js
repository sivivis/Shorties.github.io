function loadNews(){
	var url = "https://newsapi.org/v1/articles/?source=abc-news-au&sortBy=top&apiKey=6b5a091ac08d4dd388f6944d18208318";
	var url2 = "https://newsapi.org/v1/articles?source=the-guardian-au&sortBy=top&apiKey=6b5a091ac08d4dd388f6944d18208318";
	var apiList = [url,url2]; 
	$.getJSON(apiList[Math.floor(Math.random()*apiList.length)],formatNews);
}

function formatNews(JsonNews){
   
	var randomIndex = Math.floor((Math.random() * 8)+1);
	var article = JsonNews.articles[randomIndex];
	var author = article.author;
	var title = article.title;
	var content = article.description;
	var url = article.url;
	var img = article.urlToImage;
	var date = Date.parse(article.publishedAt);
	var date = new Date(date);
	var yyyy = date.getFullYear();
	var mm = date.getMonth()+1;
	var dd = date.getDate();
	$("#media .news").html(
		//title
		'<h2><a href="'+url+'">'+title+'</a></h2>'
		//Author & Date
		+'<p><a href="'+author+'">Author</a> &nbsp;&nbsp;&nbsp;&nbsp;'+yyyy+"-"+mm+"-"+dd+'</p>'
		+'<p><img src="'+img+'"alt="news_image"/></p>'
		+'<p>'+content+'</p>');		
}

function intergrateMSG(msg){
	if(document.cookie!=null){
	var cookie = ((document.cookie.split(';'))[0]).split('=')[1];
    cookie += "[###]";
    message = cookie + msg;
	return message;
	}else{
	return ""; 
	}

}

function setCookie(msg){
	var d = new Date();
	var timeStamp = d.getTime();
	d.setTime(d.getTime() + (60000));//10mins = 600000
	var expires = "expires="+ d.toUTCString();
	message = intergrateMSG(msg);
	document.cookie = "msg = "+message+";"+expires;
}

function updateComments(){
    var msg = ((document.cookie.split(';'))[0]).split('=')[1];
    var msgList = msg.split('[###]');
    var content = msgList[msgList.length-1];
    switch(content){
		case "lol":
			content = "<img src='img/lol.png' width='40' height='40' alt='LOL'>";
			break;
		case "yas":
			content = "<img src='img/yas.png' width='40' height='40' alt='YAS'>";
			break;
		case "wtf":
			content = "<img src='img/wtf.png' width='40' height='40' alt='WTF'>";
			break;
		case "omg":
			content = "<img src='img/omg.png' width='40' height='40' alt='OMG'>";
			break;
	}
	var currm = "<li class='bubble'>"+content+"</li>";
    $('.msgList').append(currm);
}

//For Text
function save_n_SendHistory(msg){
	if($('.msg textarea').val()!= ""){
		//Save
		setCookie($('.msg textarea').val());
		//Display
		updateComments();
		
	}else{
		$('.msg textarea').effect("highlight", {}, 2000);
	}
	$('.msg textarea').val("");
}

//For Emoji
function sendEmoji(emoji){
	//setCookie();
	setCookie(emoji);
	updateComments();
}