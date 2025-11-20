import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from '../../07reactRouter/src/components/About/About';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />  {/* This is where nested routes like Home will be rendered */}
      <Footer />
    </div>
  );
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path='/' element={<Home />} />  {/* Renders Home when path is '/' */}
        <Route path='/about' element={<About/>} />
      </Route>
    )
  );
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
