var thickness;
var bullet,wall;

var speed,thickness,weight;




function setup() {
  createCanvas(1600,400);

  speed= random(223,321)
  thickness= random(22,83)
  weight=random(30,52)


  bullet=createSprite(150,200,50,30)
  bullet.velocityX=speed;

  
  wall=createSprite(1200, 200,thickness, height/2);
  wall.shapeColor="white"


}

function draw() {
  background("black"); 
  
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor="red";
		
	}

	

	if(damage<10)
	{
		wall.shapeColor="green";
	}
	
  }

  
  drawSprites();
}

function hasCollided(lbullet , lwall){
    
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
      
        return true
    }
    return false
}