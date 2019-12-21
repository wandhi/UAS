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
function buatPostGaleryDesa() {
    var url= "submitpostGaleryDesa.php";
    console.log('hahahahah')
=======
function buatPostLemMas() {
    var url= "submitpostLemMas.php";
>>>>>>> e9821926759bba59f5f842e52b87b54bab66a442
    var content = document.getElementById("content").value;
    var data = "content="+content;

    req.open("POST", url,true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
        console.log(req)

        if(req.readyState == 4 && req.status ==200) {
<<<<<<< HEAD
            ambilPostGaleryDesa();
=======
            ambilPostProfileDesa();
>>>>>>> e9821926759bba59f5f842e52b87b54bab66a442
            document.getElementById("content").value ="";
        }
    }
   
    req.send(data)
}
<<<<<<< HEAD
=======

>>>>>>> e9821926759bba59f5f842e52b87b54bab66a442

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
function ambilPostGaleryDesa() {
    var url = "getpostGaleryDesa.php";
=======
function ambilPostLemMas() {
    var url = "getpostLemMas.php";
>>>>>>> e9821926759bba59f5f842e52b87b54bab66a442

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
function deletePostGaleryDesa(id) {
    console.log(id)
    var url = "deletePostGaleryDesa.php?id="+id;
=======

function deletePostLemMas(id) {
    console.log(id)
    var url = "deletePostLemMas.php?id="+id;
>>>>>>> e9821926759bba59f5f842e52b87b54bab66a442

    req.open("GET", url , true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    req.onreadystatechange = function() {
        if(req.readyState == 4  && req.status ==200){
<<<<<<< HEAD
            ambilPostGaleryDesa();
=======
            ambilPostLemMas();
>>>>>>> e9821926759bba59f5f842e52b87b54bab66a442
        }
    }
    console.log(req)
    req.send(null)
}