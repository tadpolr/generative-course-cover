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
const v2Config = () => {
  return {
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
};
