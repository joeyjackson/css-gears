const FAST_SPEED = 20;
const SLOW_SPEED = 10;
const SPIN_CLOCKWISE_CLASS = "spin-clockwise";
const SPIN_COUNTER_CLOCKWISE_CLASS = "spin-counterclockwise";
const RED_BUTTON_SVG = "assets/svg/red_button.svg";
const GREEN_BUTTON_SVG = "assets/svg/green_button.svg";
const SPEED_CSS_VAR = "--speed";

const gear1 = document.getElementById("gear-1");
const gear2 = document.getElementById("gear-2");
const gear3 = document.getElementById("gear-3");
const gear4 = document.getElementById("gear-4");
const gear5 = document.getElementById("gear-5");
const gear6 = document.getElementById("gear-6");

let isClockwise1346 = true;
let isFast = false;

const root = document.documentElement;
const button = document.getElementById("button");

function toggleDirection() {
    isClockwise1346 = !isClockwise1346;
    if (isClockwise1346) {
        gear1.className = SPIN_CLOCKWISE_CLASS;
        gear2.className = SPIN_COUNTER_CLOCKWISE_CLASS;
        gear3.className = SPIN_CLOCKWISE_CLASS;
        gear4.className = SPIN_CLOCKWISE_CLASS;
        gear5.className = SPIN_COUNTER_CLOCKWISE_CLASS;
        gear6.className = SPIN_CLOCKWISE_CLASS;
    } else {
        gear1.className = SPIN_COUNTER_CLOCKWISE_CLASS;
        gear2.className = SPIN_CLOCKWISE_CLASS;
        gear3.className = SPIN_COUNTER_CLOCKWISE_CLASS;
        gear4.className = SPIN_COUNTER_CLOCKWISE_CLASS;
        gear5.className = SPIN_CLOCKWISE_CLASS;
        gear6.className = SPIN_COUNTER_CLOCKWISE_CLASS;
    }
}

function toggleSpeed() {
    isFast = !isFast;
    if (isFast) {
        root.style.setProperty(SPEED_CSS_VAR, FAST_SPEED);
        button.src = RED_BUTTON_SVG;
    } else {
        root.style.setProperty(SPEED_CSS_VAR, SLOW_SPEED);
        button.src = GREEN_BUTTON_SVG;
    }
}

setInterval(toggleDirection, 16000);
button.addEventListener("click", toggleSpeed);