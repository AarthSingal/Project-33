var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var score;
var Particle = null;
var turn;

var divisionHeight=300;
//var score =0;

var gameState , PLAY , END;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    console.log("i am in");
  }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    score =0;
    turn =0;

    gameState = 0;
    PLAY = 0;
    END = 1;
    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
  

   if(Particle !== null && turn < 5){
    Particle.display();
    if(Particle.body.position.y > 730){
      if(Particle.body.position.x>560 || Particle.body.position.x<245){
        score+=300;
        turn++;
        
      }
      if(Particle.body.position.x >245 && Particle.body.position.x<330 || Particle.body.position.x <560 && Particle.body.position.x > 485){
        score+=400;
        turn++;
        
      }
      if(Particle.body.position.x>330 && Particle.body.position.x <485 ){
        score+=500;
        turn++;
        
      }
      Particle = null;
    }
    
   }
   if(turn>=5){
    textSize(100);
    text("GAME OVER",50,300);
    gameState = END;
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   textSize(20);
   text("Score : "+score,50,20);
   //text(mouseX+" : "+mouseY,200,200);

   text("300",750,535);
   text("300",670,535);
   text("300",585,535);
   text("300",25,535);
   text("300",100,535);
   text("300",180,535);
   text("400",260,535);
   text("400",500,535);
   text("500",340,535);
   text("500",425,535);

   //mousePressed();
}
function mousePressed(){
  if(gameState === PLAY){
    
    Particle = new particle(mouseX, 10,10);
    console.log("I am in mouse Pressed");
  }
}