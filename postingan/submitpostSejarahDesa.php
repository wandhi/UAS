<?php
    include "connection.php";
    $post = $_POST['content'];
    
    $insert = mysqli_query($mysqli, "INSERT into tb_sejarahdesa (sejarah_desa) values ('$post')");
    echo $insert;
?>