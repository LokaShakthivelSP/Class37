class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;

    }
    getCount(){
        database.ref("playerCount").on("value",function(data){
            playerCount=data.val();
        })
    }
    update(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    static getPlayerInfo(){
        var playerIndex=database.ref("players")
        playerIndex.on("value",(data)=>{
            allPlayers=data.val();
        })
    }
}