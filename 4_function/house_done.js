function polygon(n) {
  for (let i = 0; i < n; i++) {
    forward(50);
    right(360 / n);
  }
}

polygon(4);
forward(50);
right(30);
polygon(3);
