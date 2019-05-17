function setup() {
  const canvas = createCanvas(CANVAS_SIZE.WIDTH, CANVAS_SIZE.HEIGHT);
  canvas.parent('sketch-holder');
  noLoop();
}

const drawOnce = type =>
  function draw() {
    background(getValue(BACKGROUND_COLOR));
    push();
    type();
    pop();
  };
