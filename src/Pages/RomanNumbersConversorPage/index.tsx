import './style.css'

import {Container,Col,Row} from 'react-bootstrap/'

import {NavigationBar} from '../../components/NavigationBar'
import { RomanNumberForm } from '../../components/Forms/RomanNumberForm';

import { useState } from 'react';


export const RomanNumbersConversorPage = () =>{

    
    return(
        <Container>
            <Row>
                <NavigationBar />
            </Row>
            <Row id="roman-numbers-conversion-page-line-2">
                <RomanNumberForm />
            </Row>

        </Container>
    )
}