class Attractor {
  constructor(x, y) {
    this.position = createVector(x, constrain(y, 280, 400));
    this.radius = random(16, 32);
    this.power = 150;
  }
  
  move(value) {
    this.position.y -= value;
  }
  
  setPower(value) {
    this.power = map(value, 0, width, -300, 300);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(200, 130, 50);
    circle(this.position.x, this.position.y, this.radius);
  }

  pull(particle) {
    //{!6 .code-wide} This is the same repel algorithm we used in Chapter 2: forces based on gravitational attraction.
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    let strength = this.power / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
