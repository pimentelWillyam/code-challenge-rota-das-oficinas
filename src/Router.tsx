import {BrowserRouter,Routes,Route} from 'react-router-dom'

//pages
import { GameOfLifePage } from './pages/GameOfLifePage'
import { HomePage } from './pages/HomePage'
import { RestaurantBillDividerPage } from './pages/RestaurantBillDividerPage'
import { RomanNumbersConversorPage } from './pages/RomanNumbersConversorPage'
import { AddConsumedProductFormPage } from './pages/AddConsumedProductPage'
import { AddCostumerPage } from './pages/AddCostumerPage'

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='game-of-life' element={<GameOfLifePage/>} />    
                <Route path='/' element={<HomePage/>} />            
                <Route path='restaurant-bill-divider' element={<RestaurantBillDividerPage/>} />
                <Route path='add-consumed-product' element={<AddConsumedProductFormPage/>} />
                <Route path='add-costumer' element={<AddCostumerPage/>} />
                <Route path='roman-numbers-conversor' element={<RomanNumbersConversorPage/>} />
            </Routes>
        </BrowserRouter>
                
    )
}