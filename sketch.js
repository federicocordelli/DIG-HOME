var karma = 0;
var txt = "I";
var i = 200;
let mySound;
let txtScroll;
var about = 0;
let scroll = 0;
var o1 = 0;
var o2 = 0;




function preload() {

 soundFormats('mp3');
mySound = loadSound('addons/theshepherd_audio');

  titleFont = loadFont('addons/Daubenton.otf');
  corpusFont = loadFont('addons/Ortica-Light.otf');
  first = loadImage("addons/2/1.png");
  first2 = loadImage("addons/2/2.png");
  first3 = loadImage("addons/2/3.png");
  first4 = loadImage("addons/2/4.png");

  // first5 = loadImage("addons/2/5.png");
  // first6 = loadImage("addons/2/6.png");
  // first7 = loadImage("addons/2/7.png");
  // first8 = loadImage("addons/2/8.png");
  // first9 = loadImage("addons/2/9.png");
  // first10 = loadImage("addons/2/10.png");
  // first11 = loadImage("addons/2/11.png");
  // first12 = loadImage("addons/2/12.png");
  // first13 = loadImage("addons/2/13.png");
  // first14 = loadImage("addons/2/14.png");
  // first15 = loadImage("addons/2/15.png");




}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(displayWidth, displayHeight, WEBGL);
  noSmooth();


  //Button To Reset
  button = createButton('ABOUT');
  button.position(width-200, 70);
  button.mouseClicked(abouty);
  button.addClass('button');

  //Button To Reset
  buttonE = createButton('ESC');
  buttonE.position(width-200, 70);
  buttonE.mouseClicked(escy);
  buttonE.addClass('buttonUsed');

  //Button To sogns of innocence
  buttonS = createButton('Songs Of Innocence');
  buttonS.position(200, (height/2)-180);
  buttonS.mouseClicked(innocency);
  buttonS.addClass('buttonUsed');

  buttonH = createButton('The Shepherd');
  buttonH.position(500, (height/2)-136);
  buttonH.mouseClicked(sheppy);
  buttonH.addClass('buttonUsed');

  //Button To sogns of experience
  buttonL = createButton('Songs Of Experience');
  buttonL.position(200, (height/2)-100);
  buttonL.mouseClicked(experiency);
  buttonL.addClass('buttonUsed');
/*
  button = createButton('CURSOR');
  button.position(width-320, 70);
  button.mouseClicked(resizety);
  button.addClass('button');

  button = createButton('SCREEN');
  button.position(width-440, 70);
  button.mouseClicked(savability);
  button.addClass('button');

  button = createButton('PLAY');
  button.position(width-530, 70);
  button.mouseClicked(musicplease);
  button.addClass('button');

  button = createButton('PAUSE');
  button.position(width-630, 70);
  button.mouseClicked(pleasemusic);
  button.addClass('button');

  //first choice left
  buttonL = createButton('←');
  buttonL.position(100, height-80);
  buttonL.mouseClicked(lefty);
  buttonL.addClass('button');

  //first choice right
  buttonR = createButton('→');
  buttonR.position(width - 190, height-80);
  buttonR.mouseClicked(lefty);
  buttonR.addClass('button');
*/
/*
  link = createA("https://www.behance.net/Federico_cordelli?isa0=1","behance", "_blank");
  link.position(108, height-96);
  link.addClass('a');

  var myUrl = new URL (window.location.href);
 karmaPoints = myUrl.searchParams.get("karma")*1;
*/
/*
 buttonL = createButton('shepherd');
 buttonL.position(450, 254);
 buttonL.mouseClicked(lefty);
 buttonL.addClass('button23');

 buttonL = createButton('sheep');
 buttonL.position(483, 367);
 buttonL.mouseClicked(lefty1);
 buttonL.addClass('button23');

 buttonL = createButton('ewes');
 buttonL.position(463, 592);
 buttonL.mouseClicked(lefty1);
 buttonL.addClass('button23');

 buttonL = createButton('lambs');
 buttonL.position(450, 535);
 buttonL.mouseClicked(lefty1);
 buttonL.addClass('button23');

 buttonL = createButton('follow');
 buttonL.position(280, 367);
 buttonL.mouseClicked(lefty2);
 buttonL.addClass('button23');
*/

//Button To Reset
button = createButton('OPEN SOURCE');
button.position(width-200, height-70);
button.mouseClicked(sourcy);
button.addClass('button');

}

function draw() {
  background('#F8F1DB');

  // background('white');

  imageMode(CENTER);
  // image(first15, width/2+400,height/2, (690/2)+(mouseX/100), (1124/2)+(mouseX/100));
  // image(first14, width/2+400,height/2, (690/2)+(mouseX/500), (1124/2)+(mouseX/500));
  // image(first13, width/2+400,height/2, (690/2)-(mouseX/150), (1124/2)-(mouseX/150));
  // image(first12, width/2+400,height/2, (690/2)+(mouseX/150)+(mouseY/150), (1124/2)+(mouseX/150)+(mouseY/150));
  // image(first11, width/2+400,height/2, (690/2)+(mouseX/350)+(mouseY/350), (1124/2)+(mouseX/350)+(mouseY/350));
  // image(first10, width/2+400,height/2, (690/2)+(mouseX/300)+(mouseY/300), (1124/2)+(mouseX/300)+(mouseY/300));
  // image(first9, width/2+400,height/2, (690/2)+(mouseX/200)+(mouseY/200), (1124/2)+(mouseX/200)+(mouseY/200));
  // image(first8, width/2+400,height/2, (690/2)+(mouseX/100)+(mouseY/100), (1124/2)+(mouseX/100)+(mouseY/100));
  // image(first7, width/2+400,height/2, (690/2)+(mouseX/400)+(mouseY/400), (1124/2)+(mouseX/400)+(mouseY/400));
  // image(first6, (width/2+400)-(-mouseX/100)+(-mouseY/120),height/2, 690/2, 1124/2);
  // image(first5, (width/2+400)-(-mouseX/100)+(mouseY/100),(height/2)+(-mouseX/20)+(-mouseY/75), 690/2, 1124/2);
  image(first, (width/2)+(-mouseX/60)+(-mouseY/70),((height/2)+100), (690/2)+(-mouseY/10), (1124/2)+(-mouseY/10));
  image(first4, (width/2)-(-mouseX/80)-(mouseY/80),((height/2)+100)-(-mouseX/60)+(-mouseY/75), (690/2)+(-mouseY/20), (1124/2)+(-mouseY/20));
  image(first3, (width/2)+(-mouseX/60)+(-mouseY/80),((height/2)+100)+(-mouseX/40)+(-mouseY/45), (690/2)+(-mouseY/30), (1124/2)+(-mouseY/30));
  image(first2, (width/2)+(mouseX/100),((height/2)+100)+(-mouseY/40), (690/2)+(-mouseY/40), (1124/2)+(-mouseY/40));



  push();
    fill('black');
    textAlign(CENTER);
    textFont(corpusFont);
    textSize(10);
    //text(karma, width/2, height/2);
    text("SCROLL DOWN", width/2, 50);
  pop();



push();
  fill('black');
  textAlign(LEFT);
  textFont(corpusFont);
  textSize(35);
  //text(karma, width/2, height/2);
  text("A digital visualization of Songs Of Innocence and Songs Of Experience by William Blake", 100, 220);
pop();



// push();
//   fill('black');
//   textAlign(LEFT);
//   textFont(titleFont);
//   textSize(15);
//   //text(karma, width/2, height/2);
//   text("WILLIAM BLAKE", 100, 65);
// pop();


/*
push();
  textSize(80);
  textAlign(CENTER);
  fill("#92a8d1");
  text(txt, mouseX, mouseY);
pop();
*/
push();
  textFont(titleFont);
  textAlign(LEFT);
  fill('black');
  textSize(130);
  text("E-POETRY", 100, 170);
pop();


  noCursor();

push();
noStroke();
fill("#92a8d1")
rect(0,0,windowWidth,0+scroll);
pop();
push();
  fill('black');
  textAlign(LEFT);
  textFont(corpusFont);
  textSize(100);
  //text(karma, width/2, height/2);
  text("INDEX", 200, 0+(scroll*0.2));
pop();


push();
  fill('black');
  textAlign(CENTER);
  textFont(corpusFont);
  textSize(10);
  //text(karma, width/2, height/2);
  text("DIGGERS COLLECTIVE", width/2, height-50);
pop();

//image(first2, (width-580)+(mouseX/60),(150)+(-mouseX/85)+(-mouseY/100), 690/2, 1124/2);
//image(first8, (200)+(mouseX/60)+(mouseY/80),(-75), 690/2, 1124/2);

if (about === 1) {
  fill(0,20,0,180);
  rect(0,0,windowWidth,windowHeight);
  noStroke();
  fill('#F8F1DB');
  rect((width/2)-300,(height/2)-400,600,800,300,300,10,10);
push();
textFont(corpusFont);
textAlign(CENTER);
fill('black');
textSize(400);
  text("*",width/2,height/2);
pop();
push();
textFont(corpusFont);
textAlign(CENTER,CENTER);
fill('black');
textSize(25);
  text("With e-Poetry we wanted to create \na multisensory experience \nin search of a greater immersion into the poems \nof William Blake's -Songs of innocence \nand song of experience-.\nThanks to the use of images, \ntexts and audio we tried to recreate \nthe atmosphere and dare a digital representation \nof Blake's poetic imagery.",width/2,(height/2)+50);
pop();
push();
  fill('black');
  textAlign(CENTER);
  textFont(corpusFont);
  textSize(10);
  //text(karma, width/2, height/2);
  text("Digital Culture Course \n- Alvise Gregorio Aspesi, Federico Cordelli, Davide Perucchini, Enzo Taboada Fung - \nProfessor Giovanna Di Rosario", width/2, (height/2)+350);
pop();
}
if (i===200) {

  // every 10th time, the condition is true
  if (frameCount % 60 < 30){
    // fill with 50
  	fill("#F8F1DB");

      textSize(80);
      textFont(corpusFont);
      textAlign(CENTER);
      text(txt, mouseX, mouseY);

  } else {
    // all the otehr times, fill with 255
    fill("#92a8d1");

      textSize(80);
      textFont(corpusFont);
      textAlign(CENTER);
      text(txt, mouseX, mouseY);

  }
} else {
  fill("#92a8d1");

    textSize(80);
    textFont(corpusFont);
    textAlign(CENTER);
    text(txt, mouseX, mouseY);
}

if (scroll>(height/2)-180 && scroll<=windowHeight) {

buttonS.removeClass("buttonUsed");
buttonS.addClass("buttonS");

} else if (scroll<=(height/2)-180) {
  buttonS.removeClass("buttonS");
  buttonS.addClass("buttonUsed");

}

if (scroll>(height/2)-160 && scroll<=windowHeight) {

buttonL.removeClass("buttonUsed");
buttonL.addClass("buttonS");
} else if (scroll<=(height/2)-160) {

  buttonL.removeClass("buttonS");
  buttonL.addClass("buttonUsed");
}

push();
textFont(corpusFont);
textAlign(LEFT);
fill(248,241,216,o1);
textSize(25);
  text("Introduction\nThe Shepherd\nThe Echoing Green\nThe Lamb\nThe Little Black Boy\nThe Blossom\nThe Chimney-Sweeper\nThe Little Boy Lost\nThe Little Boy Pound\nLaughing Song\nA Cradle Song\nThe Divine Image\nHoly Thursday\nNight\nSpring\nNurse’s Song\nInfant Joy\nA Dream\nOn Another’s Sorrow",500,(height/2)-143);
pop();


push();
textFont(corpusFont);
textAlign(LEFT);
fill(248,241,216,o2);
textSize(25);
  text("Introduction\nEarth’s Answer\nThe Clod and the Pebble\nHoly Thursday\nThe Little Girl Lost\nThe Little Girl Found\nThe Chimney-Sweeper\nNurse’s Song\nThe Sick Rose\nThe Fly\nThe Angel\nThe Tiger\nMy Pretty Rose-Tree\nAh, Sunflower\nThe Lily\nThe Garden of Love\nThe Little Vagabond\nLondon\nThe Human Abstract\nInfant Sorrow\nA Poison Tree\nA Little Boy Lost\nA Little Girl Lost\nA Divine Image\nA Cradle Song\nThe Schoolboy\nTo Tirzah\nThe Voice of the Ancient Bard",500,(height/2)-63);
pop();

if (o1===255) {
  buttonH.removeClass("buttonUsed");
  buttonH.addClass("buttonH");

} else if (o1===0) {
  buttonH.removeClass("buttonH");
  buttonH.addClass("buttonUsed");

}



}



//Resize Button Function
function abouty() {
  about = 1;
  button.removeClass('button');
  button.addClass('buttonUsed');
  buttonE.removeClass('buttonUsed');
  buttonE.addClass('button');
}

function innocency() {
if (o1===0) {
  o1=255;
  o2=0;
} else if (o1===255) {
  o1=0;
  o2=0;
}
}

function experiency() {
  if (o2===0) {
    o2=255;
    o1=0;
  } else if (o2===255) {
    o2=0;
    o1=0;
  }
}

function escy() {
  about = 0;
  buttonE.removeClass('button');
  buttonE.addClass('buttonUsed');
  button.removeClass('buttonUsed');
  button.addClass('button');

}

function lefty() {
  i = i-1
  karma = (karma *0) + 1;
  if (karma === 1) {
    txt = "Jesus";
  }
}

function lefty1() {
  i = i-1
  karma = (karma *0) + 2;
  if (karma === 2) {
    txt = "People";
  }
}

function lefty2() {
  i = i-1
  karma = (karma *0) + 3;
  if (karma === 3) {
    txt = "not lead";
  }
}

function musicplease() {
  mySound.play();
}

function pleasemusic() {
  mySound.pause();
}


function openy() {

  //fake
window.open("index0.html?karmaPoints=" +(karma), "_self");

}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  //resizeCanvas(displayWidth, displayHeight, WEBGL);

  return false;
}

function savability() {
  saveCanvas('Blake_Shephard', 'png');
  return false;
}

function sheppy() {
  window.open("https://federicocordelli.github.io/dig/");

}

function sourcy() {
  window.open("https://github.com/federicocordelli/DIG-HOME");

}
function mouseWheel(event) {
  print(event.delta);

  //move the square according to the vertical scroll amount
  txtScroll += event.delta;
  scroll += event.delta;

  //uncomment to block page scrolling
  //return false;
}
