import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../src/css/style.css'
import AnimatedRoutes from './router';

const App = () => {
  return (
    <>
      <Router>
        <AnimatedRoutes />
      </Router>
      <ToastContainer />
    </>
  )
}

export default App