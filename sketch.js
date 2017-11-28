var valueR= 0;
var valueG= 0;
var valueB= 0;
var valuer= 255;
var valueg= 255;
var valueb= 255;
var valueStroke;
var song;
var button;
var volhistory=[];
var canzone=false;
var songs;


//Music: https://www.bensound.com

function preload(){
  
   songs = [
        {
            song: loadSound("bensound-cute.mp3"),
           
        },
        {
            song: loadSound("bensound-energy.mp3"),
          
        },
        {
            song: loadSound("bensound-jazzyfrenchy.mp3"),
        },
    ];
  angleMode(DEGREES);
}

function setup() {

createCanvas(windowWidth,windowHeight);
 
  amp = new p5.Amplitude();
    
   numSong = 0;
  songs[numSong].song.play();
}

function draw() {
  background(valueR,valueG,valueB);
    
fill(valuer,valueg,valueb);
textSize(30);
text("shake the device",20,50);
textSize(15);
text("canzone"+" "+numSong,20,100); 
  var vol = amp.getLevel();

  volhistory.push(vol);
  stroke(valuer,valueg,valueb);
  noFill();

  translate(width/2,height/2);
  beginShape();
  for(var i=0; i<360; i++){
    var r=map(volhistory[i], 0, 1, 50,100);
    var x= r *cos(i);
    var y= r *sin(i);
    
    vertex(x,y);
  }
  endShape();
    
     beginShape();
  for(var i=0; i<360; i++){
    var r=map(volhistory[i], 0, 1, 100,200);
    var x= r *cos(i);
    var y= r *sin(i);
    
    vertex(x,y);
  }
  endShape();
    
    beginShape();
  for(var i=0; i<360; i++){
    var r=map(volhistory[i], 0, 1, 180,width);
    var x= r *cos(i);
    var y= r *sin(i);
    
    vertex(x,y);
  }
  endShape();

    
  
  
  if(volhistory.length>360) {
    volhistory.splice(0,1);
  }

    }
    


function deviceShaken(){
//function mouseClicked(){

    songs[numSong].song.stop();
    numSong = numSong + 1;
    
if (numSong >= songs.length) {
            numSong = 0;
        }
    songs[numSong].song.play();
}

function deviceMoved() {

    
    if(valueR<=255){
        valueR++;
    }
    
     if(valueG<=117){
        valueG++;
    }
    
     if(valueB<=111){
        valueB++;
    }
    
    if(valuer>=177){
        valuer--;
    }
    
     if(valueg>=33){
        valueg--;
    }
    
     if(valueb>=41){
        valueb--;
    }
    
}



