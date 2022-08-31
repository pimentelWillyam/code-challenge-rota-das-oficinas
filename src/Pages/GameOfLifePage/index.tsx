import './style.css'

import {Container,Row} from 'react-bootstrap/';

import {NavigationBar} from '../../components/NavigationBar'

import { GameOfLifeMatrix } from '../../components/GameOfLifeMatrix';

export const GameOfLifePage = () =>{
    return(
        <Container>
            <Row>
                <NavigationBar />
            </Row>
            <Row>
                <GameOfLifeMatrix />
            </Row>

            
        </Container>
    )
}