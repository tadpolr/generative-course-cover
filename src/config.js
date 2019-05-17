/*
 * V1Config
 *
 * There are 2 config types in V1
 * - row && column config
 *   - Configure row and column properties such as rowCount, columnCount and offset.
 * - elementConfig
 *   - Configure each element properties.
 *   - Each element will random values in each properties.
 *   - After rendered, the next element can be offset by add value of offsetModuleX and offsetModuleY
 *   - isVisiblePercent specify the percent that each element will be shown
 */
const V1Config = {
  // row && column config
  rowCount: 30,
  columnCount: 10,
  offsetColumn: null,
  offsetRow: 60,
  // element config
  radius: [60, 120, 240],
  strokeWeight: 2,
  strokeColor: [
    { value: '#FBAA19', count: 1 },
    { value: '#4C60F8', count: 1 },
    { value: '#0D123C', count: 1 },
  ],
  fillColor: [
    { value: '#FFFFFF', count: 3 },
    { value: '#FBAA19', count: 10 },
    { value: 'rgba(255,255,255,0.7)', count: 5 },
    { value: '#4C60F8', count: 2 },
    { value: '#0D123C', count: 2 },
  ],
  offsetModuleX: 0,
  offsetModuleY: 0,
  isVisiblePercent: 30,
};

/*
 * V2Config
 *
 * There are 4 elements in V2.
 * Each element has 5 properties that can be configured.
 * - size
 * - x-axis position(posX)
 * - y-axis position(posY)
 * - color
 * - visibility(isVisible)
 */
const V2Config = {
  defaultElement: {
    size: Math.random(),
    posX: { min: -CANVAS_SIZE.WIDTH / 2, max: CANVAS_SIZE.WIDTH / 2 },
    posY: { min: -CANVAS_SIZE.HEIGHT / 2, max: CANVAS_SIZE.HEIGHT / 2 },
    color: [
      '#fff', // white
      '#009fd6', // blue
      '#fdbb28', // yellow
      '#da004e', // pink
      '#da0809', // red
      '#007cc3', // dblue
      '#008236', // green
    ],
    isVisible: Math.random() < 0.8,
  },
  elements: {
    hStripes: {
      size: Math.random(),
      // posX: { min: 0, max: CANVAS_SIZE.WIDTH },
      // posY: { min: 0, max: CANVAS_SIZE.HEIGHT },
      // color: colors,
      isVisible: Math.random() < 0.8,
    },
    vStripes: {
      size: Math.random(),
      // posX: { min: 0, max: CANVAS_SIZE.WIDTH },
      // posY: { min: 0, max: CANVAS_SIZE.HEIGHT },
      // color: colors,
      isVisible: Math.random() < 0.8,
    },
    dStripes: {
      size: Math.random(),
      // posX: { min: 0, max: CANVAS_SIZE.WIDTH },
      // posY: { min: 0, max: CANVAS_SIZE.HEIGHT },
      // color: colors,
      isVisible: Math.random() < 0.8,
    },
    dots: {
      size: Math.random(),
      // posX: { min: 0, max: CANVAS_SIZE.WIDTH },
      // posY: { min: 0, max: CANVAS_SIZE.HEIGHT },
      // color: colors,
      isVisible: Math.random() < 0.8,
    },
  },
};

/*
 * V3Config
 *
 * There is one element type in V3.
 * It can have as many elements as you want.
 * Each element has 7 properties which can be configured differently.
 * - width
 * - height => If isCircle is true, height will be equal to width
 * - x-axis position(posX)
 * - y-axis position(posY)
 * - isCircle => If true, the element will always be a circle no matter how width and height it is. If false, the element can be a circle or an oval.
 * - strokeWeight
 * - strokeColor
 * Any elements or properties has no config, values from defaultElement will be applied.
 */
const V3Config = {
  defaultElement: {
    width: { min: 0, max: CANVAS_SIZE.WIDTH },
    height: { min: 0, max: CANVAS_SIZE.HEIGHT },
    posX: { min: 0, max: CANVAS_SIZE.WIDTH },
    posY: { min: 0, max: CANVAS_SIZE.HEIGHT },
    strokeWeight: 4,
    strokeColor: '#faa91a',
    isCircle: true,
  },
  elementCount: 3,
  elements: [
    {
      width: [200, 400, 600, 800],
      height: [200, 400, 600, 800],
      posX: { min: 0, max: CANVAS_SIZE.WIDTH },
      posY: { min: 0, max: CANVAS_SIZE.HEIGHT },
      isCircle: true,
      strokeWeight: 6,
      strokeColor: '#faa91a',
    },
    {
      width: 400,
      height: 300,
      posX: { min: 0, max: CANVAS_SIZE.WIDTH },
      posY: { min: 0, max: CANVAS_SIZE.HEIGHT },
      isCircle: true,
      strokeWeight: 6,
      strokeColor: '#4c60f8',
    },
    {
      width: { min: 200, max: 800 },
      height: 300,
      posX: { min: 0, max: CANVAS_SIZE.WIDTH },
      posY: { min: 0, max: CANVAS_SIZE.HEIGHT },
      isCircle: true,
      strokeWeight: 6,
      strokeColor: '#4c60f8',
    },
  ],
};
