<?php
    include "connection.php";
    $post = $_POST['content'];
    
    $insert = mysqli_query($mysqli, "INSERT into tb_sejarahdesa (profile) values ('$post')");
    echo $insert;
?>