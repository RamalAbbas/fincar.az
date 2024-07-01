import BreadCrumb from '@/components/Common/BreadCrumb/BreadCrumb'
import MobileCarList from '@/components/Common/MobileCarList/MobileCarList'
import MobileCarProfile from '@/components/Common/MobileCarProfile/MobileCarProfile'
import MobileDealershipContact from '@/components/Dealership/MobileDealershipContact/MobileDealershipContact'
import ProductList from '@/components/Dealership/ProductList/ProductList'
import Profile from '@/components/Dealership/Profile/Profile'
import React from 'react'

const page = () => {
  return (
    <div>
      <BreadCrumb
        items={[
          'Home page ',
          'Product page',
          'Car dealerships',
          'Autolux Azerbaijan - Jaguar',
        ]}
      />
      <div className="lg:hidden">
        <Profile />
        <ProductList />
      </div>
      {/* mobile design start*/}
      <div className="min-lg:hidden pb-[40px]">
        <MobileCarProfile />
        <MobileDealershipContact />
        <MobileCarList />
      </div>
      {/* mobile design end*/}
    </div>
  )
}

export default page
