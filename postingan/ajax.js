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

<<<<<<< HEAD
function buatPostSejarahDesa() {
    var url= "submitpostSejarahDesa.php";
    console.log('hahahahah')
	var content = document.getElementById("content").value;
=======
function buatPostGaleryDesa() {
    var url= "submitpostGaleryDesa.php";
    console.log('hahahahah')
    var content = document.getElementById("content").value;
>>>>>>> 0f29d884cd4892b8de237df8bd149e53f1dd7dc8
    var data = "content="+content;

    req.open("POST", url,true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
<<<<<<< HEAD
        

        if(req.readyState == 4 && req.status ==200) {
            ambilPostSejarahDesa();
=======
        console.log(req)

        if(req.readyState == 4 && req.status ==200) {
            ambilPostGaleryDesa();
>>>>>>> 0f29d884cd4892b8de237df8bd149e53f1dd7dc8
            document.getElementById("content").value ="";
        }
    }
   
    req.send(data)
}

<<<<<<< HEAD
=======

>>>>>>> 0f29d884cd4892b8de237df8bd149e53f1dd7dc8
function buatPostLemMas() {
    var url= "submitpostLemMas.php";
    var content = document.getElementById("content").value;
    var data = "content="+content;

    req.open("POST", url,true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
        console.log(req)

        if(req.readyState == 4 && req.status ==200) {
<<<<<<< HEAD
            ambilPostSejarahDesa();
=======
            ambilPostLemMas();
>>>>>>> 0f29d884cd4892b8de237df8bd149e53f1dd7dc8
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

<<<<<<< HEAD
function ambilPostSejarahDesa() {
    var url = "getpostSejarahDesa.php";
	 req.open("GET", url , true);
=======
function ambilPostGaleryDesa() {
    var url = "getpostGaleryDesa.php";
    req.open("GET", url , true);
>>>>>>> 0f29d884cd4892b8de237df8bd149e53f1dd7dc8
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

<<<<<<< HEAD
function deletePostSejarahDesa(id) {
    console.log(id)
    var url = "deletePostSejarahDesa.php?id="+id;
=======
function deletePostGaleryDesa(id) {
    console.log(id)
    var url = "deletePostGaleryDesa.php?id="+id;
>>>>>>> 0f29d884cd4892b8de237df8bd149e53f1dd7dc8

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
<<<<<<< HEAD
            ambilPostSejarahDesa();
			
			 }
=======
            ambilPostGaleryDesa();
        }
>>>>>>> 0f29d884cd4892b8de237df8bd149e53f1dd7dc8
    }
    console.log(req)
    req.send(null)
}
<<<<<<< HEAD

=======
>>>>>>> 0f29d884cd4892b8de237df8bd149e53f1dd7dc8

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