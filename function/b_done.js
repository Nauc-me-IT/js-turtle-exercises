const triangle = function (length) {
  for (let i = 0; i < 3; i++) {
    forward(length);
    right(120);
  }
};

triangle(100);
forward(100);
triangle(100);
