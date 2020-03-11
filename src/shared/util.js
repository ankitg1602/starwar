export function deepCompare(ar1, ar2) {
  return JSON.stringify(ar1) === JSON.stringify(ar2);
}

export const planetsUri = 'https://swapi.co/api/planets/?search=';
export const timeoutMsg = 'Only Luke Skywalker can make more than 15 searches in a minute. Commoners, please sit idle for a minute.';

export function calculateDiameter(population) {
  let diameter = 120;
  if (!isNaN(population)) {
    if (population > 10000 && population < 50000) {
      diameter = diameter + 40;
    } else if (population > 50000 && population < 100000) {
      diameter = diameter + 80;
    } else if (population > 100000 && population < 500000) {
      diameter = diameter + 120;
    } else if (population > 500000 && population < 1000000) {
      diameter = diameter + 150;
    } else if (population > 1000000 && population < 20000000) {
      diameter = diameter + 180;
    } else if (population > 20000000 && population < 50000000) {
      diameter = diameter + 200;
    } else if (population > 50000000) {
      diameter = diameter + 220;
    }
  }
  return diameter;
}