class Player{
    constructor(){
        this.player;
        this.personWidth= 24;
        this.personHeight= 43;
        this.positionX= this.personWidth; 
        this.positionY= this.personHeight;
        this.step= 5; 
        this.maxWidth= 200;
        this.maxHeight= 200;
        this.personPositionX= 0;
        this.personPositionY= 0;
        this.keysLeft = 37;
        this.keysTop = 38;
        this.keysRight = 39;
        this.keysDown = 40;
        this.allWidth= ((-1)*600)+(this.personWidth*2)
        this.allHeight= ((-1)*600)+(this.personHeight*2)
        this.pageBeginingX= 0;
        this.pageBeginingY= 0;

    }
    setPlayer(id){
        this.player = document.getElementById(id);
    }

    getPosition(key){
        var playerLeftPos = this.player.offsetLeft;
        var playerTopPos = this.player.offsetTop;
        var playerPos;

        if(key == this.keysLeft){
            playerPos = playerLeftPos;
        }
        else if(key == this.keysTop){
            playerPos = playerTopPos;
        }
        else if(key == this.keysRight){
            playerPos = playerLeftPos + this.personWidth;
        }
        else if(key == this.keysDown){
            playerPos = playerTopPos + this.personHeight;
        }
        playerPos += (playerPos==0)? 0: this.step;
        return playerPos;
    }



    getCurrentCell(){
        var playerLeftPos = this.player.offsetLeft + (this.personWidth / 2);
        var playerTopPos = this.player.offsetTop + this.personHeight;
        var cellWidth = 50;
        var cellHeight = 50;
        var NbreOfCellsPerLine = 11;
        var cellLine = parseInt(playerTopPos/cellWidth);
        var cellColumn = parseInt(playerLeftPos/cellHeight);
        var cellIndex = cellLine * NbreOfCellsPerLine + cellColumn;
        return cellIndex
    }
    animate(e) {
        this.setPlayer("player");
        if (this.keysTop == e.keyCode) {
            this.moveUp();
        }
        if (this.keysLeft == e.keyCode) {
            this.moveLeft();
        }
        if (this.keysDown == e.keyCode) {
            this.moveDown();
        }
        if (this.keysRight == e.keyCode) {
            this.moveRight();
        }
    }

    moveplayer(x, y, z, way="u"){
        this.player.style.backgroundPosition = `-${x}px -${y}px`;
        if(way == "u" || way == "d"){
            this.player.style.top = `${-z}px`;
        }else if(way == "r" || way == "l"){
            this.player.style.left = `${-z}px`;
        }
    }
    moveUp(){
        this.positionY = this.personHeight*3;
        if (this.positionX < 96){
            this.positionX += this.personWidth;
        }
        else{
            this.positionX = 0;
        }
        if(this.personPositionY < this.pageBeginingY)
            this.personPositionY += this.step;
        this.moveplayer(this.positionX, this.positionY, this.personPositionY, "u")
    }
    moveDown(){
        this.positionY=0;
        if (this.positionX < 96){
            this.positionX += this.personWidth;
        }
        else{
            this.positionX = 0;
        }

        if(this.personPositionY>this.allHeight){
            this.personPositionY -= this.step;
        }
        this.moveplayer(this.positionX, this.positionY, this.personPositionY, "d")

    }
    moveLeft(){
        this.positionY=this.personHeight;
        if (this.positionX < 96)
        { this.positionX += this.personWidth; }
        else
        { this.positionX = 0; }
        if(this.personPositionX<this.pageBeginingY)
            this.personPositionX += this.step;

        this.moveplayer(this.positionX, this.positionY, this.personPositionX, "l")
        
    }
    moveRight(){
        this.positionY=this.personHeight*2;
        if (this.positionX < 96){
            this.positionX += this.personWidth;
        }
        else{
            this.positionX = 0;
        }
        if(this.personPositionX>this.allWidth)
            this.personPositionX -= this.step; 
        
        this.moveplayer(this.positionX, this.positionY, this.personPositionX, "r")

    }

}

var p = new Player();
