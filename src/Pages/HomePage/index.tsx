import './style.css'

import Container from 'react-bootstrap/Container';

import {NavigationBar} from '../../components/NavigationBar'

export const HomePage = () =>{
    return(
        <Container>
            <NavigationBar />
        </Container>
    )
}