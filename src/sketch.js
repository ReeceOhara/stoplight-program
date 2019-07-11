const NUMLIGHTS = 4;
let lights = Array(NUMLIGHTS);

function setup(){
    createCanvas(400,400);
    //Fill array with four stoplights
    for(let i = 0; i < NUMLIGHTS; i++){
        lights[i] = new StopLight(30*(2*i), 60);
    }
    console.log(lights);
}

function draw(){
    //Display all of the stoplights
    for(let i = 0; i < NUMLIGHTS; i++){
        lights[i].display();
    }

    lights[0].displayYellow();
    lights[1].displayGreen();
    lights[NUMLIGHTS-1].displayRed();
}

class StopLight{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    display(){
        fill(255);
        rect(this.x, this.y, 30, 90); //body
        fill(255,0,0);
        circle(this.x+15, this.y+15, 20); //red light
        fill(255,255,153)
        circle(this.x+15, this.y+45, 20); //yellow light
        fill(0,255,0)
        circle(this.x+15, this.y+75, 20); //green light
    }
    displayGreen(){ //Shows only green light
        fill(0);
        circle(this.x+15, this.y+15, 20); //red light
        circle(this.x+15, this.y+45, 20); //yellow light
        fill(0,255,0);
        circle(this.x+15, this.y+75, 20); //green light
    }
    displayYellow(){ //Shows only yellow light
        fill(0);
        circle(this.x+15, this.y+15, 20); //red light
        circle(this.x+15, this.y+75, 20); //green light
        fill(255,255,153)
        circle(this.x+15, this.y+45, 20); //yellow light
    }
    displayRed(){ //Shows only red light
        fill(0);
        circle(this.x+15, this.y+45, 20); //yellow light
        circle(this.x+15, this.y+75, 20); //green light
        fill(255,0,0);
        circle(this.x+15, this.y+15, 20); //red light
    }
}