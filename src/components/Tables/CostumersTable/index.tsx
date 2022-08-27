import './style.css'

import { useState } from 'react'

import {Link} from 'react-router-dom'

import {Table,Button} from 'react-bootstrap/'

export const CostumersTable = () => {
  const [productList,setProductList] = useState([])
  const [consumerList,setConsumerList] = useState([])

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Consumers</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table> 
      <br />
      <Button as = {Link} id="add-consumed-product-button" to="/add-costumer" variant="success">Add costumer</Button>
      </div>
  );
}
