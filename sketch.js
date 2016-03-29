var Adata = function(localHeight){
  this.height = localHeight;
  this.width = 10;
  this.dramaticHeight =this.height * 5;
  this.x;
  
  var circleWidth = this.width * 2;
  
  this.circlePosnX = function(x){
    return x +(this.width/2)
  };
  
  this.figureOutRect = function(x){
    rectObject = {}
    rectObject.x = x;
    rectObject.y = height - this.dramaticHeight;
    rectObject.width = this.width;
    rectObject.height = this.dramaticHeight;
    return rectObject;
  }
  
  this.renderRect = function(ourRectObject){
    fill("#bada55")
    rect(ourRectObject.x,ourRectObject.y,ourRectObject.width,ourRectObject.height);
  };
  
  this.renderCircleTop = function(x){
    fill("hotpink");
    ellipse(this.circlePosnX(x), height - this.dramaticHeight, circleWidth, circleWidth);
  };
 
  
  this.isMouseOnCircle = function(x){
    if(collidePointCircle(this.circlePosnX(x), height - this.dramaticHeight, circleWidth, circleWidth, mouseX, mouseY, 0)){
     dataValueText = this.height
    }
  };
  
  this.isMouseOnRect = function(ourRectObject){
    if(collidePointRect(mouseX,mouseY,ourRectObject.x,ourRectObject.y,ourRectObject.width,ourRectObject.height)){
     dataValueText = this.height
    }
  };
  
  this.render = function(i) {
    this.x = i * 10;
    var ourRect = this.figureOutRect(this.x);
    this.renderRect(ourRect);
    this.renderCircleTop(this.x);
    this.isMouseOnCircle(this.x);
    this.isMouseOnRect(ourRect);
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
    
  //  hit = collidePointRect(mouseX,mouseY,x,height,this.width,this.dramaticHeight);
    
  //  if(hit){
	//	  dataValueText = this.height
  //  }
  }  
  
  fill("#fefefe");
  textSize(22);
  text(dataValueText, 20,100);
}