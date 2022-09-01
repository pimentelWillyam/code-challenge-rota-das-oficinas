import './style.css'

import {checkPopulation} from '../../helpers/checkPopulation'

import {Table,Button} from 'react-bootstrap'

import { useState,useEffect } from 'react'

export const GameOfLifeMatrix = () =>{
    const [matrix, setMatrix] = useState(
        [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
        ]
    )
    
    const hasBeenClicked = (row: number, col: number) =>{
        var newMatrix = [...matrix]
        if (matrix[row][col] == 0){
            newMatrix[row][col] = 1
        }
        else{
            newMatrix[row][col] = 0
        }
        setMatrix(newMatrix)
    }

    const playGameOfLife = () =>{
        for (let i=0;i<10;i++){
            for (let j=0;j<10;j++){
                checkPopulation(matrix,i,j,setMatrix)
            }
        }
    }

    useEffect(() =>{
    },[matrix])

    return(
        <div className="table-wrapper">
            <Table striped bordered hover id='game-of-life-table'>
            <thead>
            <tr>
            </tr>
            </thead>
            <tbody id=''>
                <tr>
                    <td className='green' onClick={() => hasBeenClicked(0,0)}>{matrix[0][0]}</td>
                    <td onClick={() => hasBeenClicked(0,1)}>{matrix[0][1]}</td>
                    <td onClick={() => hasBeenClicked(0,2)}>{matrix[0][2]}</td>
                    <td onClick={() => hasBeenClicked(0,3)}>{matrix[0][3]}</td>
                    <td onClick={() => hasBeenClicked(0,4)}>{matrix[0][4]}</td>
                    <td onClick={() => hasBeenClicked(0,5)}>{matrix[0][5]}</td>
                    <td onClick={() => hasBeenClicked(0,6)}>{matrix[0][6]}</td>
                    <td onClick={() => hasBeenClicked(0,7)}>{matrix[0][7]}</td>
                    <td onClick={() => hasBeenClicked(0,8)}>{matrix[0][8]}</td>
                    <td onClick={() => hasBeenClicked(0,9)}>{matrix[0][9]}</td>  
                </tr>     
                <tr>
                    <td onClick={() => hasBeenClicked(1,0)}>{matrix[1][0]}</td>
                    <td onClick={() => hasBeenClicked(1,1)}>{matrix[1][1]}</td>
                    <td onClick={() => hasBeenClicked(1,2)}>{matrix[1][2]}</td>
                    <td onClick={() => hasBeenClicked(1,3)}>{matrix[1][3]}</td>
                    <td onClick={() => hasBeenClicked(1,4)}>{matrix[1][4]}</td>
                    <td onClick={() => hasBeenClicked(1,5)}>{matrix[1][5]}</td>
                    <td onClick={() => hasBeenClicked(1,6)}>{matrix[1][6]}</td>
                    <td onClick={() => hasBeenClicked(1,7)}>{matrix[1][7]}</td>
                    <td onClick={() => hasBeenClicked(1,8)}>{matrix[1][8]}</td>
                    <td onClick={() => hasBeenClicked(1,9)}>{matrix[1][9]}</td>  
                </tr>  
                <tr>
                    <td onClick={() => hasBeenClicked(2,0)}>{matrix[2][0]}</td>
                    <td onClick={() => hasBeenClicked(2,1)}>{matrix[2][1]}</td>
                    <td onClick={() => hasBeenClicked(2,2)}>{matrix[2][2]}</td>
                    <td onClick={() => hasBeenClicked(2,3)}>{matrix[2][3]}</td>
                    <td onClick={() => hasBeenClicked(2,4)}>{matrix[2][4]}</td>
                    <td onClick={() => hasBeenClicked(2,5)}>{matrix[2][5]}</td>
                    <td onClick={() => hasBeenClicked(2,6)}>{matrix[2][6]}</td>
                    <td onClick={() => hasBeenClicked(2,7)}>{matrix[2][7]}</td>
                    <td onClick={() => hasBeenClicked(2,8)}>{matrix[2][8]}</td>
                    <td onClick={() => hasBeenClicked(2,9)}>{matrix[2][9]}</td>  
                </tr>  
                <tr>
                    <td onClick={() => hasBeenClicked(3,0)}>{matrix[3][0]}</td>
                    <td onClick={() => hasBeenClicked(3,1)}>{matrix[3][1]}</td>
                    <td onClick={() => hasBeenClicked(3,2)}>{matrix[3][2]}</td>
                    <td onClick={() => hasBeenClicked(3,3)}>{matrix[3][3]}</td>
                    <td onClick={() => hasBeenClicked(3,4)}>{matrix[3][4]}</td>
                    <td onClick={() => hasBeenClicked(3,5)}>{matrix[3][5]}</td>
                    <td onClick={() => hasBeenClicked(3,6)}>{matrix[3][6]}</td>
                    <td onClick={() => hasBeenClicked(3,7)}>{matrix[3][7]}</td>
                    <td onClick={() => hasBeenClicked(3,8)}>{matrix[3][8]}</td>
                    <td onClick={() => hasBeenClicked(3,9)}>{matrix[3][9]}</td>  
                </tr>  
                <tr>
                    <td onClick={() => hasBeenClicked(4,0)}>{matrix[4][0]}</td>
                    <td onClick={() => hasBeenClicked(4,1)}>{matrix[4][1]}</td>
                    <td onClick={() => hasBeenClicked(4,2)}>{matrix[4][2]}</td>
                    <td onClick={() => hasBeenClicked(4,3)}>{matrix[4][3]}</td>
                    <td onClick={() => hasBeenClicked(4,4)}>{matrix[4][4]}</td>
                    <td onClick={() => hasBeenClicked(4,5)}>{matrix[4][5]}</td>
                    <td onClick={() => hasBeenClicked(4,6)}>{matrix[4][6]}</td>
                    <td onClick={() => hasBeenClicked(4,7)}>{matrix[4][7]}</td>
                    <td onClick={() => hasBeenClicked(4,8)}>{matrix[4][8]}</td>
                    <td onClick={() => hasBeenClicked(4,9)}>{matrix[4][9]}</td>  
                </tr>  
                <tr>
                    <td onClick={() => hasBeenClicked(5,0)}>{matrix[5][0]}</td>
                    <td onClick={() => hasBeenClicked(5,1)}>{matrix[5][1]}</td>
                    <td onClick={() => hasBeenClicked(5,2)}>{matrix[5][2]}</td>
                    <td onClick={() => hasBeenClicked(5,3)}>{matrix[5][3]}</td>
                    <td onClick={() => hasBeenClicked(5,4)}>{matrix[5][4]}</td>
                    <td onClick={() => hasBeenClicked(5,5)}>{matrix[5][5]}</td>
                    <td onClick={() => hasBeenClicked(5,6)}>{matrix[5][6]}</td>
                    <td onClick={() => hasBeenClicked(5,7)}>{matrix[5][7]}</td>
                    <td onClick={() => hasBeenClicked(5,8)}>{matrix[5][8]}</td>
                    <td onClick={() => hasBeenClicked(5,9)}>{matrix[5][9]}</td>  
                </tr>  
                <tr>
                    <td onClick={() => hasBeenClicked(6,0)}>{matrix[6][0]}</td>
                    <td onClick={() => hasBeenClicked(6,1)}>{matrix[6][1]}</td>
                    <td onClick={() => hasBeenClicked(6,2)}>{matrix[6][2]}</td>
                    <td onClick={() => hasBeenClicked(6,3)}>{matrix[6][3]}</td>
                    <td onClick={() => hasBeenClicked(6,4)}>{matrix[6][4]}</td>
                    <td onClick={() => hasBeenClicked(6,5)}>{matrix[6][5]}</td>
                    <td onClick={() => hasBeenClicked(6,6)}>{matrix[6][6]}</td>
                    <td onClick={() => hasBeenClicked(6,7)}>{matrix[6][7]}</td>
                    <td onClick={() => hasBeenClicked(6,8)}>{matrix[6][8]}</td>
                    <td onClick={() => hasBeenClicked(6,9)}>{matrix[6][9]}</td>  
                </tr>  
                <tr>
                    <td onClick={() => hasBeenClicked(7,0)}>{matrix[7][0]}</td>
                    <td onClick={() => hasBeenClicked(7,1)}>{matrix[7][1]}</td>
                    <td onClick={() => hasBeenClicked(7,2)}>{matrix[7][2]}</td>
                    <td onClick={() => hasBeenClicked(7,3)}>{matrix[7][3]}</td>
                    <td onClick={() => hasBeenClicked(7,4)}>{matrix[7][4]}</td>
                    <td onClick={() => hasBeenClicked(7,5)}>{matrix[7][5]}</td>
                    <td onClick={() => hasBeenClicked(7,6)}>{matrix[7][6]}</td>
                    <td onClick={() => hasBeenClicked(7,7)}>{matrix[7][7]}</td>
                    <td onClick={() => hasBeenClicked(7,8)}>{matrix[7][8]}</td>
                    <td onClick={() => hasBeenClicked(7,9)}>{matrix[7][9]}</td>  
                </tr>  
                <tr>
                    <td onClick={() => hasBeenClicked(8,0)}>{matrix[8][0]}</td>
                    <td onClick={() => hasBeenClicked(8,1)}>{matrix[8][1]}</td>
                    <td onClick={() => hasBeenClicked(8,2)}>{matrix[8][2]}</td>
                    <td onClick={() => hasBeenClicked(8,3)}>{matrix[8][3]}</td>
                    <td onClick={() => hasBeenClicked(8,4)}>{matrix[8][4]}</td>
                    <td onClick={() => hasBeenClicked(8,5)}>{matrix[8][5]}</td>
                    <td onClick={() => hasBeenClicked(8,6)}>{matrix[8][6]}</td>
                    <td onClick={() => hasBeenClicked(8,7)}>{matrix[8][7]}</td>
                    <td onClick={() => hasBeenClicked(8,8)}>{matrix[8][8]}</td>
                    <td onClick={() => hasBeenClicked(8,9)}>{matrix[8][9]}</td>  
                </tr>  
                <tr>
                    <td onClick={() => hasBeenClicked(9,0)}>{matrix[9][0]}</td>
                    <td onClick={() => hasBeenClicked(9,1)}>{matrix[9][1]}</td>
                    <td onClick={() => hasBeenClicked(9,2)}>{matrix[9][2]}</td>
                    <td onClick={() => hasBeenClicked(9,3)}>{matrix[9][3]}</td>
                    <td onClick={() => hasBeenClicked(9,4)}>{matrix[9][4]}</td>
                    <td onClick={() => hasBeenClicked(9,5)}>{matrix[9][5]}</td>
                    <td onClick={() => hasBeenClicked(9,6)}>{matrix[9][6]}</td>
                    <td onClick={() => hasBeenClicked(9,7)}>{matrix[9][7]}</td>
                    <td onClick={() => hasBeenClicked(9,8)}>{matrix[9][8]}</td>
                    <td onClick={() => hasBeenClicked(9,9)}>{matrix[9][9]}</td>  
                </tr>  
            </tbody>
        </Table>
        <Button id='stop-button' variant='danger'>Stop</Button><Button id='play-button' variant='success' onClick={() => playGameOfLife() }>Play</Button>
      </div>
    )
}