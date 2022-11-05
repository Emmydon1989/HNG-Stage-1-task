import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css'
import Contact from './Contact'
import React from "react";
import New from './New';


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<New />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}
export default App;