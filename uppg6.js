function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen
    let names = ["Anna", "Erik", "Maria", "Johan", "Lisa"];
    
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

module.exports = { uppg6 };