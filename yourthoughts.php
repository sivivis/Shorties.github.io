<script>
	if($('#get_location').text() == "You are out of area"){
		goToPreviousLocation1();//main.js
	}
	loadMsgs();
</script>
<div class="load_continer">
	<div id="media">
		<div class="comments">
			<ul class="msgList"></ul>
		</div>
	</div>
</div>
	<div class="MSG_Box">
		<div class="poll form-group hvr-hang">
				
			<img src="img/lol.png" alt="LOL" height="40" width="40" onclick="sendEmoji('lol')"/>
			<span class="label label-default" >LOL</span>
			<img src="img/yas.png" alt="YAS" height="40" width="40" onclick="sendEmoji('yas')"/>
			<span class="label label-default" >YAS</span>
			<img src="img/wtf.png" alt="WTF" height="40" width="40" onclick="sendEmoji('wtf')"/>
			<span class="label label-default" >WTF</span>
			<img src="img/omg.png" alt="OMG" height="40" width="40" onclick="sendEmoji('omg')"/>
			<span class="label label-default" >OMG</span>				
			
		</div>
		<div class="msg input-group">
			<textarea class="form-control input-lg" type="text" maxlength="225"/>
			<div class="input-group-btn">
				<button type="button" class="btn btn-default" onclick="save_n_SendHistory(this)"><img src="img/send.png" width="40" height="40" alt="Send"></button>
  			</div>
		</div>
			
	</div>
	<script type="text/javascript" src="js/yourthoughts.js"></script>
</div>