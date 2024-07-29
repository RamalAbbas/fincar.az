"use client";
import { useState } from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import styles from "./AddProduct.module.css";
import steps from "../../../assets/images/steps/steps.png";
import Image from "next/image";
import upload from "../../../assets/icons/upload/upload.svg";
import upload2 from "../../../assets/icons/upload/upload2.svg";

const AddProduct = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [inputKey, setInputKey] = useState(Date.now());
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve({ id: file.name, src: e.target.result });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(newImages).then((images) => {
      setSelectedImages((prevImages) => [...prevImages, ...images]);
      setInputKey(Date.now());
    });
  };

  const deleteImage = (id) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((image) => image.id !== id)
    );
  };

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

        <div className={styles.photos_body}>
          <p className={styles.head_title}>Avtomobilin fotoları</p>

          <input
            type="file"
            id="uploadButton"
            key={inputKey}
            onChange={handleImageUpload}
            multiple
            style={{ display: "none" }}
          />

          <div className={styles.uploadDiv}>
            <div className={styles.center}>
              {selectedImages.length > 0 ? (
                <div className={styles.selectedImages}>
                  {selectedImages.map((image) => (
                    <div
                      onMouseLeave={() => setHoveredImage(null)}
                      onMouseEnter={() => setHoveredImage(image.id)}
                      key={image.id}
                      className={styles.imageWrapper}
                    >
                      <img
                        src={image.src}
                        alt="Selected"
                        className={styles.uploadedImage}
                      />
                      {hoveredImage === image.id && (
                        <div
                          className={styles.remove_button}
                          onClick={() => deleteImage(image.id)}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="24"
                              height="24"
                              rx="2"
                              fill="#878CA8"
                              fillOpacity="0.55"
                            />
                            <path
                              d="M8 8L16 16"
                              stroke="#141A33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16 8L8 16"
                              stroke="#141A33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("uploadButton").click()
                    }
                    className={styles.addImageButton}
                  >
                    <Image src={upload2} />
                    Add image
                  </button>
                </div>
              ) : (
                <>
                  <label className={styles.uploadLabel} htmlFor="uploadButton">
                    <Image src={upload} />
                    <p>Şəkilləri buraya yükləyin</p>
                  </label>
                  {selectedImages.length === 0 && (
                    <nav>
                      <ul>
                        <li>
                          Minimum – 3 şəkil (ön, arxa və bütöv ön panelin
                          görüntüsü mütləqdir).
                        </li>
                        <li>Maksimum – 25 şəkil.</li>
                        <li>Optimal ölçü – 1024x768 piksel.</li>
                      </ul>
                    </nav>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <div className={styles.indicators}>
          <p className={styles.head_title}>Əsas göstəriciləri</p>

          <div className={styles.grid}>
            <div>
              <label htmlFor="">Marka</label>
              <select name="" id="">
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Yanacaq növü</label>
              <select name="" id="">
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Model</label>
              <select name="" id="">
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Yürüş</label>
              <select name="" id="">
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Rəng</label>
              <select name="" id="">
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Qiyməti</label>
              <select name="" id="">
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.indicators}>
          <p className={styles.head_title}>Digər xüsusiyyətləri</p>

          <div className={styles.grid}>
            <div>
              <label htmlFor="">Ban növü</label>
              <select name="" id="">
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Ötürücü</label>
              <select name="" id="">
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Neçənci sahibisiniz?</label>
              <select name="" id="">
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Sürətlər qutusu</label>
              <select name="" id="">
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Hansı bazar üçün yığılıb</label>
              <select name="" id="">
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </div>
            <div>
              <label htmlFor="">İl</label>
              <select name="" id="">
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Mühərrikin gücü, a.g. </label>
              <select name="" id="">
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Mühərrikin həcmi, sm3</label>
              <select name="" id="">
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </div>
            <div>
              <label htmlFor="">VIN-kod</label>
              <input className={styles.vin_code_input} type="text" />
            </div>
            <div className={styles.vin_code_item}>
              <p className={styles.vin_code_title}>VIN-kod nədir?</p>
            </div>
          </div>

          <div className={styles.note}>
            <label htmlFor="">Qeydinizi əlavə edin</label>
            <textarea name="" id=""></textarea>
            <label htmlFor="">Telefon nömrəsi qeyd etmək qadağandır</label>
          </div>

          <div className={styles.supply}>
            <p className={styles.head_title}>Avtomobilin təchizatı</p>

            <div className={styles.checkbox_container}>
              <div className={styles.checkbox_item}>
                <input type="checkbox" id="customCheckbox1" />
                <label htmlFor="customCheckbox1"></label>
                <label
                  className={styles.custom_label}
                  htmlFor="customCheckbox1"
                >
                  Yüngül lehimli disklər
                </label>
              </div>

              <div className={styles.checkbox_item}>
                <input type="checkbox" id="ABS" />
                <label htmlFor="ABS"></label>
                <label className={styles.custom_label} htmlFor="ABS">
                  ABS
                </label>
              </div>

              <div className={styles.checkbox_item}>
                <input type="checkbox" id="Kondisioner" />
                <label htmlFor="Kondisioner"></label>
                <label className={styles.custom_label} htmlFor="Kondisioner">
                  Kondisioner
                </label>
              </div>

              <div className={styles.checkbox_item}>
                <input type="checkbox" id="Mərkəzi" />
                <label htmlFor="Mərkəzi"></label>
                <label className={styles.custom_label} htmlFor="Mərkəzi">
                  Mərkəzi qapanma
                </label>
              </div>

              <div className={styles.checkbox_item}>
                <input type="checkbox" id="park" />
                <label htmlFor="park"></label>
                <label className={styles.custom_label} htmlFor="park">
                  Park radar
                </label>
              </div>

              <div className={styles.checkbox_item}>
                <input type="checkbox" id="Arxa" />
                <label htmlFor="Arxa"></label>
                <label className={styles.custom_label} htmlFor="Arxa">
                  Arxa görüntü kamerası
                </label>
              </div>

              <div className={styles.checkbox_item}>
                <input type="checkbox" id="deri" />
                <label htmlFor="deri"></label>
                <label className={styles.custom_label} htmlFor="deri">
                  Dəri salon
                </label>
              </div>

              <div className={styles.checkbox_item}>
                <input type="checkbox" id="ksenon" />
                <label htmlFor="ksenon"></label>
                <label className={styles.custom_label} htmlFor="ksenon">
                  Ksenon lampalar
                </label>
              </div>

              <div className={styles.checkbox_item}>
                <input type="checkbox" id="Yağış" />
                <label htmlFor="Yağış"></label>
                <label className={styles.custom_label} htmlFor="Yağış">
                  Yağış sensoru
                </label>
              </div>

              <div className={styles.checkbox_item}>
                <input type="checkbox" id="Oturacaqların" />
                <label htmlFor="Oturacaqların"></label>
                <label className={styles.custom_label} htmlFor="Oturacaqların">
                  Oturacaqların ventilyasiyası
                </label>
              </div>

              <div className={styles.checkbox_item}>
                <input type="checkbox" id="Lyuk" />
                <label htmlFor="Lyuk"></label>
                <label className={styles.custom_label} htmlFor="Lyuk">
                  Lyuk
                </label>
              </div>

              <div className={styles.checkbox_item}>
                <input type="checkbox" id="Oturacaqlarıni" />
                <label htmlFor="Oturacaqlarıni"></label>
                <label className={styles.custom_label} htmlFor="Oturacaqlarıni">
                  Oturacaqların isidilməsi
                </label>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <button className={styles.add_button}>Əlavə et</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
