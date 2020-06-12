function sendProject(e){
    var ele = e.parentNode.parentElement;
    openProjects(ele);
}

function openProjects(e){
    if(getComputedStyle(e.childNodes[5]).opacity === "0"){
        e.childNodes[1].childNodes[1].childNodes[1].style.fontFamily = "montReg";
        var projText = e.childNodes[1].childNodes[1].childNodes[3].innerHTML;
        projText = "-" + projText.substr(1,projText.length);
        e.childNodes[1].childNodes[1].childNodes[3].innerHTML = projText;
        e.childNodes[1].childNodes[1].childNodes[1].style.fontSize = "2.19vw";
        e.childNodes[1].childNodes[1].childNodes[3].style.fontSize = "0.625vw";
        
        var all = e.childNodes[1].childNodes[3].childNodes;
        for(var i = 1; i < all.length; i += 2){
            all[i].style.width = "2.625vw";
        }
        //e.childNodes[1].childNodes[1].childNodes[1];//set title
        e.childNodes[5].style.opacity = "1";//set projects to full opacity
        e.childNodes[5].style.display = "flex";//set projects to full opacity
        e.childNodes[5].style.visibility = "visible";//set projects to visible
    }
    else{
        e.childNodes[1].childNodes[1].childNodes[1].style.fontFamily = "montExtraLight";
        var projText = e.childNodes[1].childNodes[1].childNodes[3].innerHTML;
        projText = "+" + projText.substr(1,projText.length);
        e.childNodes[1].childNodes[1].childNodes[3].innerHTML = projText;
        e.childNodes[1].childNodes[1].childNodes[1].style.fontSize = "4.375vw";
        e.childNodes[1].childNodes[1].childNodes[3].style.fontSize = "1.3vw";
        
        var all = e.childNodes[1].childNodes[3].childNodes;
        for(var i = 1; i < all.length; i += 2){
            all[i].style.width = "6.875vw";
        }
        e.childNodes[5].style.opacity = "0";
        e.childNodes[5].style.display = "none";//set projects to full opacity
        e.childNodes[5].style.visibility = "collapse";
    }
}

function loadImage(ele){
    $("#imageExpand").css("opacity", "1");
    $("#imageExpand").css("display", "flex");
    $("#imageExpand").css("z-index", "3");
    var source = ele.src;
    var folder = ele.src;
    folder = source.substr(0, source.search("/SmallScale"));
    source = source.substr(source.search("/SmallScale") + 12, source.length);
    //$("#imageExpand").css("background-image", "url(assets/Photos/FullScale/" + source + ")");
    document.getElementById("imageExpand").style.backgroundImage = "url(" + folder + "/FullScale/" + source + ")";
    //$("#imgExpanded").css("style", "assets/Photos/FullScale/Conversation.jpg");
    //document.getElementById("imgExpanded").src = "assets/Photos/FullScale/" + source;
}

function closeImage(){
    $("#imageExpand").css("opacity", "0");
    $("#imageExpand").css("display", "none");
    $("#imageExpand").css("z-index", "0");
    //$("#imgExpanded").css("style", "assets/Photos/FullScale/Conversation.jpg");
    //document.getElementById("imgExpanded").src = "";
}

function highlight(ele){
    console.log(getComputedStyle(ele.childNodes[1]).fontFamily);
    if(getComputedStyle(ele.childNodes[1]).fontFamily !== "montReg"){
        ele.childNodes[1].style.fontFamily = "montReg";
    }
}

function unHighlight(ele){
    if(getComputedStyle(ele.childNodes[1]).fontFamily === "montReg"){
        ele.childNodes[1].style.fontFamily = "montExtraLight";
    }
}
