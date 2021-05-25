class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
        this.rank = null;
    }
// playerCOunt ------ reading from db, writing to the db
// updating the player details that we get from the form
    getCount(){
        var countref = database.ref('playercount')
        countref.on("value", function(data){
            playerCount = data.val()
        })
    }

    updateCount(count){
        var countref = database.ref('/')
        countref.update({
            playercount:count
        })
    }
    /* 
    players:    
        player1
            name: vrishan
        player2
            name:  sushma*/

    update(){
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set(
            {
                name: this.name,
                distance: this.distance,
                rank: this.rank
            }
        )       
    }
// normal functions, arrow functions, anonymous function
// static functions

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val()
        })
    }

    updateCarsAtEnd(rank){
        var ref = database.ref('/')
            ref.update({
                carsAtEnd:rank
            })

    }

    getCarsAtEnd(){
        var ref = database.ref('carsAtEnd')
        ref.on("value", function(data){
            carsAtEnd = data.val()
        })
    }

    
}