'use client'
import styles from './Faqs.module.css'
import { useState } from 'react';

const funding_data = [
    {
      id: 1,
      title: 'Məlumatın dəqiqləşdirilməsi?',
      description:
        'We offer customers two, stress-free ways to begin the financing process at Fincar:1. Fill out the simple and secure online form in as little as five minutes. After your application is submitted, you will receive a text message with your pre-qualification. A Car-Mart associate will then call you to schedule an appointment to come in and test drive the vehicle.2. Stop in and fill out a credit application at',
    },
    {
      id: 2,
      title: 'App installation failed, how to update system information?',
      description:
        'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact. Email and Chat. We try to reply quickly, so you need not to wait too long for a response!',
    },
    {
      id: 3,
      title: 'Website response taking time, how to improve?',
      description:
        'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact. Email and Chat. We try to reply quickly, so you need not to wait too long for a response!',
    },
    {
      id: 4,
      title: 'How do I create an account?',
      description:
        'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact. Email and Chat. We try to reply quickly, so you need not to wait too long for a response!',
    },
];

const payment_system = [
    {
      id: 5,
      title: 'Məlumatın dəqiqləşdirilməsi?',
      description:
        'We offer customers two, stress-free ways to begin the financing process at Fincar:1. Fill out the simple and secure online form in as little as five minutes. After your application is submitted, you will receive a text message with your pre-qualification. A Car-Mart associate will then call you to schedule an appointment to come in and test drive the vehicle.2. Stop in and fill out a credit application at',
    },
    {
      id: 6,
      title: 'App installation failed, how to update system information?',
      description:
        'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact. Email and Chat. We try to reply quickly, so you need not to wait too long for a response!',
    },
    {
      id: 7,
      title: 'Website response taking time, how to improve?',
      description:
        'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact. Email and Chat. We try to reply quickly, so you need not to wait too long for a response!',
    },
    {
      id: 8,
      title: 'How do I create an account?',
      description:
        'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact. Email and Chat. We try to reply quickly, so you need not to wait too long for a response!',
    },
];

const Faqs = () => {
    const [expandedItems, setExpandedItems] = useState([])

    const toggleItem = (itemId) => {
        if (expandedItems.includes(itemId)) {
            setExpandedItems(expandedItems.filter((id) => id !== itemId));
        } else {
            setExpandedItems([...expandedItems, itemId]);
        }
    };

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
                    <circle cx="11.058" cy="11.0586" r="7.06194" stroke="#505673" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.0063 20.0033L16.0547 16.0517" stroke="#505673" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <input className={styles.faqs_input} placeholder='Maliyyələşdirmə, Kredit, Ödəniş...' type="text" />
            </form>

           
            <div>
                    <p className={styles.faqs_item_head_title}>
                        Maliyyələşdirmə
                    </p>

                    <div className={styles.faq_items_body}>
                            {
                                funding_data.map((item) => (
                                    <div className={styles.faq_item} key={item.id}>
                                        <div className={styles.faq_item_top} onClick={() => toggleItem(item.id)}>

                                                {
                                                    expandedItems.includes(item.id) ? (
                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 16.6667V15.3333H24V16.6667H8Z" fill="#3B5191"/>
                                                        </svg>
                                                    ) : (
                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15.3333 16.6667H8V15.3333H15.3333V8H16.6667V15.3333H24V16.6667H16.6667V24H15.3333V16.6667Z" fill="#3B5191"/>
                                                        </svg>
                                                    )
                                                }

                                            <p className={styles.faq_name}>
                                                {
                                                    item.title
                                                } 
                                            </p>
                                        </div>

                                        {expandedItems.includes(item.id) && (
                                            <p className={styles.faq_description}>
                                                {
                                                    item.description
                                                }
                                            </p>
                                        )}
                                    </div>
                                ))
                            }
                    </div>
            </div>

            <div>
                    <p className={styles.faqs_item_head_title}>
                        Ödəniş sistemi
                    </p>

                    <div className={styles.faq_items_body}>
                            {
                                payment_system.map((item) => (
                                    <div className={styles.faq_item} key={item.id}>
                                        <div className={styles.faq_item_top} onClick={() => toggleItem(item.id)}>
                                                {
                                                    expandedItems.includes(item.id) ? (
                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 16.6667V15.3333H24V16.6667H8Z" fill="#3B5191"/>
                                                        </svg>
                                                    ) : (
                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15.3333 16.6667H8V15.3333H15.3333V8H16.6667V15.3333H24V16.6667H16.6667V24H15.3333V16.6667Z" fill="#3B5191"/>
                                                        </svg>
                                                    )
                                                }

                                            <p className={styles.faq_name}>
                                                {
                                                    item.title
                                                } 
                                            </p>
                                        </div>

                                        {expandedItems.includes(item.id) && (
                                            <p className={styles.faq_description}>
                                                {
                                                    item.description
                                                }
                                            </p>
                                        )}
                                    </div>
                                ))
                            }
                    </div>
            </div>
            
        </div>
    )
}

export default Faqs