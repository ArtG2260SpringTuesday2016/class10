

var Adata = function(localHeight) {
  this.height = localHeight;
  this.width = 10;
  this.renderRect = function(x) {
    // x,y,w,h
    fill("#bada55")
    rect(x,height,this.width,this.height * -5)
  }
}

var dataLength = data.length;
var dataArr = [];

function setup() {
  for (var i = 0; i < dataLength; i++) {
    dataArr.push(new Adata(data[i]));
  }
  createCanvas(500,500);
}

function draw() {
  background('#333');
  for (var i = 0; i < dataArr.length; i++){
    dataArr[i].renderRect(i * 10)
  }

  fill("#fefefe")
  text("Intro text", 20, 100);
}
