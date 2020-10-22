//Create variables here
var dog,happyDog,dogSitting;
var database;

var foodS,foodStock;
function preload()
{
  //load images here
  dogSitting=loadImage("Dog.png");
  happyDog=loadImage("happyDog.png");
  
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(400,350)
  dog.addImage("dog",dogSitting)
  dog.addImage("DOG",happyDog)
  dog.scale=0.3

  database=firebase.database()
  foodStock=database.ref('food');
  foodStock.on("value",readStock);

}


function draw() {  
background(255,255,255);
text(foodS,200,50)
  drawSprites();
  //add styles here

}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
database.ref( '/').update({
  food:x
}) 


}

function keyPressed(){
  if(keyDown(UP_ARROW)){
    writeStock(foodS)
    dog.changeImage("DOG",happyDog)
  }
}