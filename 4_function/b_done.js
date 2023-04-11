function triangle(length) {
  for (let i = 0; i < 3; i++) {
    forward(length);
    right(120);
  }
}

triangle(50);
forward(50);
triangle(50);
