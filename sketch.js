
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,mango1,mango2,boy

function preload()
{
boy=loadImage("boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

ground=new Ground(400,690,800,10);
tree=new Tree(600,400,400,600);
mango1=new Mango(550,200,20);
mango2=new Mango(625,200,50);
mango3=new Mango(515,220,30);
mango4=new Mango(700,300,60);
mango5=new Mango(505,250,50);
mango6=new Mango(650,300,40);
mango7=new Mango(610,350,60);
stone=new Stone(200,600,50);
slingshot=new Slingshot(stone.body,{x:140,y:530})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy,100,450,200,300)
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  slingshot.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);

  strokeWeight(1);
  textSize(20)
  text("Press space to play again", 50, 100);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	slingshot.fly();

}
function detectcollision(stone,mango){
	stoneBodyPosition=stone.body.position
	mangoBodyPosition=mango.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false)
	}
}

function keyPressed() {
	if(keyCode === 32){
	  Matter.Body.setPosition(stone.body, {x: 140, y: 530})
	  slingshot.attatch(stone.body)
	}
}