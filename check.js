function CompareCanvasWithImage() {
  const width = 300;
  const height = 300;

  const canvas = document.getElementById("turtlecanvas");
  const context = canvas.getContext("2d");
  const img1 = context.getImageData(0, 0, width, height);

  const canvas2 = document.getElementById("rescanvas");
  const context2 = canvas2.getContext("2d");
  const img2 = context2.getImageData(0, 0, width, height);

  const diffCanvas = document.getElementById("diffcanvas");
  const diffContext = diffCanvas.getContext("2d");
  const diff = diffContext.createImageData(width, height);

  const result = window.pixelmatch(
    img1.data,
    img2.data,
    diff.data,
    width,
    height
  );

  console.log(result);
  diffContext.putImageData(diff, 0, 0);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getPath() {
  return window.location.hash.substring(1).replace("|", "/");
}

const path = getPath();
setTargetCanvas("rescanvas");
width(3);
color("blue");
await import(`./${path}_done.js`);
await isDrawFinished();

setTargetCanvas("turtlecanvas");
setSpeed(200);
width(3);
color("blue");
await import(`./${path}_task.js`);
await isDrawFinished();

CompareCanvasWithImage();
