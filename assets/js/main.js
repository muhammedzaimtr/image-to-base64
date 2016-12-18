
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


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-56284082-5', 'auto');
  ga('send', 'pageview');
