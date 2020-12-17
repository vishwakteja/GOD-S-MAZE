var base, border1, boder2, boder3, boder4;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15;
var  wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25;

var victoryCup, victoryCupIMG, player1, player2, player1Image, player2Imag, player1Img, player2Img,
playerImg1 ,player1Img2;

function preload(){
player1Image=loadImage("player1.png")
player1Img=loadImage("player12.png")
playerImg1=loadImage("player13.png")
player1Img2=loadImage("player14.png")


player2Image=loadImage("player2.png")

}

function setup(){
base=firebase.database();
    createCanvas(1300, 600)
border1=createSprite(650, 50, 1100, 20)
border2=createSprite(650, 550, 1100, 20)
border3=createSprite(90, 300, 20, 520)
border4=createSprite(1210, 300, 20, 520)

wall1=createSprite(170, 130, 170, 10)

wall2=createSprite(245, 210, 10, 160)

wall3=createSprite(195, 280, 100, 10)

wall4=createSprite(320, 250, 10, 380)

wall5=createSprite(225, 380, 80, 80)

wall7=createSprite(245, 490, 300, 10)

wall8=createSprite(395, 300, 10, 350)

wall9=createSprite(495, 110, 200, 20)

wall10=createSprite(595, 190, 10, 130)

wall11=createSprite(695, 280, 10, 430)

wall12=createSprite(625,190, 50, 30 )

wall13=createSprite(740,480, 100, 10 )

wall14=createSprite(600, 350, 130, 70 )

wall15=createSprite(520, 490, 220, 20)

wall16=createSprite(505, 200, 60, 60)

wall17=createSprite(840, 320, 10, 430)

wall18=createSprite(948, 314, 200, 10)

wall19=createSprite(1050, 229, 10, 180)

wall20=createSprite(970, 144, 150, 10)

wall21=createSprite(960, 100, 260, 10)

wall22=createSprite(1095, 295, 10, 400)

wall23=createSprite(1170, 295, 30, 500)

wall24=createSprite(960, 104, 190, 10)

wall25=createSprite(960, 104, 190, 10)

victoryCup=createSprite(950, 230, 60, 60)


player1=createSprite(130, 75, 25, 25)
player1.addImage("player1", player1Image)
player1.scale=0.15

player2=createSprite(130, 107, 25, 25)
player2.addImage("player2", player2Image)
player2.scale=0.19
}
function draw(){
background("green")


text(mouseX+","+mouseY, 30, 30, mouseY )

if(keyIsDown(UP_ARROW)){
player1.y=player1.y-5
player1.addImage("player1", player1Img2)
}

if(keyIsDown(DOWN_ARROW)){
    player1.y=player1.y+5
    player1.addImage("player1", player1Img)
    }

    if(keyIsDown(RIGHT_ARROW)){
        player1.x=player1.x+5
        player1.addImage("player1", player1Image)
        }

        if(keyIsDown(LEFT_ARROW)){
            player1.x=player1.x-5
            player1.addImage("player1", playerImg1)
            }

drawSprites();
}
