class Bob 
{
    constructor(x,y,r)
    {

        var options={
            isStatic : false,
            restitution : 0.3,
            friction : 0,
            density : 0.9

            }
        this.x=x;
        this.y=y;
        this.r=r;
       // this.image=loadImage("paper(1).png")
        this.body=Bodies.circle(x,y,r,options)
        World.add(world, this .body);
    }
    display()
    {
        var bobPos=this.body.position;

        push();
        translate(bobPos.x,bobPos.y);
        
       // stroke("red");
        fill("#ff0066");
        ellipseMode(RADIUS)
        ellipse(0, 0,this.r,this.r);
      //  imageMode(RADIUS);
       // image(this.image,0,0,this.r,this.r)
        pop();

    }
}