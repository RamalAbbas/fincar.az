import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const ClientLayout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default ClientLayout
