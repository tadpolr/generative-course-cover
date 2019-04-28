function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = angle / 2; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }

  endShape(CLOSE);
}

function hexagon(radius = 60, fill) {
  if (!fill) {
    noFill();
  }
  polygon(0, 0, radius, 6);
}

function getColors(color, number) {
  let colors = new Array(number);
  colors.fill(color);
  return colors;
}

function getPolygonXAxisWidth(radius, npoints) {
  const angle = TWO_PI / npoints;
  return radius * cos(angle / 2) * 2;
}

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
