const videogames = [
  {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
  {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
  {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
  {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
  {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
  {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
]; // falta el just dance 2



// Filtrar por rpg
const rpgGames = videogames.filter(game => game.genders.find(g => g === 'RPG'));

// Calculo de suma 
const totalScore = rpgGames.reduce((acc, game) => acc + game.score, 0);

// Calcular la media
const averageScore = totalScore / rpgGames.length;
console.log('Juegos RPG:', rpgGames);
console.log('Media de puntuación RPG:', averageScore);
