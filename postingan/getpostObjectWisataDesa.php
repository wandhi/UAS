<?php
 include "connection.php";
 error_reporting(E_ERROR | E_PARSE); 

 $getPostQuery = mysqli_query($mysqli, "SELECT * FROM tb_wisatadesa");
 unset($_POST['submit']);
 while($user_data = mysqli_fetch_array($getPostQuery)) { 
    if ($_GET['row_id']=='true') {
      
        if($_GET['id'] == $user_data['id']){
        echo "
        <div class='box' id='content-container'>
        <div class='row'>
        </div>
        <div class='row'>
           <div class='col-md-1'></div>
           <div class='col-md-11' style='padding-left:5px'>
           <form name='form' action='' method='post'>
               <textarea id='content' name='content' onChange=updatePostObjectWisataDesa(".$user_data['id'].",this.value) class='form-control' 
			placeholder='".$user_data['wisata']."' value='".$user_data['wisata']."' maxlength='140'>".$user_data['wisata']."</textarea>
            </form>
            </div>
        </div>
        <div class='row' style='margin-top:10px;'>
           <div class='col-md-1'></div>
           <div class='col-md-1'  style='padding-left:5px'>
           </div>
          
           <div class='col-md-10' style='padding-left:40px;'>
               <button style='width:80px' class='btn-success btn-sm' onclick='updatePostObjectWisataDesa(".$user_data['id'].",document.getElementById(`content`).value)' >Update</button>


           </div>
           </div>
   
        </div>";
        }else{
            echo "
        <div class='box' id='content-container'>
        <div class='row'>
        </div>
        <div class='row'>
           <div class='col-md-1'></div>
           <div class='col-md-11' style='padding-left:5px'>
               <p class='text-muted' id='post-text'>".$user_data['wisata']."</p>
           </div>
        </div>
        <div class='row' style='margin-top:10px;'>
           <div class='col-md-1'></div>
           <div class='col-md-1'  style='padding-left:5px'>
           </div>
          
           <div class='col-md-10' style='padding-left:40px;'>
               <button style='width:80px' class='btn-danger btn-sm' onclick='deletePostObjectWisataDesa(".$user_data['id'].")' value='".$user_data['wisata']."'>Delete</button>
               <button style='width:80px' class='btn-danger btn-sm' onclick='ambilPostObjectWisataEdit(".$user_data['id'].")' value='".$user_data['wisata']."'>Delete</button>


           </div>
           </div>
   
        </div>";

        }
    } else {
        echo "
        <div class='box' id='content-container'>
        <div class='row'>
        </div>
        <div class='row'>
           <div class='col-md-1'></div>
           <div class='col-md-11' style='padding-left:5px'>
               <p class='text-muted' id='post-text'>".$user_data['wisata']."</p>
           </div>
        </div>
        <div class='row' style='margin-top:10px;'>
           <div class='col-md-1'></div>
           <div class='col-md-1'  style='padding-left:5px'>
           </div>
          
           <div class='col-md-10' style='padding-left:40px;'>
               <button style='width:80px' class='btn-danger btn-sm' onclick='deletePostObjectWisataDesa(".$user_data['id'].")' value='".$user_data['wisata']."'>Delete</button>
               <button style='width:80px' class='btn-success btn-sm' onclick='ambilPostObjectWisataDesaEdit(".$user_data['id'].")' value='".$user_data['wisata']."'>Update</button>


           </div>
           </div>
   
        </div>";
        

    }
     
 }
    
?>