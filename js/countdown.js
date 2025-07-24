const ONE_SECOND = 1000;

const counter = document.querySelector(".counter");
const counterInput = document.querySelector(".user-input");
const counterButton = document.querySelector(".counter-btn");
const bellSound = document.querySelector("#bell-sound");

counterInput.focus();

function getCounter(value) {
    return parseInt(value);
}

function pause(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds));
}

counterButton.addEventListener("click", async function () {
    let countDownFrom;
    if (counterInput.value == ""){
         countDownFrom = getCounter(counter.textContent);
    } else {
         countDownFrom = getCounter(counterInput.value);
    }
    
    counterInput.value = "";
    counterInput.style.display = "none";
    counterButton.style.display = "none";

    for (i = countDownFrom; i >= 0; i--) {
        counter.textContent = i;
        await pause(ONE_SECOND);
    }
    bellSound.play();
    counterInput.style.display = "block";
    counterButton.style.display = "block";
})

counterInput.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        counterButton.click();
    }
})






