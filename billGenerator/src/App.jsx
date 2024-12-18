import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Forms from './components/Forms';
import Table from './components/Table';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Routes>
         <Route path="/form" element={<Forms />} />
          <Route path='/tables' element={<Table  />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
