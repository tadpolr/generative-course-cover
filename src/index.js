function setup() {
  const canvas = createCanvas(CANVAS_SIZE.WIDTH, CANVAS_SIZE.HEIGHT);
  canvas.parent('sketch-holder');
  noLoop();
}

function draw() {
  background(getValue(BACKGROUND_COLOR));
  push();

  // V1();
  // V2()
  // V3();
  // V4();
  Ta();
  // Tung();
  pop();
}
