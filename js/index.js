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
        console.log(e.childNodes[1].childNodes[3].childNodes);
        
        e.childNodes[1].childNodes[1].childNodes[1].style.fontSize = "2.19vw";
        e.childNodes[1].childNodes[1].childNodes[3].style.fontSize = "0.625vw";
        
        all = e.childNodes[1].childNodes[3].childNodes;
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
        var all = document.getElementsByClassName("title");
        for(var i = 0; i < all.length; i++){
            all[i].style.fontSize = "4.375vw";
        }
        all = document.getElementsByClassName("projCount");
        for(var i = 0; i < all.length; i++){
            all[i].style.fontSize = "1.3vw";
        }
        all = document.getElementsByClassName("hoverImg");
        for(var i = 0; i < all.length; i++){
            all[i].style.width = "6.875vw";
        }
        e.childNodes[5].style.opacity = "0";
        e.childNodes[5].style.display = "none";//set projects to full opacity
        e.childNodes[5].style.visibility = "collapse";
    }
}