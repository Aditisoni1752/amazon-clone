import Header from './component/Header'
import Header2 from './component/Hearder2'
import Footer from './component/Footer'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
     <Header/>
     <Header2/>
    <Outlet/>
     <Footer></Footer>
      
    </>
  )
}

export default App
