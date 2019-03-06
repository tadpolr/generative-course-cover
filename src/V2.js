// V2
// size: fixed
// position: fixed
// color: random

function V2() {
  const COLUMN_COUNT = 30;
  const ROW_COUNT = 30;
  const RADIUS = 60;
  const STROKE_WEIGHT = 2;
  const STROKE_COLORS = COLOR_ARRAY;
  const FILL_COLORS = [...getColors('transparent', 10), 'rgba(255,255,255,0.7)', ...COLOR_ARRAY];
  const BG_COLOR = '#fff';
  const OFFSET_MODULE_X = getPolygonXAxisWidth(RADIUS, 6) + STROKE_WEIGHT;
  const OFFSET_MODULE_Y = 0;
  const OFFSET_ROW_X = 0;
  const OFFSET_ROW_Y = 120 + STROKE_WEIGHT;

  function row() {
    for (var a = 0; a < COLUMN_COUNT; a++) {
      const fillColor = random(FILL_COLORS);
      const strokeColor = fillColor === 'transparent' ? 'transparent' : random(STROKE_COLORS);

      stroke(strokeColor);
      strokeWeight(STROKE_WEIGHT);
      fill(fillColor);

      // If you want other shapes, put it here
      hexagon(RADIUS, true);
      translate(OFFSET_MODULE_X, OFFSET_MODULE_Y);
    }
  }

  function rows() {
    for (var a = 0; a < ROW_COUNT; a++) {
      push();
      row(random(COLOR_ARRAY));
      pop();
      translate(OFFSET_ROW_X, OFFSET_ROW_Y);
    }
  }

  background(BG_COLOR);
  rows();
}
