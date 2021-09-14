class Stone{
    constructor(x,y,diameter){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        
        }
        this.body = Bodies.circle(x,y,diameter/2,options);
        this.diameter = diameter;
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        noStroke();
        fill("red");
       
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.diameter,this.diameter);

    }

};