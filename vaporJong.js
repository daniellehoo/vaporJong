let david;
let windows;
function preload(){
    david = loadImage('David_face.png');
    windows = loadImage('Windows.svg');
}

function setup() {
    angleMode(DEGREES);
    createCanvas(windowWidth, windowHeight);
    background(color('#bc13fe'));
    noLoop();
}

function draw() {
    const height = windowWidth / 3;
    const radius = height / 2;
    const centerX = windowWidth / 2;
    const centerY = windowHeight / 2;
    for(let y = - radius; y < radius; y++) {
        if (y >= 0 && y % 10 < y * 8 / radius) {
            noStroke();
        } else {
            stroke(lerpColor(color("#FFFF44"), color("#ff1d8e"), (y + radius) / (radius * 2 )));
        }
        x = Math.sqrt(radius * radius - y * y);
        line(centerX - x, centerY + y, centerX + x, centerY + y);
    }
    // rect(0, 0, radius, radius);
    windows.filter(BLUR, 5);
    image(david, 0, 0, radius, radius);
    image(windows, windowWidth - radius, 0, radius, radius);
    rotate(180);
    image(david, - windowWidth, - windowHeight, radius, radius)
}