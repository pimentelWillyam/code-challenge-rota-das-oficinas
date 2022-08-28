import './style.css'

import {Table} from 'react-bootstrap'

export const GameOfLifeMatrix = () =>{
    var matrix: any[][] = []
    for (let i: number= 0; i<10;i++){
        matrix[i] = []
        for (let j: number = 0;j<10;j++){
            matrix[i][j] = 0
        }
    }

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
            {
                matrix.map((row) => {
                    return(
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>  
                    </tr>     
                    )
        
            })}
            
        </tbody>
      </Table>
    )
}