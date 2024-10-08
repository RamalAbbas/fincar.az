import React from 'react'
import Save from '../../components/personalcabinet/saved/Save'
import MobileSaved from '../../components/personalcabinet/MobileSaved/Save'
import BreadCrumb from '../../components/Common/BreadCrumb/BreadCrumb'
const Saved = () => {
  return (
  <>
      <BreadCrumb items={["User Account"]}/>
      <Save/>
      
      <MobileSaved />
  </>
  )
}

export default Saved