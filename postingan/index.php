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
<nav class="navbar navbar-expand-lg nnavbar-dark bg-dark">
  <a class="navbar-brand" href="#" style="color:white">Admin Web Desa</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link"  href="index.php?page=1">Profile Desa <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  href="index.php?page=2" onClick="">Sejarah Desa</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="index.php?page=3">Gallery</a>
      </li>
	  <li class="nav-item">
        <a class="nav-link" href="index.php?page=4">Objek Wisata</a>
      </li>

    </ul>
  </div>
</nav>
<?php



switch ($_GET['page']){
    case '1':
		include "indexProfileDesa.php";
		
		break;
		
		case '2':
			require "indexSejarahDesa.php";
			
		break;
		case '3':
		    require "indexGaleryDesa.php";
			
		break;
		case '4':
		    require "indexObjectWisataDesa.php";
			
		break;
    
}
?>

</div>

<!-- load external javascript -->
<script type="text/javascript" src="assets/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="assets/bootstrap.js"></script>
</body>
</html>