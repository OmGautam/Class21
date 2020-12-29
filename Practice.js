if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y < movingRect.height + fixedRect.height/2){
        fixedRect.shapeColor = "red";
        movingRect.shapeColor = "red";
    }