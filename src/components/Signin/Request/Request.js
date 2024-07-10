"use client"

import line from '../../../assets/images/signin/line/line.png'
import logo from '../../../assets/images/logo/logo.png'
import { useRouter } from 'next/navigation';
import styles from './Request.module.css'
import Image from 'next/image'

const Request = () => {
    const { push } = useRouter()

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Image
                    src={logo}
                    alt='logo'
                />

                <div className={styles.box}>
                    <p className={styles.headTitle}>
                        Request for registration
                    </p>

                    <input placeholder='Fin code' className={styles.signin_input} type="number" />

                    <input placeholder='Phone Number' className={styles.signin_input} type="number" />
                
                    <button className={styles.signin_button}>
                        Request
                    </button>

                    <Image src={line} alt='line' />

                    <p onClick={() => push("/signin")}  className={styles.route}>
                        Do you have an account?
                        <span className={styles.blue}>
                            Sign in
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Request