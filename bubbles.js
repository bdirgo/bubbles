// let bubbles = [];

// function setup() {
//   createCanvas(600, 400);
// }

// function mouseDragged() {
//   let r = random(10, 50);
//   let b = new Bubble(mouseX, mouseY, r);
//   bubbles.push(b);
// }

// function draw() {
//   background(0);

//   for (let bubble of bubbles) {
//     bubble.move();
//     bubble.show();
//   }

//   for (let i = 0; i < bubbles.length; i++) {
//     bubbles[i].move();
//     bubbles[i].show();
//   }
// }

// class Bubble {
//   constructor(x, y, r) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//   }

//   move() {
//     this.x = this.x + random(-5, 5);
//     this.y = this.y + random(-5, 5);
//   }

//   show() {
//     stroke(255);
//     strokeWeight(4);
//     noFill();
//     ellipse(this.x, this.y, this.r * 2);
//   }
// }



// let numBalls = 13;
// let spring = 0.05;
// let gravity = 0.03;
// let friction = -0.9;
// let balls = [];

// function setup() {
//   createCanvas(720, 400);
//   for (let i = 0; i < numBalls; i++) {
//     balls[i] = new Ball(
//       random(width),
//       random(height),
//       random(30, 70),
//       i,
//       balls
//     );
//   }
//   noStroke();
//   fill(255, 204);
// }

// function draw() {
//   background(0);
//   balls.forEach(ball => {
//     ball.collide();
//     ball.move();
//     ball.display();
//   });
// }

// class Ball {
//   constructor(xin, yin, din, idin, oin) {
//     this.x = xin;
//     this.y = yin;
//     this.vx = 0;
//     this.vy = 0;
//     this.diameter = din;
//     this.id = idin;
//     this.others = oin;
//   }

//   collide() {
//     for (let i = this.id + 1; i < numBalls; i++) {
//       // console.log(others[i]);
//       let dx = this.others[i].x - this.x;
//       let dy = this.others[i].y - this.y;
//       let distance = sqrt(dx * dx + dy * dy);
//       let minDist = this.others[i].diameter / 2 + this.diameter / 2;
//       //   console.log(distance);
//       //console.log(minDist);
//       if (distance < minDist) {
//         //console.log("2");
//         let angle = atan2(dy, dx);
//         let targetX = this.x + cos(angle) * minDist;
//         let targetY = this.y + sin(angle) * minDist;
//         let ax = (targetX - this.others[i].x) * spring;
//         let ay = (targetY - this.others[i].y) * spring;
//         this.vx -= ax;
//         this.vy -= ay;
//         this.others[i].vx += ax;
//         this.others[i].vy += ay;
//       }
//     }
//   }

//   move() {
//     this.vy += gravity;
//     this.x += this.vx;
//     this.y += this.vy;
//     if (this.x + this.diameter / 2 > width) {
//       this.x = width - this.diameter / 2;
//       this.vx *= friction;
//     } else if (this.x - this.diameter / 2 < 0) {
//       this.x = this.diameter / 2;
//       this.vx *= friction;
//     }
//     if (this.y + this.diameter / 2 > height) {
//       this.y = height - this.diameter / 2;
//       this.vy *= friction;
//     } else if (this.y - this.diameter / 2 < 0) {
//       this.y = this.diameter / 2;
//       this.vy *= friction;
//     }
//   }

//   display() {
//     ellipse(this.x, this.y, this.diameter, this.diameter);
//   }
// }

let permissionGranted = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ios13DeviceOrientation();
}

function draw() {
  if (!permissionGranted) {
    return;
  }
  background(255);
  textSize(72);
  text(rotationX, 100, 100);
}