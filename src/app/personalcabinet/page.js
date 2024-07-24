'use client'
import React from 'react'
import BreadCrumb from '../../components/Common/BreadCrumb/BreadCrumb'
import User from '../../components/personalcabinet/header/User'
const Page = () => {
  return (
   <>
 <BreadCrumb items={["User Account"]}/>
 <User/>
  </>
  )
}

export default Page