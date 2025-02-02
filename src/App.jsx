import React, { useState } from "react";
import "./App.css"

function App() {
  // Initial books data
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
  ]);

  const [search, setSearch] = useState("");
  const [newBook, setNewBook] = useState({ title: "", author: "", genre: "" });
  const [sortBy, setSortBy] = useState("title"); // Default sorting by title

  // Add a new book
  const addBook = () => {
    if (newBook.title && newBook.author && newBook.genre) {
      setBooks([...books, { id: books.length + 1, ...newBook }]);
      setNewBook({ title: "", author: "", genre: "" });
    }
  }

  // Filter books based on search input
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.genre.toLowerCase().includes(search.toLowerCase())
  );

  // Sort books based on the selected option
  const sortedBooks = [...filteredBooks].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📚 Digital Library</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title or genre..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      {/* Sorting Dropdown */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      >
        <option value="title">Sort by Title</option>
        <option value="author">Sort by Author</option>
      </select>

      {/* Book List */}
      <ul>
        {sortedBooks.length > 0 ? (
          sortedBooks.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author} ({book.genre})
            </li>
          ))
        ) : (
          <p>No books found</p>
        )}
      </ul>

      {/* Add Book Form */}
      <h3>Add a New Book</h3>
      <input
        type="text"
        placeholder="Title"
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
      />
      <input
        type="text"
        placeholder="Author"
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
      />
      <input
        type="text"
        placeholder="Genre"
        value={newBook.genre}
        onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <button onClick={addBook} style={{ width: "100%", padding: "10px" }}>
        Add Book
      </button>
    </div>
  );
}

export default App;
