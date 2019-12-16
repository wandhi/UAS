<body onload="ambilPost()">
<div class="container" id="container">
    <div class="box">
        <form>
            <textarea id="content" name="content" class="form-control"
            placehoder="write something....." maxlength="140"></textarea>
            <br>
            <button onclik="buatpost(this.value)" type="button" style="float:right" class="btn btn-info btn-sm" >Post</button>
        </form>
    </div>
</div>