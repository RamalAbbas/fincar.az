import BreadCrumb from '../../components/Common/BreadCrumb/BreadCrumb'
import Content from '../../components/Dealerships/Content/Content'
import Header from '../../components/Dealerships/Header/Header'
import React from 'react'

const page = () => {
  return (
    <div>
        <BreadCrumb items={["Homepage", "Product page", "Car dealerships"]} />
    
        <Header />
        <Content />
    </div>
  )
}

export default page