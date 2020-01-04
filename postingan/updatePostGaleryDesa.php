<?php
    include "connection.php";
    $id = $_GET['id'];
    $delete = mysqli_query($mysqli,  "UPDATE  tb_galery set galery='".$_GET['value']."' WHERE id='".$id."'");
    header("Refresh:0");
    echo $id;



?>