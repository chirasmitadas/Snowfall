class Snow{
 constructor(x, y,width, height) {
    var options = {
        density: 0.5,
        friction: 1
    }

    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height
    this.image = loadImage("snow4.webp");
    Matter.World.add(physicsWorld,this.body);
 }  
 display(){
     var position = this.body.position;
     imageMode(CENTER);
     image(this.image, position.x, position.y, this.width, this.height);
 }
}