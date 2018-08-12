// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
let addPlanet: string = "Saturn"

planetList.push(addPlanet);

function putSaturn(list: string []){
    return list.slice(0, 7);
}

console.log(putSaturn(planetList));

export = putSaturn;