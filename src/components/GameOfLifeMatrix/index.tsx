import './style.css'

import {Table} from 'react-bootstrap'

import { useState,useEffect } from 'react'

export const GameOfLifeMatrix = () =>{
    var matrix: any[][] = []
    for (let i: number= 0; i<10;i++){
        console.log("it has started to create another array")
        matrix[i] = []
        for (let j: number = 0;j<10;j++){
            matrix[i][j] = 0
        }
    }
    
    const [matrixState, setMatrixState] = useState(matrix)
    
    const hasBeenClicked = (row: number, col: number) =>{
        console.log("it has been clicked")
        if (matrix[row][col] == 0){
            matrix[row][col] = 1
        }
        else{
            matrix[row][col] = 0
        }
        setMatrixState(matrix)
    }

    useEffect(() =>{
    },[matrixState])

    return(
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>E</th>
            <th>F</th>
            <th>G</th>
            <th>H</th>
            <th>I</th>
            <th>J</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td onClick={() => hasBeenClicked(0,0)}>{matrixState[0][0]}</td>
                <td onClick={() => hasBeenClicked(0,1)}>{matrixState[0][1]}</td>
                <td onClick={() => hasBeenClicked(0,2)}>{matrixState[0][2]}</td>
                <td onClick={() => hasBeenClicked(0,3)}>{matrixState[0][3]}</td>
                <td onClick={() => hasBeenClicked(0,4)}>{matrixState[0][4]}</td>
                <td onClick={() => hasBeenClicked(0,5)}>{matrixState[0][5]}</td>
                <td onClick={() => hasBeenClicked(0,6)}>{matrixState[0][6]}</td>
                <td onClick={() => hasBeenClicked(0,7)}>{matrixState[0][7]}</td>
                <td onClick={() => hasBeenClicked(0,8)}>{matrixState[0][8]}</td>
                <td onClick={() => hasBeenClicked(0,9)}>{matrixState[0][9]}</td>  
            </tr>     
            <tr>
                <td onClick={() => hasBeenClicked(1,0)}>{matrixState[1][0]}</td>
                <td onClick={() => hasBeenClicked(1,1)}>{matrixState[1][1]}</td>
                <td onClick={() => hasBeenClicked(1,2)}>{matrixState[1][2]}</td>
                <td onClick={() => hasBeenClicked(1,3)}>{matrixState[1][3]}</td>
                <td onClick={() => hasBeenClicked(1,4)}>{matrixState[1][4]}</td>
                <td onClick={() => hasBeenClicked(1,5)}>{matrixState[1][5]}</td>
                <td onClick={() => hasBeenClicked(1,6)}>{matrixState[1][6]}</td>
                <td onClick={() => hasBeenClicked(1,7)}>{matrixState[1][7]}</td>
                <td onClick={() => hasBeenClicked(1,8)}>{matrixState[1][8]}</td>
                <td onClick={() => hasBeenClicked(1,9)}>{matrixState[1][9]}</td>  
            </tr>  
            <tr>
                <td onClick={() => hasBeenClicked(2,0)}>{matrixState[2][0]}</td>
                <td onClick={() => hasBeenClicked(2,1)}>{matrixState[2][1]}</td>
                <td onClick={() => hasBeenClicked(2,2)}>{matrixState[2][2]}</td>
                <td onClick={() => hasBeenClicked(2,3)}>{matrixState[2][3]}</td>
                <td onClick={() => hasBeenClicked(2,4)}>{matrixState[2][4]}</td>
                <td onClick={() => hasBeenClicked(2,5)}>{matrixState[2][5]}</td>
                <td onClick={() => hasBeenClicked(2,6)}>{matrixState[2][6]}</td>
                <td onClick={() => hasBeenClicked(2,7)}>{matrixState[2][7]}</td>
                <td onClick={() => hasBeenClicked(2,8)}>{matrixState[2][8]}</td>
                <td onClick={() => hasBeenClicked(2,9)}>{matrixState[2][9]}</td>  
            </tr>  
            <tr>
                <td onClick={() => hasBeenClicked(3,0)}>{matrixState[3][0]}</td>
                <td onClick={() => hasBeenClicked(3,1)}>{matrixState[3][1]}</td>
                <td onClick={() => hasBeenClicked(3,2)}>{matrixState[3][2]}</td>
                <td onClick={() => hasBeenClicked(3,3)}>{matrixState[3][3]}</td>
                <td onClick={() => hasBeenClicked(3,4)}>{matrixState[3][4]}</td>
                <td onClick={() => hasBeenClicked(3,5)}>{matrixState[3][5]}</td>
                <td onClick={() => hasBeenClicked(3,6)}>{matrixState[3][6]}</td>
                <td onClick={() => hasBeenClicked(3,7)}>{matrixState[3][7]}</td>
                <td onClick={() => hasBeenClicked(3,8)}>{matrixState[3][8]}</td>
                <td onClick={() => hasBeenClicked(3,9)}>{matrixState[3][9]}</td>  
            </tr>  
            <tr>
                <td onClick={() => hasBeenClicked(4,0)}>{matrixState[4][0]}</td>
                <td onClick={() => hasBeenClicked(4,1)}>{matrixState[4][1]}</td>
                <td onClick={() => hasBeenClicked(4,2)}>{matrixState[4][2]}</td>
                <td onClick={() => hasBeenClicked(4,3)}>{matrixState[4][3]}</td>
                <td onClick={() => hasBeenClicked(4,4)}>{matrixState[4][4]}</td>
                <td onClick={() => hasBeenClicked(4,5)}>{matrixState[4][5]}</td>
                <td onClick={() => hasBeenClicked(4,6)}>{matrixState[4][6]}</td>
                <td onClick={() => hasBeenClicked(4,7)}>{matrixState[4][7]}</td>
                <td onClick={() => hasBeenClicked(4,8)}>{matrixState[4][8]}</td>
                <td onClick={() => hasBeenClicked(4,9)}>{matrixState[4][9]}</td>  
            </tr>  
            <tr>
                <td onClick={() => hasBeenClicked(5,0)}>{matrixState[5][0]}</td>
                <td onClick={() => hasBeenClicked(5,1)}>{matrixState[5][1]}</td>
                <td onClick={() => hasBeenClicked(5,2)}>{matrixState[5][2]}</td>
                <td onClick={() => hasBeenClicked(5,3)}>{matrixState[5][3]}</td>
                <td onClick={() => hasBeenClicked(5,4)}>{matrixState[5][4]}</td>
                <td onClick={() => hasBeenClicked(5,5)}>{matrixState[5][5]}</td>
                <td onClick={() => hasBeenClicked(5,6)}>{matrixState[5][6]}</td>
                <td onClick={() => hasBeenClicked(5,7)}>{matrixState[5][7]}</td>
                <td onClick={() => hasBeenClicked(5,8)}>{matrixState[5][8]}</td>
                <td onClick={() => hasBeenClicked(5,9)}>{matrixState[5][9]}</td>  
            </tr>  
            <tr>
                <td onClick={() => hasBeenClicked(6,0)}>{matrixState[6][0]}</td>
                <td onClick={() => hasBeenClicked(6,1)}>{matrixState[6][1]}</td>
                <td onClick={() => hasBeenClicked(6,2)}>{matrixState[6][2]}</td>
                <td onClick={() => hasBeenClicked(6,3)}>{matrixState[6][3]}</td>
                <td onClick={() => hasBeenClicked(6,4)}>{matrixState[6][4]}</td>
                <td onClick={() => hasBeenClicked(6,5)}>{matrixState[6][5]}</td>
                <td onClick={() => hasBeenClicked(6,6)}>{matrixState[6][6]}</td>
                <td onClick={() => hasBeenClicked(6,7)}>{matrixState[6][7]}</td>
                <td onClick={() => hasBeenClicked(6,8)}>{matrixState[6][8]}</td>
                <td onClick={() => hasBeenClicked(6,9)}>{matrixState[6][9]}</td>  
            </tr>  
            <tr>
                <td onClick={() => hasBeenClicked(7,0)}>{matrixState[7][0]}</td>
                <td onClick={() => hasBeenClicked(7,1)}>{matrixState[7][1]}</td>
                <td onClick={() => hasBeenClicked(7,2)}>{matrixState[7][2]}</td>
                <td onClick={() => hasBeenClicked(7,3)}>{matrixState[7][3]}</td>
                <td onClick={() => hasBeenClicked(7,4)}>{matrixState[7][4]}</td>
                <td onClick={() => hasBeenClicked(7,5)}>{matrixState[7][5]}</td>
                <td onClick={() => hasBeenClicked(7,6)}>{matrixState[7][6]}</td>
                <td onClick={() => hasBeenClicked(7,7)}>{matrixState[7][7]}</td>
                <td onClick={() => hasBeenClicked(7,8)}>{matrixState[7][8]}</td>
                <td onClick={() => hasBeenClicked(7,9)}>{matrixState[7][9]}</td>  
            </tr>  
            <tr>
                <td onClick={() => hasBeenClicked(8,0)}>{matrixState[8][0]}</td>
                <td onClick={() => hasBeenClicked(8,1)}>{matrixState[8][1]}</td>
                <td onClick={() => hasBeenClicked(8,2)}>{matrixState[8][2]}</td>
                <td onClick={() => hasBeenClicked(8,3)}>{matrixState[8][3]}</td>
                <td onClick={() => hasBeenClicked(8,4)}>{matrixState[8][4]}</td>
                <td onClick={() => hasBeenClicked(8,5)}>{matrixState[8][5]}</td>
                <td onClick={() => hasBeenClicked(8,6)}>{matrixState[8][6]}</td>
                <td onClick={() => hasBeenClicked(8,7)}>{matrixState[8][7]}</td>
                <td onClick={() => hasBeenClicked(8,8)}>{matrixState[8][8]}</td>
                <td onClick={() => hasBeenClicked(8,9)}>{matrixState[8][9]}</td>  
            </tr>  
            <tr>
                <td onClick={() => hasBeenClicked(9,0)}>{matrixState[9][0]}</td>
                <td onClick={() => hasBeenClicked(9,1)}>{matrixState[9][1]}</td>
                <td onClick={() => hasBeenClicked(9,2)}>{matrixState[9][2]}</td>
                <td onClick={() => hasBeenClicked(9,3)}>{matrixState[9][3]}</td>
                <td onClick={() => hasBeenClicked(9,4)}>{matrixState[9][4]}</td>
                <td onClick={() => hasBeenClicked(9,5)}>{matrixState[9][5]}</td>
                <td onClick={() => hasBeenClicked(9,6)}>{matrixState[9][6]}</td>
                <td onClick={() => hasBeenClicked(9,7)}>{matrixState[9][7]}</td>
                <td onClick={() => hasBeenClicked(9,8)}>{matrixState[9][8]}</td>
                <td onClick={() => hasBeenClicked(9,9)}>{matrixState[9][9]}</td>  
            </tr>  
            
        </tbody>
      </Table>
    )
}