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

const AddProduct = () => {
  const initialState = {
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
    uploaded_images: [],
    optionals: 3,
  };

  const [state, setState] = useState(initialState);

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setState((prevState) => ({
      ...prevState,
      [`optionals_${id}`]: id,
    }));
  };

  const [selectedImages, setSelectedImages] = useState([]);
  const [inputKey, setInputKey] = useState(Date.now());
  const [hoveredImage, setHoveredImage] = useState(null);
  const [carFeature, setCarFeature] = useState([]);
  const [models, setModels] = useState([]);
  const [drives, setDrives] = useState([]);
  const minYear = 2000;
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - minYear + 1 },
    (_, i) => minYear + i
  );

  const handleImageUpload = (event) => {
    console.log(event.target.files);
    const files = Array.from(event.target.files);
    setState((prevState) => ({
      ...prevState,
      uploaded_images: [event.target.files[0].name],
    }));
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
    setState((prevState) => ({
      ...prevState,
      uploaded_images: prevState.uploaded_images.filter(
        (image) => image !== id
      ),
    }));
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
    const res = await createCar(state);
    console.log(res, state);
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

                {models?.map((item) => (
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
