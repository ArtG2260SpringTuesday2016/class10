
var dataLength = data.length;
var dataArr = [];
var dataArrLength = dataArr.length;
var dataValueText = "";
var dataValueText2 = "";
var xtext = "";
var ytext = "";


var Adata = function(localHeight) {
  this.height = localHeight;
  this.width = 10;
  this.dramaticHeight = this.height * -5

  var circleWidth = this.width * 2

  this.renderRect = function(x) {
    fill("#bada55");
    rect(x,height,this.width,this.dramaticHeight);
  };

  this.renderCircleTop = function(x) {
    fill("hotpink");
    ellipse((x) + (this.width / 2), height + this.dramaticHeight, circleWidth, circleWidth)
  };

  this.isMouseCloseToCircle = function(posnX, posnY, x) {
    if (dist(posnX, posnY, x, height + this.dramaticHeight) < circleWidth) {
      dataValueText2 = this.height
    }
  }

  this.isMouseCloseToRect = function(posnX, posnY, x) {
    // textSize(15)
    // text(posnX, 60, 100);
    // text(posnY, 90, 100);
    
     if (collidePointRect(posnX, posnY, x, 500 - (this.height - this.dramaticHeight), this.width, this.height-this.dramaticHeight)) {
    //if (collidePointRect(posnX, posnY, x, this.height, this.width, this.dramaticHeight)) {
      dataValueText =  500 - (this.height - this.dramaticHeight)
    }
  }

  this.render = function(iterator) {
    var x = iterator * 10;
    this.renderRect(x)
    this.renderCircleTop(x)
    this.isMouseCloseToCircle(mouseX, mouseY, x)
    this.isMouseCloseToRect(mouseX, mouseY, x)
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
  // textFont("Bangers")
  text(dataValueText, 20, 50);
  text(dataValueText2, 80, 50);
}
