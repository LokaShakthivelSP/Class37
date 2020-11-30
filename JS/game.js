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
}