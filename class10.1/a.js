var hit = false;
function draw() {
  background(255);
    rect(200,200,100,150);

    hit = collidePointRect(mouseX,mouseY,200,200,100,150);

    print("colliding? " + hit);

}