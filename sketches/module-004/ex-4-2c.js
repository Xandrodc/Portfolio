createCanvas(600,400);
background (0, 10, 10);
colorMode(HSB);
noStroke();

for (let j = 0; j < 4; j++){
for (let i = 0; i < 6; i++){
let randomColor = floor(random(0,3));
let randomShape = floor(random(0,5));
let x = 50 + i * 100;
let y = 50 + j * 100; 

//random color
    switch (randomColor){
    //pink
        case 0 :
        fill(330,90,100);
            break;
    //blue
        case 1 :
        fill(200,90,100);
            break;
    //purple
        case 2 :
        fill(280,90,100);
            break;
        }
        drawShape(x,y, 100);
    }    
}


function drawShape(x,y,size) {
let randomShape = floor(random(0,5));

 //random shape
    switch (randomShape){
        //triangle
        case 0 :
        triangle(x - size/2,y + size/2,x - size/2, y - size/2, x + size/2, y + size/2);
            break;      
    //circle
        case 1 :
        circle(x,y,size);
            break;
    //square
        case 2 :
        square(x - size/2,y - size/2,size);
            break;
    //triangle
        case 3 :
        triangle(x - size/2,y + size/2,x - size/2, y - size/2, x + size/2, y + size/2);
            break;
    }   
}