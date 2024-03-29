function polygon(n, length) {
  for (let i = 0; i < n; i++) {
    forward(length);
    right(360 / n);
  }
}

for (let i = 0; i < 12; i++) {
  if (i % 2 == 0) {
    polygon(3, 30);
  } else {
    polygon(4, 30);
  }
  forward(30);
  right(360 / 12);
}
