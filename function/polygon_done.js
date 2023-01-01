function polygon(n, length) {
  for (let i = 0; i < n; i++) {
    forward(length);
    right(360 / n);
  }
}

polygon(3, 100);
polygon(4, 100);
polygon(5, 100);
polygon(6, 100);
