let david;
let windows;
let pedestal;
let arizona;
let tiles = [];
let tileImages = [];
const IMAGE_SIZE = 72;

class Tile {
  constructor(x, y, image) {
    this.position = createVector(x, y);
    this.velocity = createVector(randomGaussian(0, 5), 0);
    this.image = image;
  }

  update() {
    this.position.add(this.velocity);
    if (this.position.y > windowHeight - IMAGE_SIZE) {
      if (this.velocity.y > 5) {
        this.velocity.y *= -0.5;
        this.velocity.x *= 0.5;
      } else {
        this.velocity.x = 0;
      }
      this.position.y = windowHeight - IMAGE_SIZE;
    } else {
      this.velocity.add(createVector(0, 1));
    }
  }

  render() {
    image(this.image, this.position.x, this.position.y, IMAGE_SIZE, IMAGE_SIZE);
  }
}



function preload() {
  david = loadImage("David_face.png");
  windows = loadImage("Windows.svg");
  pedestal = loadImage("pedestal.png");
  arizona = loadImage("can.png");
  tileImages.push(loadImage("tileLibrary/dragons/mahjong-tile-red-dragon.png"));
  tileImages.push(loadImage("tileLibrary/dragons/mahjong-tile-white-dragon.png"));
  tileImages.push(loadImage("tileLibrary/dragons/mahjong-tile-green-dragon.png"));
  tileImages.push(loadImage("tileLibrary/flowers/mahjong-tile-chrysanthemum.png"));
  tileImages.push(loadImage("tileLibrary/flowers/mahjong-tile-bamboo.png"));
  tileImages.push(loadImage("tileLibrary/flowers/mahjong-tile-orchid.png"));
  tileImages.push(loadImage("tileLibrary/flowers/mahjong-tile-plum.png"));
  tileImages.push(loadImage("tileLibrary/seasons/mahjong-tile-summer.png"));
  tileImages.push(loadImage("tileLibrary/seasons/mahjong-tile-winter.png"));
  tileImages.push(loadImage("tileLibrary/seasons/mahjong-tile-spring.png"));
  tileImages.push(loadImage("tileLibrary/seasons/mahjong-tile-autumn.png"));
  tileImages.push(loadImage("tileLibrary/seasons/mahjong-tile-autumn.png"));
  tileImages.push(loadImage("tileLibrary/characters/mahjong-tile-one-of-characters.png"));
  tileImages.push(loadImage("tileLibrary/characters/mahjong-tile-two-of-characters.png"));
  tileImages.push(loadImage("tileLibrary/characters/mahjong-tile-three-of-characters.png"));
  tileImages.push(loadImage("tileLibrary/characters/mahjong-tile-four-of-characters.png"));
  tileImages.push(loadImage("tileLibrary/characters/mahjong-tile-five-of-characters.png"));
  tileImages.push(loadImage("tileLibrary/characters/mahjong-tile-six-of-characters.png"));
  tileImages.push(loadImage("tileLibrary/characters/mahjong-tile-seven-of-characters.png"));
  tileImages.push(loadImage("tileLibrary/characters/mahjong-tile-eight-of-characters.png"));
  tileImages.push(loadImage("tileLibrary/characters/mahjong-tile-nine-of-characters.png"));
  tileImages.push(loadImage("tileLibrary/circles/mahjong-tile-one-of-circles.png"));
  tileImages.push(loadImage("tileLibrary/circles/mahjong-tile-two-of-circles.png"));
  tileImages.push(loadImage("tileLibrary/circles/mahjong-tile-three-of-circles.png"));
  tileImages.push(loadImage("tileLibrary/circles/mahjong-tile-four-of-circles.png"));
  tileImages.push(loadImage("tileLibrary/circles/mahjong-tile-five-of-circles.png"));
  tileImages.push(loadImage("tileLibrary/circles/mahjong-tile-six-of-circles.png"));
  tileImages.push(loadImage("tileLibrary/circles/mahjong-tile-seven-of-circles.png"));
  tileImages.push(loadImage("tileLibrary/circles/mahjong-tile-eight-of-circles.png"));
  tileImages.push(loadImage("tileLibrary/circles/mahjong-tile-nine-of-circles.png"));
  tileImages.push(loadImage("tileLibrary/bamboos/mahjong-tile-one-of-bamboos.png"));
  tileImages.push(loadImage("tileLibrary/bamboos/mahjong-tile-two-of-bamboos.png"));
  tileImages.push(loadImage("tileLibrary/bamboos/mahjong-tile-three-of-bamboos.png"));
  tileImages.push(loadImage("tileLibrary/bamboos/mahjong-tile-four-of-bamboos.png"));
  tileImages.push(loadImage("tileLibrary/bamboos/mahjong-tile-five-of-bamboos.png"));
  tileImages.push(loadImage("tileLibrary/bamboos/mahjong-tile-six-of-bamboos.png"));
  tileImages.push(loadImage("tileLibrary/bamboos/mahjong-tile-seven-of-bamboos.png"));
  tileImages.push(loadImage("tileLibrary/bamboos/mahjong-tile-eight-of-bamboos.png"));
  tileImages.push(loadImage("tileLibrary/bamboos/mahjong-tile-nine-of-bamboos.png"));




  tileImages.push(loadImage("tileLibrary/mahjong-tile-joker.png"));
  tileImages.push(loadImage("tileLibrary/mahjong-tile-back.png"));



}

// setup is called once
// to do: figure out how blur is rendering
function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  drawBackground();
  textSize(72);
  windows.filter(BLUR, 3);
}

// draw redraws every frame
function draw() {
  const radius = windowWidth / 6;
  push();
  translate(0, Math.sin(millis() / 1000) * radius * 0.05);
  image(windows, radius * 0.6, windowHeight - radius * 1.9, radius, radius);
  pop();
  push();
  imageMode(CENTER);
  translate(windowWidth - radius * 1.25, radius * 1.25);
  rotate(millis() / 50);
  image(arizona, 0, 0, radius * 2, radius * 2);
  pop();
  for (tile of tiles) {
    tile.update();
    tile.render();
  }
}

function drawBackground() {
  background(color("#bc13fe"));

  const height = windowWidth / 3;
  const radius = height / 2;
  const centerX = windowWidth / 2;
  const centerY = windowHeight * 0.4;
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
  fill("#bc13fe");
  noStroke();
  rect(0, windowHeight * 0.6, windowWidth, windowHeight * 0.4);

  stroke("#07f2f1");
  strokeWeight(2);
  let y = windowHeight * 0.6;
  let spacing = 30;
  while (y < windowHeight) {
    line(0, y, windowWidth, y);
    y += spacing;
    spacing += 10;
  }
  let dx = 0;
  while (dx < windowWidth * 0.5) {
    line(
      windowWidth * 0.5 + dx,
      windowHeight * 0.6,
      windowWidth * 0.5 + dx * 3,
      windowHeight
    );
    line(
      windowWidth * 0.5 - dx,
      windowHeight * 0.6,
      windowWidth * 0.5 - dx * 3,
      windowHeight
    );
    dx += 100;
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
  tiles.push(new Tile(mouseX, mouseY, randomTile()));
}

function randomTile() {
  return tileImages[Math.floor(Math.random() * tileImages.length)];
}
