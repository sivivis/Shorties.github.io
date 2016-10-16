<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="img/logo.png">
	<title>Notice Me!</title>
	 <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <!-- splash-->
    <link href="css/splash.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

  </head>
  <body onload="setTimeout(function() {}, 5);">

    <script type="text/javascript">

      window.onload=timeout;
      function timeout(){
      window.setTimeout("redirect()",3000)}

      function redirect(){
      window.location="main.php"
      return
      }

    </script>

	  <header class="splash">
      <h2 class="splash__title1">Welcome</h2>
      <h2 class="splash__title">to</h2>
      <h2 class="splash__title">Notice Me!</h2>
	  </header>

  </body>
</html>

