let egg = document.getElementById('egg');
let box = document.getElementById('box');
let isMoving = false;

egg.addEventListener('mousedown',initialClick)
document.addEventListener('dblclick',freeFall)

//box.addEventListener('load', moveBox);

function initialClick(e){
    if(isMoving){
        isMoving = !isMoving;
        document.removeEventListener('mousemove',move);
        return;
    }

    isMoving = !isMoving;
    image = this;

    document.addEventListener("mousemove",move);
}

function move(e){

    let posX = e.clientX - 50;
    //let posY = e.clientY - 50;

    image.style.left = posX + "px";
   // image.style.top = posY + 'px';
}

function freeFall(e){
    let posY = 50;
    document.removeEventListener('mousemove', move)
    let refershId = setInterval(function() {
        posY = posY + 5;
        egg.style.top = posY + "px";
        /*
        currBoxPos = box.getBoundingClientRect();
        currEggPos = egg.getBoundingClientRect();
        if(currEggPos.left == currBoxPos.left){
            console.log('Catch!!!!');
        }
        */
        if (posY > 1000) {
            posY = 50;
            egg.style.top = posY + "px";
            clearInterval(refershId);
        }
    }, 10)
}

//function moveBox(e){
    let boxPosX = 0;
    console.log("inside move Box");
    setInterval(function(){

        currBoxPos = box.getBoundingClientRect();
        currEggPos = egg.getBoundingClientRect();
        if(currEggPos.left == currBoxPos.left){
            console.log('Catch!!!!');
        }

        if (boxPosX < 1800 ) {
        boxPosX = boxPosX + 1;
        } else {
            boxPosX = 0;
        }
        box.style.left = boxPosX + "px";
    },20)
//}