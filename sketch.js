const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;


var bomb;
var ground1,ground2,ground3;






function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;

  hitman1=new Hitman1(300+60,275,30,40);

  ground1=new Ground(390+60,310,270,12);

  ground2=new Ground(800,225,210,12);

  ground3=new Ground(500,390,1000,20);

  hitman1=new Hitman1(450,280,30,40);
  hitman2=new Hitman2(800,200,30,40);

  bomb=new Bomb(200,200,20);

  //bomb=new bomb(200,200,20);

  bomb =new Bomb(200,200,20);
  sling=new SlingShot(bomb.body,{x:180,y:190})
  





  

}

function draw() {
  background(1);  
  drawSprites();

  ground1.display();
  ground2.display();
  ground3.display();

  hitman1.display();
  hitman2.display();
  bomb.display();





}


function mouseDragged()
{
  Matter.Body.setPosition(bomb.body,{x:mouseX,y:mouseY});
}


function mouseReleased()
{
   sling.fly();
}


function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(bomb.body,{x:100,y:200});
    sling.attacher(bomb.body);
  }
}
