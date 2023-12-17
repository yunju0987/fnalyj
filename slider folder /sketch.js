// One ParticleSystem
let emitter;
// One repeller
let repeller;
let attractors = [];

let slider;

function setup() {
  createCanvas(400, 400);

 
  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, 380);
  for (let i = 0; i < 6; i++) {
    // 다섯 개의 어트랙터를 생성 -> 배열에 추가
    attractors.push(new Attractor(random(width), random(height)));
  }
  slider = createSlider(0, 255);
  slider.position(10, 10);
  slider.size(100);
}

function draw() {
 
  let g = slider.value();
   background(187, 221, 247); // 하늘색 배경

  // 바다 부분
  fill(64, 120, 205); // 짙은 파란색
  noStroke();
  rect(0, 240, width, height / 2);
  repeller.setPower(mouseX);

  repeller.position.x = slider.value();

  emitter.addParticle();
  emitter.addParticle();
  emitter.addParticle();

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);

  emitter.applyRepeller(repeller);
  for (let attractor of attractors) {
    emitter.applyAttractor(attractor);
    attractor.show();
  }
  emitter.run();

  repeller.show();
  
}
