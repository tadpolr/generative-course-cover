// V3
// Author: Tung

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

function V3() {
  const elements = getElements(null, v3Config());
  noFill();

  elements.forEach(e => {
    const { width, height, posX, posY, strokeWeight, strokeColor, isCircle } = e;
    noFill();
    drawEllipse(width, height, posX, posY, strokeWeight, strokeColor, isCircle);
  });
}
