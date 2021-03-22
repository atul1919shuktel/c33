class BOX{
    constructor(x,y){
        
       

        var options ={
        density:1.5,
        restitution:0.9

        }
        
    
        this.body = Bodies.rectangle(x,y,40,40,options);
        World.add(world,this.body)
        
       this.width = 50
       this.height = 50

       }
       display(){
    
        var angle = this.body.angle

        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle);
        rectMode(CENTER);
        fill("blue")
        rect(0,0,this.width,this.height);
        
        
        pop()
        }
    }
    
    


    
    

