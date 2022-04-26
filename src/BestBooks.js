import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';



class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
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

  componentDidMount() {
    this.getBooks();
  }



  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <Carousel 
        style={{
          width: '75vw',
          margin:'0 auto'
        }}

      >
        {/* <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2> */}

        {this.state.books.length ? (
          this.state.books.map((data, id) => {
            return (
                <Carousel.Item key={data.id}>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/150"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
            )
          })
        ) : (
          <h3>No Books Found</h3>
        )}
      </Carousel>
    )
  }
}

export default BestBooks;
