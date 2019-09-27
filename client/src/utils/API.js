// import axios from 'axios';

// export default {
//     search: function (query) {
//         return axios.get("https://www.googleapis.com/books/v1/volumes/", { params: { q: query } });
//     },
//     saveBook: function (bookData) {
//         return axios.post("/api/books", bookData);
//     },
//     deleteBook: function (id) {
//         return axios.delete("/api/books/" + id);
//     },
//     getBooks: function () {
//         return axios.get("/api/books");
//     },
//     // Gets the book with the given id
//     getBook: function (id) {
//         return axios.get("/api/books/" + id);
//     }
// };

import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
