<?php
 include "connection.php";
 error_reporting(E_ERROR | E_PARSE); 

 $getPostQuery = mysqli_query($mysqli, "SELECT * FROM tb_sejarahdesa");
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
               <textarea id='content' name='content' onChange=updatePostSejarahDesa(".$user_data['id'].",this.value) class='form-control' 
			placeholder='".$user_data['sejarah_desa']."' value='".$user_data['sejarah_desa']."' maxlength='140'>".$user_data['sejarah_desa']."</textarea>
            </form>
            </div>
        </div>
        <div class='row' style='margin-top:10px;'>
           <div class='col-md-1'></div>
           <div class='col-md-1'  style='padding-left:5px'>
           </div>
          
           <div class='col-md-10' style='padding-left:40px;'>
               <button style='width:80px' class='btn-success btn-sm' onclick='updatePostSejarahDesa(".$user_data['id'].",document.getElementById(`content`).value)' >Update</button>


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
               <p class='text-muted' id='post-text'>".$user_data['sejarah_desa']."</p>
           </div>
        </div>
        <div class='row' style='margin-top:10px;'>
           <div class='col-md-1'></div>
           <div class='col-md-1'  style='padding-left:5px'>
           </div>
          
           <div class='col-md-10' style='padding-left:40px;'>
               <button style='width:80px' class='btn-danger btn-sm' onclick='deletePostSejarahDesa(".$user_data['id'].")' value='".$user_data['sejarah_desa']."'>Delete</button>
               <button style='width:80px' class='btn-danger btn-sm' onclick='ambilPostSejarahDesaEdit(".$user_data['id'].")' value='".$user_data['sejarah_desa']."'>Delete</button>


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
               <p class='text-muted' id='post-text'>".$user_data['sejarah_desa']."</p>
           </div>
        </div>
        <div class='row' style='margin-top:10px;'>
           <div class='col-md-1'></div>
           <div class='col-md-1'  style='padding-left:5px'>
           </div>
          
           <div class='col-md-10' style='padding-left:40px;'>
               <button style='width:80px' class='btn-danger btn-sm' onclick='deletePostSejarahDesa(".$user_data['id'].")' value='".$user_data['sejarah_desa']."'>Delete</button>
               <button style='width:80px' class='btn-success btn-sm' onclick='ambilPostSejarahDesaEdit(".$user_data['id'].")' value='".$user_data['sejarah_desa']."'>Update</button>


           </div>
           </div>
   
        </div>";
        

    }
     
 }
    
?>