
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState=0;
var contestantCount;
var database;
var quiz;
var question;
var contestant;
var allContestants;



function setup() {
canvas=	createCanvas(850,400);
database=firebase.database();
quiz= new Quiz();
quiz.getState();
quiz.start();

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
}


function draw() {
  background("pink");
  if(contestantCount===4){
	  gameState=1;
	  quiz.update(1);
  }
  if(gameState===1){
	  clear();
	  quiz.play();
  }
}



