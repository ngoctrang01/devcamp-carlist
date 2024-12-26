const gJsonCars = `[{"make":"Ford","model":"Explorer","year":2017,"color":"white","vID":"AB-10111"},
{"make":"Toyota","model":"Corolla","year":2018,"color":"silver","vID":"DN-23218"},
{"make":"Mazda","model":"Mazda 6","year":2020,"color":"red","vID":"TZ-23212"},
{"make":"Toyota","model":"Fortuna","year":2016,"color":"black","vID":"IN-91925"},
{"make":"Mazda","model":"Mazda 3","year":2019,"color":"silver","vID":"MN-44593"}]`;

export const gObjectCars=JSON.parse(gJsonCars);

export function checkCar(car){
return car.year >2017 ? true : false ;
}