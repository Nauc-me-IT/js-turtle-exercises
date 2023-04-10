function square(length) {
  for (let i = 0; i < 4; i++) {
    forward(length);
    right(90);
  }
};

for (let i = 0; i < 10; i++) {
  square(i * 30);
}
