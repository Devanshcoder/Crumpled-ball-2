
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var ground;
function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground=new Ground(500,580,1000,20);
	box1=new Box(800,560,200,20);
	box2=new Box2(700,480,20,150);
	box3=new Box2(900,480,20,150);
	ball=new Ball(100,100,40);
}


function draw() {
	Engine.update(engine);
  background(255);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-55});
	}
}

