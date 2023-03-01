let x 
let speedX 
let y
let speedY

function setup() {
  createCanvas(400, 400);
  x = 20
  speedX = 2
  y = 20
  speedY = 5
}

function draw() {
  background(220, 100, 0);
  x = x + speedX
  y = y + speedY
  eggHead(x, y, .25);

  if (x >= 330 || x <= -20){
    speedX = speedX * -1
  }

  if (y >= 310 || y <= -10){
    speedY = speedY * -1
  }
  

  
}

function eggHead (x, y, s){
push()
  translate(x, y)
  scale(s)
  ellipse(200, 200, 250, 350)
  line(200, 25, 200, 40)
  line(200, 40, 190, 50)
  line(190, 50, 210, 60)
  line(210, 60, 200, 80)
  line(200, 80, 220, 100)
pop()
}
