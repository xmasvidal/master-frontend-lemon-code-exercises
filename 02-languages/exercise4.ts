/*

4. Read Books
Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

function isBookRead(books, titleToSearch) {
  // Implementation here
}
Ejemplo
const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

Opcional
Utiliza Typescript para añadir los tipos adecuados.

*/

class Book {

  title: string;
  isRead: boolean;

  constructor(title: string, isRead: boolean) {
    this.title = title;
    this.isRead = isRead;
  }
}

function isBookRead(books: Book[], titleToSearch: string) {

    for (let index = 0; index < books.length; index++) {
        let book = books[index];
        if (book.title == titleToSearch && book.isRead) {
            return true;
        }
    }
    return false;
}

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false