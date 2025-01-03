import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import List from './pages/board/List'
import Insert from './pages/board/Insert'
import Read from './pages/board/Read'
import Update from './pages/board/Update'
import Home from './pages/Home'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/boards' element={ <List /> }></Route>
        <Route path='/boards/:id' element={ <Read /> }></Route>
        <Route path='/boards/insert' element={ <Insert /> }></Route>
        <Route path='/boards/update/:id' element={ <Update /> }></Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App
