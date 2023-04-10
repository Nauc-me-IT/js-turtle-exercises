/*
Nakresli písmeno B!

Použitím příkazů
 -  forward(steps) - jdi dopředu určitý počet kroků
 -  right(angle) - zatoč doprava pod určitým úhlem
 nakresli písmeno B, které se skládá ze 2 trojúhelníků
 o hraně 50 kroků.

 Uděláš to jednoduše. Doplň funkci triangle, která nakreslí
 trojuhelník - bříško písmena B. Poté z toho poskládej písmeno B.
*/

function triangle(length) {
  for (let i = 0; i < 4; i++) {
    forward();
  }
}

triangle(50);
