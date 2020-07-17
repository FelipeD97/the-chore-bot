
let doorImage1 = document.getElementById('door1'),
    doorImage2 = document.getElementById('door2'),
    doorImage3 = document.getElementById('door3'),
    botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg",
    beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg",
    spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg",
    numClosedDoors = 3,
    openDoor1,
    openDoor2,
    openDoor3,
    closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg",
    startButton = document.getElementById('start');

const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    }

    else {
        return false;
    }
}

const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    }

    else {
        return true;
    }
}

const playDoor = () => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver("win");
    }
}
    
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }

    else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
        openDoor1 = spaceDoorPath
    }

    else {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }

}

if (!isClicked(doorImage1)) {
    doorImage1.onclick = () => {
        doorImage1.src = openDoor1;
        playDoor();
    }
}

if (!isClicked(doorImage2)) {
    doorImage2.onclick = () => {
        doorImage2.src = openDoor2;
        playDoor();
    }
}


if (!isClicked(doorImage3)) {
    doorImage3.onclick = () => {
        doorImage3.src = openDoor3;
        playDoor();
    }
}

const gameOver = (status) => {
    if (status === "win") {
        startButton.innerHTML = "You win! Play again?";
    }
}

randomChoreDoorGenerator();