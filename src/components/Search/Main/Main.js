import CarList from '../../../components/Search/CarList/CarList'
import FilterBox from '../FilterBox/FilterBox'
import styles from './Main.module.css'

const Main = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <FilterBox />

            <CarList />
        </div>
    </div>
  )
}

export default Main