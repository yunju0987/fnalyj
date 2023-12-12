// One ParticleSystem
let emitter;
// One repeller
let repeller;
let att;

let slider;

function setup() {
  createCanvas(400, 400);

 
  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, 350);
  att = new Attractor(20, height / 2);

  slider = createSlider(0, 255);
  slider.position(10, 10);
  slider.size(80);
}

function draw() {
 
  let g = slider.value();
  background(g);

  repeller.setPower(mouseX);

  repeller.position.x = slider.value();

  emitter.addParticle();
  emitter.addParticle();
  emitter.addParticle();

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);

  emitter.applyRepeller(repeller);
  emitter.applyAttractor(att);
  emitter.run();

  repeller.show();
  att.show();
}
