import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import styles from "./AddProduct.module.css";
import steps from "../../../assets/images/steps/steps.png";
import Image from "next/image";
import upload from "../../../assets/icons/upload/upload.svg";
const AddProduct = () => {
  return (
    <div className={styles.wrapper}>
      <BreadCrumb isPaddding={true} items={["Products", "Add products"]} />

      <div className={styles.content}>
        <div className={styles.top}>
          <nav>
            <ul>
              <li>
                Üç ay ərzində bir nəqliyyat vasitəsi yalnız bir dəfə pulsuz dərc
                oluna bilər.
              </li>
              <li>
                Üç ay ərzində təkrar və ya oxşar elanlar (marka/model, rəng)
                ödənişlidir.
              </li>
              <li>
                Elanınızı saytın ön sıralarında görmək üçün "İrəli çək"
                xidmətindən istifadə edin.
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.steps_body}>
          <Image src={steps} />
        </div>

        <div className={styles.photos_body}>
          <p className={styles.head_title}>Avtomobilin fotoları</p>
          <input type="file" id="uploadButton" />
          <label htmlFor="uploadButton">
            <div className={styles.center}>
              <Image src={upload} />
              <p>Şəkilləri buraya yükləyin</p>
            </div>
            <nav>
              <ul>
                <li>
                  Minimum – 3 şəkil (ön, arxa və bütöv ön panelin görüntüsü
                  mütləqdir).
                </li>
                <li>Maksimum – 25 şəkil.</li>
                <li>Optimal ölçü – 1024x768 piksel.</li>
              </ul>
            </nav>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
