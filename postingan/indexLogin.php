<!DOCTYPE html>
<html>
<head>
	<title>D3IFCOOL - Timeline</title>

	<!-- Load external css -->
	<link rel="stylesheet" type="text/css" href="assets/bootstrap.css" />
	<style type="text/css">

		body {
			background-color: #F0F0F0;
		}

		img.glyph-icon {
			width:16px;
			height:16px;
		}

		.box {
			width: 600px;
			height: 150px;
			background-color: white;
			box-shadow: 0px 0px 2px #95a5a6;
			margin-left: auto;
			margin-right: auto;
			margin-top: 30px;
			padding: 15px;
		}

		a:hover {
			text-decoration: none;
		}
	</style>

	<!-- Load external ajax file -->
	<script type="text/javascript" src="ajax.js"></script>
</head>

<body >

<!-- Box for input post content -->
<div class="container" id="container">
	<div class="box">
		<form >
			<input type="text" name="username"  class="form-control"  placeholder="username" />
			<br>
			<input type="text" name="password"  class="form-control"  placeholder="password" />
			<br>
			<button onclick="loginPost(this.value);" type="button" style="float:right;" 
			class="btn btn-info btn-sm">POST</button>
		</form>
</div>

<!-- div for load post list -->
<div id="post-content">  
</div>

</div>

<!-- load external javascript -->
<script type="text/javascript" src="assets/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="assets/bootstrap.js"></script>
</body>
</html>