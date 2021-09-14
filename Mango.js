class Mango{
    constructor(x,y,diameter){
        var options={
            isStatic:true,
            friction:2,
            restitution:0
        }
        this.body = Bodies.rectangle(x,y,diameter/2,diameter/2,options);
        this.diameter = diameter;
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
      
      push ()
        translate (pos.x,pos.y);
        rotate (this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.diameter,this.diameter);
        pop ()
    }
}