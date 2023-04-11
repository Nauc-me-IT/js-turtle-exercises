/*
Nakresli kytičku!

Použitím příkazů
 -  forward(steps) - jdi dopředu určitý počet kroků
 -  right(angle) - zatoč doprava pod určitým úhlem
 nakresli kytičku. Kytička se skládá z obdélníků, které
 opisují 8-úhelník. Kratší strana obdélníku má 25 kroků, delší 100.  

Uděláš to jednoduše. Uprav kód for cyklů.
*/

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 2; j++) {
    forward(25);
    right(80);
    forward(100);
  }
  forward(25);
}
