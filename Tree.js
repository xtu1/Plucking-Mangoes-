class Tree {
    constructor(x,y,width,height){
        var options={
            isStatic:true

        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking mangoes/tree.png")
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push ();
        fill("white");
        noStroke();
      
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,400,this.height);
        pop ()
      }
    
};