// V3
// size: progressive
// position: depends on size
// color: random

function V3() {
  const COLUMN_COUNT = 5;
  const ROW_COUNT = 10;
  const RADIUS = 20;
  const STROKE_WEIGHT = 2;
  const STROKE_COLORS = [...getColors('transparent', 7), 'rgba(255,255,255,0.7)', ...COLOR_ARRAY];
  const FILL_COLORS = [...getColors('transparent', 7), 'rgba(255,255,255,0.7)', ...COLOR_ARRAY];
  const BG_COLOR = '#fff';
  // const OFFSET_MODULE_X = 0;
  const OFFSET_MODULE_Y = 0;
  const OFFSET_ROW_X = 0;
  // const OFFSET_ROW_Y = 0;

  function row(rad) {
    for (var a = 0; a < COLUMN_COUNT; a++) {
      stroke(random(STROKE_COLORS));
      strokeWeight(STROKE_WEIGHT);
      fill(random(FILL_COLORS));

      // If you want other shapes, put it here
      hexagon(rad, true);
      translate(getPolygonXAxisWidth(rad, 6), OFFSET_MODULE_Y);
    }
  }

  function rows() {
    for (var a = 0; a < ROW_COUNT; a++) {
      push();
      row(RADIUS * 2 * a);
      pop();
      translate(OFFSET_ROW_X, RADIUS * 2 * a);
    }
  }

  background(BG_COLOR);
  rows();
}
