
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(600,680,1200,20);
	tree = new Tree(900,419,100,500);
	mango1 = new Mango(900,400,45);
	mango2 = new Mango(820,250,45);
	mango3 = new Mango(1000,300,50);
	mango4 = new Mango(970,370,30);
	mango5 = new Mango(1050,350,25);
	mango6 = new Mango(800,400,35);
	mango7 = new Mango(930,250,40);
	mango8 = new Mango(870,300,40);
	mango9 = new Mango(750,350,35);
	mango10 = new Mango(820,340,40);
	stone = new Stone(140,530,40);

	launcher = new Launcher(stone.body,{x:140,y:520});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  textSize(20)
  text("Press Space to get another chance to Play!",50,50)
  

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

 
  imageMode (CENTER)
  image(boyImg,200,height-100,200,300);
  stone.display();
  launcher.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);


  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body, {x: 235 , y: 420});
        launcher.attach(stone.body);
    }
}


function detectCollision(Lstone,Lmango){
mpos = Lmango.body.position
spos = Lstone.body.position

var distance = dist(spos.x,spos.y,mpos.x,mpos.y)
	if(distance<=Lmango.diameter+Lstone.diameter){
		Matter.Body.setStatic(Lmango.body,false);
	}
}

