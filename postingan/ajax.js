var req = new XMLHttpRequest();


function buatPost() {
    var url= "submitpost.php";
    console.log('hahahahah')
    var content = document.getElementById("content").value;
    var data = "content="+content;

    req.open("POST", url,true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
        console.log(req)

        if(req.readyState == 4 && req.status ==200) {
            ambilPost();
            document.getElementById("content").value ="";
        }
    }
   
    req.send(data)
}

function buatPostProfileDesa() {
    var url= "submitpostProfileDesa.php";
    console.log('hahahahah')
    var content = document.getElementById("content").value;
    var data = "content="+content;

    req.open("POST", url,true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
        console.log(req)

        if(req.readyState == 4 && req.status ==200) {
            ambilPostProfileDesa();
            document.getElementById("content").value ="";
        }
    }
   
    req.send(data)
}

function buatPostSejarahDesa() {
    var url= "submitpostSejarahDesa.php";
	var content = document.getElementById("content").value;
    var data = "content="+content;

    req.open("POST", url,true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
        console.log(req)

        if(req.readyState == 4 && req.status ==200) {
            ambilPostSejarahDesa();

            document.getElementById("content").value ="";
        }
    }
   
    req.send(data)
}
function buatPostGaleryDesa() {
    var url= "submitpostGaleryDesa.php";
    console.log('hahahahah')
    var content = document.getElementById("content").value;
    var data = "content="+content;

    req.open("POST", url,true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {

        console.log(req)

        if(req.readyState == 4 && req.status ==200) {
            ambilPostGaleryDesa();

            document.getElementById("content").value ="";
        }
    }
   
    req.send(data)
}


function buatPostLemMas() {
    var url= "submitpostLemMas.php";
    var content = document.getElementById("content").value;
    var data = "content="+content;

    req.open("POST", url,true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
        console.log(req)

        if(req.readyState == 4 && req.status ==200) {
            ambilPostLemMas();
            document.getElementById("content").value ="";
        }
    }
   
    req.send(data)
}

function loginPost() {
    var url= "submitpostLemMas.php";
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log('username:'+username+' ,password:'+password)
    var data = "content="+content;

    req.open("POST", url,true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
        console.log(req)

        if(req.readyState == 4 && req.status ==200) {
            ambilPostLemMas();
            document.getElementById("content").value ="";
        }
    }
   
    req.send(data)
}

function buatPostObjectWisataDesa() {
    var url= "submitpostObjectWisataDesa.php";
    console.log('hahahahah')
    var content = document.getElementById("content").value;
    var data = "content="+content;

    req.open("POST", url,true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {

        console.log(req)

        if(req.readyState == 4 && req.status ==200) {
            ambilPostObjectWisataDesa();

            document.getElementById("content").value ="";
        }
    }
   
    req.send(data)
}


function ambilPost() {
    var url = "getpost.php";

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            
        }
        console.log(req.statusText)
        document.getElementById("post-content").innerHTML = req.responseText;
    }

    
    req.send(null)
   
}

function ambilPostProfileDesa() {
    var url = "getpostProfileDesa.php";

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            
        }
        console.log(req.statusText)
        document.getElementById("post-content").innerHTML = req.responseText;
    }

    
    req.send(null)
   
}

function updatePostProfileDesa(a,e) {
    var url = "updatePostProfileDesa.php?id="+a+"&value="+e;

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            ambilPostProfileDesa();
        }
        // document.getElementById("post-content").innerHTML = req.responseText;
    }

    
    req.send(null)
   
}


function updatePostSejarahDesa(a,e) {
    var url = "updatePostSejarahDesa.php?id="+a+"&value="+e;

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            ambilPostSejarahDesa()
        }
        // document.getElementById("post-content").innerHTML = req.responseText;
    }

    
    req.send(null)
   
}

function updatePostObjectWisataDesa(a,e) {
    var url = "updatePostObjectWisataDesa.php?id="+a+"&value="+e;

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            ambilPostObjectWisataDesa();

        }
        // document.getElementById("post-content").innerHTML = req.responseText;
    }

    
    req.send(null)
   
}

function updatePostGaleryDesa(a,e) {
    var url = "updatePostGaleryDesa.php?id="+a+"&value="+e;


    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            ambilPostGaleryDesa();
        }
        // document.getElementById("post-content").innerHTML = req.responseText;
    }

    
    req.send(null)
   
}

function updatePostObjectWisataDesa(a,e) {
    var url = "updatePostObjectWisataDesa.php?id="+a+"&value="+e;

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            ambilPostObjectWisataDesa();
        }
        // document.getElementById("post-content").innerHTML = req.responseText;
    }

    
    req.send(null)
   
}

function ambilPostProfileDesaEdit(e) {
    var url = "getpostProfileDesa.php?row_id=true&id="+e;

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            
        }
        console.log(req.statusText)
        document.getElementById("post-content").innerHTML = req.responseText;
    }

    
    req.send(null)
   
}


function ambilPostGaleryDesaEdit(e) {
    var url = "getpostGaleryDesa.php?row_id=true&id="+e;

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            
        }
        console.log(req.statusText)
        document.getElementById("post-content").innerHTML = req.responseText;
    }

    
    req.send(null)
   
}

function ambilPostObjectWisataDesaEdit(e) {
    var url = "getpostObjectWisataDesa.php?row_id=true&id="+e;


    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            
        }
        console.log(req.statusText)
        document.getElementById("post-content").innerHTML = req.responseText;
    }

    
    req.send(null)
   
}



function ambilPostSejarahDesaEdit(e) {
    var url = "getpostSejarahDesa.php?row_id=true&id="+e;

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            
        }
        console.log(req.statusText)
        document.getElementById("post-content").innerHTML = req.responseText;
    }

    
    req.send(null)
   
}

function ambilPostSejarahDesa() {
    var url = "getpostSejarahDesa.php";
	 req.open("GET", url , true);
     req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

     req.onreadystatechange = function() {
         if(req.readyState == 4  && req.status ==200){
             
         }
         console.log(req.statusText)
         document.getElementById("post-content").innerHTML = req.responseText;
     }
 
     
     req.send(null)
    
 }
function ambilPostGaleryDesa() {
    var url = "getpostGaleryDesa.php";
    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            
        }
        console.log(req.statusText)
        document.getElementById("post-content").innerHTML = req.responseText;
    }

    
    req.send(null)
   
}
function ambilPostLemMas() {
    var url = "getpostLemMas.php";

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            
        }
        console.log(req.statusText)
        document.getElementById("post-content").innerHTML = req.responseText;
    }

    
    req.send(null)
   
}

function ambilPostObjectWisataDesa() {
    var url = "getpostObjectWisataDesa.php";

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            
        }
        console.log(req.statusText)
        document.getElementById("post-content").innerHTML = req.responseText;
    }

    
    req.send(null)
   
}


function hapusPost(id) {
    console.log(id)
    var url = "deletePost.php?id="+id;

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            ambilPost();
        }
    }
    console.log(req)
    req.send(null)
}



function deletePostProfileDesa(id) {
    console.log(id)
    var url = "deletePostProfileDesa.php?id="+id;

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            ambilPostProfileDesa();
        }
    }
    console.log(req)
    req.send(null)
}

function deletePostSejarahDesa(id) {
    console.log(id)
    var url = "deletePostSejarahDesa.php?id="+id;
    
    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            ambilPostSejarahDesa();
			
			 }

    }
    console.log(req)
    req.send(null)
}

function deletePostGaleryDesa(id) {
    console.log(id)
    var url = "deletePostGaleryDesa.php?id="+id;

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            ambilPostGaleryDesa();
        }
    }
    console.log(req)
    req.send(null)
}

function deletePostLemMas(id) {
    console.log(id)
    var url = "deletePostLemMas.php?id="+id;

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){

            ambilPostLemMas();
        }
    }
    console.log(req)
    req.send(null)
}

function deletePostObjectWisataDesa(id) {
    console.log(id)
    var url = "deletePostObjectWisataDesa.php?id="+id;

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
            ambilPostProfileDesa();
        }
    }
    console.log(req)
    req.send(null)
}