var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x = 0; 
var y = 0;
var canvasH = 150; //canvas height
var canvasW = 500; //canvas width
var listX = new Array();
var listY = new Array();

var shade = {
  r: 0,
  g : 0,
  b: 0
};

var position = {
    x : 0,
    y : 0
}

var rectangle = {
    h : 0,
    w : y
}

//points contains positions, rects contain height and width 
var renderPass = {
    points : new Array(),
    rects : new Array()
}

randColor();
do{
    
    var dW = Math.floor((Math.random() * canvasW/2) + 10);//Draw Width
    var dH = Math.floor((Math.random() * canvasH/2) + 10);//Draw Width
    if(x + dW < canvasW){
        listX.push(x);
        listY.push(y + dH);
        ctx.beginPath();
        ctx.fillStyle = randShade();
        ctx.fillRect(x, y, dW, dH);
        x += dW;
    }
    else{
        if(canvasW - x < 20){
            listX.push(x);
            listY.push(y + dH);
            ctx.fillStyle = randShade();
            ctx.fillRect(x, y, dW, dH);
            x = canvasW;
        }
    }
}while(x < canvasW);
var repeat = 0;
do{
    var tempArrayX = new Array();
    tempArrayX = listX;
    listX = [];
    var tempArrayY = new Array();
    tempArrayY = listY;
    listY = [];
    var z;
    for(z = 0; z < tempArrayX.length; z++){
        dW = Math.floor((Math.random() * canvasW/2) + 10);//Draw Width
        dH = Math.floor((Math.random() * canvasH/2) + 10);//Draw Width
        x = tempArrayX[z];
        y = tempArrayY[z];
        if(x + dW < canvasW){
            listX.push(x);
            listY.push(y + dH);
            //ctx.beginPath();
            ctx.fillStyle = randShade();
            ctx.fillRect(x, y, dW, dH);
            ctx.stroke();
        }
        else{
            if(canvasW - x < 20){
                //ctx.beginPath();
                ctx.fillStyle = randShade();
                ctx.fillRect(x, y, dW, dH);
            }
        }
    }
    repeat++;
}while(repeat < 1);

function render(rendPass, position){
    var failed = false;
    var drawW = 0;//Draw Width
    var drawH = 0;//Draw Height
    var index = 0;
    
    if(position > 0){
        rendPass.points[index].x = 0;
        rendPass.points[index].y = 0;
    }
    else{
        rendPass.points[index].x = 0;
        rendPass.points[index].y = 0;
    }
    do{
        failed = false;
        drawW = Math.floor((Math.random() * canvasW/2) + 10);
        drawH = Math.floor((Math.random() * canvasH/2) + 10);
        
        //Is the rectangle Going to be Out Of the canvas 
        if(rendPass.points[index].x + drawW > canvasW){
            if(canvasW - point.x < 20){
                drawW = canvasW - point.x;
            }
            failed = true;
        }
        if(point.y + drawW > canvasH){
            if(canvasH- point.y < 20){
                drawH = canvasH - point.y;
            }
            failed = true;
        }
        
        //Is the rectangle going to overlap with an adjacent rectangle
        if(position > 0){
            
        }
        
        if(!failed){
            index++;
        }
    }while(point.x < canvasW);
}
        

function overlap(posA, rectA, posB, rectB){
    if(posA.x + rectA.w > posB.x)
        return true;
    if(posA.x + rectA.w > posB.y + rectB.h)
        return true;
    return false;
}

function drawRect(p, r){
    ctx.fillStyle = randShade();
    ctx.fillRect(p.x, p.y, r.w, r.h);
}

function randColor(){
    shade.r = Math.floor((Math.random() * 255));
    shade.g = Math.floor((Math.random() * 255));
    shade.b = Math.floor((Math.random() * 255));
}

function randShade(){
    var shadeVal = Math.random() * 1;
    if(shadeVal < 0.4)
        shadeVal = 0.4;
    if(shadeVal > 0.6)
        shadeVal = 0.6;
    var r = shade.r * shadeVal;
    var g = shade.g * shadeVal;
    var b = shade.b * shadeVal;
    return "rgb(" + r + "," + g + "," + b+ ")"; 
    
}