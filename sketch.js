var dataLength = data.length;
var dataArr = [];
var dataArrLength = dataArr.length;
var dataValueText = "Hover over match stick head to see values";
var hit = false;
var rectColor="#bada55";
var circleColor="hotpink";


var Adata = function(localHeight) {
  this.height = localHeight;
  this.width = 10;
  this.dramaticHeight = this.height * -5

  var circleWidth = this.width * 2

  this.renderRect = function(x) {
    fill(rectColor);
    rect(x,height,this.width,this.dramaticHeight);
  };

//  this.isMouseOnRect=function(x){
//    if(collidePointRect(mouseX,mouseY,x,height-this.dramaticHeight,this.width, this.dramaticHeight)){
//      dataValueText=this.height
//    }
//  }
  
  this.renderCircleTop = function(x) {
    fill(circleColor);
    ellipse((x) + (this.width / 2), height + this.dramaticHeight, circleWidth, circleWidth)
  };

  this.isMouseOnCircle = function(x) {
    if (collidePointCircle(mouseX,mouseY,(x)+(this.width/2), height-this.dramaticHeight, circleWidth)) {
      dataValueText = this.height
    }
  }

  this.render = function(iterator) {
    var x = iterator * 10;
//refers to line 17, 28, 33? What's the affect of includine "this.___" below?
//no isMouseOnRect? (line 22)
    this.renderRect(x)
    this.renderCircleTop(x)
    this.isMouseOnCircle(x)
  }
}

function setup() {
  for (var i = 0; i < dataLength; i++) {
    dataArr.push(new Adata(data[i]));
  }
  createCanvas(500,500);
  dataArrLength = dataArr.length;
}

function draw() {
  background('#333');
  for (var i = 0; i < dataArrLength; i++){
    dataArr[i].render(i);
  }

  fill("#fefefe")
  textSize(22)
  textFont("Helvetica")
  text(dataValueText, 20, 100);
  
  ellipse(mouseX,mouseY,20,20)
  
    hit = collideCircleCircle(mouseX,mouseY,20,306,220,20)
    hit = collideCircleCircle(mouseX,mouseY,10,166,220,20)
    hit = collideCircleCircle(mouseX,mouseY,10,25,220,20)
  
  if(hit){
    circleColor="blue"
    print("colliding? " + hit);
  }else {
    circleColor="hotpink"
    fill('green');
  }
  print(mouseX)
}

