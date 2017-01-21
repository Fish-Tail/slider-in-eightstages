(function() {
        function showdiv(){
            div = document.getElementById('search-container');
            div.style.display ='block';
        }
        var myMargin= 960;
        var myIndex = 0;
        mySlider();
        function mySlider() {
            myMargin = myMargin-960;
            var myImg = document.getElementsByClassName("scrollable-container");
            var totalImg = document.getElementsByClassName("banner-images");
            myImg[0].style.marginLeft = myMargin+"px";
            myIndex++;

            if (myIndex>=totalImg.length){
                myIndex=0; 
                myMargin=960;
            }

            setTimeout(mySlider, 2000);
          
        }
    //     function carousel() {
    //     var i;
    //     var x = document.getElementsByClassName("mySlides");
    //     for (i = 0; i < x.length; i++) {
    //        x[i].style.display = "none";  
    //     }
    //     myIndex++;
    //     if (myIndex > x.length) {myIndex = 1}    
    //     x[myIndex-1].style.display = "block";  
    //     setTimeout(carousel, 4000);    
    // }
})();