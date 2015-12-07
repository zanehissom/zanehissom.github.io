const MIN_VOLUME = .05;
const MAX_VOLUME = 1.5;

var xpos = 1;
var xMove = 2;
var sFactor = 3;
var drone;
var panAmt;
var volumeAmt;

function preload(){
    createCanvas(windowWidth,windowHeight);
    sleep(9000);
    drone = loadSound('sound/Drone.wav');
}

function setup()
{
    // set canvas size

    drone.loop();
}

function draw() {
    // clear background
    background(0,0,0,0);
    noStroke();

    // set the fill color
    fill(255, 0, 0);
    // black outline
    stroke(0);

    // set the ellipse mode
    ellipseMode(CENTER);

    // increment x variable
    xpos = xpos + xMove;

    // if the circle moves off screen, reset it's position
    if (xpos > width) {
        xMove = -2;
    }else if(xpos < 0){
        xMove = 2;
    }

    if(xpos < width/2) {
        sFactor -= 0.01;
        if(sFactor <= 0){
            sFactor = 0;
        }
    } else {
        sFactor += 0.01;
    }

    updateSoundParams();

    // draw a circle
    ellipse(xpos, height / 2, 25 * sFactor, 25 * sFactor);

    if(responses[0]){
        var macIndex = 0;
        for(var i = 0; i < responses.length; i++){
            if(responses[i].deviceID == 2081286){
                macIndex = i;
            }
        }
        var numOfMacBookCircles = responses[macIndex].checkedout;
        var macXPos = 20;
        //console.log(numOfMacBookCircles);
        for(var i = 0; i < numOfMacBookCircles; i++){
            ellipse(macXPos, 100, 20, 20);
            macXPos += 20;
        }
    }



}

function updateSoundParams(){
    panAmt = map(xpos, 0, width, -1, 1);
    drone.pan(panAmt);

    volumeAmt = map(sFactor, 0, 7, MIN_VOLUME, MAX_VOLUME);
    drone.setVolume(volumeAmt);
}

function sleep(milliseconds) {
                var start = new Date().getTime();
                for (var i = 0; i < 1e7; i++) {
                    if ((new Date().getTime() - start) > milliseconds){
                        break;
                    }
                }
}
