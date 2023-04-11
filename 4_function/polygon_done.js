function polygon(n, length) {
  for (let i = 0; i < n; i++) {
    forward(length);
    right(360 / n);
  }
}

polygon(3, 50);
polygon(4, 50);
polygon(5, 50);
polygon(6, 50);
