const NUMLIGHTS = 4;
let lights = Array(NUMLIGHTS);

function setup(){
    createCanvas(400,400);
    //Fill array with four stoplights
    for(let i = 0; i < NUMLIGHTS; i++){
        lights[i] = new StopLight(30*(2*i), 60);
    }
    
    //Display all of the stoplights
    for(let i = 0; i < NUMLIGHTS; i++){
        lights[i].display();
    }
    timeout();
}

function draw(){

}

function timeout(){
    //lights 0 2 -> green 1 3 -> red
    setTimeout(function(){
        stepOne();
        //lights 0 2 -> yellow
        setTimeout(function(){
            stepTwo();
            //lights 0 2 -> red 1 3 -> green
            setTimeout(function(){
                stepThree();
                //lights 1 3 -> yellow
                setTimeout(function(){
                    stepFour();
                    timeout();
                }, 5000);
            }, 3000);
        }, 5000);
    }, 1000);
}

//lights 0 2 -> green 1 3 -> red
function stepOne(){
    lights[0].displayGreen()
    lights[2].displayGreen()

    lights[1].displayRed();
    lights[3].displayRed();
}

//lights 0 2 -> yellow
function stepTwo(){
    lights[0].displayYellow();
    lights[2].displayYellow();
}

//lights 0 2 -> red 1 3 -> green
function stepThree(){
    lights[0].displayRed();
    lights[2].displayRed();

    lights[1].displayGreen();
    lights[3].displayGreen();
}

//lights 1 3 -> yellow
function stepFour(){
    lights[1].displayYellow();
    lights[3].displayYellow();
}

class StopLight{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    display(){
        fill(255);
        rect(this.x, this.y, 30, 90); //body
        fill(0,0,0);
        circle(this.x+15, this.y+15, 20); //red light
        circle(this.x+15, this.y+45, 20); //yellow light
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