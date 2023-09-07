import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import { Header } from './assets/component/Header'
import { Home } from './assets/component/Home'
import { Records } from './assets/RecordComponent/Records'
import { Detail } from './assets/DetailComponent/Detail'
import News from './assets/NewsComponent/News'
import { Contact } from './assets/ContactComponent/Contact'
import { Footer } from './assets/component/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/record/*' element={<Records/>}></Route>
          <Route exact path='/news' element={<News/>}></Route>
          <Route exact path='/details' element={<Detail/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
