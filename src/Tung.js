// config type
//
// width, height, posX, posY, strokWeight:
// => number || object {min, max} || [values to random]
//
// strokeColor:
// => string || [values to random] (color in HEX)
//
// isCircle:
// => boolean
// => if true height = width

const tungConfig = {
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

const getElements = (type, config) => {
  const { defaultElement, elementCount, elements } = config || {};
  let newElements = [];
  for (let i = 0; i < elementCount; i++) {
    const currElement = elements[i] || {};
    const newElement = {};
    Object.keys(defaultElement).forEach(e => {
      newElement[e] = currElement[e] || defaultElement[e];
    });
    newElements.push(newElement);
  }
  return newElements;
};

const getValue = value => {
  if (Array.isArray(value)) {
    return random(value);
  } else if (typeof value === 'object') {
    const { min, max } = value;
    return random(min, max);
  } else {
    return value;
  }
};
const drawEllipse = (w, h, x, y, sWeight, sColor, isCircle) => {
  const width = getValue(w);
  const height = isCircle ? width : getValue(h);
  const posX = getValue(x);
  const posY = getValue(y);
  const stWeight = getValue(sWeight);
  const stColor = getValue(sColor);

  strokeWeight(stWeight);
  stroke(stColor);
  ellipse(posX, posY, width, height);
};

function Tung() {
  const elements = getElements(null, tungConfig);
  noFill();
  background(0);

  elements.forEach(e => {
    const { width, height, posX, posY, strokeWeight, strokeColor, isCircle } = e;
    noFill();
    drawEllipse(width, height, posX, posY, strokeWeight, strokeColor, isCircle);
  });
}
