import './style.css'

import {Link} from 'react-router-dom'

import {Table,Button} from 'react-bootstrap/'
import { useState } from 'react'

export const ConsumedProductsTable = () => {
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
      <Button as = {Link} id="add-consumed-product-button" to="/add-consumed-product" variant="success">Add consumed product</Button>
    </div>
    
  );
}
