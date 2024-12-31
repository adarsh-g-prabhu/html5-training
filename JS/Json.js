let myObj = { name: "Chris", age: 38 };
console.log(myObj)
let myString = JSON.stringify(myObj);
console.log(myString);

let parseOutput= JSON.parse(myString);
console.log(parseOutput);


const requestURL ="https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
const request = new Request(requestURL);
// console.log(request);
const response = await fetch(request);
// console.log(response);
const superHeroesText = await response.text();
console.log("JSON Text  :  ",superHeroesText);
const superHeroes = JSON.parse(superHeroesText);
console.log("Parsed Text  :  ",superHeroes);
console.log(superHeroes["members"]["2"]["name"]);

console.log(superHeroes['members']['0']);