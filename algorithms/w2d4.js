var monster = {
  id: 1,
  name: "Bulbasaur",
  types: ["poison", "grass"]
};

/* 
Using the monster variable above how could we access the name?
Using the monster variable above how could we access the 2nd type?
*/

/* console.log(monster.name)
console.log(monster.types[1]) */

var pokémon = [
  { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
  { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
  { "id": 9,   "name": "Blastoise",  "types": ["water"] },
  { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
  { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
  { "id": 23,  "name": "Ekans",      "types": ["poison"] },
  { "id": 24,  "name": "Arbok",      "types": ["poison"] },
  { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
  { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
  { "id": 52,  "name": "Meowth",     "types": ["normal"] },
  { "id": 63,  "name": "Abra",       "types": ["psychic"] },
  { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
  { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
  { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
  { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
  { "id": 98,  "name": "Krabby",     "types": ["water"] },
  { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
  { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
  { "id": 133, "name": "Eevee",      "types": ["normal"] },
  { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
  { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
  { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
  { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

// If we wanted to console.log the names of the pokémon who have an id greater than 99 we could...

for (let i = 0; i < pokémon.length; i++){
  if (pokémon[i].id > 99) {
    console.log(pokémon[i].name);
  }
}

/* 
console.log the pokémon objects whose id is evenly divisible by 3
console.log the pokémon objects that have more than one type
console.log the names of the pokémon whose only type is "poison"
console.log the first type of all the pokémon whose second type is "flying"
Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"
*/

console.log('\nconsole.log the pokémon objects whose id is evenly divisible by 3');
for (let i = 0; i < pokémon.length; i++){
  if (pokémon[i].id % 3 == 0) {
    console.log(pokémon[i])
  }
}

console.log('\nconsole.log the pokémon objects that have more than one type');
for (let i = 0; i < pokémon.length; i++){
  if (pokémon[i].types.length > 1) {
    console.log(pokémon[i]);
  }
}

console.log('\nconsole.log the names of the pokémon whose only type is "poison"');
/* 
Two equal signs compare equality in value ONLY. Both sides are converted to the same datatype before comparison.
Three equal signs compare equality in value AND datatype. No conversion before comparison.
*/
for (let i = 0; i < pokémon.length; i++){
  if (pokémon[i].types == 'poison') {
    console.log(pokémon[i].name)
  }
}

console.log('\nconsole.log the first type of all the pokémon whose second type is "flying"');
for (let i = 0; i < pokémon.length; i++){
  if (pokémon[i].types[1] == 'flying') {
    console.log(pokémon[i].types[0]);
  }
}

console.log('\nBonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"');
for (let i = 0; i < pokémon.length; i++){
  if (pokémon[i].types.length == 1 && pokémon[i].types[0] == 'poison') {
    // var pokéName = pokémon[i].name;
    // var pokéArray = pokéName.split('');
    // var pokéArrayReversed = pokéArray.reverse();
    // var pokéNameReversedString = pokéArrayReversed.join('');
    // console.log(pokéNameReversedString);
    console.log(pokémon[i].name.split('').reverse().join(''));
  }
}