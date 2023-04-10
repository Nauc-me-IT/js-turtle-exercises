/*
Nakresli domeček!

Použitím příkazů
 -  forward(steps) - jdi dopředu určitý počet kroků
 -  right(angle) - zatoč doprava pod určitým úhlem
nakresli domeček, který se skládá ze čtverce a trojúhelníkové střechy. Obojí má hrany 100 kroků.

Uděláš to jednoduše. Uprav for cyklus a přidej ještě jeden.
*/

for (let i = 4; i > 0; i++) {
  forward(100);
  right(60);
}
forward(100);
right(30);
