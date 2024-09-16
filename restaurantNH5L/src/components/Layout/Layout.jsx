
import React from 'react'
import Header from './Header'

const Layout = ( {children}) => {
  return (
    <>

    <Header/>

    {/* using Layout as wrapper container with 'children' props */}

    {/* direct destructuring */}
    <div>
        {children}
    </div>

    </>
  )
}

export default Layout