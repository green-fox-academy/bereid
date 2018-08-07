export {}

// object: egy csomagba tobb kulcsot es erteket tudunk vele meghatarozni

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

// megmondja, van-e benne a megadott ertek

let isMyPetAge: boolean = pets.hasOwnProperty(3);
console.log(isMyPetAge);

// ertek kiiratasa

let diak = {
    name: "Gabor",
    className: "Coffee",
    age: 25
}

console.log(diak.name);

function printName(myObject: object){
    console.log(myObject["name"]);
}

printName(diak);

// tömbbe helyezett objectek

let myClass: object[] = [
    {
        age: 20,
        name: "Anna"
    },
    {
        age: 20,
        name: "Gabor"
    }
];

console.log(myClass[1]["name"]);

