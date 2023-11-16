const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("les livres ont ils été loué une fois au moins ? ");

let rent = books.every(function (book) {
  return book.rented > 0 
});
if (rent) {
  console.log("les livres ont été loué une fois au moins ");}

//   methode axel 
//   let bookBorrow = books.every(book => book.rented > 0); 
// console.log("Est-ce que tous les bouquins ont été empruntés une fois au moins ?" + " " + bookBorrow)
console.log('quel est le livre le plus emprunté?' );
const max = books.reduce((prev, current) => (prev.rented > current.rented) ? prev : current );
console.log(max);

console.log('quel est le livre le moins emprunté?' );
const min = books.reduce((prev, current) => (prev.rented > current.rented) ? current : prev );
console.log(min);

console.log('Le livre n873495 est :' );
console.log(books.find(({id})=>id === 873495));


const booksDelete = books.filter(book => book.id !== 133712);
console.log("le livre n 133712 a été supprimé");
console.log(booksDelete);

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
const booksSorted = booksDelete.sort((a,b) => a.title.localeCompare(b.title));
console.log(booksSort);