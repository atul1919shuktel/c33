const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies

var world 
var engine
var ball
var ground
var rope
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(400,799,801,10,{isStatic:true});
  World.add(world,ground)
  
  ball = Bodies.circle(200,300,50,{restitution:0.2,density:2})
  rope = Constraint.create({bodyA:ball,pointB:{x:200,y:0},length:400,stiffness:0.5})
  World.add(world,ball);
  World.add(world,rope);
  
  b1 = new BOX(400,200);
  b2 = new BOX(400,250);
  b3 = new BOX(400,300);
  b4 = new BOX(400,350);
  b5 = new BOX(400,400);
  b6 = new BOX(400,450);
  b7 = new BOX(400,500);
  b8 = new BOX(400,550);
  b9 = new BOX(400,600);
  b10 = new BOX(400,650);
  b11 = new BOX(400,700);
  b12 = new BOX(400,750);
  b13 = new BOX(400,800);
  
}

function draw() {
  background(255);  
  Engine.update(engine)
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();

  line(ball.position.x,ball.position.y,200,0);
  circle(ball.position.x,ball.position.y,100);

  
  drawSprites();


}


function mouseDragged(){

  Matter.Body.setPosition(ball, {x:mouseX , y:mouseY})
}    

