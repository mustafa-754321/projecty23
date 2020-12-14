var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxleft;
var boxright;
var boxbottom;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 packageBody = Bodies.circle(width/2 , 200 , 5, {resitution:0.6,isStatic:true});

	 World.add(world, packageBody);
	 
	

	boxbottom = new Box (width/2,groundSprite.y-15,200,20);

boxleft = new Box (boxbottom.body.position.x-90,boxbottom.body.position.y-60,20,100);

boxright = new Box (boxbottom.body.position.x+90,boxbottom.body.position.y-60,20,100);

//Engine.run(engine);
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
  boxbottom.display();
  boxleft.display();
  boxright.display();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
     restitution(packageBody,0.5);

 }

    
  }




