
const ITEMS = ['first', 'second', 'thrid', 'fourth'];

// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = ([firstElement]) => {
    return firstElement;
};
console.log(`Head: ${head(ITEMS)}`);



// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([firstElement, ...theRest]) => {
    return theRest;
};
console.log(`Tail: ${tail(ITEMS)}`);



// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. 
// Utiliza los métodos que ofrece Array.prototype.

const init = (theArray) => {
    let result = theArray.slice();
    result.pop();
    return result;
};
console.log(`Init: ${init(ITEMS)}`);



// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (theArray) => {
    return theArray.slice(-1);
};
console.log(`Last: ${last(ITEMS)}`);