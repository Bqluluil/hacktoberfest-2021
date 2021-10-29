const secondsHand = document.querySelector('.seconds');
const minutesHand = document.querySelector('.minutes');
const hoursHand = document.querySelector('.hours');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegree = ((seconds / 60) * 360) + 90;
    const minutesDegree = ((minutes / 60) * 360) + 90;
    const hoursDegree = ((hours / 24) * 360) + 90;

    if (secondsDegree >= 400 || secondsDegree >= 400 || secondsDegree >= 400) {
        secondsHand.removeAttribute("style");
    }

    console.log(secondsDegree);

    secondsHand.style.transform = `rotate(${secondsDegree}deg)`
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`

    console.log(now);
}

setInterval(setDate, 1000);
