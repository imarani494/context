const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  addBook(book) {
    
    const { title, author, year } = book;

    if (
      typeof title !== "string" || title.trim() === "" ||
      typeof author !== "string" || author.trim() === "" ||
      typeof year !== "number" || isNaN(year)
    ) {
      console.error("❌ Book information is incomplete or invalid:", book);
      return false; 
    }

    this.books.push({ title: title.trim(), author: author.trim(), year });
    console.log(`✅ Book added: "${title}" by ${author} (${year})`);
    return true;
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title.trim());
  },

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title.trim());

    if (index !== -1) {
      const removed = this.books.splice(index, 1)[0];
      console.log(`🗑️ Removed: "${removed.title}"`);
    } else {
      console.warn("⚠️ Book not found:", title);
    }
  }
};



library.addBook({ author: "George Orwell", year: 1949 }); // Missing title — should fail

library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); // Valid

console.log("📚 Total books:", library.books.length); // Should be 2

console.log("🔍 Find book:", library.findBookByTitle("1984"));

library.removeBook("The Hobbit");

console.log("📚 Final library:", library.books);
