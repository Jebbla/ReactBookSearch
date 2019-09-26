import axios from "axios";

export default {
    search: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes/", { params: { q: query } });
    },
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    }
}; 