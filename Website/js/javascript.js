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

