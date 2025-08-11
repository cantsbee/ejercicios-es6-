// 3.1 - Array con solo los nombres
const users1 = [
  {id: 1, name: 'Abel'},
  {id: 2, name: 'Julia'},
  {id: 3, name: 'Pedro'},
  {id: 4, name: 'Amanda'}
];

const names = users1.map(user => user.name);
console.log(names);  // ['Abel', 'Julia', 'Pedro', 'Amanda']

// 3.2 - Lista con nombres, cambiando los que empiezan con 'A' a 'Anacleto'
const users2 = [
  {id: 1, name: 'Abel'},
  {id: 2, name: 'Julia'},
  {id: 3, name: 'Pedro'},
  {id: 4, name: 'Amanda'}
];

const namesModified = users2.map(user => {
  if(user.name.startsWith('A')){
    return 'Anacleto';
  }
  return user.name;
});
console.log(namesModified); 

// 3.3 - Lista con nombres y añadir 'Visitado' si  es true
const cities = [
  {isVisited:true, name: 'Tokyo'}, 
  {isVisited:false, name: 'Madagascar'},
  {isVisited:true, name: 'Amsterdam'}, 
  {isVisited:false, name: 'Seul'}
];

const cityNames = cities.map(city => 
  city.isVisited ? `${city.name} (Visitado)` : city.name
);
console.log(cityNames); 
