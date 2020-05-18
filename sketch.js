var on = false;
var angle = 0;
let s ='Breath In and Out While Your Mouse is Moving';
let sound;
var drops = [];



function preload() {
  soundFormats('m4a');
  sound = loadSound('BREATH.m4a');
}

function setup() {
  createCanvas(800, 700);
    noStroke();
    //sound.loop();
  for (let i=0; i < 500; i ++){
    drops[i] = new Rain(random(width),random(height), random);
  }
}
function draw() {
  if (on){
  background(240, 150, 150);
    for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
}
  frameRate(30);
  stroke(150, 250, 150);
    strokeWeight(2);
  let a = (mouseX / width) * 180;
  theta = radians(a);
  translate(width/2,height);
  line(0,0,0,-160);
  translate(0,-160);
  branch(160);
  sound.stop();
  }else{
    background(0); //Background black
    textSize(30);
  fill(250); //text color
  textFont("futura");
  text(s,70,90);
    text(s,70,620);
    noFill();
  let c = map(mouseX, 0, width, 0, 200);
  let d = map(mouseX, 0, width, 20, 350);
  fill(200, c, 145);
  ellipse(width/2, height/2, d, d);
  }
  fill(255, 0, 255);
}
function branch(h) {
  h *= 0.66;
  if (h > 2) {
    push();  
    rotate(theta);   
    line(0, 0, 0, -h);  
    translate(0, -h); 
    branch(h);       
    pop();     

    push();
    rotate(-theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();
  }
}
function mousePressed() {
 on = !on
}
class Rain{
  constructor(xPos, yPos, windSpeed){
    this.x = xPos;
    this.y = yPos;
    this.xVel = windSpeed;
    this.yVel = 10;
  }
  fall(){
    this.xVel = map(mouseX, 0, width, -5,5);
    this.x += this.xVel;
    this.y += this.yVel;
  }
  show(){
    if(this.y > height){
      this.y = 0;
      this.x = random(width);
    }
    push();
    stroke(100, 100, 250);
    strokeWeight(2);
    line(this.x, this.y, this.x - 1* this.xVel, this.y - 1*this.yVel);
    pop();
  }
}