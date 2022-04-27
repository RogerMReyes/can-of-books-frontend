import React from 'react';
import { Form, Button } from 'react-bootstrap';

class BookFormModal extends React.Component{
  render(){
    return(
      <Form onSubmit={this.props.handleBookSubmit}>
        <Form.Group className='mb-3' controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder='Enter Book Title...'/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control type='text' placeholder='Enter Book Description...'/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='hasRead'>
          <Form.Check type='checkbox' label='Have you read this book?'/>
        </Form.Group>
        <Button onClick={this.props.hideModalHandler} type='submit'>Save Book</Button>
      </Form>
    )
  }
}

export default BookFormModal