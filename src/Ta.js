const colors = [
  '#fff', // white
  '#009fd6', // blue
  '#fdbb28', // yellow
  '#da004e', // pink
  '#da0809', // red
  '#007cc3', // dblue
  '#008236', // green
];

function Ta() {
  noLoop();
  background(random(colors));
  // background('#fff');
  drawHStripes(
    random(),
    random(width) - width * 0.5,
    random(height) - height * 0.5,
    random(colors),
    random() < 0.8
  );
  drawVStripes(
    random(),
    random(width) - width * 0.5,
    random(height) - height * 0.5,
    random(colors),
    random() < 0.8
  );
  drawDStripes(
    random(),
    random(width) - width * 0.5,
    random(height) - height * 0.5,
    random(colors),
    random() < 0.8
  );
  drawDots(
    random(),
    random(width) - width * 0.5,
    random(height) - height * 0.5,
    random(colors),
    random() < 0.8
  );
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
