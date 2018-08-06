// object: egy csomagba tobb valtozot es erteket tudunk vele meghatarozni

let pets = {
    animalname: "Cetli",
    animalage: 3
};

console.log("Az állatom neve: " + pets.animalname);
console.log("Az állatom életkora: " + pets.animalage);

// Object.keys: egy metodus, ami array-t csinal az object megadott neveibol

console.log(Object.keys(pets));

// Object.values: egy metorus, ami array-t csinal az object megadott ertekeibol 
//(ES2017 resze, nekem hibat jelez!)
//
//console.log(Object.values(pets));

// Object.hasOwnProperty: boolean formaban jelzi, hogy az adott objectben van-e a megadott ertek
// Itt is para van: nem erti azt, hogy pets.property1 = 33,
//
// pets.property1 = 33,
// console.log(pets.hasOwnProperty("animalege"));

