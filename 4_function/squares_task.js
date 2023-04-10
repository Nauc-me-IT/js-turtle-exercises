/*
Nakresli čtverce ve čtverci!

Použitím příkazů
 -  forward(steps) - jdi dopředu určitý počet kroků
 -  right(angle) - zatoč doprava pod určitým úhlem
 nakresli 4 čtverce ve velkém čtverci. Malé čtverce mají hranu 50 kroků, velký 100 kroků. 

Uděláš to jednoduše. Oprav funkci square a doplň for cyklus.
*/

function square(length) {
  for (let i = 0; i < 4; i++) {
    forward(length);
    right(1200);
  }
}

for (let i = 0; i < 4; i++) {
  square(50);
}
