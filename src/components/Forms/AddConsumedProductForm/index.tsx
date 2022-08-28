import './style.css'

import {handleAddConsumedProductFormSubmit} from '../../../handlers/handleAddConsumedProductFormSubmit'

import {Form,Button} from 'react-bootstrap';

import {useState} from 'react'

import {useRecoilState} from 'recoil'
import {consumedProductListAtom} from '../../../atoms/consumedProductListAtom'

export const AddConsumedProductForm = (props: any) =>{
    const [productName,setProductName] = useState('')
    const [productPrice,setProductPrice] = useState(0)
    const [consumersList] = useState([])
    const [consumedProductsList,setConsumedProductsList] = useRecoilState(consumedProductListAtom)


    const updateProductName = (event: React.ChangeEvent<any>) =>{
        setProductName(event.target.value)
    }
    const updateFoodPrice = (event: React.ChangeEvent<any>) =>{
        setProductPrice(event.target.value)
    }

    return(
        <Form id="add-consumed-product-form" onSubmit={(event) => handleAddConsumedProductFormSubmit(event,productName,productPrice,consumedProductsList,setConsumedProductsList) }>
            <Form.Group className="mb-3" controlId="formRomanNumberConversion">
                <Form.Control onChange={(event) =>{updateProductName(event)}} type="text" placeholder="Insert food name" />
            </Form.Group>
            <Form.Group>
                <Form.Control onChange={(event) =>{updateFoodPrice(event)}} type="text" placeholder="Insert food price" />
            </Form.Group>
            <br />
                <Button id="button-submit-form" variant="success" type="submit">Add</Button>
        </Form>
    )
}