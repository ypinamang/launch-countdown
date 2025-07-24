const ONE_SECOND = 1000;

const counter = document.querySelector(".counter");
const counterInput = document.querySelector(".user-input");
const counterButton = document.querySelector(".counter-btn");

counterInput.focus();

function getCounter(value) {
    return parseInt(value);
}

function pause(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds));
}

counterButton.addEventListener("click", async function () {
    counterInput.value = "";
    let countDownFrom;
    if (counterInput.value == ""){
         countDownFrom = getCounter(counter.textContent);
    } else {
         countDownFrom = getCounter(counterInput.value);
    }

    for (i = countDownFrom; i > 0; i--) {
        counter.textContent = i - 1;
        await pause(ONE_SECOND);
    }
})









