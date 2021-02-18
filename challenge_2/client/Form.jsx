import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';

const CurrencyForm = (props) => {
  const [currency, setCurrency] = useState('');

  return (
    <Form style={{marginTop: '20px'}}>
    <Form.Group controlId="restaurant">

      <Form.Control as="select" onChange={(e) => setCurrency(e.target.value)}>
        <option>Select Cryptocurrency...</option>
        <option>BCH (Bitcoin)</option>
        <option>ETH (Ethereum)</option>
        <option>XRP (Ripple)</option>
        <option>BCH (BitcoinCash)</option>
      </Form.Control>
    </Form.Group>
   <Button onClick={() => props.submit(currency)}>Submit</Button>
  </Form>
  )
}

export default CurrencyForm;