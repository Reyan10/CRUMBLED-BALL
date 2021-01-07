const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
	
var paperObject

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paperObject = new Paper(100, 100, 40);
    
	box1 = new Box(650,640,200,20);
    box2 = new Box(550,600,20,100)
	box3 = new Box(750,600,20,100)

     ground = new Ground(400, 670, 800, 20)


	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   
   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:55,y:-80});
   // packageBody.restitution=0.8;
	 
	}
   }
   


