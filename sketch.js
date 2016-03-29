var Adata = function(localHeight){
  this.height = localHeight;
  this.width = 10;
  this.dramaticHeight =this.height * -5;
  this.x;
  
  var circleWidth = this.width * 2;
  
  this.renderRect = function(x){
    fill("#bada55")
    rect(x,height,this.width,this.dramaticHeight);
  };
  
  this.renderCircleTop = function(x){
    fill("hotpink");
    ellipse(x + (this.width/2), height + this.dramaticHeight, circleWidth, circleWidth);
  };
 
  
  this.isMouseCloseToCircle = function(posnX, posnY){
    if( dist(posnX, posnY, this.x, height+this.dramaticHeight) < circleWidth){
     dataValueText = this.height
    }
  };
  
  this.render = function(i) {
    this.x = i * 10;
    this.renderRect(this.x);
    this.renderCircleTop(this.x);
    this.isMouseCloseToCircle(mouseX, mouseY);
  };
}

var dataLength = data.length;
var dataArr = [];
var dataArrLength;
var dataValueText = "Hover over match stick head to see values"



function setup() {
  for (var i = 0; i<dataLength; i++){
    dataArr.push(new Adata(data[i]));
  }
  createCanvas(500,500);
  dataArrLength = dataArr.length;
}



function draw() {
  background('#333');
  for (var i=0; i<dataArrLength; i++){
    dataArr[i].render(i);
    
    hit = collidePointRect(mouseX,mouseY,x,height,this.width,this.dramaticHeight);
    
    if(hit){
		  dataValueText = this.height
    }
  }  
  
  fill("#fefefe");
  textSize(22);
  text(dataValueText, 20,100);
}