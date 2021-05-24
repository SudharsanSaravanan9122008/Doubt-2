class Slingshot{
    constructor(x,y,bodyA,image){
        this.bodyA = bodyA;
        var options = {
            bodyA: bodyA.body,
            pointB: {x: x, y: y},
            stiffness: 0.04,
            lenght:10
        }
        this.sling = Constraint.create(options);
        this.image = image;
    }
    launch(){
        this.sling.bodyA = null;
    }
    attach(){
        this.sling.bodyA = this.bodyA.body;
    }
    display(){
        var bodyAPos = this.sling.bodyA.position;
        var pointBPos = this.sling.pointB;

        line(bodyAPos.x, bodyAPos.y, pointBPos.x, pointBPos.y);
        imageMode(CENTRE);
        image(this.image, bodyAPos.x, bodyAPos.y)

    }
}