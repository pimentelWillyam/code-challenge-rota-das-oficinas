import './style.css'

import {Form,Button} from 'react-bootstrap';

export const RomanNumberForm = () => {
  return (
      <Form id="roman-number-form">
        <Form.Group className="mb-3">
          <Form.Label>Disabled select menu</Form.Label>
          <Form.Select>
            <option>Insert conversion format</option>
            <option>Arabic to roman</option>
            <option>Roman to arabic</option>
          </Form.Select>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formRomanNumberConversion">
          <Form.Control type="text" placeholder="Insert number to be converted" />
        </Form.Group>
        <Button id="button-submit-form" variant="primary" type="submit">Convert</Button>
      </Form>
    
  );
}