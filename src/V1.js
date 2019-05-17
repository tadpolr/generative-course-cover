// V1
// Author: Ky

const parseV1Config = config => {
  const { strokeColor, fillColor, ...restConfig } = config || {};
  const reducer = (acc, curr) => {
    const { value, count } = curr || {};
    const currArr = [];
    for (let i = 0; i < count; i++) {
      currArr.push(value);
    }
    return [...currArr, ...acc];
  };
  const s = strokeColor.reduce(reducer, []);
  const f = fillColor.reduce(reducer, []);
  return { strokeColor: s, fillColor: f, ...restConfig };
};

const createShape = (shape, { sColor, sWeight, fillColor }) => {
  stroke(getValue(sColor));
  strokeWeight(getValue(sWeight));
  fill(getValue(fillColor));

  shape();
};

function V2() {
  const {
    rowCount,
    columnCount,
    radius,
    strokeWeight: sWeight,
    strokeColor: sColor,
    fillColor,
    offsetColumn,
    offsetRow,
    offsetModuleX,
    offsetModuleY,
    isVisiblePercent,
  } = parseV1Config(V1Config) || {};

  function row() {
    for (var a = 0; a < columnCount; a++) {
      const r = getValue(radius);

      if (Math.random() * 100 < isVisiblePercent) {
        createShape(() => hexagon(r, true), { sWeight, sColor, fillColor });
      }

      translate(offsetColumn || getPolygonXAxisWidth(r, 6), offsetModuleY);
    }
  }

  function rows() {
    for (var a = 0; a < rowCount; a++) {
      push();
      row();
      pop();
      translate(offsetModuleX, offsetRow || getValue(radius));
    }
  }
  rows();
}
