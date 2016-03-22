

var Adata = function(height) {
  this.height = height;
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
  background('#333')
  for (item in dataArr){
  }

  fill("#fefefe")
  text("Intro text", 250, 250);

}
