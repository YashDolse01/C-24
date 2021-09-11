const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  //Load BackGround image
  towerImage = loadImage("./assets/tower.png");
Bg = loadImage("./assets/background.gif");
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);

 //create cannon object
  cannon = new Cannon(180,110,100,50,angle);

}

function draw() {
  background(189);
  
//Use image function to add background
  image(Bg,0,0,width,height);

  Engine.update(engine);
  ground.display();
  

  
  tower.display();
  
  //Display Cannon
 cannon.display();
}



