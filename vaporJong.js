function setup() {
    createCanvas(windowWidth, windowHeight);
    background(color('#bc13fe'));
    noLoop();
}

function draw() {
    stroke(color('yellow'));
    const height = windowWidth / 4;
    const radius = windowWidth / 8;
    const centerX = windowWidth / 2;
    const centerY = windowHeight / 2;
    for(let y = - height / 2; y < height / 2; y++) {
        x = Math.sqrt(radius * radius - y * y);
        line(centerX - x, centerY + y, centerX + x, centerY + y);
    }
    //ellipse(windowWidth / 2, windowHeight / 2, windowWidth / 4);
}