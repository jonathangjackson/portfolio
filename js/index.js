/*Project Structure*/
var messanger = {
    id: "messanger",
    name: "Messanger Concept",
    description: "wireframes  |  prototypes  |  adobe xd",
    type: "ui_ux",
    images: ["assets/UI/FullScale/Dark.png", "assets/UI/FullScale/Light.png"]
};

var music = {
    id: "music",
    name: "Music Player Concept",
    description: "wireframes  |  prototypes  |  adobe xd",
    type: "ui_ux",
    images: ["assets/UI/FullScale/SongsDark.png", "assets/UI/FullScale/PlayerDark.png"]
};

var station = {
    id: "station",
    name: "Station Six VR Game",
    description: "unity  |  c#  |  game design  |  prototypes",
    type: "game_design",
    images: ["assets/VR/FullScale/GeneratorRoom.png", "assets/VR/FullScale/LabRender.png", "assets/VR/FullScale/Storage.png", "assets/VR/FullScale/Minerva.png"]
};

/*projects*/
var projects = [messanger, music, station];

var highlightColor = "rgba(161,255,255, 1)";//rgba(255,162,0, 1)

function run(){
    var x = document.getElementsByClassName("rectangles");
    for(var i = 0; i < x.length; i++){
        var y = window.getComputedStyle(x[i].parentElement.parentElement).width;
        x[i].style.width = y;
    }
    gallery();
}

function scrollToTop(){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
    var navEle = document.getElementsByClassName("navBtn");
    for(var i = 0; i < navEle.length; i++){
        navEle[i].style.color = "white";
        navEle[i].style.fontWeight = "100";
    }
    navEle[0].style.color = highlightColor;
    navEle[0].style.fontWeight = "bold";
}

function scrollToEle(ele){
    var navEle = document.getElementsByClassName("navBtn");
    for(var i = 0; i < navEle.length; i++){
        navEle[i].style.color = "white";
        navEle[i].style.fontWeight = "100";
    }
    ele.style.color = highlightColor;
    ele.style.fontWeight = "bold";
    document.getElementById(ele.innerHTML).scrollIntoView();
}

function gallery(){
    var galleryWidth = window.getComputedStyle(document.getElementById("gallery")).width;
    var mobile = document.getElementsByClassName("mobile");
    var web = document.getElementsByClassName("web");
    if(mobile.length + web.length > 1){
        for(var i = 0; i < mobile.length; i++){
            mobile[i].style.width = "20%";
            
        }
        for(var i = 0; i < web.length; i++){
            web[i].style.width = "78%";
        }
    }
    else{
        
    }
    
}

function filter(ele){
    var temp = document.getElementById("selected").innerHTML;
    document.getElementById("selected").innerHTML = ele.innerHTML;
    ele.innerHTML = temp;
    temp = document.getElementById("selected").innerHTML;
    var filter = temp.substr(1, temp.length);
    if(filter === "general"){
        for(var i = 0; i < projects.length; i++){
            document.getElementById(projects[i].id).style.display = "flex";
        }
        return;
    }
    for(var i = 0; i < projects.length; i++){
        if(projects[i].type === filter){
            document.getElementById(projects[i].id).style.display = "flex";
        }
        else{
            document.getElementById(projects[i].id).style.display = "none";
        }
    }
}

var oldSlide = null;

function loadProj(ele){
    populateDescription(ele.id);
    var gallery = document.getElementById("gallery");
    var projNav = document.getElementById("projNav");
    var projDes = document.getElementById("projectDescriptions");
    
    var slider = document.getElementById("slider");
    gallery.style.opacity = 0;
    gallery.style.transform = "translate(-100%, 0)";
    
    slider.style.transform = "translate(0%, 0)";
    //projNav.style.opacity = 0;
    //projNav.style.transform = "translate(-100%, 0)";
    
    projDes.style.display = "flex";
    projDes.style.transform = "translate(0, 0)";
    projDes.style.margin = "0";
    projDes.style.opacity = 1;
    slider.style.justifyContent = "flex-start";
    
    document.getElementById("projectDescriptions").style.height = window.getComputedStyle(gallery).height;
    
    gallery.style.display = "none";
    
    oldSlide = document.getElementById("1");
    oldSlide.style.backgroundColor= highlightColor;
    document.getElementById("img1").style.display = "flex";
}

function populateDescription(id){
    /*Erase Current Content*/
    var galCount = document.getElementById("galNum");
    
    var count = (galCount.childNodes.length - 2);
    if(count > 0){
        for(var i = 0; i < count; i++){
            galCount.removeChild(galCount.childNodes[galCount.childNodes.length - 1]);
        }
    }
    
    var slideCount = document.getElementById("slideNum");
    count = (slideCount.childNodes.length - 2);
    
    if(count > 0){
        for(var i = 0; i < count; i++){
            slideCount.removeChild(slideCount.childNodes[slideCount.childNodes.length - 1]);
        }
    }
    
    /*Add Content*/
    var x = 0;
    while(id != projects[x].id){
        x++;
    }
    document.getElementsByClassName("projHeaderTitle")[0].innerHTML = projects[x].name;
    document.getElementsByClassName("projHeaderDesc")[0].innerHTML =  projects[x].description;
    
    var imgEle = document.getElementsByClassName("projGalImg")[0];
    var slideEle = document.getElementsByClassName("dot")[0];
    imgEle.src = projects[x].images[0];
    
    for(var i = 1; i < projects[x].images.length; i++){
        var cloneImg = imgEle.cloneNode(true);
        var cloneSlide = slideEle.cloneNode(true);
        cloneImg.id = "img" + (i+1);
        cloneImg.src = projects[x].images[i];
        cloneImg.style.display = "none";
        imgEle.after(cloneImg);
        //imgEle = cloneImg.cloneNode(true);
        
        cloneSlide.id = i + 1;
        cloneSlide.style.backgroundColor = "rgba(255,255,255, 0.6)";
        slideEle.after(cloneSlide);
        //slideEle = cloneSlide.cloneNode(true);
    }
    
    
}

function changeSlide(ele){
    if(oldSlide === null){
        oldSlide = ele;
    }
    else{
        if(oldSlide === ele){
            return;
        }
        oldSlide.style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("img" + oldSlide.id).style.display = "none";
        oldSlide = ele;
        document.getElementById("img" + oldSlide.id).style.display = "flex";
    }
    ele.style.backgroundColor= highlightColor;
}

function back(){
    var gallery = document.getElementById("gallery");
    var projNav = document.getElementById("projNav");
    var projDes = document.getElementById("projectDescriptions");
    
    var slider = document.getElementById("slider");
    gallery.style.opacity = 1;
    gallery.style.transform = "translate(0%, 0)";
    
    slider.style.transform = "translate(0%, 0)";
    //projNav.style.opacity = 0;
    //projNav.style.transform = "translate(-100%, 0)";
    
    projDes.style.display = "none";
    projDes.style.transform = "translate(100, 0)";
    projDes.style.margin = "0";
    projDes.style.opacity = 0;
    slider.style.justifyContent = "flex-start";
    gallery.style.display = "flex";
    
    oldSlide = document.getElementById("1");
    oldSlide.style.backgroundColor= "rgba(161,255,255, 0)";
    document.getElementById("img1").style.display = "none";
    
    /*Erase Current Content*/
    var galCount = document.getElementById("galNum");
    
    var count = (galCount.childNodes.length - 2);
    if(count > 0){
        for(var i = 0; i < count; i++){
            galCount.removeChild(galCount.childNodes[galCount.childNodes.length - 1]);
        }
    }
    
    var slideCount = document.getElementById("slideNum");
    count = (slideCount.childNodes.length - 2);
    
    if(count > 0){
        for(var i = 0; i < count; i++){
            slideCount.removeChild(slideCount.childNodes[slideCount.childNodes.length - 1]);
        }
    }
}

var images = new Array();
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
preload(
    "assets/VR/FullScale/GeneratorRoom.png", 
    "assets/VR/FullScale/LabRender.png", 
    "assets/VR/FullScale/Storage.png", 
    "assets/VR/FullScale/Minerva.png",
    "assets/UI/FullScale/SongsDark.png", 
    "assets/UI/FullScale/PlayerDark.png",
    "assets/UI/FullScale/Dark.png", 
    "assets/UI/FullScale/Light.png",
    "assets/Icons/Portrait.png"
);