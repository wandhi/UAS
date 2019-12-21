<?php
    include "connection.php";
    $post = $_POST['content'];
    
    $insert = mysqli_query($mysqli, "INSERT into tb_wisatadesa (wisata) values ('$post')");
    echo $insert;
?>