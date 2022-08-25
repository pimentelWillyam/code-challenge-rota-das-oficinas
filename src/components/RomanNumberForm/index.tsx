import './style.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'

export const RomanNumberForm = () => {
  return (
      <Form>
        <Form.Group className="mb-3" controlId="formRomanNumber">
          <Form.Control type="text" placeholder="Enter roman number" />
        </Form.Group>
      </Form>
    
  );
}