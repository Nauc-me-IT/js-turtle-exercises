function polygon(n, length) {
  for (let i = 0; i < n; i++) {
    forward(length);
    left(360 / n);
  }
}

for (let i = 0; i < 12; i++) {
  if (i % 2 == 0) {
    polygon(4, 25);
  } else {
    polygon(5, 25);
  }
  forward(25);
  right(360 / 12);
}
