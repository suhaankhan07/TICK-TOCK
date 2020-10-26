var hr, min, sc;
var hrAngle,minAngle, scAngle;

function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
}




function draw() {
  background(0,0,0);  
  translate(200,200);
  rotate(-90);
  
  hr = hour();
  min = minute();
  sc = second();


  scAngle = map(sc,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360)

 //second
  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

//minute
 push();
 rotate(minAngle);
 stroke("blue");
 strokeWeight(10);
 line(0,0,100,0);
 pop();

//hour
push();
rotate(hrAngle);
stroke("green");
strokeWeight(8);
line(0,0,75,0);
pop();

//arcs
//second
strokeWeight(8);
noFill();
stroke("red");
arc(0,0,340,340,0,scAngle);

//minute
stroke("blue");
arc(0,0,320,320,0,minAngle);

//hour
stroke("green");
arc(0,0,300,300,0,hrAngle);


}