export const checkPopulation = (matrix: number[][],row: number, col: number, setMatrix: React.Dispatch<React.SetStateAction<number[][]>>) =>{
    var liveNeighbours = 0
    if (row == 0 && col == 0 ){ // only has right, down and right down diagonal as neighbours
        if (matrix[row][col+1] == 1){
            liveNeighbours++
        }
        if (matrix[row+1][col] == 1){
            liveNeighbours++
        }
        if (matrix[row+1][col+1] == 1){
            liveNeighbours++
        }
    }
    else if (row == 0 && col == 9){ // only has left, down and left down diagonal as neighbours
        if (matrix[row][col-1] == 1){
            liveNeighbours++
        }
        if (matrix[row+1][col] == 1){
            liveNeighbours++
        }
        if (matrix[row+1][col-1] == 1){
            liveNeighbours++
        }
    }
    else if (row == 9 && col == 0){ // only has right, up and right up diagonal as neighbours
        if (matrix[row][col+1] == 1){
            liveNeighbours++
        }
        if (matrix[row-1][col] == 1){
            liveNeighbours++
        }
        if (matrix[row-1][col+1] == 1){
            liveNeighbours++
        }

    }
    else if (row == 9 && col == 9){ // only has left, up and left up diagonal as neighbours
        if (matrix[row][col-1] == 1){
            liveNeighbours++
        }
        if (matrix[row-1][col] == 1){
            liveNeighbours++
        }
        if (matrix[row-1][col-1] == 1){
            liveNeighbours++
        }
    }
    else if(row == 0){ // doesn't have up neighbours
        if (matrix[row][col-1] == 1){
            liveNeighbours++
        }
        if (matrix[row+1][col] == 1){
            liveNeighbours++
        }
        if (matrix[row+1][col-1] == 1){
            liveNeighbours++
        }
        if (matrix[row][col+1] == 1){
            liveNeighbours++
        }
        if (matrix[row+1][col+1] == 1){
            liveNeighbours++
        }
    }
    else if (col == 0){ // doesn't have left neighbours
        if (matrix[row+1][col] == 1){
            liveNeighbours++
        }
        if (matrix[row-1][col] == 1){
            liveNeighbours++
        }
        if (matrix[row+1][col+1] == 1){
            liveNeighbours++
        }
        if (matrix[row][col+1] == 1){
            liveNeighbours++
        }
        if (matrix[row-1][col+1] == 1){
            liveNeighbours++
        }
    }
    else if(row == 9){ // doesn't have down neighbours
        if (matrix[row-1][col] == 1){

        }
        if (matrix[row][col-1] == 1){

        }
        if (matrix[row][col+1] == 1){

        }
        if(matrix[row-1][col-1] == 1){

        }
        if(matrix[row-1][col+1] == 1){

        }
        

    }
    else if (col == 9){ // doesn't have right neighbours
        if (matrix[row+1][col] == 1){
            liveNeighbours++
        }
        if (matrix[row-1][col] == 1){
            liveNeighbours++
        }
        if (matrix[row+1][col-1] == 1){
            liveNeighbours++
        }
        if (matrix[row][col-1] == 1){
            liveNeighbours++
        }
        if (matrix[row-1][col-1] == 1){
            liveNeighbours++
        }
    }
    else{
        if (matrix[row+1][col] == 1){ // up
            liveNeighbours++
        }
        if (matrix[row-1][col] == 1){ // down
            liveNeighbours++
        }
        if (matrix[row][col-1] == 1){ // left
            liveNeighbours++
        }
        if (matrix[row][col+1] == 1){ // right
            liveNeighbours++
        }
        if (matrix[row+1][col-1] == 1){ // up left diagonal
            liveNeighbours++
        }
        if (matrix[row+1][col+1] == 1){ // up right diagonal
            liveNeighbours++
        }
        if (matrix[row-1][col-1] == 1){ //left down diagonal
            liveNeighbours++   
        }
        if (matrix[row-1][col+1] == 1){ // right down diagonal
            liveNeighbours++ 
        }

    }
    if (willUnderpopulate(liveNeighbours)){
        var newMatrix = [...matrix]
        newMatrix[row][col] = 0
        setMatrix(newMatrix)
    }
    else if (willOverpopulate(liveNeighbours)){
        var newMatrix = [...matrix]
        newMatrix[row][col] = 0
        setMatrix(newMatrix)
    }
    else if (willReproduce(liveNeighbours)){
        var newMatrix = [...matrix]
        newMatrix[row][col] = 1
        setMatrix(newMatrix)
    }
}

const willUnderpopulate = (liveNeighbours: number) =>{
    if (liveNeighbours < 2){
        return true
    }
    else{
        false
    }
}

const willOverpopulate = (liveNeighbours: number) =>{
    if (liveNeighbours > 3){
        return true
    }
    else{
        false
    }
}

const willReproduce = (liveNeighbours: number) =>{
    if (liveNeighbours == 3){
        return true
    }
    else{
        false
    }
}