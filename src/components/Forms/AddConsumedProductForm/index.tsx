import './style.css'

import {handleAddFoodFormSubmit} from '../../../handlers/handleAddFoodFormSubmit'

import {Form,Button} from 'react-bootstrap';

import {useState} from 'react'

export const AddConsumedProductForm = (props: any) =>{
    const [foodName,setFoodName] = useState('')
    const [foodPrice,setFoodPrice] = useState(0)
    const [consumersList] = useState([])


    const updateFoodName = (event: React.ChangeEvent<any>) =>{
        setFoodName(event.target.value)
    }
    const updateFoodPrice = (event: React.ChangeEvent<any>) =>{
        setFoodPrice(event.target.value)
    }

    return(
        <Form id="add-consumed-product-form" onSubmit={(event) => handleAddFoodFormSubmit(event,foodName,foodPrice) }>
            <Form.Group className="mb-3" controlId="formRomanNumberConversion">
                <Form.Control onChange={(event) =>{updateFoodName(event)}} type="text" placeholder="Insert food name" />
            </Form.Group>
            <Form.Group>
                <Form.Control onChange={(event) =>{updateFoodPrice(event)}} type="text" placeholder="Insert food price" />
            </Form.Group>
            <br />
                <Button id="button-submit-form" variant="success" type="submit">Add</Button>
        </Form>
    )
}