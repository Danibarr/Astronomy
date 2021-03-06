//This sketch shows an object orbiting the sun in an ellipse
//whilst showing the changes of the radii from the focal points
//By Daniella

//The object will be Pluto with eccentricity, e = 0.23, the sun will be one foci

var posX = 0;
var posY = 0;
//semi-major axis of ellipse a = 200
//So e*a = 46; since r+r'=2a, form triangle with sides ea,
//semi-minor axis, b, and r' as hypotenuse when r=r', we have
//b = sqrt((200^2)-(46^2))=194
var radiusX=200;
var radiusY=194;
var theta = 0;
var orbitspeed;
var distance = 150;


function setup() {


  createCanvas(600, 600);
    centerx = width/2;
    centery = height/2;

}

function draw() {

    background (260);

  {
  //With e = 0.23, and semi-major axis of ellipse a = 200 from center (300,300)
  //We have a*e = 46, Ra= a(1+e)=246, Rp= a(1-e)=154
  //Drawing the sun at one foci
  fill ('yellow');
  ellipse(254, 300, 30, 30);
  fill (0);
  textSize(14);
  textStyle(BOLD);
  text("Sun", 240, 280);
  //Drawing the other foci
  fill(90);
  ellipse (346, 300, 2, 2);
  //Drawing center of ellipse i.e. midpoint of major axis
  fill (0);
  ellipse(300, 300, 3, 3);

  }

{
 push();
  orbitspeed = 20/(Math.pow(distance,1.5));
  theta += orbitspeed;
  //for elliptical orbit, x=rcos(theta) and y=rsin(theta)
  posX = ((radiusX * cos(theta))^2/(2^2));
  posY = ((radiusY * sin(theta))^2/(1^2));
  translate(centerx,centery);
  rotate(theta);
  translate(centerx,centery);
pop();

push();

  translate(centerx-46,centery);
  line(posX ,posY, 0, 0);

pop ();

push ();

 fill ('red');
 translate (centerx-46, centery);
 ellipse(posX, posY, 20, 20);
 //Distance between the two foci is 2a*e = 92
 line(92, 0, posX, posY);
 fill (0);
 textSize(14);
 textStyle(BOLD);
 text("Pluto", posX+15, posY+15);

pop();


push ();
translate(0,0);
line(54, 300, 446, 300);
line(300, 106, 300, 494);
pop ();

push ();
fill (0);
textSize(14);
textStyle(NORMAL);
text ("aphelion", 150, 315);
pop ();

push ();
fill(0);
textSize(14);
textStyle(NORMAL);
text ("perihelion", 370, 315);
pop ();

push ();
fill(0);
textSize(14);
textStyle(NORMAL);
text("semi-minor", 270, 200);
text("axis", 285, 215);
pop ();

push();
fill(0);
textSize(18);
textStyle(BOLD);
text("Pluto's Orbit with Eccentricity e = 0.23", 125, 30);
pop ();

}

}
