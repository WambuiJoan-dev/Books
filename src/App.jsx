  import React from 'react'
import { useState } from 'react';
  
  function App = () => {

  // Initial books data
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
  ]);



  //initialising states
  const [search, setSearch] = useState("");
  const [newBook, setNewBook] = useState({ title: "", author: "", genre: ""});
  const [sortBy, setSortBy] = useState("title"); //sort by title

    return (
      <div>
      {/* Add Book Form */}
      <h3>Add a New Book</h3>
      <input
        type="text"
        placeholder="Title"
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Author"
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Genre"
        value={newBook.genre}
        onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
        className="input-field"
      />
      </div>
    )
  }
  
  export default App
  








