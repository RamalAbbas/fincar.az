import React from 'react'
import BreadCrumb from '../../components/Common/BreadCrumb/BreadCrumb'
import Main from '../../components/Search/Main/Main'

const Page = () => {
    return (
        <div>
            <BreadCrumb items={["Homepage", "Search"]} />

            <Main />
        </div>
    )
}

export default Page