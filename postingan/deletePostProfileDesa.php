<?php
    include "connection.php";
    $id = $_GET['id'];
    echo $id;
    $delete = mysqli_query($mysqli,  "DELETE FROM tb_profiledesa WHERE id='".$id."'");



?>