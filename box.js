class Box {
    constructor(x,y,width,height){
    this.posX=x;
    this.posY=y;
    this.width=width;
    this.height=height;
    
    var options = {
        isStatic : true
    }

    this.body = Bodies.rectangle(this.posX, this.posY, this.width, this.height, options);
    World.add (world, this.body);
    }
    display() {
        var pos =this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
       
    }
}