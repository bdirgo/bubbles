let spring = 0.03;
let gravity = 0.05;
let friction = -0.9;

class Ball {
  constructor(xin, yin, din, idin) {
    this.x = xin;
    this.y = yin;
    this.vx = 0;
    this.vy = 0;
    this.diameter = din;
    this.id = idin;
    this.shouldRender = true;
  }

  collide() {
    for (let i = this.id + 1; i < balls.length; i++) {
      const other = balls[i];
      if (other.shouldRender) {
        let dx = other.x - this.x;
        let dy = other.y - this.y;
        let distance = sqrt(dx * dx + dy * dy);
        let minDist = other.diameter / 2 + this.diameter / 2;
        if (distance < minDist) {
            let angle = atan2(dy, dx);
            let targetX = this.x + cos(angle) * minDist;
            let targetY = this.y + sin(angle) * minDist;
            let ax = (targetX - other.x) * spring;
            let ay = (targetY - other.y) * spring;
            this.vx -= ax;
            this.vy -= ay;
            other.vx += ax;
            other.vy += ay;
        }
        }
    }
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < (this.diameter / 2)) {
      return true;
    } else {
      return false;
    }
  }
  noRender() {
    this.shouldRender = false;
  }

  move() {
    const dx = constrain(rotationY, -5, 5);
    const dy = constrain(rotationX, -5, 5);
    if (dy > 0) {
      this.vy += gravity * dy;
    } else if (dy < 0) {
      this.vy -= gravity * dy;
    } else if (dx > 0) {
      this.vx += gravity * dx;
    } else if (dx < 0) {
      this.vx -= gravity * dx;
    } else {
      this.vy += gravity;
    }
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= friction;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= friction;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= friction;
    }
  }

  display() {
    if (this.shouldRender) {
      stroke(255);
      strokeWeight(4);
      fill(255, 204);
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }
}
