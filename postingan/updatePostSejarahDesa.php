<?php
    include "connection.php";
    $id = $_GET['id'];
    $delete = mysqli_query($mysqli,  "UPDATE  tb_sejarahdesa set sejarah_desa='".$_GET['value']."' WHERE id='".$id."'");
    header("Refresh:0");




?>