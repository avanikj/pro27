
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3, bob4,bob5, roofObj
var rope1,rope2,rope3, rope4,rope5;
var world;
/*
function preload()
{
	
}
*/
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObj=new roof(width/2,height/4,width/4,20);

	bobDia=40;

	startBobPosX=width/2;
	startBobPosY=height/2;

	bob1 = new bob(startBobPosX-(bobDia*2),startBobPosY,bobDia); // starting position 2 diameter to the left(so subtrated) of ref bob

	bob2 = new bob (startBobPosY-(bobDia*1),startBobPosX,bobDia); //starting position 1 diameter to the left of ref bob  

	bob3 = new bob(startBobPosX,startBobPosY,bobDia); // ref bob

	bob4 = new bob(startBobPosY-(bobDia*1),startBobPosX,bobDia); //starting position 1 diameter to the right of ref bob(so add)

	bob5 = new bob(startBobPosX-(bobDia*2,startBobPosY,bobDia))// starting position 2 diameter to the right(so add) of ref bob

	

	

	rope1 = new rope(bob1.body,roofObj.body,-bobDia*2, 0) // offsetX is 2Dia to the left from ref rope(so -ve)

	rope2 = new rope(bob2.body,roofObj.body,-bobDia*1,0) // offsetX is 1Dia to the left from ref rope(so -ve)

	rope3 = new rope(bob3.body,roofObj.body,0, 0)  //ref rope

	rope4 = new rope(bob4.body,roofObj.body,-bobDia*1)// offsetX is 1Dia to the right from ref rope(so +ve)

	rope5 = new rope(bob5.body,roofObj.body,-bobDia*2)// offsetX is 2Dia to the right from ref rope(so +ve)
	
	Engine.run(engine);
}


function draw() {
	background('yellow');
	rectMode(CENTER);
	//roofObj.display();
  
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()
  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}



