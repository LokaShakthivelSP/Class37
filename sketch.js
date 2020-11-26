var ball;

var database,position;

function setup(){
    createCanvas(500,500);

    database=firebase.database();
    console.log("9");

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    console.log("13");
    database.ref("ball/position").on("value",readPos,showError);
        console.log("14");
}

function readPos(data){
        console.log("18");
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}

function showError(){
    console.log("Error");
}

function draw(){
    background("white");
        console.log("31");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
        x:position.x + x,
        y:position.y + y
    })
}
