var helicopterIMG, helicopter1,helicopter2, helicopter3, helicopter4;
var  package,packageIMG;
var packageBody,ground;
var object1;
var object2;
var object3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	package=createSprite(width/2, 200, 10, 10);
	package.addImage(packageIMG)
	package.visible= false;
	package.scale=0.3;

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6;

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255);

	object1=createSprite(width/2,652,142,16);
	object1.shapeColor=color("red");

	object2=createSprite(320,602,18,116);
     object2.shapeColor=color("red");

	 object3=createSprite(480,602,18,116);
     object3.shapeColor=color("red");
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 1 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 object1 = Bodies.rectangle(width/2, 450, 1, {isStatic: true} );
	 World.add(world, object1);

	 object2 = Bodies.rectangle(300, 580, 1, {isStatic: true} );
	 World.add(world, object2);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageBody = Bodies.circle(width/2 , 200 , 1 , {restitution:0.6, isStatic:false});
	World.add(world, packageBody);
	package.visible = true;
	if(packageBody.isTouching(ground)){
		packageBody.isStatic= true;
		friction = 1;
	}
	
	
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



