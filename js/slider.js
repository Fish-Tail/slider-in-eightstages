(function() {
    var myImg = document.getElementsByClassName("scrollable-container");
    var totalImg = myImg[0].getElementsByTagName("img");
    var imageWidth = totalImg[0].offsetWidth;
    var noOfImg = totalImg.length;
    var myIndexMargin = [];
    var temp = imageWidth;
    var myIndex1 = 0;
    var direction = 1;
    var imgTimer;

    function setIndex(){
      console.log('inside setIndex', imageWidth);
      for (var i = 0; i < noOfImg; i++){
        temp = temp - imageWidth;
        myIndexMargin[i] = temp;
        console.log('inside temp', myIndexMargin[i]);
      }
    }
    setIndex();

    // var myMargin1 = 0;
    // var myIndex1 = 1;
    // var flag1 = 1;
    var btn = document.createElement("BUTTON");        // Create a <button> element
    btn.setAttribute('class', 'btn1');
    var btn2 = document.createElement("BUTTON");
    btn2.setAttribute('class', 'btn2');
    var t = document.createTextNode("<");
    var t2 = document.createTextNode(">")       // Create a text node
    btn.appendChild(t);
    btn2.appendChild(t2);      

    var imgContainer = document.getElementsByClassName("banner-image-container");

    imgContainer[0].appendChild(btn);
    

    btn.onmouseover = function(){
        btn.style.opacity=".8"
        btn.style.background = 'white';
    };
    btn.onmouseout = function(){
        btn.style.opacity=".35"
    };
    btn.onclick = function(){
        myOnClick(102)
    };
    btn2.onmouseover = function(){
        btn2.style.opacity=".8"
        btn2.style.background = "white";
    };
    btn2.onmouseout = function(){
        btn2.style.opacity=".35"
    };
    btn2.onclick = function(){
        myOnClick(101)
    };
    imgContainer[0].appendChild(btn2);
    
    function generateImgNavButtons(i) {
      var myUl = document.getElementsByClassName("button-list")[0];
      var myLi = document.createElement("li");
      myLi.appendChild(document.createTextNode("\u2022"));
      myUl.appendChild(myLi);
      myLi.onclick = function(){myOnClick(i)};
      myLi.onmouseover = function(){myOnClick(i)};
    }
    for (var i = 0; i < noOfImg; i++){
      console.log(i)
    generateImgNavButtons(i);
    }

  function bestSlider(){
    console.log('inside bestSlider');
    
    imgTimer = setInterval(slideImage, 2000);
    function slideImage(){
        myIndex1 = myIndex1 + direction;
        if (myIndex1 >= noOfImg-1 || myIndex1 < 1){

          direction = -direction;
          if (myIndex1 > noOfImg-1){
            myIndex1 = myIndex1 + direction;
          }
        } 

        myImg[0].style.transition = "1s ease";
        myImg[0].style.marginLeft = myIndexMargin[myIndex1] + "px";
        console.log('inside setIndex', myIndex1, direction);
        
    }
  }
  bestSlider();


    function myOnClick(indexSent) {
        clearInterval(imgTimer);
        if(indexSent === 101){
            myIndex1++; 
            if(myIndex1 > 4){
            myIndex1 = 5; 
            indexSent = 5;
            }
        } 
        else if(indexSent === 102) {
            myIndex1--;
             if(myIndex1 < 0){
            myIndex1 = 0; 
            }
          }
        else{
          myIndex1 = indexSent;
        }
        
        console.log("onbutton: ", myIndex1);
            
        myImg[0].style.transition = "0.5s ease";
        myImg[0].style.marginLeft = myIndexMargin[myIndex1] + "px";
        bestSlider();
        
    }
//     function mySlider1() {
//         if(myIndex1 >= 6){
//             myIndex1 = 6; 
//             }
//         if(myIndex1 <= 2){
//             myIndex1 = 2; 
//             myMargin1 = 0;
//             indexSent = 0;
//             }
        
//         // if(myIndex1 <= 3){
//         //     myIndex1 = 3; 
//         //     myMargin1= 0;
//         //     }
//         var myImg = document.getElementsByClassName("scrollable-container");
//         var totalImg = myImg[0].getElementsByTagName("img");
//         var imageWidth = totalImg[0].offsetWidth; //960
//         var reduction = -960;
//         var countReducer = 1;
        
//         imgIndex = setInterval(currentSlider, 2000);
//         function currentSlider(){
//         myMargin1 = myMargin1 + reduction * flag1; 
//         myImg[0].style.transition = "1s ease";
//         myImg[0].style.marginLeft = myMargin1 + "px"; 
//         if (myIndex1 > totalImg.length || (myIndex1 < 3 && countReducer >1)){
//             flag1 *= -1;
//             }
//         myIndex1 = myIndex1 + flag1;
//         if(myIndex1 < 3){
//             myIndex1=2;
//         }
//         if(myIndex1>5){
//             myIndex1=6
//         }
//         countReducer = 2;
//         console.log("myslide: ", myIndex1);
//         }   
//     }

//     function mySlider3() {
//         var myImg = document.getElementsByClassName("scrollable-container-3");
//         var totalImg = myImg[0].getElementsByTagName("img");
//         var imageWidth = totalImg[0].offsetWidth; //960
//         var myMargin = 0;
//         var myIndex = 0;
//         var reduction = 0;
//         var flag = 1;
        
        
//         setInterval(currentSlider2, 3000);
       
//         function currentSlider2(){
            
//             var myTransition = setInterval(function(){

//                 reduction = reduction-(imageWidth/100)*flag; //9.6
//                 myImg[0].style.marginLeft = myMargin+reduction + "px";
//                 if (reduction <= -imageWidth || reduction >= imageWidth){
//                     myMargin = myMargin+reduction;
//                     reduction=0;
//                     clearInterval(myTransition); }

//             }, 10);

//             myIndex ++;
//             if (myIndex === totalImg.length) {
//                 myIndex = 1; 
//                 flag *= -1;
//                 }
//         }   

//     }


//     function mySlider(classNameSent, animationSent) {
//     var myImg = document.getElementsByClassName(classNameSent);
//     var totalImg = myImg[0].getElementsByTagName("img");
//     var imageWidth = totalImg[0].offsetWidth;
//     var myMargin = imageWidth;
//     var myIndex = 0;
//     var reduction = -imageWidth;
//     var flag = 1;
//     var animate = "1s " + animationSent;
//     setInterval(currentSlider, 2000);

//         function currentSlider(){
//         myMargin = myMargin + reduction * flag;
//         myImg[0].style.transition = animate;
//         myImg[0].style.marginLeft = myMargin + "px";
//         myIndex ++;
//         if (myIndex === totalImg.length) {
//             myIndex = 1; 
//             flag *= -1;
//             }
//         }
//     }

// // mySlider1();
// mySlider3();
// mySlider("scrollable-container-2","linear");

})();