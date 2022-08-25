import './style.css'

import Container from 'react-bootstrap/Container';

import {NavigationBar} from '../../components/NavigationBar'
import { RomanNumberForm } from '../../components/RomanNumberForm';

export const RomanNumbersConversorPage = () =>{
    return(
        <Container>
            <NavigationBar />
            <RomanNumberForm />
        </Container>
    )
}