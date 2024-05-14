import React from 'react'
import Header from './components/shared/Header'
import AllRoutes from './AllRoutes/AllRoutes'
import Footer from './components/shared/Footer'

const App = () => {
  return (
    <>
        <Header />
        <div className="container" style={{minHeight : "700px"}}>

            <AllRoutes />
        </div>
        <Footer />
    </>
  )
}

export default App