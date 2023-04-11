function square(length) {
  for (let i = 0; i < 4; i++) {
    forward(length);
    right(90);
  }
}

square(100);
forward(50);
right(90);
forward(50);
right(90);
square(100);
