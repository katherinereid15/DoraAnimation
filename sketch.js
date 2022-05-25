var changeInX = 0;
var right;

function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(230);
  //body
  fill(210, 180, 120);
  stroke(210, 180, 120);
  ellipse(250 + changeInX, 520, 40, 100);
  //legs
  strokeWeight(10);
  line(260 + changeInX, 550, 275 + changeInX, 600);
  line(240 + changeInX, 550, 225 + changeInX, 600);
  //head
  circle(250 + changeInX, 440, 27);
  line(250 + changeInX, 440, 250 + changeInX, 500);
  //arms
  line(267 + changeInX, 490, 295 + changeInX, 545);
  line(233 + changeInX, 490, 205 + changeInX, 545);
  //skirt
  fill(255, 100, 0);
  stroke(255, 100, 0);
  quad(230 + changeInX, 540, 270 + changeInX, 540, 280 + changeInX, 570, 220 + changeInX, 570);
  //shirt
  fill(255, 50, 150);
  stroke(255, 50, 150);
  quad(231 + changeInX, 520, 269 + changeInX, 520, 269 + changeInX, 495, 231 + changeInX, 495);
  quad(268 + changeInX, 495, 232 + changeInX, 495, 237 + changeInX, 483, 262 + changeInX, 483);
  line(267 + changeInX, 490, 276 + changeInX, 510);
  line(233 + changeInX, 490, 224 + changeInX, 510);
    if(right == true) {
      changeInX = changeInX + 1;
    }
    if(right == false) {
      changeInX = changeInX - 1;
    }
}

function mousePressed() {
  for(var i = 0; i <= 100; i++) {
    if(mouseX >= 250) {
     right = true;
    }
    else {
      right = false;
  }
  }
}


