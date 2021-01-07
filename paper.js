class Paper {
    constructor(x, y, radius ) {
      var options = {
          'restitution':0.3,
          'friction':1,
          'density':1.2,
          isStatic:false
      }
      this.radius = radius;      
      this.x = x;      
      this.y = y;      
      this.body= Bodies.circle(this.x, this.y,(this.radius)/2,options);

      World.add(world, this.body);
    }
    display(){

var paperpos =this.body.position

       push()
     translate(paperpos.x,paperpos.y)
     fill("pink");
    ellipseMode(CENTER)  
    ellipse(0, 0, this.radius, this.radius)
    pop()
}
  }