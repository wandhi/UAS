<?php
    include "connection.php";
    $post = $_POST['content'];
    
    $insert = mysqli_query($mysqli, "INSERT into tb_profiledesa (profile) values ('$post')");
    echo $insert;
?>