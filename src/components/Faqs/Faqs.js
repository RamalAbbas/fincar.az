'use client'
import { faqSearchQuery, getFaqs } from '../../services';
import styles from './Faqs.module.css'
import { useEffect, useState } from 'react';

const Faqs = () => {
    const [value, setValue] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);
    const [expandedItems, setExpandedItems] = useState([]);

    const toggleItem = (itemId) => {
        if (expandedItems.includes(itemId)) {
            setExpandedItems(expandedItems.filter((id) => id !== itemId));
        } else {
            setExpandedItems([...expandedItems, itemId]);
        }
    };

    const renderFaqs = async () => {
        const response = await getFaqs();
        setData(response);
    };

    const handleChange = async (e) => {
        const searchValue = e.target.value;
        setValue(searchValue);
        if (searchValue.trim() === '') {
            setFilteredData([]);
            return;
        }
        const res = await faqSearchQuery(searchValue);
        if (res.length > 0) {
            setFilteredData(res);
        } else {
            setFilteredData([]);
            renderFaqs()
        }
    };

    useEffect(() => {
        renderFaqs();
    }, []);

    return (
        <div className={styles.container}>
            <p className={styles.head_title}>
                Tez-tez verilən suallar
            </p>

            <p className={styles.sub_title}>
                Tez-tez verilən sualları tapmaq üçün axtarışa açar söz yazın.
            </p>

            <form className={styles.faqs_form} action="">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11.058" cy="11.0586" r="7.06194" stroke="#505673" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.0063 20.0033L16.0547 16.0517" stroke="#505673" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <input onChange={handleChange} className={styles.faqs_input} placeholder='Maliyyələşdirmə, Kredit, Ödəniş...' type="text" />
            </form>

            {
                filteredData.length > 0 ? (
                    <div className='flex flex-col gap-4'>
                        {
                            filteredData.map((faq_data) => (
                                <div className={styles.faq_item} key={faq_data.id}>
                                    <div className={styles.faq_item_top} onClick={() => toggleItem(faq_data.id)}>
                                        {expandedItems.includes(faq_data.id) ? (
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 16.6667V15.3333H24V16.6667H8Z" fill="#3B5191"/>
                                            </svg>
                                        ) : (
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.3333 16.6667H8V15.3333H15.3333V8H16.6667V15.3333H24V16.6667H16.6667V24H15.3333V16.6667Z" fill="#3B5191"/>
                                            </svg>
                                        )}

                                        <p className={styles.faq_name}>
                                            {faq_data.question}
                                        </p>
                                    </div>

                                    {expandedItems.includes(faq_data.id) && (
                                        <p className={styles.faq_description}>
                                            {faq_data.answer}
                                        </p>
                                    )}
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    value.trim() !== '' ? (
                        <p>Axtarisa uygun netice yoxdur</p>
                    ) : (
                        data.length > 0 ? (
                            data.map((item) => (
                                <div key={item.id}>
                                    <p className={styles.faqs_item_head_title}>
                                        {item.name}
                                    </p>
                                    <div className={styles.faq_items_body}>
                                        {
                                            item.faqs.map((faq_data) => (
                                                <div className={styles.faq_item} key={faq_data.id}>
                                                    <div className={styles.faq_item_top} onClick={() => toggleItem(faq_data.id)}>
                                                        {expandedItems.includes(faq_data.id) ? (
                                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8 16.6667V15.3333H24V16.6667H8Z" fill="#3B5191"/>
                                                            </svg>
                                                        ) : (
                                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.3333 16.6667H8V15.3333H15.3333V8H16.6667V15.3333H24V16.6667H16.6667V24H15.3333V16.6667Z" fill="#3B5191"/>
                                                            </svg>
                                                        )}

                                                        <p className={styles.faq_name}>
                                                            {faq_data.question}
                                                        </p>
                                                    </div>

                                                    {expandedItems.includes(faq_data.id) && (
                                                        <p className={styles.faq_description}>
                                                            {faq_data.answer}
                                                        </p>
                                                    )}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Axtarisa uygun netice yoxdur</p>
                        )
                    )
                )
            }
        </div>
    )
}

export default Faqs;
