const ONE_SECOND = 1000;
const counter = document.querySelector(".counter");

const clapSound = document.querySelector("#clap-sound");

counter.addEventListener("click", performCountDown);


function getCounterValue(counter) {
    return parseInt(counter.textContent);
}

const numberInSeconds = getCounterValue(counter);

function pause(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds));
}

async function performCountDown() {
    for (let i = numberInSeconds; i > 0; i--) {
        counter.textContent = i;
        await pause(ONE_SECOND);
        
    }
    clapSound.play();
}








