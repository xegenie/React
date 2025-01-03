import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation, useParams} from 'react-router-dom'

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)

 return (
    <BrowserRouter basename='/my-app'>
      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/about' element={ <About />}></Route>
        <Route 
            path='/boards/:id' element={ <Board />}
            param={{id : 123}}>
        </Route>
        <Route path='/login' element={ <Login />}></Route>
        <Route path='/admin' element={ isLoggedIn ? <Admin /> : <Navigate to="/login" />}></Route>
        {/* <Route 
            path='/admin' render = { () => {
              if(isLoggedIn) return <Admin />
              else <Redirect to="/login" />
            }}>
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}
// 🔗 '/'
function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/about">About</Link> <br />
      <Link to="/boards/123?category=공지사항&option=10">Board</Link> <br />
      <Link to="/login">Login</Link> <br />
      <Link to="/admin">Admin</Link> <br />
    </>
  )
}

// 🔗 '/about'
function About() {
  return (
    <>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </>
  )
}

// 🔗 '/boards/:id'
function Board() {
  // useParams
  //  : react-router v6 이상에서부터 사용하는
  //    URL 경로에 정의된 파라미터를 가져오는 훅(Hook)
  const { id } = useParams();
  // ?파라미터=값 가져오는 방법
  const location = useLocation();
  const query = new URLSearchParams(location.search)
  const category = query.get("category") // "category" 파라미터 값
  const option = query.get("option")

  return (
    <>
      <h1>게시판</h1>
      <h3>게시글 id : {id}</h3>
      <h3>파라미터 category : {category}</h3>
      <h3>파라미터 option : {option}</h3>
      <Link to="/">Home</Link>
    </>
  )
}

// 🔗 '/admin'
function Admin() {
  return (
    <>
      <h1>Admin</h1>
      <Link to="/">Home</Link>
    </>
  )
}

// 🔗 '/login'
function Login() {
  return (
    <>
      <h1>Login</h1>
      <Link to="/">Home</Link>
    </>
  )
}

export default App
