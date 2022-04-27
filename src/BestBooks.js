import React from 'react';
import axios from 'axios';
import { Carousel, Button, Modal } from 'react-bootstrap';
import BookFormModal from './BookFormModal';
import placeHolder from './imgs/booksPlaceholder3.jpg'




class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false
    }
  }

  getBooks = async () => {
    try {
      let bookUrl = `${process.env.REACT_APP_SERVER}/book`;
      let results = await axios.get(bookUrl);

      this.setState({
        books: results.data
      })
    }
    catch (error) {
      console.log('we have an error:')
    }
  }

  postBook = async (book) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/book`
      let createdBook = await axios.post(url, book)
      this.setState({
        books: [...this.state.books, createdBook.data]
      })
    }
    catch (err) {
      console.log('We have an error: ', err.response.data)
    }
  }

  deleteBook = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/book/${id}`
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks
      });
    }
    catch (err) {
      console.log('We have an error: ', err.response.data)
    }
  }

  updateBook = async (bookToUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/book/${bookToUpdate._id}`
      let updatedBook = await axios.update(url, bookToUpdate);
      let updatedBookArray = this.state.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id ? updatedBook.data : existingBook;
      })
      this.setState({
        books: updatedBookArray
      });
    }
    catch (err) {
      console.log('We have an error: ', err.response.data)
    }
  }

  handleBookSubmit = (e) => {
    e.preventDefault();
    let book = {
      title: e.target.title.value,
      description: e.target.description.value,
      hasRead: e.target.hasRead.checked
    }
    this.postBook(book);
  }

  componentDidMount() {
    this.getBooks();
  }

  showModal = () => {
    this.setState({
      showModal: true
    })
  }

  hideModalHandler = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>
        <Carousel
          // variant='dark'
          style={{
            width: '50vw',
            margin: '2em auto 0',
          }}
        >
          {this.state.books.length ? (
            this.state.books.map((data) => {
              return (
                <Carousel.Item key={data._id}>
                  <img
                    className="d-block w-100"
                    src={placeHolder}
                    alt="First slide"
                  />
                  <Carousel.Caption
                    style={{

                    }}
                  >
                    <div style={{color: 'white', fontSize: '2em'}}>
                      <h3>{data.title}</h3>
                      <p>{data.description}</p>
                    </div>
                    <Button
                      onClick={() => this.deleteBook(data._id)}
                      variant='danger'
                    >Delete</Button>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })
          )
            :
            (
              <h3>No Books Found</h3>
            )}
        </Carousel>
        <div id='addButton'>
          <Button
            onClick={(this.showModal)}
            style={{
              textAlign: 'center',
              background: 'rgb(125, 26, 232)',
              border: '1px solid rgb(125, 26, 232)'
            }}
          >
            Add Book!
          </Button>
        </div>
        <Modal
          show={this.state.showModal}
          onHide={this.hideModalHandler}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Add Your Book
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BookFormModal
              handleBookSubmit={this.handleBookSubmit}
              hideModalHandler={this.hideModalHandler}
            />
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default BestBooks;
