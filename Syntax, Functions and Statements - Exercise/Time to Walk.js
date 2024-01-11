function walking(steps, stepLength, speed) {
    let distance = steps * stepLength;
    let rest = Math.floor(distance / 500);
    let speedInSec = speed / 3.6;
    let time = distance / speedInSec;
    time += rest * 60;
    let sec = Math.round(time % 60);
    let min = Math.floor(time / 60) % 60;
    let hour = Math.floor(time / 60 / 60);
    let secs = sec < 10 ? `0${sec}` : `${sec}`;
    let mins = min < 10 ? `0${min}` : `${min}`;
    let hours = hour < 10 ? `0${hour}` : `${hour}`;
    console.log(`${hours}:${mins}:${secs}`);
}
walking(2564, 0.70, 5.5)