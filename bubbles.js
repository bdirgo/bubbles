let initialNumBalls = 25;
const BALL_WIDTH_MIN = 40
const BALL_WIDTH_MAX = 80;
let balls = [];
// ios13
let permissionGranted = false;
// don't move!
document.ontouchmove = function(event) {
    event.preventDefault();
}

function mousePressed() {
  for (let i = balls.length - 1; i >= 0; i--) {
    const ball = balls[i];
    if (ball.contains(mouseX, mouseY)) {
      balls.splice(i, 1);
    } else {
      // const b = new Ball(mouseX, mouseY, random(BALL_WIDTH_MIN, BALL_WIDTH_MAX), balls.length);
      // balls.push(b); // causes a billion balls to spawn XD
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ios13DeviceOrientation();
  background(0);
  // Initialize the bubble/balls
  for (let i = 0; i < initialNumBalls; i++) {
    balls[i] = new Ball(
      random(width),
      random(height),
      random(BALL_WIDTH_MIN, BALL_WIDTH_MAX),
      i
    );
  }
}

function draw() {
  if (!permissionGranted) {
    return;
  }
  background(0);

  balls.forEach(ball => {
    ball.collide();
    ball.move();
    ball.display();
  });
}