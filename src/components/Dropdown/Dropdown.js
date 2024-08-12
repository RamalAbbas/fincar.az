import React, { useState } from 'react'
import styles from './Dropdown.module.css'

const Dropdown = ({ carfeature , name , callBackValue , placeholder }) => {
    const [dropdownMenu,setDropdownMenu] = useState(false)
    const [activeTitle,setActiveTitle] = useState("")
    const [activeIds,setActiveIds] = useState([])
    const [allIds,setAllIds] = useState([])
    
    const handleMenu = () => {
        setDropdownMenu(!dropdownMenu)
    }

    const handleChange = (item) => {
        callBackValue(name, item.id)
        // setDropdownMenu(!dropdownMenu)
        setActiveTitle(item.name)
    }

    const handleCheckboxChange = (event) => {
        const item = carfeature.filter((item) => item.id == event.target.value)
        let ids = item[0].models?.map(item => item.id)
        
        setActiveIds((prev) => [...prev,ids])
        console.log(activeIds);

        setAllIds(activeIds.flat());
    };

    return (
            <div className={styles.dropdown_content}>
                <div onClick={handleMenu} className={styles.dropdown_top}>
                    <p className={styles.dropdown_active_title}>
                        {activeTitle ? activeTitle : placeholder}
                    </p>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10L12 14L16 10" stroke="#8990B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                {dropdownMenu ? (
                    <div className={styles.dropdown_menu}>
                        {name == "model" ? (
                            carfeature?.map((item) => (
                                <div key={item.id}>
                                    <div className={styles.check_item}>
                                        <label htmlFor={item.name} onClick={() => handleChange(item)} className={styles.dropdown_option}>
                                            {item?.name}
                                        </label>

                                        <input id={item.name} value={item.id} type="checkbox" onChange={handleCheckboxChange} />
                                    </div>

                                    {
                                        item?.models ? (
                                            item.models.map((item) => (
                                                <div key={item.id} className={styles.check_item}>
                                                    <label htmlFor={item.name} onClick={() => handleChange(item)} className={styles.dropdown_option}>
                                                        {item?.name}
                                                    </label>
            
                                                    <input checked={allIds.includes(item.id)} id={item.name} type="checkbox" />
                                                </div>
                                            ))
                                        ) : null
                                    }
                                </div>
                            ))
                        ) : (
                            carfeature?.map((item) => (
                                <div key={item.id}>
                                    <div className={styles.check_item}>
                                        <p onClick={() => handleChange(item)} className={styles.dropdown_option}>
                                            {item?.name}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                        
                    </div> 
                ) : <></>}
            </div>
    )
}

export default Dropdown