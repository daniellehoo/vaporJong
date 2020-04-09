let david;
let windows;
let pedestal;
let arizona;

function preload() {
  david = loadImage("David_face.png");
  windows = loadImage("Windows.svg");
  pedestal = loadImage("pedestal.png");
  arizona = loadImage("can.png");
}

// setup is called once
// to do: figure out how blur is rendering
function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  drawBackground();
  windows.filter(BLUR, 3);
}

// draw redraws every frame
function draw() {
  const radius = windowWidth / 6;
  push();
  translate(0, Math.sin(millis() / 1000) * radius * .05);
  image(windows, radius * 0.6, windowHeight - radius * 1.9, radius, radius);
  pop();
  push();
  imageMode(CENTER);
  translate(windowWidth - radius * 1.25, radius * 1.25);
  rotate(millis() / 50);
  image(arizona, 0, 0, radius * 2, radius * 2);
  pop();
}

// to do: build out grid
function drawBackground() {
  background(color("#bc13fe"));

  const height = windowWidth / 3;
  const radius = height / 2;
  const centerX = windowWidth / 2;
  const centerY = windowHeight / 2;
  for (let y = -radius; y < radius; y++) {
    if (y >= 0 && y % 10 < (y * 8) / radius) {
      noStroke();
    } else {
      stroke(
        lerpColor(
          color("#FFFF44"),
          color("#ff1d8e"),
          (y + radius) / (radius * 2)
        )
      );
    }
    x = Math.sqrt(radius * radius - y * y);
    line(centerX - x, centerY + y, centerX + x, centerY + y);
  }

  image(david, 0, 0, radius, radius);
  image(pedestal, radius / 2, windowHeight - radius, radius, radius);
  rotate(180);
  image(david, -windowWidth, -windowHeight, radius, radius);
  rotate(180);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawBackground();
}

function mouseClicked() {
  textSize(72);
  text(randomTile(), mouseX, mouseY);
}

function randomTile() {
  const tiles = [];
  for (let codePoint = 0x1f000; codePoint < 0x1f02b; codePoint++) {
    tiles.push(String.fromCodePoint(codePoint));
  }
  const randomTile = tiles[Math.floor(Math.random() * tiles.length)];
  return randomTile;
}
