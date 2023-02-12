function showMenu(){
    var element = document.getElementById("menu-aside");
    element.style.transform = "translateY(0%)";
}

function hideMenu(){
    var element = document.getElementById("menu-aside");
    element.style.transform = "translateY(-100%)";
}

function stoploading(){

    setTimeout("loading()", 1000);
}



function loading(){

    var loading_screen = document.getElementsByClassName("loading-screen");
    var items_container = document.getElementsByClassName("items-containter");

    loading_screen[0].style.display = "none";
    items_container[0].style.display = "flex";

}

function flip(){

    var flip_card = document.getElementsByClassName("flip-card-inner");

    flip_card[0].style.transform = "rotateY(180deg)";
}

function flipBack(){
    var flip_card = document.getElementsByClassName("flip-card-inner");

    flip_card[0].style.transform = "rotateY(0deg)";
}



//catagories javascript
var cards = ["laptop-card","smartphone-card"]
var types = ["laptop","smartphone"]

document.querySelector(".laptop-card").addEventListener("click",function(){

    for(card in cards){
        if(cards[card]== "laptop-card"){
            document.querySelector("."+cards[card]).className = document.querySelector("."+cards[card]).className + " active-card";
        }
        else{
            document.querySelector("."+cards[card]).className = document.querySelector("."+cards[card]).className.replace("active-card","")
        }
    }
    
    var laptops = document.getElementsByClassName("laptop");
    for(var i = 0;i<laptops.length;i++){
        laptops[i].style.display="block";
    }

    var smartphones = document.getElementsByClassName("smartphone");
    for(var i = 0;i<smartphones.length;i++){
        smartphones[i].style.display="none";
    }
    
});

document.querySelector(".smartphone-card").addEventListener("click",function(){

    for(card in cards){
        if(cards[card]== "smartphone-card"){
            document.querySelector("."+cards[card]).className = document.querySelector("."+cards[card]).className + " active-card";
        }
        else{
            document.querySelector("."+cards[card]).className = document.querySelector("."+cards[card]).className.replace("active-card","")
        }
    }

    var laptops = document.getElementsByClassName("laptop");
    for(var i = 0;i<laptops.length;i++){
        laptops[i].style.display="none";
    }

    var smartphones = document.getElementsByClassName("smartphone");
    for(var i = 0;i<smartphones.length;i++){
        smartphones[i].style.display="block";
    }

    

    
});
