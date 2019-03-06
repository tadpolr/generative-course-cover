// V4
// size: random
// position: depends on size
// color: random

function V4() {
  const COLUMN_COUNT = 30;
  const ROW_COUNT = 30;
  const RADIUS = [60, 120, 240];
  const STROKE_WEIGHT = 2;
  const STROKE_COLORS = [
    ...getColors('rgba(0,0,0,0)', 10),
    'rgba(255,255,255,0.7)',
    ...COLOR_ARRAY,
  ];
  const FILL_COLORS = [...getColors('rgba(0,0,0,0)', 10), 'rgba(255,255,255,0.7)', ...COLOR_ARRAY];
  const BG_COLOR = '#fff';
  // const OFFSET_MODULE_X = 0;
  const OFFSET_MODULE_Y = 0;
  const OFFSET_ROW_X = 0;
  // const OFFSET_ROW_Y = 0;

  function row() {
    for (var a = 0; a < COLUMN_COUNT; a++) {
      const radius = random(RADIUS);
      stroke(random(STROKE_COLORS));
      strokeWeight(STROKE_WEIGHT);
      fill(random(FILL_COLORS));

      // If you want other shapes, put it here
      hexagon(radius, true);
      translate(getPolygonXAxisWidth(radius, 6), OFFSET_MODULE_Y);
    }
  }

  function rows() {
    for (var a = 0; a < ROW_COUNT; a++) {
      push();
      row();
      pop();
      translate(OFFSET_ROW_X, random(RADIUS));
    }
  }
  background(BG_COLOR);
  rows();
}
