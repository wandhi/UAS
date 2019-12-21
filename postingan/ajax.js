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
    console.log('hahahahah')
	var content = document.getElementById("content").value;
    var data = "content="+content;

    req.open("POST", url,true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
        

        if(req.readyState == 4 && req.status ==200) {
            ambilPostSejarahDesa();
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
            ambilPostSejarahDesa();
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