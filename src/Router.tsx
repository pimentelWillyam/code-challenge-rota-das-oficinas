import {BrowserRouter,Routes,Route} from 'react-router-dom'

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<h1>hello</h1>} />
                <Route path='roman-numbers-conversor' element={<h1>roman numbers conversor</h1>} />
                <Route path='game-of-life' element={<h1>game of life</h1>} />
                <Route path='restaurant-bill-divider' element={<h1>restaurant bill divider</h1>} />
            </Routes>
        </BrowserRouter>
                
    )
}