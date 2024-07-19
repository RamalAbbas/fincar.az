"use client"
import BreadCrumb from '../../components/Common/BreadCrumb/BreadCrumb'
import Content from '../../components/Dealerships/Content/Content'
import Header from '../../components/Dealerships/Header/Header'
import React from 'react'
import { getDealerList, getDealerSearch } from '../../services'
import { useEffect, useState } from 'react'

const page = () => {
  const [dealerList, setDealerList] = useState([])
  const [isLoading,setIsloading] = useState(false)

  //! Fetching Data 
  const getCarsData = async () => {
    try {
      setIsloading(true)
      const response = await getDealerList()
      setDealerList(response)
      setIsloading(false)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getCarsData()
  }, [])

  const callBackData = async (value) => {
    if (value.trim() === "") {
      alert("Error: Search input cannot be empty!")
      return
    }
    setIsloading(true)

    const response = await getDealerSearch(value)
      setDealerList(response)
      setIsloading(false)
    }

  return (
    <div>
      <BreadCrumb items={["Homepage", "Product page", "Car dealerships"]} />
      <Header callBackData={callBackData} />
      <Content isLoading={isLoading} dealerList={dealerList} />
    </div>
  )
}

export default page
