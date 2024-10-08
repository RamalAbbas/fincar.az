import React, { useState } from 'react'
import styles from './Dropdown.module.css'
import { all } from 'axios'

const Dropdown = ({ carfeature , name , callBackValue , placeholder }) => {
    const [dropdownMenu,setDropdownMenu] = useState(false)
    const [activeTitle,setActiveTitle] = useState([])
    const [activeIds,setActiveIds] = useState([])
    const [allIds,setAllIds] = useState([])

    
    const handleMenu = () => {
        setDropdownMenu(!dropdownMenu)
    }

    const handleChange = (item) => {
        if(name != 'model'){
            setDropdownMenu(!dropdownMenu)
            callBackValue(name, item.id)
            setActiveTitle([item.name])
            setAllIds([])
        }else {
            callBackValue(name, allIds)
        }
    }

    const handleCheckboxChange = (event) => {
        const item = carfeature.filter((item) => item.id == event.target.value)
        let ids = item[0].models?.map(item => item.id)
        let names = item[0].models?.map(item => item.name)
        
        let selectors = names?.map((item) => `#prefix${item}`)
        selectors.forEach((item) => document.querySelectorAll(item)[0].checked = true)
        let modelName = carfeature.filter((item) => item.name == event.target.id)
        let modelsName = modelName[0].models?.map(item => item.name)

        
          
        if (event.target.checked) {
            setAllIds(prevIds => [...prevIds, ...ids]);
            callBackValue(name,[...allIds, ...ids])
            // setActiveTitle((prev) => [...prev," " ,...modelsName])
        } else {
            setAllIds(prevIds => prevIds.filter(id => !ids.includes(id)));
            selectors.forEach((item) => document.querySelectorAll(item)[0].checked = false)
            callBackValue(name,allIds.filter(id => !ids.includes(id)))
            // setActiveTitle(allIds.filter(id => !ids.includes(id)))
        }
    };

    const removeCheckboxChange = (event) => {
        console.log(event.target.name);
        
        if(allIds.includes(Number(event.target.value))){
            setAllIds(allIds.filter((item) => item != Number(event.target.value)))
            callBackValue(name,allIds.filter((item) => item != Number(event.target.value)))
            // setActiveTitle(activeTitle.filter((item) => item != event.target.name))
        }else{
            setAllIds((prev) => [...prev,Number(event.target.value)])
            callBackValue(name,[...allIds,Number(event.target.value)])
            // setActiveTitle([...activeTitle,event.target.name])

        }
    };

    return (
            <div className={styles.dropdown_content}>
                <div style={{borderTopLeftRadius: name == "make" ? "30px" : "2px",borderBottomLeftRadius: name == "make" ? "30px" : "2px"}} onClick={handleMenu} className={styles.dropdown_top}>
                    <p className={styles.dropdown_active_title}>
                        {activeTitle && activeTitle.length != 0 ? activeTitle.map((item) => item + " ") : placeholder}
                    </p>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10L12 14L16 10" stroke="#8990B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                    <div style={{display: dropdownMenu ? "flex": "none"}} className={styles.dropdown_menu}>
                        {name == "model" ? (
                            carfeature?.map((item) => (
                                <div className={styles.dropdown_body} key={item.id}>
                                    <div className={styles.check_item}>
                                        <label htmlFor={item.name} onClick={() => handleChange(item)} className={styles.dropdown_option}>
                                            {item?.name}
                                        </label>

                                        <input className={styles.checkbox_item} id={item.name} value={item.id} type="checkbox" onChange={handleCheckboxChange} />
                                    </div>

                                    {
                                        item?.models ? (
                                            item?.models.map((item) => (
                                                <div key={item.id} className={styles.check_item}>
                                                    <label htmlFor={"prefix"+item.name} className={styles.dropdown_option}>
                                                        {item?.name}
                                                    </label>
            
                                                    <input className={styles.checkbox_item} id={"prefix"+item.name} name={item.name} value={item.id} onChange={removeCheckboxChange} type="checkbox" />
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
                                        <p onClick={() => handleChange(item)} name={item} id={item.id} className={styles.dropdown_option}>
                                            {item?.name}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                        
                    </div> 
            </div>
    )
}

export default Dropdown