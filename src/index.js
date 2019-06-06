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

window.onload = function() {
  const drawV1Button = document.getElementById('drawV1Button');
  drawV1Button.addEventListener('click', drawOnce(V1));
  const drawV2Button = document.getElementById('drawV2Button');
  drawV2Button.addEventListener('click', drawOnce(V2));
  const drawV3Button = document.getElementById('drawV3Button');
  drawV3Button.addEventListener('click', drawOnce(V3));
  const updateSettingButton = document.getElementById('update');
  updateSettingButton.addEventListener('click', () => {
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const colorInput = document.getElementById('color');
    CANVAS_SIZE.WIDTH = parseInt(widthInput.value, 10);
    CANVAS_SIZE.HEIGHT = parseInt(heightInput.value, 10);
    BACKGROUND_COLOR = colorInput.value;
    setup();
  });
};
