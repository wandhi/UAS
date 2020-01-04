<?php
    include "connection.php";
    $post = $_POST['username'];
    
    $insert = mysqli_query($mysqli, "INSERT into post (post) values ('$post')");
    echo $post;
?>