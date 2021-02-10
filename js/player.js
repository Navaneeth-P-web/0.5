class Player {
    constructor(){
        this.index = null
        this.distance = 0
        this.name = null
    }
    getCount(){
        var PlayerCount2 = database.ref('playerCount')
        PlayerCount2.on("value",function(data){
            playerCount = data.val()
        }) 
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        }) 
    }
}