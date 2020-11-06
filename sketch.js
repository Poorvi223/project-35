var dog,happydog,database,foodS,foodStock;

function preload()
{
  dogImage = loadImage("dogimg.png");
  happydogImage = loadImage("dogimg1.png");
}

function setup() {
	createCanvas(500,500);
  database = firebase.database()

  dog = createSprite(250,250,10,10);
  dog.addImage(dogImage);

  foodStock = database.ref("food");
  foodStock.on("value",readstock);
}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogimg1);
  }
  drawSprites();
  textSize(30);
  fill("white");
  text("foodStock",450,50);
  text("Remaining Food: "+foodS,150,200);
  text("Press UP_ARROW Key to Feed ",110,30);
}
function readStock(data){
  foodS = data.val();
}

function writeStock(){
  
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref("/").update({
    Food:x
  })
}


