// 2.1 - Copiar array con spread
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];
console.log(pointsListCopy);

// 2.2 - objeto
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = {...toy};
console.log(toyCopy);

// 2.3 - Unir arrays
const pointsLis2 = [54, 87, 99, 65, 32];
const mergedPoints = [...pointsList, ...pointsLis2];
console.log(mergedPoints);

// 2.4 - Fusion
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const mergedToy = {...toy, ...toyUpdate};
console.log(mergedToy);

// 2.5 - Copiar array eliminando posición 2( osea, 3)
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];
console.log(colorsCopy);
