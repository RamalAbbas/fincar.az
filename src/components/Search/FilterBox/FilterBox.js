import styles from './FilterBox.module.css'
import { useRouter } from 'next/navigation'
const FilterBox =({carfeature,products}) => { 
  const { push } = useRouter();
  const callBackSlug = (data) => {
    push(`/search/${data}`);
  }
  return (
    <div className={styles.box}>
      <p className={styles.headTitle}>Filtrlər</p>

      <div className={styles.filter_content}>
        <label htmlFor="">Qiymət</label>
       
        <div className="flex gap-2 mt-2">
          <input placeholder="Minimum" type="text"/> 
          <input placeholder="Maksimum" type="text" />
        </div>
      
        <div className="flex gap-2 mt-4">
          <div className={styles.select_wrapper}>
            <select name="" id="banType">
              <option value="" disabled selected >Ban növü</option>
              {
             carfeature?.bans?.map((item) => (
              <option value="Avtobus" key={item?.id}>{item.name}</option>
             ))}
            </select>
          </div>
         
          <div className={styles.select_wrapper}>
            
            <select name="" id="Sürətqutusu">
            <option value="Sürət qutusu" disabled selected>Sürət qutusu</option>
              {
             carfeature?.gears?.map((item) => (
              <option value="Avtobus" key={item?.id}>{item.name}</option>
            ))}
            </select>
          </div>
        </div>

        <div className="flex gap-2 my-4">
            <div className={styles.select_wrapper}>
              <select id="Marka">
              <option value="Marka" disabled selected>Marka</option>
              {
             carfeature?.makes?.map((item) => (
                <option value="Avtobus" key={item?.id}>{item.name}</option>
             ))}
              </select>
            </div>

            <div className={styles.select_wrapper}>
              <select id="Model">
                <option value="Model" disabled selected>Model</option>
                {
             carfeature?.models?.map((item) => (
                <option value="Avtobus" key={item?.id}>{item.name}</option>
             ))}
              </select>
            </div>
        </div>

        <label htmlFor="">İstehsal ili</label>

        <div className="flex gap-2 mb-4 mt-1">
          <div className={styles.select_wrapper}>
            <select id="2010">
              <option value="2010" disabled selected>2010</option>
              <option value="Avtobus">2010</option>
              <option value="Avtobus">Avtobus</option>
            </select>
          </div>

          <div className={styles.select_wrapper}>
            <select id="2023">
              <option value="2023" disabled selected>2023</option>
              <option value="Avtobus">Avtobus</option>
              <option value="Fayton">Fayton</option>
            </select>
      </div>
      </div>

        <label htmlFor="">Güc (a.g.)</label>

        <div className="flex gap-2 mt-1 mb-4">
          <input placeholder="Minimum" type="text" />

          <input placeholder="Maksimum" type="text" />
        </div>

        <label htmlFor="">Motorun həcmi</label>

        <div className="flex gap-2 mb-4 mt-1">
          <div className={styles.select_wrapper}>
            <select id="Minimum">
              <option value="Minimum" disabled selected>Minimum</option>
              <option value="Avtobus">Avtobus</option>
              <option value="Fayton">Fayton</option>
            </select>
          </div>

          <div className={styles.select_wrapper}>
            <select id="Maksimum">
              <option value="Maksimum" disabled selected>Maksimum</option>
              <option value="Avtobus">Avtobus</option>
              <option value="Fayton">Fayton</option>
            </select>
          </div>
        </div>
        <div className={styles.special_select_wrapper}>
          <select
            className={styles.special_select}
            id="Hansı bazar üçün yığılıb"
          >
            <option value="Hansı bazar üçün yığılıb" disabled selected>
              Hansı bazar üçün yığılıb
            </option>
            <option value="Avtobus">Avtobus</option>
            <option value="Fayton">Fayton</option>
          </select>
        </div>


        <div className="flex gap-2 mb-4 mt-4">
            <div className={styles.select_wrapper}>
              <select id="Yanacaq növü">
                <option value="Yanacaq növü" disabled selected>Yanacaq növü</option>
                <option value="Avtobus">Avtobus</option>
                <option value="Fayton">Fayton</option>
              </select>
            </div>

            <div className={styles.select_wrapper}>
                <select id="Rəng">
                <option value="Rəng" disabled selected>Rəng</option>
                {
             carfeature?.colors?.map((item) => (
                <option value="Avtobus" key={item?.id}>{item.name}</option>
             ))}
              </select>
            </div>
        </div>

        <button className={styles.searchButton}>Search</button>
      </div>
    </div>
  )
}

export default FilterBox
