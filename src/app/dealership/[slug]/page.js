'use client'
import BreadCrumb from '../../../components/Common/BreadCrumb/BreadCrumb'
import MobileCarList from '../../../components/Common/MobileCarList/MobileCarList'
import MobileCarProfile from '../../../components/Common/MobileCarProfile/MobileCarProfile'
import MobileDealershipContact from '../../../components/Dealership/MobileDealershipContact/MobileDealershipContact'
import ProductList from '../../../components/Dealership/ProductList/ProductList'
import Profile from '../../../components/Dealership/Profile/Profile'
import React from 'react'
import { getDealerDetail } from '../../../services'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
const page = ({ params }) => {
  console.log(params.slug);
  const [isLoading, setIsLoading] = useState(false)
  const [dealerDetail, setDealerDetail] = useState([])
  //! Fetching Data 
  const getCarsData = async () => {
    try {
      setIsLoading(true)
      const response = await getDealerDetail(params.slug)
      setDealerDetail(response);
      setIsLoading(false)
    }
    catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getCarsData()
  }, [])

  const renderProduct = () => {
    getCarsData()
  }
console.log(dealerDetail);

  return (
    <div>
      <BreadCrumb
        items={[
          'Home page ',
          'Product page',
          'Car dealerships',
          `${dealerDetail.name}`,
        ]}
      />
      <div className="lg:hidden">
        <Profile dealerdetail={dealerDetail}/>
        <ProductList renderProduct={renderProduct} dealerdetail={dealerDetail}/>
      </div>
      {/* mobile design start*/}
      <div className="min-lg:hidden pb-[40px]">
        <MobileCarProfile detail={dealerDetail} />
        <MobileDealershipContact detail={dealerDetail} />
        <MobileCarList renderProduct={renderProduct} carPopulars={dealerDetail.cars} />
      </div>
      {/* mobile design end*/}
    </div>
  )
}

export default page
