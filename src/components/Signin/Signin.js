"use client"
import line from '../../assets/images/signin/line/line.png'
import logo from '../../assets/images/logo/logo.png'
import styles from './Signin.module.css'
import { useRouter } from 'next/navigation';
import Image from 'next/image'

const Signin = () => {
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
                        Sign in
                    </p>

                    <input placeholder='Fin code' className={styles.signin_input} type="number" />

                    <input placeholder='Phone Number' className={styles.signin_input} type="number" />
                
                    <button className={styles.signin_button}>
                        Sign in
                    </button>

                    <Image src={line} alt='line' />

                    <p onClick={() => push("/signin/request")}  className={styles.route}>
                        New user?
                        <span className={styles.blue}>
                            Request for registration
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signin