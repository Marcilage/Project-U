// as "datas json":

/*  Mob: Goblin lvl: 1 - slots de drops 10
drops

Espada de Madeira (comum) 5/10 (50%)
Espada de Madeira (Incomum) 3/10 (33%)
Dente pequeno de Goblin 2/10 (20%)

*/
const drops_10slots = {
   "0":"Espada de Madeira (incomum)",
   "1":"Espada de Madeira (incomum)",
   "2":"Espada de Madeira (incomum)",
   "3":"Espada de Madeira (comum)",
   "4":"Espada de Madeira (comum)",
   "5":"Espada de Madeira (comum)",
   "6":"Espada de Madeira (comum)",
   "7":"Espada de Madeira (comum)",
   "8":"Dente pequeno de Goblin",
   "9":"Dente pequeno de Goblin"
}

const drops_10slots_sorte = Object.values(drops_10slots)[parseInt(Math.random() * Object.values(drops_10slots).length)];

console.log(`${drops_10slots_sorte} `);
