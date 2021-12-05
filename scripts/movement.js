let egg = document.getElementById('egg');
let box = document.getElementById('box');
let isMoving = false;
let isPaused = false;

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
        if (posY > 780) {
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
        console.log('isPAused', isPaused)
        if(isPaused) {
            setTimeout(() => 
            {
                isPaused = false;
                box.style.backgroundColor = 'red';
            }, 1000)
        }
        if (!isPaused){
        currBoxPos = box.getBoundingClientRect();
        currEggPos = egg.getBoundingClientRect();
        if((currEggPos.left >= currBoxPos.left && currEggPos.right <= currBoxPos.right) && (currEggPos.top >= currBoxPos.top && currEggPos.bottom <= currBoxPos.bottom)){
            console.log('Catch!!!!');
            let score = document.getElementById('score');
            console.log('score, score')
            let points = Number(score.innerHTML);
            console.log('points', points);
            points = points + 1;
            score.innerHTML = points;
            console.log('new score', score);
            isPaused = true;
            box.style.backgroundColor = 'yellow';
        }

        if (boxPosX < 1800 ) {
        boxPosX = boxPosX + 1;
        } else {
            boxPosX = 0;
        }
        box.style.left = boxPosX + "px";
    }
    },20)
//}