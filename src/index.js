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
  initDrawButtons();
  initConfiguration();
  initColorPicker();
};

function initDrawButtons() {
  const drawV1Button = document.getElementById('drawV1Button');
  drawV1Button.addEventListener('click', drawOnce(V1));
  const drawV2Button = document.getElementById('drawV2Button');
  drawV2Button.addEventListener('click', drawOnce(V2));
  const drawV3Button = document.getElementById('drawV3Button');
  drawV3Button.addEventListener('click', drawOnce(V3));
}

function setColorInput(id, color) {
  const bgColorInput = document.getElementById(id);
  bgColorInput.value = color;
}

function initConfiguration() {
  const updateSettingButton = document.getElementById('update');
  setColorInput('bgColor', BACKGROUND_COLOR);
  const widthInput = document.getElementById('width');
  const heightInput = document.getElementById('height');
  widthInput.value = CANVAS_SIZE.WIDTH;
  heightInput.value = CANVAS_SIZE.HEIGHT;
  updateSettingButton.addEventListener('click', () => {
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const bgColorInput = document.getElementById('bgColor');
    CANVAS_SIZE.WIDTH = parseInt(widthInput.value, 10);
    CANVAS_SIZE.HEIGHT = parseInt(heightInput.value, 10);
    BACKGROUND_COLOR = bgColorInput.value;
    setup();
  });
}

function initColorPicker() {
  const pickr = Pickr.create({
    el: '.color-picker',
    components: {
      // Main components
      preview: true,
      opacity: false,
      hue: true,
      inline: true,
      default: BACKGROUND_COLOR,
      useAsButton: true,

      // Input / output Options
      interaction: {
        hex: true,
        save: true,
        input: true,
        clear: false,
      },
    },
  });
  pickr
    .on('init', picker => {
      picker.setColor(BACKGROUND_COLOR);
    })
    .on('save', color => {
      const hexStr = color.toHEXA().toString();
      setColorInput('bgColor', hexStr);
    });
}
