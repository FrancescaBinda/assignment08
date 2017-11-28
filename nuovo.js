var mySong;
function preload() {
    mySong = loadSound('Mars.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255,0,0);
}

function draw() {
  if (mouseX <= width/2) {
    if (mySong.isPlaying() == false) {
      mySong.play();
    }
    background(0,255,0)
  } else {
    mySong.pause();
    background(255,0,0)
  }
}