class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState=data.val();
        });
    }
    update(state){
        database.ref("/").update({
            gameState:state
        });
    }
    start(){
        if(gameState===0){
            form=new Form();
            player=new Player();
            form.display();
            player.getCount();
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("Game Started",120,100);
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            var yPos=130;
            for(var i in allPlayers){
                if(i==="player"+player.index)
                fill("red")
                else
                fill("black")
                yPos+=20;
                textSize(15);
                text(allPlayers[i].name + ":" + allPlayers[i].distance,120,yPos);
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance+=50;
            player.update();
        }
    }
}