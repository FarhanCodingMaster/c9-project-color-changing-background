var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,10,10);

}

function draw() 
{
   background("red");


  if (keyIsDown(RIGHT_ARROW)) 
  {
   background ("blue");
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
   background ("green");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
   background("purple");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
   background("yellow");
  }

  drawSprites();
}




