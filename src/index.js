import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import About from './pages/About/'
import Logement from './pages/Logement'
import Error from './components/Error/'
import Header from './components/Header'
import Footer from './components/Footer'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', sans-serif;    
    }

    body {
        margin :0px;
    }

`
ReactDOM.render(
  <React.StrictMode>
      <Router>
      <GlobalStyle />
      <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/logement/:id" element={<Logement />} />
              <Route path="*" element={<Error />} />           
          </Routes>
      <Footer />
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)