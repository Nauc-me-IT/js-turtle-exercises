/*
Nakresli domeček!

Použitím příkazů
 -  forward(steps) - jdi dopředu určitý počet kroků
 -  right(angle) - zatoč doprava pod určitým úhlem
nakresli domeček, který se skládá ze čtverce a trojúhelníku.
Polygony mají hranu 100.

Uděláš to jednoduše. Doplň obecnou funkci polygon a uprav
její použití.
*/

function polygon(n) {
  for (let i = 0; i < n; i++) {
    right();
  }
}

polygon(4);
right(30);
polygon(3);
