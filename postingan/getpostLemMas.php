<?php
 include "connection.php";
 $getPostQuery = mysqli_query($mysqli, "SELECT * FROM tb_lambang");
 while($user_data = mysqli_fetch_array($getPostQuery)) { 

     echo "
     <div class='box' id='content-container'>
     <div class='row'>
     </div>
     <div class='row'>
        <div class='col-md-1'></div>
        <div class='col-md-11' style='padding-left:5px'>
            <p class='text-muted' id='post-text'>".$user_data['lemmas']."</p>
        </div>
     </div>
     <div class='row' style='margin-top:10px;'>
        <div class='col-md-1'></div>
        <div class='col-md-1'  style='padding-left:5px'>
        
        </div>
        <div class='col-md-10' style='padding-left:40px;'>
            <botton style='width:80px' class='btn-danger btn-sm' onclick='deletePostLemMas(".$user_data['id'].")' value='".$user_data['id']."'>Delete</button>

        </div>
        </div>

     </div>";
     
 }
?>