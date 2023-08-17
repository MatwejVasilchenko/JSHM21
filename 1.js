const books = [
    { title: 'Book1', author: 'Author1', genre: 'Fiction', price: 20 },
    { title: 'Book2', author: 'Author2', genre: 'Non-Fiction', price: 15 },
    { title: 'Book3', author: 'Author3', genre: 'Fiction', price: 25 },
  ];
  
  const filteredBooks = books
    .filter(book => book.genre === 'Fiction') // Відбираємо книжки за жанром
    .filter(book => book.price < 30) // Відбираємо книжки, дешевші $30
    .sort((bookA, bookB) => bookA.price - bookB.price); // Сортуємо за ціною - від дешевшої до дорогої
  
  console.log(filteredBooks);
  