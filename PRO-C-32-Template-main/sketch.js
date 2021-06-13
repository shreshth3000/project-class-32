const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time=0
var timeSuffix;
var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if (backgroundImg){
    background(backgroundImg)
    }
    
    
    noStroke();
    textSize(35)
    fill("white")
    text( time + timeSuffix, width-300, 50)
  



Engine.update(engine);
}

async function getBackgroundImg(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON= await response.json();

    var datetime= responseJSON.datetime
    var hour= datetime.slice(11,13)

    if(hour<06 && hour>=05){
        bg="sunrise1.png"
        time=5
        timeSuffix=" AM"
    }
    else if(hour<07&&hour>=06){
        bg="sunrise2.png"
        time=6
        timeSuffix=" AM"
    }
    else if(hour<08 && hour>=07){
        bg= "sunrise3.png"
        time=7
        timeSuffix=" AM"
    }
    else if(hour<09 && hour>=08){
        bg="sunrise4.png"
        time=8
        timeSuffix=" AM"
    }
    else if(hour<010 && hour>=09){
        bg="sunrise5.png"
         time=9
        timeSuffix=" AM"
    } 
    else if(hour<11 && hour>=10){
        bg="sunrise6.png"
        time=10
        timeSuffix=" AM"

    } 
    else if(hour<12 && hour>=11){
        bg="sunset7.png" 
         time=11
        timeSuffix=" AM"
    } 
    else if(hour<13 && hour>=12){
        bg="sunset8.png"
        time=12
        timeSuffix=" PM"
    } 
    else if(hour<14 && hour>=13){
        bg="sunset9.png"
        time=1
        timeSuffix=" PM"
    } 
    else if(hour<15 && hour>=14){
        bg="sunset10.png"
        time=2
        timeSuffix=" PM"
    }
    else if(hour<16 && hour>=15){
        bg="sunset11.png"
        time=3
        timeSuffix=" PM"
    } 
    else if(hour<17 && hour>=16){
        bg="sunset12.png"
        time=4
        timeSuffix=" PM"
    }
    else{
        bg="sunset12.png"
    }

    backgroundImg= loadImage(bg)
}
