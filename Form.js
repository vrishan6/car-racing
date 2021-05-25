class Form{
    constructor(){
        this.title = createElement('h2')
        this.input = createInput("Name")
        this.button = createButton("Play")
        this.greeting = createElement('h3')
        this.reset = createButton('RESET')
    }

    hideElements(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        
        this.title.html("Car Racing Game")
        this.title.position(displayWidth/2-150,10)
        this.reset.position(20,20)
        
        this.input.position(displayWidth/2-150,displayHeight/2)
        this.button.position(displayWidth/2-50,displayHeight/2+200)
        // this keyword will represent or bind to the class that the function is calling
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value()

            playerCount = playerCount + 1
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)

           
            this.greeting.html(player.name)
            this.greeting.position(displayWidth/2-150,displayHeight/2)

        })  
        
        
        this.reset.mousePressed(()=>{
           
                var ref = database.ref('/')
                ref.set({
                    playercount:0,
                    gamestate:0,
                    carsAtEnd:0,
                })
        })
    
    }
}
