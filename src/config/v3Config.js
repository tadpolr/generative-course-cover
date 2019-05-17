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
const v3Config = () => {
  return {
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
};
