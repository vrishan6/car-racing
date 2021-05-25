var database;
var form, player, game;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var car1,car2
var cars = []
var carsAtEnd = 0
function preload(){
    car1Img = loadImage("images/car1.png")
    car2Img = loadImage("images/car2.png")
    car3Img = loadImage("images/car3.png")
    car4Img = loadImage("images/car4.png")
    track = loadImage("images/track.jpg")
    ground = loadImage("images/ground.png")
}

function setup(){    
    createCanvas(displayWidth-100,displayHeight-100)
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    if(playerCount === 4){
        game.update(1)
    }
    if(gameState ===1){
        clear()
        game.play();
    }
    else if(gameState === 2){
        clear()
        game.end();
    }

}