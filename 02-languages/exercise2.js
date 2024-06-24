/* 
2. Concat
Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
*/

const FIRST_GROUP = ['Marc', 'Pecco', 'Maverick'];
const SECOND_GROUP = ['Jorge', 'Alex', 'Pedro'];

const concat = (firstArray, secondArray) => {
    return [...firstArray, ...secondArray];
};
console.log(`Concat: ${concat(FIRST_GROUP, SECOND_GROUP)}`);



/*
Opcional
Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).
*/

const THIRD_GROUP = ['Brad', 'Jack', 'Miguel'];

const concatMultiple = (...args) => {
    let finalArray = [];
    args.forEach(element => {
        finalArray.push(...element);
    });
    return finalArray;
};
console.log(`Concat with multiple arguments: ${concatMultiple(FIRST_GROUP, SECOND_GROUP, THIRD_GROUP)}`);

