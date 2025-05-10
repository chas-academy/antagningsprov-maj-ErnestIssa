function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age
let people = [
    { name: "Anna", age: 25 },
    { name: "Erik", age: 35 },
    { name: "Maria", age: 42 },
    { name: "Johan", age: 28 },
    { name: "Lisa", age: 31 }
];

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen
function printNamesOver30(peopleArray) {
    for (let person of peopleArray) {
        if (person.age > 30) {
            console.log(person.name);
        }
    }
}

// anropa funktionen och skicka med arrayen som argument
printNamesOver30(people);
}

module.exports = { uppg8 };