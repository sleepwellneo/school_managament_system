import { useState } from 'react'
import './App.css'
import {router} from "./router/index.jsx";
import {RouterProvider} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
