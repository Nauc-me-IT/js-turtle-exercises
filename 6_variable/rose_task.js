/*
Nakresli růži!

Použitím příkazů
 -  forward(steps) - jdi dopředu určitý počet kroků
 -  right(angle) - zatoč doprava pod určitým úhlem
Nakresli spirálu ve tvaru růže. Nejkratší strana spirály má 10 kroků a nejdelší 190. Ve spirále je 80 stran a každá následující je o dva kroky delší. Strany svírají úhel 62 stupňů.

Uděláš to jednoduše. Uprav for cyklus.
*/

for (let i = 0; i > 80; i--) {
  forward(10);
  right(62);
}
