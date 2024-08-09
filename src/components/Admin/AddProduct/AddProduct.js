"use client";
import { useEffect, useState } from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import styles from "./AddProduct.module.css";
import steps from "../../../assets/images/steps/steps.png";
import Image from "next/image";
import upload from "../../../assets/icons/upload/upload.svg";
import upload2 from "../../../assets/icons/upload/upload2.svg";
import {
  getCarFeature,
  carFeatureListModel,
  createCar,
  carFeatureListDrive,
} from "../../../services";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const AddProduct = () => {
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setState((prevState) => ({
      ...prevState,
      [`optionals_${id}`]: id,
    }));
  };

  const [state, setState] = useState({
    make: 0,
    model: 0,
    color: 0,
    fuel: 0,
    distance: 0,
    distance_unit: 0,
    price: 0,
    currency: 0,
    body: 0,
    drive: 0,
    owner: 0,
    gearbox: 0,
    market: 0,
    year: 0,
    engine_power: 0,
    engine_volume: 0,
    vin: "",
    description: "",
    uploaded_images: "",
    optionals: 3,
  });

  const [carFeature, setCarFeature] = useState([]);
  const [models, setModels] = useState([]);
  const [drives, setDrives] = useState([]);
  const minYear = 2000;
  const currentYear = new Date().getFullYear();
  const [errorText, setErrorText] = useState("");
  const [imageDelete, setImageDelete] = useState(false);
  const years = Array.from(
    { length: currentYear - minYear + 1 },
    (_, i) => minYear + i
  );

  const [imagePreview, setImagePreview] = useState("");
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files.length < 3) {
      setErrorText("Minimum 3 şəkil olmalıdır");

      const previews = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onloadend = () => {
          previews.push(reader.result);
          if (previews.length === files.length) {
            setImagePreview(previews);
            setIsImageUploaded(true);
          }
        };

        reader.readAsDataURL(file);
      }

      setState((prevData) => ({
        ...prevData,
        uploaded_images: { ...files },
      }));
      return;
    }

    if (files.length > 24) {
      setErrorText("Maksimum 24 şəkil ola bilər");
    }

    const previews = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        previews.push(reader.result);
        if (previews.length === files.length) {
          setImagePreview(previews);
          setIsImageUploaded(true);
        }
      };

      reader.readAsDataURL(file);
    }

    setState((prevData) => ({
      ...prevData,
      uploaded_images: { ...files },
    }));

    setErrorText("");
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "make") {
      const data = await carFeatureListModel(e.target.value);
      setModels(data);
    }
  };

  const addProduct = async () => {
    const token = Cookies.get("admin_data")
      ? JSON.parse(Cookies.get("admin_data")).access_token
      : "";

    try {
      const res = await createCar(state, token);
      if (!!res) {
        toast.success("Maşin Əlavə Olundu .");
      } else {
        toast.error("Düzgün Melumat Daxil Edin");
      }
      console.log(res, state);
    } catch (error) {
      console.error("API call failed:", error);
    }
  };

  const getCarFeatureData = async () => {
    const response = await getCarFeature();
    setCarFeature(response);
  };

  useEffect(() => {
    getCarFeatureData();
  }, []);

  const [options, setOptions] = useState([]);

  const generateOptions = () => {
    const newOptions = [];
    for (let i = 0; i <= 6500; i += 100) {
      newOptions.push(i);
    }
    for (let i = 7000; i <= 10000; i += 500) {
      newOptions.push(i);
    }
    for (let i = 11000; i <= 16000; i += 1000) {
      newOptions.push(i);
    }
    setOptions(newOptions);
  };

  useEffect(() => {
    generateOptions();
  }, []);

  const renderDrives = async () => {
    const res = await carFeatureListDrive();
    setDrives(res);
  };

  useEffect(() => {
    renderDrives();
  }, []);

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
            onChange={handleImageUpload}
            multiple
            style={{ display: "none" }}
          />

          <div className={styles.uploadDiv}>
            {isImageUploaded ? (
              <div className={styles.imageContainer}>
                {imagePreview.map((image, index) => (
                  <div
                    onMouseEnter={() => setImageDelete(true)}
                    onMouseLeave={() => setImageDelete(false)}
                    className={styles.imgBody}
                  >
                    <img
                      key={index}
                      src={image}
                      alt={`Selected preview ${index}`}
                      className={styles.uploadedImage}
                    />
                  </div>
                ))}
                {imageDelete ? (
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
                      fill-opacity="0.55"
                    />
                    <path
                      d="M8 8L16 16"
                      stroke="#141A33"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 8L8 16"
                      stroke="#141A33"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <></>
                )}
                <label className={styles.uploadLabel} htmlFor="uploadButton">
                  <div className={styles.addImageButton}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 3V7"
                        stroke="#505673"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 5H22"
                        stroke="#505673"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 5H5C3.895 5 3 5.895 3 7V19C3 20.105 3.895 21 5 21H18C19.105 21 20 20.105 20 19V11"
                        stroke="#505673"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.96642 14.467L8.47042 12.081C8.81942 11.528 9.59642 11.453 10.0444 11.929L11.1194 13.071L12.2464 10.676C12.5934 9.93801 13.6314 9.90401 14.0264 10.618L16.1804 14.516C16.5484 15.183 16.0654 16 15.3044 16H7.81242C7.02442 16 6.54642 15.133 6.96642 14.467Z"
                        stroke="#505673"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Add image
                  </div>
                </label>
              </div>
            ) : (
              <div className={styles.center}>
                <label className={styles.uploadLabel} htmlFor="uploadButton">
                  <Image src={upload} alt="Upload" />
                  <p>Şəkilləri buraya yükləyin</p>
                </label>
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
              </div>
            )}
            <p className={styles.errorText}>{errorText}</p>
          </div>
        </div>

        <div className={styles.indicators}>
          <p className={styles.head_title}>Əsas göstəriciləri</p>

          <div className={styles.grid}>
            <div>
              <label htmlFor="make">Marka</label>
              <select
                name="make"
                id="make"
                value={state.make}
                onChange={handleChange}
              >
                <option selected>Seçin</option>
                {carFeature?.makes?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="fuel">Yanacaq növü</label>
              <select
                name="fuel"
                id="fuel"
                value={state.fuel}
                onChange={handleChange}
              >
                <option selected>Seçin</option>

                {carFeature?.fuels?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="model">Model</label>
              <select
                name="model"
                id="model"
                value={state.model}
                onChange={handleChange}
              >
                <option selected>Seçin</option>

                {models[0]?.models?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="distance">Yürüş</label>
              <div className={styles.custom_item}>
                <input
                  type="text"
                  name="distance"
                  value={state.distance}
                  onChange={handleChange}
                />

                <div className={styles.border}></div>
                <select
                  name="distance_unit"
                  id="distance_unit"
                  value={state.distance_unit}
                  onChange={handleChange}
                >
                  <option selected>Seç</option>
                  {carFeature?.unit?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="color">Rəng</label>
              <select
                name="color"
                id="color"
                value={state.color}
                onChange={handleChange}
              >
                <option selected>Seçin</option>

                {carFeature?.colors?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="price">Qiyməti</label>
              <div className={styles.custom_item}>
                <input
                  type="text"
                  name="price"
                  value={state.price}
                  onChange={handleChange}
                />

                <div className={styles.border}></div>
                <select
                  name="currency"
                  id="currency"
                  value={state.currency}
                  onChange={handleChange}
                >
                  <option selected>Seç</option>
                  {carFeature?.currency?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.indicators}>
          <p className={styles.head_title}>Digər xüsusiyyətləri</p>

          <div className={styles.grid}>
            <div>
              <label htmlFor="body">Ban növü</label>
              <select
                name="body"
                id="body"
                value={state.body}
                onChange={handleChange}
              >
                <option selected>Seçin</option>

                {carFeature?.bans?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="drive">Ötürücü</label>
              <select
                name="drive"
                id="drive"
                value={state.drive}
                onChange={handleChange}
              >
                <option selected>Seçin</option>
                {drives?.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="owner">Neçənci sahibisiniz?</label>
              <select
                name="owner"
                id="owner"
                value={state.owner}
                onChange={handleChange}
              >
                <option selected>Seçin</option>

                {carFeature?.owner?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="gearbox">Sürətlər qutusu</label>
              <select
                name="gearbox"
                id="gearbox"
                value={state.gearbox}
                onChange={handleChange}
              >
                <option selected>Seçin</option>

                {carFeature?.gears?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="market">Hansı bazar üçün yığılıb</label>
              <select
                name="market"
                id="market"
                value={state.market}
                onChange={handleChange}
              >
                <option selected>Seçin</option>

                {carFeature?.markets?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="year">İl</label>
              <select
                name="year"
                id="year"
                value={state.year}
                onChange={handleChange}
              >
                <option selected>Seçin</option>

                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="engine_power">Mühərrikin gücü, a.g. </label>
              <input
                name="engine_power"
                className={styles.vin_code_input}
                type="text"
                value={state.engine_power}
                onChange={handleChange}
                id="engine_power"
              />
            </div>
            <div>
              <label htmlFor="engine_volume">Mühərrikin həcmi, sm3</label>
              <select
                name="engine_volume"
                id="engine_volume"
                value={state.engine_volume}
                onChange={handleChange}
              >
                <option selected>Seçin</option>

                {options.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="vin">VIN-kod</label>
              <input
                name="vin"
                className={styles.vin_code_input}
                type="text"
                value={state.vin}
                onChange={handleChange}
              />
            </div>
            <div className={styles.vin_code_item}>
              <p className={styles.vin_code_title}>VIN-kod nədir?</p>
            </div>
          </div>

          <div className={styles.note}>
            <label htmlFor="description">Qeydinizi əlavə edin</label>
            <textarea
              name="description"
              id="description"
              value={state.description}
              onChange={handleChange}
            ></textarea>
            <label htmlFor="description">
              Telefon nömrəsi qeyd etmək qadağandır
            </label>
          </div>

          <div className={styles.supply}>
            <p className={styles.head_title}>Avtomobilin təchizatı</p>

            <div className={styles.checkbox_container}>
              {carFeature?.optional?.map((item) => (
                <div className={styles.checkbox_item} key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={item.id}></label>
                  <label className={styles.custom_label} htmlFor={item.id}>
                    {item.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bottom}>
            <button onClick={addProduct} className={styles.add_button}>
              Əlavə et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
