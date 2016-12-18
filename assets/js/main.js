
    function encode() {
        var filesSelected = document.getElementById("image").files;
        if (filesSelected.length > 0) {
            var fileToLoad = filesSelected[0];
            var fileReader = new FileReader();
            fileReader.onload = function(fileli) {
                var data = fileli.target.result;
                var Image2 = document.createElement('img');
                Image2.src = data;
                document.getElementById("test").innerHTML = Image2.src;
                console.log("200 OK");
            }
            fileReader.readAsDataURL(fileToLoad);
        }
    }

