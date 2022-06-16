const pippo = 'ciao';

let pluto ;  //viene messe come any e bisogna dopo la kay(pluto) : usare stringa numero o vero o falso, non si puo cambiare il valore di let come in js

let paperino: string | number ; /// usando | abbiamo la possibilita di modificare le variabile grazie a | possiamo mettere sia stringa che numero | boobleano | null

paperino = 'ciao';

paperino = 100;

let topolino: any; // vuoldire che puo valere tutto da stringa ad null, si usa per sittuazioni eccezionali o per quando si a fretta 


topolino

// Array

/// prima si mette il tipo di array numero stringa ecc + [] e poi di nuovo le []
let minnie: number [] = [7] /// numero piu [] array sara di numeri 

let paperoga: string [] = ['qui'] ///  array di stringa 

let paperone: [] [] ///array di array


// oggetti
// usando any
let qua:any= { neme: 'qua', age: 13}; // posso cambiare i valori di name e age ma non posso aggiungere nuove cose dentro a qui a meno che non si usi any e allora si pio agiungere un nuova proprietà 

qua.grade = 9;

qua.citty = 'genova'

//non usando any

// let qui = { name: 'qui', age: 13};

// let qui2 = { name: qui.name , age: qui.age, grade: 9};

// let qui3 {...qui2, citty: 'genova'}
