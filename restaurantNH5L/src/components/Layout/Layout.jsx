
import React from 'react'
import Header from './Header'
import { Footer } from './Footer'

const Layout = ( {children}) => {
  return (
    <>

    <Header/>

    {/* using Layout as wrapper container with 'children' props */} {/* direct destructuring */}
    <div>
        {children}
    </div>

    <Footer/>

    </>
  )
}

export default Layout