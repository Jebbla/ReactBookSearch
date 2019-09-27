import React, { Component } from "react";
// import SearchForm from '../components/SearchForm';
import API from '../utils/API';
import Card from "../components/Card";
import Book from "../components/Book";
// import SaveBtn from '../components/SaveBtn';
// import Wrapper from '../components/Wrapper';
import { Col, Row, Container } from "../components/Grid";
import Form from "../components/Form";
// import List from "../components/List";
class Search extends Component {
    state = {
      books: [],
      q: "",
      message: "Search For A Book To Begin!"
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    getBooks = () => {
      API.getBooks(this.state.q)
        .then(res =>
          this.setState({
            books: res.data
          })
        )
        .catch(() =>
          this.setState({
            books: [],
            message: "No New Books Found, Try a Different Query"
          })
        );
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      this.getBooks();
    };
  
    handleBookSave = id => {
      const book = this.state.books.find(book => book.id === id);
  
      API.saveBook({
        googleId: book.id,
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        link: book.volumeInfo.infoLink,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail
      }).then(() => this.getBooks());
    }

// class Search extends React.Component {

//     state = {
//         search: "",
//         results: [],
//         title: "",
//         authors: [],
//         description: "",
//         image: "",
//         link: ""
//     };

//     handleInputChange = event => {
//         const name = event.target.name;
//         const value = event.target.value;
//         this.setState({
//             [name]: value
//         });
//     };

//     // When the form is submitted, search the Giphy API for `this.state.search`
//     handleFormSubmit = event => {
//         // When the form is submitted, prevent its default behavior, get recipes update the recipes state
//         event.preventDefault();
//         API.search(this.state.search)
//             .then(res => this.setState({ results: res.data.items }))
//             .catch(err => console.log(err));
//     };
//     handleBookSave = id => {
//         const book = this.state.books.find(book => book.id === id);
    // handleSave = event => {
    //     event.preventDefault()
    //     console.log(this.props)
     }
    

//     render() {
//         return (
//             <div>
//                 <SearchForm
//                     search={this.state.search}
//                     handleFormSubmit={this.handleFormSubmit}
//                     handleInputChange={this.handleInputChange}
//                 />
//                 {!this.state.results.length ? (
//                     <h1 className="text-center">No results to display</h1>
//                 ) : (
//                         <div>
//                             <Wrapper>
//                                 {this.state.results.map(book => (
//                                     <div>
//                                         <BookCard
//                                             id={book.id}
//                                             key={book.id}
//                                             title={book.volumeInfo.title}
//                                             authors={book.volumeInfo.authors.join(', ')}
//                                             description={book.volumeInfo.description}
//                                             link={book.volumeInfo.infoLink}
//                                             image={book.volumeInfo.imageLinks.smallThumbnail}
//                                         />
//                                         <SaveBtn
//                                             id={book.id}
//                                             title={book.volumeInfo.title}
//                                             authors={book.volumeInfo.authors.join(', ')}
//                                             description={book.volumeInfo.description}
//                                             link={book.volumeInfo.infoLink}
//                                             image={book.volumeInfo.imageLinks.smallThumbnail}

//                                             onClick={this.handleSave} />
//                                     </div>
//                                 ))}
//                             </Wrapper>
//                         </div>
//                     )}
//             </div>

//         )
//     }
// }

render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        {/* <Footer /> */}
      </Container>
    );
  }



export default Search;