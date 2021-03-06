// V2
// Author: Ta

const parseV2Config = config => {
  const { elements, defaultElement } = config || {};
  const newElements = {};
  for (key in elements) {
    const { size: s, posX: x, posY: y, color: col, isVisible: visible } = elements[key];
    const newElement = {
      size: getValue(s) || getValue(defaultElement.size),
      posX: getValue(x) || getValue(defaultElement.posX),
      posY: getValue(y) || getValue(defaultElement.posY),
      color: getValue(col) || getValue(defaultElement.color),
      isVisible: visible !== null && visible !== undefined ? visible : defaultElement.isVisible,
    };
    newElements[key] = newElement;
  }
  return newElements;
};

function V2() {
  noLoop();
  const { hStripes, vStripes, dStripes, dots } = parseV2Config(v2Config()) || {};
  drawHStripes(hStripes.size, hStripes.posX, hStripes.posY, hStripes.color, hStripes.isVisible);
  drawVStripes(vStripes.size, vStripes.posX, vStripes.posY, vStripes.color, vStripes.isVisible);
  drawDStripes(dStripes.size, dStripes.posX, dStripes.posY, dStripes.color, dStripes.isVisible);
  drawDots(dots.size, dots.posX, dots.posY, dots.color, dots.isVisible);
}

function drawHStripes(size, posX, posY, col, isVisible) {
  if (!isVisible) return;
  fill(col);
  noStroke();
  const height = 100 * size;
  for (let i = 0; i < 5; i++) {
    rect(posX, posY + i * height * 2, height * 10, height);
  }
}

function drawVStripes(size, posX, posY, col, isVisible) {
  if (!isVisible) return;
  fill(col);
  noStroke();
  const width = 100 * size;
  for (let i = 0; i < 5; i++) {
    rect(posX + i * width * 2, posY, width, width * 10);
  }
}

function drawDStripes(size, posX, posY, col, isVisible) {
  if (!isVisible) return;
  fill(col);
  noStroke();
  const width = 100 * 1.414 * size;
  const n = 7; // odd number only
  for (let i = 0; i < n / 2; i++) {
    quad(
      posX + width * i * 2,
      posY,
      posX + width * (i * 2 + 1),
      posY,
      posX,
      posY + width * (i * 2 + 1),
      posX,
      posY + width * i * 2
    );
  }
  for (let i = 0; i < n / 2 - 1; i++) {
    quad(
      posX + width * n,
      posY + width * (i * 2 + 1),
      posX + width * n,
      posY + width * (i * 2 + 2),
      posX + width * (i * 2 + 2),
      posY + width * n,
      posX + width * (i * 2 + 1),
      posY + width * n
    );
  }
}

function drawDots(size, posX, posY, col, isVisible) {
  if (!isVisible) return;
  fill(col);
  noStroke();
  const radius = 100 * size;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      ellipse(posX + (i + 0.5) * radius * 2, posY + (j + 0.5) * radius * 2, radius);
    }
  }
}
