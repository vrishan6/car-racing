class Game{
    constructor(){}

    getState(){
        var gameStateref = database.ref('gamestate')
        gameStateref.on("value", function(data){
         gameState = data.val()
        })
    }

    update(state){
        var gameStateref = database.ref('/')
        gameStateref.update({
            gamestate:state
        })
    }
    //async function
    async start(){
        if(gameState === 0){            
            player = new Player()
            //player.getCount()
            var countRef = await database.ref('playercount').once("value")
            if(countRef.exists()){
                playerCount = countRef.val()
                player.getCount();
            }
            form = new Form()
            form.display()
            car1 = createSprite(200,displayHeight-50);
            car1.addImage(car1Img)
            car2 = createSprite(400,displayHeight-50);
            car2.addImage(car2Img)
            car3 = createSprite(600,displayHeight-50);
            car3.addImage(car3Img)
            car4 = createSprite(800,displayHeight-50);
            car4.addImage(car4Img)
            cars = [car1,car2,car3,car4]
            //console.log(cars)
            
        }
    }

    play(){
        form.hideElements();
        background(ground)
        //image(variable where image is loaded, x, y ,w ,h)
        //w = displayWidth -100, h = displayHeight * 5

        image(track, 100,-displayHeight*4, displayWidth-300, displayHeight*5)
        Player.getPlayerInfo()
        player.getCarsAtEnd()

        var vpos = 50
        var index = 0; //player.index, 1 car1 cars[0], 2 car2 cars[1]
        var x=200,y;
        for(var plr in allPlayers ){
            // 10 entries then you wil have 
            index = index + 1
            x = x + 175;
            y = displayHeight - allPlayers[plr].distance
            //cars[0] = car1, cars[1] = car2
            
            cars[index-1].x = x
            cars[index-1].y = y
           // text( allPlayers[plr]['name'] + ":" + allPlayers[plr]['distance'], 100,vpos)
            //player.index
            //vpos = vpos + 150
            if(player.index === index){
                //cars[index-1].shapeColor = "red"
                push()
                fill("yellow")
                ellipse(cars[index-1].x, cars[index-1].y,100,50)
                pop()
                camera.position.x = displayWidth/2
                camera.position.y = cars[index-1].y
            }
        
        }
 
        if(keyDown(UP_ARROW) && player.distance < 3700){
            player.distance = player.distance + 100
        }

        if(carsAtEnd === 4){
            gameState = 2;
        }
        // if  there is nothing in player.rank then only run the below condition
        // 2 - distance is 3700 and no rank still assigned
        if(player.distance >= 3700 && player.rank === null ){
            player.rank = carsAtEnd + 1
            player.updateCarsAtEnd(player.rank)
            console.log(player.rank)
        }

        player.update()
        drawSprites()
    }

    end(){
        background(ground)
        push()
        stroke("black")
        fill("black")
        textSize(20)
        var y = camera.y
        for(var p in allPlayers){
            text(allPlayers[p].name +   '  :   ' + allPlayers[p].rank, camera.x, y)
            y = y + 50
        }


        pop()
    }


}