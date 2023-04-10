/*
Nakresli kolo!

Použitím příkazů
 -  forward(steps) - jdi dopředu určitý počet kroků
 -  right(angle) - zatoč doprava pod určitým úhlem
 nakresli kolo pomocí čtverců a trojúhelníku. Střídají se čtverce a trojúhelníky. Dohromady kreslí 12-úhelník. Polygony mají hranu 80.

Uděláš to jednoduše. Doplň obecnou funkci polygon, která bere paramater n - úhel a length - délka hrany. A uprav funkci polygon. Pokud nevíš, jak upravit for cyklus, podívej se na dokumentaci MDN.
*/

function polygon(n, length) {
  for (let i = 0; i < n; i++) {
    right(360 / 5);
  }
}

for (let i = 0; i < 12; i++) {
  if (i % 2 == 0) {
  }
}
