import React, {useRef, useState}from 'react';
import './App.css';
import Header from  './components/Header';
import Main from './views/Main';
import Footer from './components/Footer';
import Busket from './views/Busket';
import BookTable from './views/BookTable';
import Blog from './components/Blog';

//шрифты
import './fonts/Nexa-Thin.otf';
import './fonts/Nexa-ThinItalic.otf';
import './fonts/Nexa-Regular.otf';
import './fonts/Nexa-RegularItalic.otf';
import './fonts/Nexa-Book.otf';
import './fonts/Nexa-BookItalic.otf';
import './fonts/Nexa-Bold.otf';
import './fonts/Nexa-BoldItalic.otf';


function App() {
  const[page, setPage] = useState('Main')
  const[setModalBox] = useState('none')

  const refs = {
      Footer: useRef(),
      Main: {
         Menu: useRef(),
      }
   }

   const pages = {
      Main: <Main ref={refs.Main}/>,
      Busket: <Busket/>,
      BookTable: <BookTable/>,
      Blog: <Blog/>,
  }

  return (
    <div className="App">
      <Header setPage={setPage} setModalBox={setModalBox} refs={refs}/>
      { pages[page] }
      <div ref={refs.Footer}>
        <Footer/>
      </div>
    </div>
  )
}

export default App;
