function setup() {
  createCanvas(400, 400);
}


function draw() {
   
}

 function mouseDragged() {
   stroke(0); 
   strokeWeight(3); 
   line(pmouseX, pmouseY, mouseX, mouseY);
 }
