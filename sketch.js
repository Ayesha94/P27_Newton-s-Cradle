
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	var bobDiameter=40;
	var bobX=width/2
	var bobY=400;
	//Create the Bodies Here.
	roof= new Roof(width/2, 30, width-100, 20)
	bobObject1= new Bob(bobX-bobDiameter*2, bobY, bobDiameter/2)
	bobObject2= new Bob(bobX-bobDiameter, bobY, bobDiameter/2)
	bobObject3=new Bob(bobX, bobY, bobDiameter/2);
	bobObject4= new Bob(bobX+bobDiameter, bobY, bobDiameter/2)
	bobObject5= new Bob(bobX+bobDiameter*2, bobY, bobDiameter/2)
	
	rope1= new Rope(bobObject1.body, roof.body, -bobDiameter*2, 0)
	rope2= new Rope(bobObject2.body, roof.body, -bobDiameter*1, 0)
	
	rope3= new Rope(bobObject3.body, roof.body, 0, 0)
	rope4= new Rope(bobObject4.body, roof.body, bobDiameter*1, 0)
	
	rope5= new Rope(bobObject5.body, roof.body, bobDiameter*2, 0)
	
}


function draw() {
	Engine.update(engine);
  //rectMode(CENTER);
  background(0);
	fill("white")
	textSize(20)
	text("Press left arrow key to move left bob towards left", 150, height-50)
roof.display();
bobObject1.display();
 bobObject2.display(); 
bobObject3.display();
bobObject4.display();
bobObject5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  //drawSprites();
 
}
function keyPressed()
{
	if(keyCode === LEFT_ARROW)
	{
		console.log("Hey")
		Body.applyForce(bobObject1.body, bobObject1.position, {x:-50, y:-10})
	}
}


