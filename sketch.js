
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,bob1,rope1,engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(300,100,300,50);

	bob1 = new Bob(350,310,30);

	rope1=new Rope(bob1.body,ground.body,0,0)

	bob2 = new Bob(300,310,30);

	rope2=new Rope(bob2.body,ground.body,-50,0)

	bob3 = new Bob(250,310,30);

	rope3=new Rope(bob3.body,ground.body,-100,0)

	bob4 = new Bob(400,310,30);

	rope4=new Rope(bob4.body,ground.body,50,0)

	bob5 = new Bob(450,310,30);

	rope5=new Rope(bob5.body,ground.body,100,0)
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
	   Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-255,y:255});
	 }
   }


  



