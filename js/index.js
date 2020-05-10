
var fontSize = parseFloat($('#titleText').css('font-size'));
var minSize = fontSize - (0.0104 * window.innerWidth);
var repeater;
var openProject = "null";

function resize(){
    fontSize = parseFloat($('#titleText').css('font-size'));
    //reset it 
    minSize = fontSize - (0.0104 * window.innerWidth);
}

function move(){
    //scroll-snap-type: y mandatory;
    var rect = document.getElementById('videoContainer').getBoundingClientRect(); 
    
    if(rect.y < 0 && Math.abs(rect.y) < rect.height / 2.0){
        var val = rect.height/2.0;
        val = Math.abs(rect.y) / val;
        $("#subTitle").css("opacity", 1.0 - val);
        val = fontSize - (minSize * (val));
        val = val / window.innerWidth * 100;
        $('#titleText').css("font-size" , val + "vw");
        //$('#title').css("height", val + "vw");
    }
    if(rect.y < -rect.height){
        //position: -webkit-sticky; /* Safari */
        //position: sticky;
        //top: 1.04vw;
    }
    else{
        
    }
}

let filters = [[false, "f78b4d"], [false, "f7e94d"], [false, "5ef74d"], [false, "4df7ca"], [false, "4d75f7"], [false, "f74df7"]];

function tag(ele){
    
    if(openProject != "null"){
        closeProject();
    }
    else{
        $("#filters").css("font-size", 1.46 + "vw");
        $(".tag").css("opacity", "1");
        var pos = parseInt(ele.id);
        if(!filters[pos][0]){
            ele.style.color = "#" + filters[pos][1];
            ele.style.fontWeight = 900;
            
        }
        else{
            ele.style.color = "#E0E0E0";
            ele.style.fontWeight = 1;
        }
        filters[pos][0] = !filters[pos][0];
        var filterOn = false;
        for(var i = 0; i < 6; i++){
            if(filters[i][0]){
                filterOn = true;
                var elements = $("." + i);
                elements.css("opacity", "1");
                elements.css("border-left", "0.5vw solid");
                elements.css("border-radius", "15%");
                elements.css("border-color", "#" + filters[i][1]);
            }
            else{
                var elements = $("." + i);
                elements.css("opacity", "0.25");
                elements.css("border-left", "0.0vw");
            }
        }
        
        if(!filterOn){
            for(var i = 0; i < 6; i++){
                var elements = $("." + i);
                elements.css("opacity", "1");
                elements.css("border-left", "0.0vw");
            }
        }
    }
}


function filterProjects(i){
}

function loadProject(event, ele){
    $("#filters").css("font-size", 0.73 + "vw");
    $(".tag").css("opacity", "0.31");
    openProject = ele.id;
    $("#" + ele.id + "Description").css("z-index", "2");
    $("#" + ele.id + "Description").css("opacity", "1");
    $("#" + ele.id + "Description").css("visibility", "visible");
    $(".gallery").css("width", "45vw");
    //$(".projDescription").css("z-index", 2);
    $("#projects").css("opacity", "0");
    $("#projects").css("visibility", "hidden");    
}

function closeProject(){
    $("#filters").css("font-size", 1.46 + "vw");
    $(".tag").css("opacity", "1");
    $("#" + openProject + "Description").css("opacity", "0");
    $("#" + openProject + "Description").css("z-index", "-1");
    $("#" + openProject + "Description").css("visibility", "hidden");
    $(".gallery").css("width", "0vw");
    //$(".projDescription").css("z-index", -1);
    $("#projects").css("opacity", "1");
    $("#projects").css("visibility", "visible");   
    openProject = "null";
}

function setSize(){
    //$("#descriptions").css("top", "-" + $("#videoContainer").css("height"));
}

function parallaxOn(event, ele){
    var a = new Object();//mouse position
    a.x = event.clientX;
    a.y = event.clientY;
    var b = new Object();//center position of element 
    b.x = (ele.getBoundingClientRect().width / 2.0) + ele.getBoundingClientRect().x;
    b.y = (ele.getBoundingClientRect().height / 2.0) + ele.getBoundingClientRect().y;
    if(isNaN(b.x)){
        ele.children[1].style.left = "50%";
        ele.children[1].style.top = "50%";
    }
    else{
        var dist = distance(a, b, ele.getBoundingClientRect().width);
        ele.children[1].style.left = parseInt(dist.x * 10.0 + 50.0) + "%";
        ele.children[1].style.top =  parseInt(dist.y * 10.0 + 50.0) + "%";
    }
    
}

//Returs x, y distance in a percentage
function distance(a, b, w){
    var c = new Object();
    c.x = (a.x-b.x) / w;
    c.y = (a.y-b.y) / w;
    return c;//
}

function lerp (start, end, amt){
    return (1-amt)*start+amt*end;
}

function parallaxOff(event, ele){
    //clearInterval(repeater);
    ele.children[1].style.top = "50%";
    ele.children[1].style.left = "50%";
}