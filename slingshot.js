class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:1,
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);

    }
    fly(){
        this.sling.bodyA=null;
    }
    attatch(body){
        this.sling.bodyA=body;
    }

display(){
    if(this.sling.bodyA){
       var pointA=this.bodyA.position;
       var pointB=this.pointB;
       strokeWeight(4);
       line(pointA.x,pointA.y,pointB.x,pointB.y) 
    }

}

}