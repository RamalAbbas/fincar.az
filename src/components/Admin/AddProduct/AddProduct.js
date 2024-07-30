"use client";
import { useEffect, useState } from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import styles from "./AddProduct.module.css";
import steps from "../../../assets/images/steps/steps.png";
import Image from "next/image";
import upload from "../../../assets/icons/upload/upload.svg";
import upload2 from "../../../assets/icons/upload/upload2.svg";
import { getCarFeature, carFeatureListModel } from "../../../services";

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
    optionals: [],
    uploaded_images: [],
  };

  const [state, setState] = useState(initialState);
  const [selectedImages, setSelectedImages] = useState([]);
  const [inputKey, setInputKey] = useState(Date.now());
  const [hoveredImage, setHoveredImage] = useState(null);
  const [carFeature, setCarFeature] = useState({});
  const [models, setModels] = useState([]);

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
      setState((prevState) => ({
        ...prevState,
        uploaded_images: [
          ...prevState.uploaded_images,
          ...images.map((image) => image.src),
        ],
      }));
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

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setState((prevState) => ({
      ...prevState,
      optionals: checked
        ? [...prevState.optionals, parseInt(id)]
        : prevState.optionals.filter((opt) => opt !== parseInt(id)),
    }));
  };

  const addProduct = () => {
    console.log(state);
  };

  const getCarFeatureData = async () => {
    const response = await getCarFeature();
    console.log(response);
    setCarFeature(response);
  };

  useEffect(() => {
    getCarFeatureData();
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
                <option value="0" disabled>
                  Marka seçin
                </option>
                {carFeature.makes?.map((item) => (
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
                <option value="0" disabled>
                  Yanacaq növü seçin
                </option>
                {carFeature.fuels?.map((item) => (
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
                <option value="0" disabled>
                  Model seçin
                </option>
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
                  <option value="0" disabled>
                    KM
                  </option>
                  <option value="1">KM</option>
                  <option value="2">Miles</option>
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
                <option value="0" disabled>
                  Rəng seçin
                </option>
                {carFeature.colors?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="price">Qiymət</label>
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
                  <option value="0" disabled>
                    Currency
                  </option>
                  {carFeature.currencies?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="year">Buraxılış ili</label>
              <input
                type="text"
                name="year"
                value={state.year}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="body">Ban növü</label>
              <select
                name="body"
                id="body"
                value={state.body}
                onChange={handleChange}
              >
                <option value="0" disabled>
                  Ban növü seçin
                </option>
                {carFeature.bodies?.map((item) => (
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
                <option value="0" disabled>
                  Sürətlər qutusu seçin
                </option>
                {carFeature.gearboxes?.map((item) => (
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
                <option value="0" disabled>
                  Ötürücü seçin
                </option>
                {carFeature.drives?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="engine_power">Mühərrik gücü</label>
              <input
                type="text"
                name="engine_power"
                value={state.engine_power}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="engine_volume">Mühərrik həcmi</label>
              <input
                type="text"
                name="engine_volume"
                value={state.engine_volume}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="vin">VIN</label>
              <input
                type="text"
                name="vin"
                value={state.vin}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="market">Bazarı</label>
              <select
                name="market"
                id="market"
                value={state.market}
                onChange={handleChange}
              >
                <option value="0" disabled>
                  Bazar seçin
                </option>
                {carFeature.markets?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="owner">Nə qədər sahibi olub</label>
              <select
                name="owner"
                id="owner"
                value={state.owner}
                onChange={handleChange}
              >
                <option value="0" disabled>
                  Seçin
                </option>
                {carFeature.owners?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className={styles.optional}>
          <p className={styles.head_title}>Digər göstəricilər</p>
          <div className={styles.flex}>
            {carFeature.optionals?.map((item) => (
              <div key={item.id} className={styles.checkbox}>
                <input
                  type="checkbox"
                  id={item.id}
                  checked={state.optionals.includes(item.id)}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={item.id}>{item.name}</label>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.description}>
          <p className={styles.head_title}>Əlavə məlumat</p>
          <textarea
            rows="5"
            name="description"
            value={state.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className={styles.submit}>
          <button type="submit" onClick={addProduct}>
            Əlavə et
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
