const polygon = function (n) {
  for (let i = 0; i < n; i++) {
    forward(100);
    right(360 / n);
  }
};

polygon(4);
forward(100);
right(30);
polygon(3);
