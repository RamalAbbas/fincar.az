import React from 'react'
import MainHeader from '@/components/Main/MainHeader/MainHeader'
import Popular from '@/components/Main/Popular/Popular'
import CarList from '@/components/Main/CarList/CarList'
import MobileCarList from '@/components/Common/MobileCarList/MobileCarList'

const page = () => {
  return (
    <>
      <MainHeader />
      <Popular />
      <CarList />
      <div className="pb-[90px] min-lg:hidden">
        <MobileCarList title="Popular maşınlar" />
        <MobileCarList title="Son elanlar" />
      </div>
    </>
  )
}

export default page
