// Thanks to Daniel Shiffman (the coding train), for helping me to create this
var venox = 0
var veny = 0
var venoy = 400
var venx = 0
function setup() {
  createCanvas(400,400);
  print("hello guys, its santosh")
 
}
//draw function 
function draw() {
   background(0,174,200)
  
  fill(255,255,50)
  noStroke()
  strokeWeight(10)
  rectMode(CENTER);
  rect(200,200, 100, 100)
  stroke(0,0,0)
  strokeWeight(1)
    line(0,0,399,399)
  line(399,0,0,399)
  fill(100,200,100,)
  
  circle(venox,veny,20,20)
   fill(200,100,100)
  circle(venoy,venx,20,0)
 
  venox=venox+1
  veny=veny+1
  venoy = venoy-1
  venx=venx+1
}

