// V1
// size: random
// position: depends on size
// color: random
// rotate: depends on size

function V1() {
  const COLUMN_COUNT = 4;
  const ROW_COUNT = 6;
  const RADIUS = [90, 180, 360, 720, 1440];
  const STROKE_WEIGHT = [4, 8, 12];
  const COLOR = COLOR_ARRAY;
  const OFFSET_ROW_X = 104;
  const OFFSET_ROW_Y = 90;
  const BG_COLOR = '#fff';

  // Draw Hexagon or other polygon.
  function drawModule(radius, weight) {
    rotate(radius);
    stroke(random(COLOR));
    strokeWeight(weight);

    // If you want other shapes, put it here
    hexagon(radius);
  }

  function row() {
    const radius = random(RADIUS);
    const weight = random(STROKE_WEIGHT);

    for (var a = 0; a < COLUMN_COUNT; a++) {
      const offsetX = radius;

      drawModule(radius, weight);
      translate(offsetX, 0);
    }
  }

  function rows() {
    for (var a = 0; a < ROW_COUNT; a++) {
      push();
      row();
      pop();
      translate(OFFSET_ROW_X, OFFSET_ROW_Y);
    }
  }

  background(BG_COLOR);
  rows();
}
