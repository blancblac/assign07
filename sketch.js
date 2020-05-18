var zoom = 1.00;
var zMin = 0.3;
var zMax = 3.00;
var sensativity = 0.005;
let boat;
let img;
let cameraLoc;
let song;
let ocean;

function preload(){
  boat =  loadModel("assets/OldBoat.obj");
 img = loadImage('assets/boattex.jpg');
 ocean = loadImage('assets/deepocean.jpg');
 soundFormats('mp3', 'ogg');
song = loadSound('assets/aqualata.mp3'); 
musik= song;
  
}
  

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  rectMode(CENTER);
  cameraLoc = createVector(0, 0, (height/2.0) / tan(PI*30.0 / 180.0));
//musik.play();
  
}

function draw() {
  background(0);
  
 colorMode(RGB); 
let camX = random(-3, 3);
let camY = random(-5, 5);
let camZ = random(-5, 5);
pointLight(100,0,10, -500, 0, 100);
pointLight(255,255,255, 500,0,10);
updateCameraLoc();
camera(cameraLoc.x, cameraLoc.y, cameraLoc.z, 0, 0, 0, 0, 1, 0);
//camera(0, 190, 80, 0, 0, 0, 0, 1, 0);
//camera(0, 190, 80, 0, camX, camY, 0, 1, 0);
  //translate(width/2,height/2);
  //fill(0);
  scale(zoom);
//pointLight(100,0,10, -500, 0, 100);
//pointLight(255,255,255,500,0,10);
  colorMode(RGB);

  
push();
//fill(255);
translate(0,400,100);
rotateX(PI/2);
rotateY(PI);
noStroke();
//texture(ve);
fill(218, 194, 159);
//plane(1000, 500, 200, 200);
box(1000,800,50);
// plane is drawn on xy plane
pop();
  

push();
//fill(255);
translate(0,0,-300);
rotateX(PI);
rotateY(PI);
//texture(ve);
//fill(118,182,196);
texture(ocean);
plane(1000, 800, 200, 200);
// plane is drawn on xy plane
pop();


push();
//fill(255);
translate(500,0,100);
rotateX(PI);
rotateY(PI/2);
//texture(img);
fill(0,26,51);
plane(800, 800, 200, 200);
// plane is drawn on xy plane
pop();

push();
//fill(255);
translate(-500,0,100);
rotateX(PI);
rotateY(PI/2);
//texture(img);
fill(0,26,51);
plane(800, 800, 200, 200);
// plane is drawn on xy plane
pop();
  
push();
noStroke();
translate(-400,-400,100);
rotateX(PI);
rotateY(PI/2);
//rotateZ(PI);
scale(5);
texture(img);
model(boat);
pop();

push();
noStroke();
translate(-280,-200,100);
rotateX(PI);
rotateY(PI/2);
rotateZ(PI/3);
//rotateZ(PI);
scale(5);
texture(img);
model(boat);
pop();
  
push();
noStroke();
translate(-160, 0,100);
rotateX(PI);
rotateY(PI/2);
rotateZ(PI/5);
//rotateZ(PI);
scale(5);
texture(img);
model(boat);
pop();
  
push();
noStroke();
translate(-40,200,100);
rotateX(PI);
rotateY(PI/7);
scale(5);
texture(img);
model(boat);
pop();

 
push();
noStroke();
translate(80,0,-200);
rotateX(PI);
rotateY(PI/7);
scale(5);
texture(img);
model(boat);
pop();
  
push();
noStroke();
translate(100,200,-100);
rotateX(PI/6);
rotateY(PI/10);
scale(5);
texture(img);
model(boat);
pop();


push();
noStroke();
translate(300,350,-100);
rotateX(PI/3);
rotateY(PI/8);
scale(5);
texture(img);
model(boat);
pop();
  

push();
noStroke();
translate(300,350,200);
rotateX(PI);
rotateY(PI/8);
scale(5);
texture(img);
model(boat);
pop();
  
push();
noStroke();
translate(-300,350,400);
rotateX(PI/3);
rotateY(PI/2);
scale(5);
texture(img);
model(boat);
pop();


push();
noStroke();
translate(10,400,0);
rotateX(PI/2);
rotateY(PI/8);
scale(5);
box(10,20);
pop();

push();
noStroke();
translate(-200,400,30);
rotateX(PI/2);
rotateY(PI/8);
scale(5);
box(10,20);
pop();
  
push();
noStroke();
//spotLight(10,30,70);
ambientLight(10,30,10);
translate(-400,400,100);
rotateX(PI/2);
rotateY(PI/6);
scale(5);
box(10,20);
pop();

}
function mouseWheel(event) {
  zoom += sensativity * event.delta;
  zoom = constrain(zoom, zMin, zMax);
  //uncomment to block page scrolling
  return false;
}

function updateCameraLoc() {
  if (keyIsDown(LEFT_ARROW)) cameraLoc.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) cameraLoc.x += 5;
  if (keyIsDown(UP_ARROW)) cameraLoc.z -= 5;
  if (keyIsDown(DOWN_ARROW)) cameraLoc.z += 5;
}
