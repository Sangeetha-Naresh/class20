var fixed;
var moving;


function setup() 
{

  createCanvas(800,400);

  fixed=createSprite(200,200,40,70)
  moving=createSprite(600,200,70,40)

  fixed.shapeColor="green";
  moving.shapeColor="green";
}

function draw() 
{
  background("yellow");  

  moving.x=World.mouseX;
  moving.y=World.mouseY;

  console.log(moving.x-fixed.x);

  if(moving.x-fixed.x <= fixed.width/2+moving.width/2  &&
     fixed.x-moving.x<= fixed.width/2+moving.width/2    &&
     moving.y-fixed.y <= fixed.height/2+moving.height/2  &&
     fixed.y-moving.y <= fixed.height/2+moving.height/2 )   
  {
    fixed.shapeColor="red";
    moving.shapeColor="red";
  }
  else
  {
    fixed.shapeColor="green";
    moving.shapeColor="green";
  }
 /* if(moving.x-fixed.x <= fixed.width/2+moving.width/2 )
  {
    fixed.velocityX=-1;
  }
  if(fixed.x-moving.x<= fixed.width/2+moving.width/2    )
  {
    fixed.velocityX=1;
  }
  if( moving.y-fixed.y <= fixed.height/2+moving.height/2 )
  {
    fixed.velocityY=-1;
  }
  if (fixed.y-moving.y <= fixed.height/2+moving.height/2 )
  {
    fixed.velocityY=1;
  }*/

  drawSprites();
}