
var dataLength = data.length;
var dataArr = [];
var dataArrLength = dataArr.length;
var dataValueText = "Hover over match stick head to see values";


var Adata = function(localHeight) {
  this.height = localHeight;
  this.width = 10;
  this.dramaticHeight = this.height * -5

  this.renderRect = function(x) {
    fill("#bada55");
    rect(x * 10,height,this.width,this.dramaticHeight);
  };

  this.renderCircleTop = function(x) {
    var circleWidth = this.width * 2
    fill("hotpink");
    ellipse((x * 10) + (this.width / 2), height + this.dramaticHeight, circleWidth, circleWidth)
  };

  this.render = function(i) {
    this.renderRect(i)
    this.renderCircleTop(i)
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
  text(dataValueText, 20, 100);
}
