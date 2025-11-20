import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// import  from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// ? React gives you a extra funcanalities such as react outlet to which gives you a template through whhich you can dynamicallly 
// ? pass components
// ! ek tarike se ek template ki trh set hojata hai jha pe apne yh component toh yha ek template ke tarike se kaam karega

// ! mtlb outlet ki andar ki cheeze same rahengi upar neeche ki cheeze same rahegi
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout