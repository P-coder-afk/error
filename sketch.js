var mario;
var lotus;
var int1,int2,int3,int4,int5;
var b1,b2,b3,b4,b5,b6,b7;
var m1,m2,m3;
var bul1,bul2;
var brige;
var story,instructions;
var bee;
var score=0;
var mask=0;
var food=0;
var bird;
var shoot;
var city;
var virus;
var a,a1;
var poster,poster2;
var platform;
var selectframe;
var s1,s2;
var beggar1,beggar2;
var list;
var platformGroup,obstacleGroup,shootGroup,virusGroup;
var marioAnimation1,mariostandAnimation,obstacleAnimation,wallAnimation,groundAnimation,beeAnimation,t1Animation,t2Animation,t3Animation,t4Animation,
manh1Animation,manh2Animation,manh3Animation,manh4Animation,carAnimation,gamelogoAnimation,gameOverAnimation,
manh5Animation,manAnimation,birdAnimation,s1Animation,metro1Animation,metro2Animation,metro3Animation,covidAnimation,selectframeAnimation,listAnimation,
cityAnimation,lightpostAnimation,busAnimation,bus2Animation,airportAnimation,airport1Animation,platformAnimation,s1Animation,s2Animation,airportliAnimation,
car3Animation,vk1Animation,vk2Animation,vk3Animation,vk4Animation,vk5Animation,maskAnimation,mask2Animation,shootAnimation,posterAnimation,burgerAnimation,burritoAnimation,
croissantAnimation,hotdogAnimation,cookieAnimation,donutAnimation,restaurantAnimation,beggar1Animation1,beggar2Animation1,beggar1Animation2,beggar2Animation2,
shootingAnimation,vAnimation,antivirusAnimation,lotusAnimation,bAnimation,rainAnimation,storyAnimation,instructionsAnimation,railtracksAnimation,playbtnAnimation,storybtnAnimation,insbtnAnimation;
var man,manh1,manh2,manh3,manh4,manh5;
var saveSound,buttonSound,enterSound,pageSound,trainhSound;
var BEGIN=1; 
var PLAY=2;
var REPLAY=3;
var railtracks;
var gameState=BEGIN;
var vk1,vk2,vk3,vk4,vk5,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13;
var mv1,mv2,mv3,mv4;
var av1,av2,av3,av4,av5,av6,av7;
var burger,burrito,croissant,hotdog,cookie,donut;
var r1,r2,r3;
var bus,bus2,car3;
var mask1,mask2,mask3,mask4,mask5,mask6,mask7;
var antivirus;
var car;
var playbtn,insbtn,storybtn;
var gamelogo;
var airportlight;
var p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27;
var restaurant;
function preload()
{
//loading foods animation.
burgerAnimation=loadAnimation("burger.png");
burritoAnimation=loadAnimation("burrito.png");
croissantAnimation=loadAnimation("croissant.png");
hotdogAnimation=loadAnimation("hotdog.png");
donutAnimation=loadAnimation("donut.png");
cookieAnimation=loadAnimation("cookie.png");

//loading beggar anime.
beggar1Animation1=loadAnimation("beggar1.1.png");
beggar1Animation2=loadAnimation("beggar1.2.png");
beggar2Animation1=loadAnimation("beggar2.1.png");
beggar2Animation2=loadAnimation("beggar2.2.jpg");

  //loading player animation.
  marioAnimation1=loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png","run6.png","run7.png","run8.png");
 //loading obstacles and ground.
  obstacleAnimation=loadAnimation("flight.png");
  groundAnimation=loadAnimation("road.png.jpg");  
 //loading building animations.
  b1Animation=loadAnimation("building1.png.png");
  b2Animation=loadAnimation("building2.png.png");
  b3Animation=loadAnimation("building3.png.png");
  b4Animation=loadAnimation("building4.png.png");
  b5Animation=loadAnimation("building5.png.png");
  b6Animation=loadAnimation("building6.png");
  b7Animation=loadAnimation("building7.png");
  airportAnimation=loadAnimation("airport.png");
  airport1Animation=loadAnimation("airport1.png");
 //loading tree animations.
  t1Animation=loadAnimation("tree1.png.png");
  t2Animation=loadAnimation("tree2.png.png");
  t3Animation=loadAnimation("tree3.png.png");
  t4Animation=loadAnimation("tree4.png.png");
  bAnimation=loadAnimation("bush.png.png");
  //loading characters animation.
  manh1Animation=loadAnimation("manh1.png");
  manh2Animation=loadAnimation("manh2.png");
  manh3Animation=loadAnimation("manh3.png");
  manh4Animation=loadAnimation("manh4.png");
  manh5Animation=loadAnimation("manh5.png");
  manAnimation=loadAnimation("man.png");
p1Animation=loadAnimation("p1.png");
p2Animation=loadAnimation("p2.png");
p3Animation=loadAnimation("p3.png");
p4Animation=loadAnimation("p4.png");
p5Animation=loadAnimation("p5.png");
p6Animation=loadAnimation("p6.png");
p7Animation=loadAnimation("p7.png");
p8Animation=loadAnimation("p8.png");
p9Animation=loadAnimation("p9.png");
p10Animation=loadAnimation("p10.png");
p11Animation=loadAnimation("p11.png");
p12Animation=loadAnimation("p12.png");
p13Animation=loadAnimation("p13.png");
p14Animation=loadAnimation("p14.png");
p15Animation=loadAnimation("p15.png");
p16Animation=loadAnimation("p16.png");
p17Animation=loadAnimation("p17.png");
p18Animation=loadAnimation("p18.png");
p19Animation=loadAnimation("p19.png");
p20Animation=loadAnimation("p20.png");
p21Animation=loadAnimation("p21.png");
p22Animation=loadAnimation("p22.png");
p23Animation=loadAnimation("p23.png");
p24Animation=loadAnimation("p24.png");
p25Animation=loadAnimation("p25.png");
p26Animation=loadAnimation("p26.png");
p27Animation=loadAnimation("p27.png");

//loading transport animation.
  busAnimation=loadAnimation("bus.png");
bus2Animation=loadAnimation("bus2.png");
car3Animation=loadAnimation("car3.png");
metro1Animation=loadAnimation("metro.png");
metro2Animation=loadAnimation("metro1.png");
metro3Animation=loadAnimation("metro2.png");
carAnimation=loadAnimation("car.png");
//loading virus king animation.
vk1Animation=loadAnimation("vk1.png");
vk2Animation=loadAnimation("vk2.png");
vk3Animation=loadAnimation("vk3.png");
vk4Animation=loadAnimation("vk4.png");
vk5Animation=loadAnimation("vk5.png");
//loading game objects.
maskAnimation=loadAnimation("mask.png");
shootAnimation=loadAnimation("shot1.png.png","shot2.png.png");
shootingAnimationr=loadAnimation("shooting.png");
mariostandAnimation=loadAnimation("run1.png");
brigeAnimation=loadAnimation("brige.png");
vAnimation=loadAnimation("virus.png");
antivirusAnimation=loadAnimation("antivirus.png.png");
lotusAnimation=loadAnimation("lotus.png");
storyAnimation=loadAnimation("story.png");
instructionsAnimation=loadAnimation("instructions.png");
platformAnimation=loadAnimation("platform.png");
railtracksAnimation=loadAnimation("railwaytracks.png");
s1Animation=loadAnimation("railwaysymbol.jpg");
s2Animation=loadAnimation("brigesymbol.png");
selectframeAnimation=loadAnimation("select frame.png");
listAnimation=loadAnimation("list.png");
birdAnimation=loadAnimation("crow.png");
cityAnimation=loadAnimation("city.png");
lightpostAnimation=loadAnimation("lightpost.png"); 
airportliAnimation=loadAnimation("airportlight1.png","airportlight2.png");
gameOverAnimation=loadAnimation("gameOver.png");
//loading sounds.
saveSound=loadSound("mixkit-fairy-bell-bless-864.wav");
pointsSound=loadSound("mixkit-melodic-game-over-956.wav");
gameOverSound=loadSound("mixkit-wrong-answer-fail-notification-946.wav");
shootSound=loadSound("mixkit-short-laser-gun-shot-1670.wav");
pageSound=loadSound("mixkit-ominous-drums-appear-228.wav");
buttonSound=loadSound("mixkit-arcade-game-jump-coin-216.wav");
enterSound=loadSound("mixkit-quick-win-video-game-notification-269.wav");
backgroundSound=loadSound("trailer-cinematic-fast-action-percussion-1-minute-SBA-300515959-preview.mp3");
trainhSound=loadSound("mixkit-distant-train-horn-1654.wav");
//loading background.
covidAnimation=loadImage("bg1.png");

//loading restaurant anime.
restaurantAnimation=loadAnimation("restaurant.png");

//loading poster.
posterAnimation=loadAnimation("poster.jpg");

//loading all buttons.
playbtnAnimation=loadAnimation("playbtn.png");
insbtnAnimation=loadAnimation("insbtn.png");
storybtnAnimation=loadAnimation("storybtn.png");

//loading anime of game logo.
gamelogoAnimation=loadAnimation("logo.png");

}

function setup() {
  //Creating canvas equal to width and height of display.
  createCanvas(displayWidth,668);
  var countDistanceX = 0;
  var platform;
  
  


//backgrounds.
  
for (i =300; i<45000; i=i+500){
  city=createSprite(i,480);
  city.addAnimation("city",cityAnimation);
  city.scale=1;
}

//creating tracks for metros.
for (i =340; i<45000; i=i+500){
  railtracks=createSprite(i,590);
  railtracks.addAnimation("railtracks",railtracksAnimation);
  railtracks.scale=2;

}

//creating all road symbols.
s1=createSprite(27050,570);
s1.addAnimation("s1",s1Animation);
s1.scale=0.2;

s2=createSprite(36500,650);
s2.addAnimation("s2",s2Animation);
s2.scale=0.25;


//creating metro.
m1=createSprite(400,650);
m1.addAnimation("m1",metro1Animation);

m2=createSprite(31000,460);
m2.addAnimation("m2",metro2Animation);


m3=createSprite(20000,435);
m3.addAnimation("m3",metro3Animation);


  
 
 //creating a group.
 shootGroup= createGroup();
platformGroup= createGroup();
obstacleGroup=createGroup();
//adding platforms to stand for mario.
for (var i=0;i<250;i++)
 {
   frameRate(30);
    platform = new Platform(countDistanceX);
    platformGroup.add(platform.spt);//Adding each new platform to platformGroup.
    countDistanceX = countDistanceX + platform.spt.width ; //counting x location of next platform to be build.
    //adding wall to the game.
    if(i%3===0)
    {
    
    platformGroup.add(platform.spt);
    
    }
    //adding obstacles to the game
    if(i%25==0)
    {
    obstacle=new Obstacle(countDistanceX);
     //adding obstacles to the game.
 obstacleGroup.add(obstacle.spt);
 
    }
  

    
  }

  //creating beggar.
  beggar1=createSprite(29000,545);
    beggar1.addAnimation("beggar1",beggar1Animation1);
  beggar1.scale=0.4;



//creating airport.
a=createSprite(47000,480);
a.addAnimation("a",airportAnimation);

a1=createSprite(a.x+900,520);
a1.addAnimation("a1",airport1Animation);

//creating metro platform.
platform=createSprite(31000,470);
platform.addAnimation("platform",platformAnimation);
platform.scale=1.3;

//creating light animation of airport.
for (i =35000; i<55000; i=i+200){
airportlight=createSprite(i,560);
airportlight.addAnimation("airportlight",airportliAnimation);
airportlight.scale=0.8;
}
//buildings.

  b1=createSprite(1003,430);
  b1.addAnimation("b1",b1Animation);
  b1.scale=1;

  b2=createSprite(3003,423);
  b2.addAnimation("b2",b2Animation);
  b2.scale=0.9;

  b3=createSprite(5003,500);
  b3.addAnimation("b3",b3Animation);
  b3.scale=0.9;

  b4=createSprite(7003,500);
  b4.addAnimation("b4",b4Animation);
  b4.scale=0.9;

  b5=createSprite(9003,500);
  b5.addAnimation("b5",b5Animation);
  b5.scale=0.9;

  b6=createSprite(10003,420);
  b6.addAnimation("b6",b6Animation);
  b6.scale=0.9;

  b7=createSprite(18003,450);
  b7.addAnimation("b7",b7Animation);
  b7.scale=0.9;

//characters.

  man=createSprite(10000,550);
  man.addAnimation("man",manAnimation);
  man.scale=0.5;

  manh1=createSprite(20500,570);
  manh1.addAnimation("manh1",manh1Animation);
  manh1.scale=0.4;

  manh2=createSprite(20900,570);
  manh2.addAnimation("manh2",manh2Animation);
  manh2.scale=0.4;

  manh3=createSprite(30000,570);
  manh3.addAnimation("manh3",manh3Animation);
  manh3.scale=0.4;

  manh4=createSprite(40000,570);
  manh4.addAnimation("manh4",manh4Animation);
  manh4.scale=0.4;

  manh5=createSprite(42000,570);
  manh5.addAnimation("manh5",manh5Animation);
  manh5.scale=0.4;

  //lightposts.

  for (var i =300; i<45000; i=i+500){
    lightpost=createSprite(i,450);
    lightpost.addAnimation("lightpost",lightpostAnimation);
    lightpost.scale=0.5;
  }

  //vechiles.
  
bus=createSprite(300,540);
bus.addAnimation("bus",busAnimation);
bus.scale=0.8;

   
bus2=createSprite(10000,540);
bus2.addAnimation("bus2",bus2Animation);
bus2.scale=1.2;


car3=createSprite(20000,560);
car3.addAnimation("car3",car3Animation);
car3.scale=0.7;


//adding new player.
  
  mario = new Player();

  //creating brige.

  brige=createSprite(38000,560);
  brige.addAnimation("brige",brigeAnimation);
  brige.scale=1;
  brige.setCollider("circle",0,50,200);

  //king covid viruses.
 
  vk5=createSprite(7003,490);
  vk5.addAnimation("vk5",vk5Animation);
  vk5.scale=0.4;
  vk5.visible=false;

  vk4=createSprite(10003,500);
  vk4.addAnimation("vk4",vk4Animation);
  vk4.scale=0.4;
  vk4.visible=false;

  vk3=createSprite(38000,500);
  vk3.addAnimation("vk3",vk3Animation);
  vk3.scale=0.4;
  vk3.visible=false;

  vk2=createSprite(39000,500);
  vk2.addAnimation("vk2",vk2Animation);
  vk2.scale=0.4;
  

  vk1=createSprite(49000,500);
  vk1.addAnimation("vk1",vk1Animation);
  vk1.scale=0.6;

//covid warriors .

  v1=createSprite(3003,500);
  v1.addAnimation("v1",vAnimation);
  v1.scale=0.09;
  v1.visible=false;
  
  v2=createSprite(3003,580);
  v2.addAnimation("v2",vAnimation);
  v2.scale=0.09;
  v2.visible=false;

  
  v3=createSprite(5003,500);
  v3.addAnimation("v3",vAnimation);
  v3.scale=0.09;
  v3.visible=false;

  v4=createSprite(5003,580);
  v4.addAnimation("v4",vAnimation);
  v4.scale=0.09;
  v4.visible=false;

  v5=createSprite(5003,540);
  v5.addAnimation("v5",vAnimation);
  v5.scale=0.09;
  v5.visible=false;

  v6=createSprite(7003,540);
  v6.addAnimation("v6",vAnimation);
  v6.scale=0.09;
  v6.visible=false;

  v7=createSprite(7003,590);
  v7.addAnimation("v7",vAnimation);
  v7.scale=0.09;
  v7.visible=false;

  v8=createSprite(7003,500);
  v8.addAnimation("v8",vAnimation);
  v8.scale=0.09;
  v8.visible=false;

  v9=createSprite(7003,490);
  v9.addAnimation("v9",vAnimation);
  v9.scale=0.09;
  v9.visible=false;

  v10=createSprite(7003,550);
  v10.addAnimation("v10",vAnimation);
  v10.scale=0.09;
  v10.visible=false;

  v11=createSprite(10003,540);
  v11.addAnimation("v11",vAnimation);
  v11.scale=0.09;
  v11.visible=false;

  v12=createSprite(10003,580);
  v12.addAnimation("v12",vAnimation);
  v12.scale=0.09;
  v12.visible=false;

  v13=createSprite(10003,500);
  v13.addAnimation("v13",vAnimation);
  v13.scale=0.09;
  v13.visible=false;

  //masks.

mask1=createSprite(1003,490);
mask1.addAnimation("mask1",maskAnimation);
mask1.scale=1.5;
mask1.visible=false;

mask2=createSprite(3003,430);
mask2.addAnimation("mask2",maskAnimation);
mask2.scale=1.5;
mask2.visible=false;

mask3=createSprite(3003,400);
mask3.addAnimation("mask3",maskAnimation);
mask3.scale=1.5;
mask3.visible=false;

mask4=createSprite(5003,400);
mask4.addAnimation("mask4",maskAnimation);
mask4.scale=1.5;
mask4.visible=false;

mask5=createSprite(5003,420);
mask5.addAnimation("mask5",maskAnimation);
mask5.scale=1.5;
mask5.visible=false;

mask6=createSprite(7003,500);
mask6.addAnimation("mask6",maskAnimation);
mask6.scale=1.5;
mask6.visible=false;

mask7=createSprite(7003,520);
mask7.addAnimation("mask7",maskAnimation);
mask7.scale=1.5;
mask7.visible=false;

//players helper (antivirus).

antivirus=createSprite(105,450);
antivirus.addAnimation("antivirus",antivirusAnimation);
antivirus.scale=0.3;


//group of covid warriors.

virusGroup=new Group();

//creating passengers of both metro railstation and airport.
p1=createSprite(31000,570);
p1.addAnimation("p1",p1Animation);
p1.scale=0.4;

p2=createSprite(p1.x-35,560);
p2.addAnimation("p2",p2Animation);
p2.scale=0.4;

p3=createSprite(p1.x+40,550);
p3.addAnimation("p3",p3Animation);
p3.scale=0.4;

p4=createSprite(p1.x-70,565);
p4.addAnimation("p4",p4Animation);
p4.scale=0.4;

p5=createSprite(p1.x-90,564);
p5.addAnimation("p5",p5Animation);
p5.scale=0.4;

p6=createSprite(p1.x+80,556);
p6.addAnimation("p6",p6Animation);
p6.scale=0.4;

p7=createSprite(p1.x+110,560);
p7.addAnimation("p7",p7Animation);
p7.scale=0.4;

p8=createSprite();
p8.addAnimation("p8",p8Animation);
p8.scale=0.4;

p9=createSprite();
p9.addAnimation("p9",p9Animation);
p9.scale=0.4;

p10=createSprite();
p10.addAnimation("p10",p10Animation);
p10.scale=0.4;


p11=createSprite();
p11.addAnimation("p11",p11Animation);
p11.scale=0.4;

p12=createSprite();
p12.addAnimation("p12",p12Animation);
p12.scale=0.4;

p13=createSprite();
p13.addAnimation("p13",p13Animation);
p13.scale=0.4;

p14=createSprite();
p14.addAnimation("p14",p14Animation);
p14.scale=0.4;

p15=createSprite();
p15.addAnimation("p15",p15Animation);
p15.scale=0.4;

p16=createSprite();
p16.addAnimation("p16",p16Animation);
p16.scale=0.4;

p17=createSprite();
p17.addAnimation("p17",p17Animation);
p17.scale=0.4;

p18=createSprite();
p18.addAnimation("p18",p18Animation);
p18.scale=0.4;

p19=createSprite();
p19.addAnimation("p19",p19Animation);
p19.scale=0.4;

p20=createSprite();
p20.addAnimation("p20",p20Animation);
p20.scale=0.4;


p21=createSprite();
p21.addAnimation("p21",p21Animation);
p21.scale=0.4;

p22=createSprite();
p22.addAnimation("p22",p22Animation);
p22.scale=0.4;

p23=createSprite();
p23.addAnimation("p23",p23Animation);
p23.scale=0.4;

p24=createSprite();
p24.addAnimation("p24",p24Animation);
p24.scale=0.4;

p25=createSprite();
p25.addAnimation("p25",p25Animation);
p25.scale=0.4;

p26=createSprite();
p26.addAnimation("p26",p26Animation);
p26.scale=0.4;

p27=createSprite();
p27.addAnimation("p27",p27Animation);
p27.scale=0.4;


//creating viruses of both metro rails and airport.
mv1=createSprite(31000,500);
mv1.addAnimation("mv1",vAnimation);
mv1.scale=0.1;

mv2=createSprite(mv1.x+10,520);
mv2.addAnimation("mv2",vAnimation);
mv2.scale=0.1;

mv3=createSprite(mv1.x+20,520);
mv3.addAnimation("mv3",vAnimation);
mv3.scale=0.1;

mv4=createSprite(mv1.x-20,550);
mv4.addAnimation("mv4",vAnimation);
mv4.scale=0.1;


// creating foods.
burger=createSprite(25000,500);
burger.addAnimation("burger",burgerAnimation);
burger.scale=0.2;

burrito=createSprite(25000,500);
burrito.addAnimation("burrito",burritoAnimation);
burrito.scale=0.2;

croissant=createSprite(25000,500);
croissant.addAnimation("croissant",croissantAnimation);
croissant.scale=0.2;

donut=createSprite(25000,500);
donut.addAnimation("donut",donutAnimation);
donut.scale=0.2;

cookie=createSprite(25000,500);
cookie.addAnimation("cookie",cookieAnimation);
cookie.scale=0.2;

hotdog=createSprite(25000,500);
hotdog.addAnimation("hotdog",hotdogAnimation);
hotdog.scale=0.2;


// creating restaurant.
restaurant=createSprite(25000,500);
restaurant.addAnimation("restaurant",restaurantAnimation);

//strongest thing to destroy covid only on the city.

lotus=createSprite(56000,450);
lotus.addAnimation("lotus",lotusAnimation);
lotus.scale=0.5;

//creating car of mayor.
car=createSprite(565+00,550);
car.addAnimation("car",carAnimation);
car.scale=0.08;


//poster/banner.
poster=createSprite(100,350);
poster.addAnimation("poster",posterAnimation);
poster.scale=1.7;


poster2=createSprite(mario.spt.x,350);
poster2.addAnimation("poster2",gameOverAnimation);
poster2.scale=0.8;
poster2.visible=false;

//creating frames to select.
selectframe=createSprite(500,450);
selectframe.addAnimation("selectframe",selectframeAnimation);
selectframe.scale=1.5;

//creating all buttons.
playbtn=createSprite(700,500);
playbtn.addAnimation("playbtn",playbtnAnimation);
playbtn.scale=0.3;

insbtn=createSprite(700,600);
insbtn.addAnimation("insbtn",insbtnAnimation);
insbtn.scale=0.3;

storybtn=createSprite(700,670);
storybtn.addAnimation("storybtn",storybtnAnimation);
storybtn.scale=0.3;

//creating list.
list=createSprite(650,210);
list.addAnimation("list",listAnimation);
list.scale=0.7;


story=createSprite(-300,980);
story.addAnimation("story",storyAnimation);
story.scale=0.8;

instructions=createSprite(-300,980);
instructions.addAnimation("instructions",instructionsAnimation);
instructions.scale=0.8;

gamelogo=createSprite(50,250);
gamelogo.addAnimation("gamelogo",gamelogoAnimation);
gamelogo.scale=1.3;



  }




function draw() {
  background(covidAnimation);
  //code to move the camera.
  translate(  -mario.spt.x + width/2 , 0);

  

  if(gameState==BEGIN)//Beginning state.
  {

if(mousePressedOver(playbtn)){
  playbtn.destroy();
}


    
    
stroke('yellow');
fill('red');
textSize(20);
textFont("Algerian");
text("Hit P+Enter to start the game",200,100);
    


    //creating button functionality.

    if(keyDown("p")){
      selectframe.y=450;
      buttonSound.play();
    }

    
    if(keyDown("p")&&(keyDown("enter"))){
      enterSound.play();
  b1.addAnimation("b1",b1Animation);
  b2.addAnimation("b2",b2Animation);
  b3.addAnimation("b3",b3Animation);
  b4.addAnimation("b4",b4Animation);
  b5.addAnimation("b5",b5Animation);
  b6.addAnimation("b6",b6Animation);
  b7.addAnimation("b7",b7Animation);
  poster.destroy();
  gameState=PLAY;
  playbtn.destroy();
  insbtn.destroy();
  storybtn.destroy();
  selectframe.destroy();
  list.destroy();
  gamelogo.destroy();
  instructions.destroy();
  story.destroy();
    }

if(keyDown("i")){
  selectframe.y=535;
buttonSound.play();
}

if(keyDown("i")&&(keyDown("enter"))){
  selectframe.y=insbtn.y;
instructions.velocityY=-2;
  pageSound.play();
}




if(keyDown("s")){
  selectframe.y=620;
  buttonSound.play();
}

if(keyDown("s")&&(keyDown("enter"))){
  selectframe.y=storybtn.y;
  pageSound.play();
  story.velocityY=-1;
}



//floating effect of game logo.
if(gamelogo.y==450){
gamelogo.velocityY=-1;
}


if(gamelogo.y==250){
  gamelogo.velocityY=1;
  }
  

mario.spt.pause();

    virusGroup.visible=false;
    platformGroup.visible=false;
obstacleGroup.visible=false;
antivirus.visible=false;
lotus.visible=false;
b1.visible=false;
b2.visible=false;
b3.visible=false;
b4.visible=false;
b5.visible=false;
b6.visible=false;
b7.visible=false;
man.visible=false;
manh1.visible=false;
manh2.visible=false;
manh3.visible=false;
manh4.visible=false;
manh5.visible=false;
v1.visible=false;
v2.visible=false;
v3.visible=false;
v4.visible=false;
v6.visible=false;
v7.visible=false;
v8.visible=false;
v9.visible=false;
v10.visible=false;
v11.visible=false;
v12.visible=false;
v13.visible=false;
virusGroup.visible=false;
mask1.visible=false;
mask2.visible=false;
mask3.visible=false;
mask4.visible=false;
mask5.visible=false;
mask6.visible=false;
mask7.visible=false;






  }
 
  

   else if(gameState==PLAY)//Play state.
  {  

mario.spt.play();
   


    virusGroup.visible=true;
    platformGroup.visible=true;   
obstacleGroup.visible=true;
antivirus.visible=true;
lotus.visible=true;
b1.visible=true;
b2.visible=true;
b3.visible=true;
b4.visible=true;
b5.visible=true;
b6.visible=true;
b7.visible=true;
man.visible=true;
manh1.visible=true;
manh2.visible=true;
manh3.visible=true;
manh4.visible=true;
manh5.visible=true;

//foods functionality.
if(mario.spt.isTouching(burger)){
  saveSound.play();
  food=food+1;
  burger.destroy();
}
if(mario.spt.isTouching(cookie)){
  saveSound.play();
  food=food+1;
  cookie.destroy();
}
if(mario.spt.isTouching(burrito)){
  saveSound.play();
  food=food+1;
  burrito.destroy();
}
if(mario.spt.isTouching(hotdog)){
  saveSound.play();
  food=food+1;
  hotdog.destroy();
}
if(mario.spt.isTouching(croissant)){
  saveSound.play();
  food=food+1;
  croissant.destroy();
}
if(mario.spt.isTouching(donut)){
  saveSound.play();
  food=food+1;
  donut.destroy();
}







    stroke('yellow');
    textSize(20);
    fill('red');
    textFont("Algerian");
    text("Your Score = " + score , mario.spt.x,50);

    stroke('yellow');
    textSize(20);
    fill('red');
    textFont("Algerian");
    text("Masks Collected = " + mask , mario.spt.x,100);

    
    stroke('yellow');
    textSize(20);
    fill('red');
    textFont("Algerian");
    text("foods Collected = " + food , mario.spt.x,150);

    stroke('green');
    textSize(15);
    fill('yellow');
    textFont("Algerian");
    text("I will be very helpful,if anyone can give me 1 mask by pressing 'g' ",man.x,150);
    
    spawnCovid();

if(antivirus.isTouching(vk4)){
  antivirus.destroy();
}

//creating metro functionality.
if(m1.x===1300){
  m1.y=630;
}

if(m1.x===1400){
  m1.y=620;
}

if(m1.x===1500){
  m1.y=610;
}

if(m1.x===1600){
  m1.y=600;
}

if(m1.x===1700){
  m1.y=590;
}

if(m1.x===1800){
  m1.y=580;
}

if(m1.x===1900){
  m1.y=570;
}

if(m1.x===2000){
  m1.y=560;
}

if(m1.x===2100){
  m1.y=550;
}

if(m1.x===220){
  m1.y=540;
}

if(m1.x===2300){
  m1.y=530;
}

if(m1.x===2400){
  m1.y=520;
}

if(m1.x===2500){
  m1.y=510;
}

if(m1.x===2600){
  m1.y=500;
  trainhSound.play();
}

if(mario.spt.x<31000){
  mv1.velocityX=-0.5;
  mv2.velocityX=-0.5;
  mv3.velocityX=-0.2;
  mv4.velocityX=-0.7;
}


//creating transport velocities.
bus.velocityX=27.5;
bus2.velocityX=-27.5;
car3.velocityX=-30;
m1.velocityX=20;
m3.velocityX=-50;


    //code after touching lotus.

if(mario.spt.isTouching(lotus)){
saveSound.play();
lotus.destroy();
vk1.destroy();
virusDestroy();
score=score+100;
stroke('red');
fill('purple');
textFont("Algerian");
text("Hurrah!!! you killed all the viruses and saved the earth.Meanwhile,Collect your award from the mayor",mario.spt.x,200);
}

if(mario.spt.isTouching(b1)){
  b1.destroy();
  mask1.visible=true;
  b1=createSprite(1003,450);
  b1.addAnimation("b1",t2Animation);
  b1.scale=0.9;
  
}




if(mario.spt.isTouching(b2)){
  b2.destroy();
 mask3.visible=true;
v1.visible=true;
v2.visible=true;
v1.velocityX=-5;
v2.velocityX=-3;

b2=createSprite(3003,450);
  b2.addAnimation("b2",t2Animation);
  b2.scale=0.9;
}

if(mario.spt.isTouching(b3)){
  b3.destroy();
  mask4.visible=true;
  mask5.visible=true;
v3.visible=true;
v4.visible=true;
v5.visible=true;
v3.velocityX=-3;
v4.velocityX=-4;
v5.velocityX=-5;

b3=createSprite(5003,450);
  b3.addAnimation("b3",t3Animation);
  b3.scale=0.9;
}
if(mario.spt.isTouching(b4)){
  b4.destroy();
  mask5.visible=true;
  mask6.visible=true;
  v6.visible=true;
  v7.visible=true;
  v8.visible=true;
  v9.visible=true;
  v10.visible=true;
  vk5.visible=true;
  v6.velocityX=-5;
  v7.velocityX=-4;
  v8.velocityX=-5;
  v9.velocityX=-3;
  v10.velocityX=-5;
  vk5.velocityX=-5;
  b4=createSprite(7003,465);
  b4.addAnimation("b4",t1Animation);
  b4.scale=0.9;
  }

  if(mario.spt.isTouching(b6)){
    b6.destroy();
    v11.visible=true;
      v12.visible=true;
      v13.visible=true;
      v11.velocityX=-5;
      v12.velocityX=-6;
      v13.velocityX=-5;
      vk4.visible=true;
      vk4.velocityX=-6;
     
  }

if(mario.spt.isTouching(mask1)){
  pointsSound.play();
  mask1.destroy();
  mask=mask+1;
  score=score+5;
  
}

if(mario.spt.isTouching(mask2)){
  pointsSound.play();
  mask2.destroy();
mask=mask+1;
score=score+5;

}

if(mario.spt.isTouching(mask3)){
  pointsSound.play();
  mask3.destroy();
mask=mask+1;
score=score+5;
pointsSound.play();
}

if(mario.spt.isTouching(mask4)){
  pointsSound.play();
  mask4.destroy();
  mask=mask+1;
  score=score+5;
  pointsSound.play();
}

if(mario.spt.isTouching(mask5)){
  pointsSound.play();
  mask5.destroy();
  mask=mask+1;
  score=score+5;
}

if(mario.spt.isTouching(mask6)){
  pointsSound.play();
  mask6.destroy();
  mask=mask+1;
score=score+5;
}

//code after shooting king covids.

if(shootGroup.isTouching(vk5)){
  pointsSound.play();
  vk5.destroy();
  score=score*2;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(shootGroup.isTouching(vk4)){
  pointsSound.play();
  vk4.destroy();
  score=score*8;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(shootGroup.isTouching(vk3)){
  pointsSound.play();
  vk3.destroy();
  score=score*9;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(shootGroup.isTouching(vk2)){
  pointsSound.play();
  vk2.destroy();
  score=score*10;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(shootGroup.isTouching(vk1)){
  vk1.destroy();
  pointsSound.play();
  score=score*20;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

//code after shooting covid from metro rail passengers.

if(shootGroup.isTouching(mv1)){
  pointsSound.play();
  mv1.destroy();
  score=score+5;
  vk2.velocityX=-80;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}


if(shootGroup.isTouching(mv2)){
  pointsSound.play();
  mv2.destroy();
  score=score+5;
  vk2.velocityX=-80;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}


if(shootGroup.isTouching(mv3)){
  pointsSound.play();
  mv3.destroy();
  score=score+5;
  vk2.velocityX=-80;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}


if(shootGroup.isTouching(mv4)){
  pointsSound.play();
  mv4.destroy();
  score=score+5;
  vk2.velocityX=-80;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

//code after shooting warrior covids.

if(shootGroup.isTouching(v1)){
  pointsSound.play();
  v1.destroy();
  score=score+5;
  vk2.velocityX=-80;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(shootGroup.isTouching(v2)){
  pointsSound.play();
  v2.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(shootGroup.isTouching(v3)){
  pointsSound.play();
  v3.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(shootGroup.isTouching(v4)){
  pointsSound.play();
  v4.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(shootGroup.isTouching(v5)){
  pointsSound.play();
  v5.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(shootGroup.isTouching(v6)){
  pointsSound.play();
  v6.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(shootGroup.isTouching(v7)){
  pointsSound.play();
  v7.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(shootGroup.isTouching(v8)){
  pointsSound.play();
  v8.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}


if(shootGroup.isTouching(v9)){
  pointsSound.play();
  v9.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}


if(shootGroup.isTouching(v10)){
  pointsSound.play();
  v10.destroy();
  score=score+10;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(shootGroup.isTouching(v11)){
  pointsSound.play();
  v11.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(shootGroup.isTouching(v12)){
  pointsSound.play();
  v12.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(shootGroup.isTouching(v13)){
  pointsSound.play();
  v13.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

//code after shooting brige;

if(shootGroup.isTouching(brige)){
  pointsSound.play();
  brige.destroy();
  vk3.visible=true;
  vk3.velocityX=-8;

}

//code after antivirus being touched by metro rail viruses.
if(antivirus.isTouching(mv1)){
  pointsSound.play();
  mv1.destroy();
  score=score+5;
  vk2.velocityX=-95;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(antivirus.isTouching(mv2)){
  pointsSound.play();
  mv2.destroy();
  score=score+5;
  vk2.velocityX=-95;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(antivirus.isTouching(mv3)){
  pointsSound.play();
  mv3.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(antivirus.isTouching(mv4)){
  pointsSound.play();
  mv4.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

//code after antivirus being touched by the viruses.
if(antivirus.isTouching(v1)){
  pointsSound.play();
  v8.destroy();
  score=score+5;
  vk2.velocityX=-95;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(antivirus.isTouching(v2)){
  pointsSound.play();
  v2.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(antivirus.isTouching(v3)){
  pointsSound.play();
  v3.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(antivirus.isTouching(v4)){
  pointsSound.play();
  v4.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(antivirus.isTouching(v5)){
  pointsSound.play();
  v5.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(antivirus.isTouching(v6)){
  pointsSound.play();
  v6.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(antivirus.isTouching(v7)){
  pointsSound.play();
  v7.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(antivirus.isTouching(v8)){
  pointsSound.play();
  v8.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(antivirus.isTouching(v9)){
  pointsSound.play();
  v9.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
  textSize(20);
}

if(antivirus.isTouching(v10)){ 
  pointsSound.play();
  v10.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
textSize(20);
  text("Good Job!",mario.spt.x,mario.spt.y-200);
}

if(antivirus.isTouching(v11)){
  pointsSound.play();
  v11.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
textSize(20);
  text("Good Job!",mario.spt.x,mario.spt.y-200);
}

if(antivirus.isTouching(v12)){
  pointsSound.play();
  v12.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
textSize(20);
  text("Good Job!",mario.spt.x,mario.spt.y-200);
}

if(antivirus.isTouching(v13)){
  pointsSound.play();
  v13.destroy();
  score=score+5;
  textFont("Algerian");
  fill('yellow');
stroke('white');
textSize(20);
  text("Good Job!",mario.spt.x,mario.spt.y-200);
}

//code after antivirus & shootgroup being touched by viruses 

if(antivirus.isTouching(vk5)){
  pointsSound.play();
  vk5.destroy();
  score=score*2;
  textFont("Algerian");
  fill('yellow');
stroke('white');
  text("Good Job!",mario.spt.x,mario.spt.y-200);
}

if(shootGroup.isTouching(vk4)){
  pointsSound.play();
  vk4.destroy();
  score=score*8;
  textFont("Algerian");
  fill('yellow');
stroke('white');
textSize(20);
  text("Good Job!",mario.spt.x,mario.spt.y-200);
}







if(keyDown("space")){
  createBullet();
}

//code after the scene of touching virus coming from passenger of metro rail.
if(mario.spt.isTouching(mv1)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score/4;
  gameState=REPLAY;
}

if(mario.spt.isTouching(mv2)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score/4;
  gameState=REPLAY;
}

if(mario.spt.isTouching(mv3)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score/4;
  gameState=REPLAY;
}

if(mario.spt.isTouching(mv4)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score/4;
  gameState=REPLAY;
}

//code after the scene of touching king virus.
if(mario.spt.isTouching(vk5)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score/4;
  gameState=REPLAY;
}

if(mario.spt.isTouching(vk4)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score/8;
  gameState=REPLAY;
}


if(mario.spt.isTouching(vk3)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score/8;
  gameState=REPLAY;
}


if(mario.spt.isTouching(vk2)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score/10;
  gameState=REPLAY;
}


if(mario.spt.isTouching(vk1)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score/20;
  gameState=REPLAY;
}


//code after touching warrior viruses.

if(mario.spt.isTouching(v1)){
  gameOverSound.play();
  mario.spt.destroy();
score=score-5;
gameState=REPLAY;
}

if(mario.spt.isTouching(v2)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}

if(mario.spt.isTouching(v3)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}

if(mario.spt.isTouching(v4)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}

if(mario.spt.isTouching(v5)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}
if(mario.spt.isTouching(v6)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}
if(mario.spt.isTouching(v6)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-6;
  gameState=REPLAY;
}
if(mario.spt.isTouching(v7)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-6;
  gameState=REPLAY;
}
if(mario.spt.isTouching(v8)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}
if(mario.spt.isTouching(v9)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}

if(mario.spt.isTouching(v10)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}

if(mario.spt.isTouching(v11)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}

if(mario.spt.isTouching(v12)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}

if(mario.spt.isTouching(v13)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}

if(mario.spt.y>1200){
  gameOverSound.play();
  mario.spt.destroy();
  gameState=REPLAY;
}



if(keyDown("g")&& (mario.spt.x = man.x)){
  mask=mask-1;
score=score*2;
pointsSound.play();
}




    if(bus.isTouching(b5)){
      bus.velocityX=0;
      
    }
    if(mario.spt.isTouching(b5)){
      bus.velocityX=20;
    }
          //apply gravity to mario and set colliding with platforms.
          mario.applyGravity();
        mario.spt.collide(platformGroup);
        mario.spt.collide(brige);
        
       //Calling various function to control mario.
         if (keyDown("left"))  
                { 
                mario.moveLeft();
             }
       if (keyDown("right")) 
             { 
             mario.moveRight();
              }
        if (keyDown("up") && mario.spt.velocityY===0) 
                {
              mario.jump();
                 }

if(keyDown("r")){
  antivirus.x=antivirus.x+30;
  
}
  if(keyDown("l")){
    antivirus.x=antivirus.x-30;
  }    
  
  }

  else if(gameState==REPLAY)//replay state
  {
 poster2.visible=true;
 poster2.x=mario.spt.x;

 bus.destroy();
 bus2.destroy();
 car3.destroy();
 b1.destroy();
 b2.destroy();
 b3.destroy();
 b4.destroy();
 b5.destroy();
 b6.destroy();
 b7.destroy();
m3.destroy();
virusGroup.destroyEach();

trainhSound.pause();

if(keyDown("b")){
  poster2.destroy();
  reset();
}


  }



 


  

   drawSprites();

}


  function createBullet() {
     shoot= createSprite(mario.spt.x,mario.spt.y);
    shoot.addAnimation("shoot",shootAnimation);
  shoot.velocityX = 30;
  shoot.lifetime=20;
    shoot.scale = 0.5;
    shootGroup.add(shoot); 
    mario.spt.addAnimation("mario",shootingAnimationr);
    shootSound.play();
  }
  
  

  function spawnCovid(){
    if(frameCount % 10 === 0){
    virus=createSprite(47000,height-random([250]));
virus.addAnimation("virus",vAnimation);
virus.scale=0.09;
virus.velocityX=-(40 + 3*score/100);
virusGroup.add(virus);

    }

    if(virusGroup.isTouching(mario.spt)){
      gameOverSound.play();
      mario.spt.destroy();
      score=score-5;
      gameState=REPLAY;
    }

    if(shootGroup.isTouching(virusGroup) || (antivirus.isTouching(virusGroup))){
      pointsSound.play();
      virusDestroy();
      score=score+5;
    }



  }

  function virusDestroy(){
    virusGroup.destroyEach();
    score=score+5;
  }


 function reset(){ //function to replay after lose.
  
   score=0;
   mask=0;
   mario = new Player();
   shootGroup.destroyEach();
virusGroup.destroyEach();
gameState=BEGIN;






//poster2.
poster2=createSprite(mario.spt.x,350);
poster2.addAnimation("poster2",gameOverAnimation);
poster2.scale=0.8;
poster2.visible=false;


//creating metro.
m3=createSprite(20000,435);
m3.addAnimation("m3",metro3Animation);



//buildings.

b1=createSprite(1003,430);
b1.addAnimation("b1",b1Animation);
b1.scale=1;

b2=createSprite(3003,423);
b2.addAnimation("b2",b2Animation);
b2.scale=0.9;

b3=createSprite(5003,500);
b3.addAnimation("b3",b3Animation);
b3.scale=0.9;

b4=createSprite(7003,500);
b4.addAnimation("b4",b4Animation);
b4.scale=0.9;

b5=createSprite(9003,500);
b5.addAnimation("b5",b5Animation);
b5.scale=0.9;

b6=createSprite(10003,420);
b6.addAnimation("b6",b6Animation);
b6.scale=0.9;

b7=createSprite(18003,450);
b7.addAnimation("b7",b7Animation);
b7.scale=0.9;







//creating transport.

bus=createSprite(300,540);
bus.addAnimation("bus",busAnimation);
bus.scale=0.8;
   
bus2=createSprite(10000,540);
bus2.addAnimation("bus2",bus2Animation);
bus2.scale=0.8;


car3=createSprite(20000,560);
car3.addAnimation("car3",car3Animation);
car3.scale=0.7;




  story=createSprite(100,980);
  story.addAnimation("story",storyAnimation);
  story.scale=1;

  instructions=createSprite(100,980);
  instructions.addAnimation("instructions",instructionsAnimation);
  instructions.scale=1;

  

  brige=createSprite(38000,560);
  brige.addAnimation("brige",brigeAnimation);
  brige.scale=1;
  brige.setCollider("circle",0,50,200);

 
//group of covid warriors.

virusGroup=new Group();







  

 }

