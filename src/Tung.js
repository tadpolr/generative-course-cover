var a;
function setup() {
  a = createCanvas(4961, 3508);
  noLoop();
}

const canvasWidth = 4961;
const canvasHeight = 3508;

const WIDTH_MULTIPLIER = canvasWidth / CANVAS_SIZE.WIDTH;
const HEIGHT_MULTIPLIER = canvasHeight / CANVAS_SIZE.HEIGHT;

function Tung() {
  noFill();
  background(0);
  strokeWeight(100 / WIDTH_MULTIPLIER);
  fill(design);
  fill(data);
  fill(biz);
  fill(Tech);
  //Design
  //  stroke(250,169,26);
  //  ellipse(random(width),random(height), 400, 400);
  //  ellipse(random(width),random(height), 300, 300);
  //Data
  //  stroke(76,96,248);
  //  ellipse(random(width),random(height), 100, 100);
  //  ellipse(random(width),random(height), 500, 500);
  //Bussiness
  //  stroke(75,226,139);
  //  ellipse(random(width),random(height), 200, 200);
  //  ellipse(random(width),random(height), 600, 600);
  //Tech
  //  stroke(253,68,107);
  //  ellipse(random(width),random(height), 400, 400);
  //  ellipse(random(width),random(height), 700, 700);
  grainFilter();
}

function grainFilter() {
  push();
  strokeWeight(3);
  noStroke();
  for (var i = 0; i < width - 1; i += 1) {
    for (var j = 0; j < height - 1; j += 1) {
      fill(random(145, 250), 25);
      //rect(i, j, 2, 2);
    }
  }
  pop();
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1')
    (design = stroke(250, 169, 26)),
      ellipse(random(width), random(height), 4000 / WIDTH_MULTIPLIER, 4000 / WIDTH_MULTIPLIER),
      ellipse(random(width), random(height), 3000 / WIDTH_MULTIPLIER, 3000 / WIDTH_MULTIPLIER);
  if (key == '2')
    (data = stroke(76, 96, 248)),
      ellipse(random(width), random(height), 1000 / WIDTH_MULTIPLIER, 1000 / WIDTH_MULTIPLIER),
      ellipse(random(width), random(height), 5000 / WIDTH_MULTIPLIER, 5000 / WIDTH_MULTIPLIER);

  if (key == '3')
    (biz = stroke(75, 226, 139)),
      ellipse(random(width), random(height), 2000 / WIDTH_MULTIPLIER, 2000 / WIDTH_MULTIPLIER),
      ellipse(random(width), random(height), 6000 / WIDTH_MULTIPLIER, 6000 / WIDTH_MULTIPLIER);

  if (key == '4')
    (tech = stroke(253, 68, 107)),
      ellipse(random(width), random(height), 4000 / WIDTH_MULTIPLIER, 4000 / WIDTH_MULTIPLIER);
  ellipse(random(width), random(height), 3000 / WIDTH_MULTIPLIER, 3000 / WIDTH_MULTIPLIER);
}
