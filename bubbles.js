// https://p5js.org/examples/motion-bouncy-bubbles.html
// And 
// https://www.youtube.com/watch?v=HerCR8bw_GE&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

let initialNumBalls = 12;
const BALL_WIDTH_MIN = 30;
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
    }
  }
  return false
}

function mouseDragged() {
  if (frameCount % 10 == 0) {
    const b = new Ball(
      mouseX,
      mouseY,
      random(BALL_WIDTH_MIN, BALL_WIDTH_MAX),
      balls.length - 1
    )
    balls.push(b)
  }
  return false
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