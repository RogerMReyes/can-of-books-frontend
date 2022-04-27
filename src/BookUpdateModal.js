import React from 'react';
import { Form, Button } from 'react-bootstrap';

class BookUpdateModal extends React.Component{

  handleSubmit = (e) => {
    e.preventDefault();
    let bookWithUpdate ={
      title: e.target.title.value || this.props.bookToUpdate.title,
      description: e.target.description.value || this.props.bookToUpdate.description,
      status: e.target.status.checked || this.props.bookToUpdate.status,
      _id: this.props.bookToUpdate._id,
      __v: this.props.bookToUpdate.__v
    }
    this.props.updateBook(bookWithUpdate);
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className='mb-3' controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder={this.props.bookToUpdate.title}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control type='text' placeholder={this.props.bookToUpdate.description}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='status'>
          <Form.Check type='checkbox' label='Have you read this book?'/>
        </Form.Group>
        <Button onClick={this.props.hideUpdateModal} type='submit'>Update Book</Button>
      </Form>
    )
  }
}

export default BookUpdateModal