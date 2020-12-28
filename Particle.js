class Particle{
constructor(x,y,radius){
    var options = {

        restitution:4,
    
      }
      this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);
       this.color=color(random(0,255), random(0,255), random(0,255));
        World.add(world,this.body);
}
display(){
    var pos =this.body.position;
    var angle = this.angle;
    push();
    translate(pos.x,pos.y);
    translate(angle)
    noStroke();
    fill(this.color);
    elipseMode(RADIUS);
    
    elipse(0,0,this.radius,this.radius);
    pop();
}
}
