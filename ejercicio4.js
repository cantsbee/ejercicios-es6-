// 4.1 - Filtrar edades mayores a 18
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adults = ages1.filter(age => age > 18);
console.log(adults); // [22, 24, 55, 65, 21, 90]

// 4.2 - Filtrar porr  pares
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evenAges = ages2.filter(age => age % 2 === 0);
console.log(evenAges); // [22, 14, 24, 12, 90]

// 4.3 - Filtrar streamers lol
const streamers1 = [
  {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const lolStreamers = streamers1.filter(s => s.gameMorePlayed === 'League of Legends');
console.log(lolStreamers);

// 4.4 - Filtrar streamers cuyo nombre incluye 'u'
const streamers2 = [
  {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const uNameStreamers = streamers2.filter(s => s.name.toLowerCase().includes('u'));
console.log(uNameStreamers);

// 4.5 - Filtrar streamers con 'Legends' en gameMorePlayed y poner mayúsculas si edad > 35
const streamers3 = [
  {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const legendsStreamers = streamers3
  .filter(s => s.gameMorePlayed.includes('Legends'))
  .map(s => ({
    ...s,
    gameMorePlayed: s.age > 35 ? s.gameMorePlayed.toUpperCase() : s.gameMorePlayed
  }));

console.log(legendsStreamers);
