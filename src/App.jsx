import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Notfound from './pages/Notfound'

//1. "/" : 모든 ai툴을 조회하는 Home 페이지
//2. "/detail" : 특정 ai 툴의 상세 정보를 보여주는 페이지
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </>
  )
}

export default App
