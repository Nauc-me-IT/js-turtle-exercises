function square(length) {
  for (let i = 0; i < 4; i++) {
    forward(length);
    right(90);
  }
}

for (let i = 0; i < 4; i++) {
  square(50);
  forward(150);
  right(90);
}
