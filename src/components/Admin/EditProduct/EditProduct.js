"use client";
import { useEffect, useState } from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import styles from "./AddProduct.module.css";
import steps from "../../../assets/images/steps/steps.png";
import Image from "next/image";
import upload from "../../../assets/icons/upload/upload.svg";
import upload2 from "../../../assets/icons/upload/upload2.svg";
import CardImage from '../CardImage/CardImage'
import {
  getCarFeature,
  carFeatureListModel,
  createCar,
  carFeatureListDrive,
  getCarDetail,
  getCarDetailAdmin,
  editCar,
} from "../../../services";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const AddProduct = ({ slug }) => {
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
  
    setState((prevState) => {
      let updatedOptionals = prevState.new_optionals ? prevState.new_optionals.split(" ") : [];
  
      if (checked) {
        updatedOptionals.push(id);
      } else {
        updatedOptionals = updatedOptionals.filter((value) => value !== id);
      }
  
      return {
        ...prevState,
        new_optionals: updatedOptionals.join(" "), 
      };
    });
  };


  const [state, setState] = useState({
    car: slug,
    new_make: 0,
    new_model: 0,
    new_color: 0,
    fuel: 0,
    new_distance: 0,
    new_distance_unit: 0,
    new_price: 0,
    new_currency: 0,
    new_body: 0,
    new_drive: 0,
    new_owner: 0,
    new_gearbox: 0,
    new_market: 0,
    new_year: 0,
    new_engine_power: 0,
    new_engine_volume: 0,
    new_vin: "",
    new_description: "",
    new_optionals: "",
  });

  const [carFeature, setCarFeature] = useState([]);
  const [carDetail, setCarDetail] = useState([]);
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

  const [imagePreview, setImagePreview] = useState([]);
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
            setImagePreview((prev) => [...prev,...previews]);
            setIsImageUploaded(true);
          }
        };

        reader.readAsDataURL(file);
      }

      setState((prevData) => ({
        ...prevData,
        new_images: { ...files },
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
          setImagePreview((prev) => [...prev,...previews]);
          setIsImageUploaded(true);
        }
      };

      reader.readAsDataURL(file);
    }

    setState((prevData) => ({
      ...prevData,
      new_images: { ...files },
    }));

    setErrorText("");
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "new_make") {
      const data = await carFeatureListModel(e.target.value);
      setModels(data);
    }
  };

  const addProduct = async () => {
    const token = Cookies.get("admin_data")
      ? JSON.parse(Cookies.get("admin_data")).access_token
      : "";

    try {
      console.log(state);
      const res = await editCar(state, token);
      if (!!res) {
        toast.success("Maşin Update Olundu .");
      } else {
        toast.error("Düzgün Melumat Daxil Edin");
      }
    } catch (error) {
      console.error("API call failed:", error);
    }
  };

  const getCarDetailData = async () => {
    const response = await getCarDetailAdmin(slug);
    setCarDetail(response);
    setIsImageUploaded(true);
    let a = response?.images?.map((item) => item.image)
    setImagePreview(a)
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

  useEffect(() => {
    getCarDetailData();
  }, []);

  useEffect(() => {
    if (carDetail) {
      const optionalsString = carDetail?.optionals?.map((item) => item.id).join(" ") || "";
      
      setState((prevState) => ({
        ...prevState,
        new_body: carDetail?.body?.id || prevState.new_body,
        new_make: carDetail?.make?.id || prevState.new_make,
        new_gearbox: carDetail?.gearbox?.id || prevState.new_gearbox,
        new_owner: carDetail?.owner?.id || prevState.new_owner,
        new_drive: carDetail?.drive?.id || prevState.new_drive,
        new_currency: carDetail?.currency?.id || prevState.new_currency,
        new_model: carDetail?.model?.id || prevState.new_model,
        new_color: carDetail?.color?.id || prevState.new_color,
        new_price: carDetail.price || prevState.new_price,
        new_market: carDetail?.market?.id || prevState.new_market,
        new_distance: carDetail.distance || prevState.new_distance,
        new_engine_power: carDetail?.engine_power || prevState.new_engine_power,
        new_distance_unit: carDetail?.distance_unit?.id || prevState.new_distance_unit,
        new_vin: carDetail.vin || prevState.new_vin,
        new_description: carDetail.description || prevState.new_description,
        new_engine_volume: carDetail.engine_volume || prevState.new_engine_volume,
        new_year: carDetail?.year || prevState.new_year,
        new_fuel: carDetail?.fuel?.id || prevState.new_fuel,
        car: carDetail.id || prevState.id,
        new_optionals: optionalsString || prevState.new_optionals
      }));
    }
  }, [carDetail]);

  const [imageIds, setImageIds] = useState([]);

  const deleteImage = (img) => {
    let imageItem = carDetail?.images?.filter((item) => item.image === img);
    let a = imagePreview.filter((item) => item !== imageItem[0].image);
    
    setImagePreview(a);
  
    setImageIds((prev) => {
      const updatedImageIds = [...prev, imageItem[0].id];
      
      setState((prevState) => ({
        ...prevState,
        "images_to_delete": updatedImageIds.join(' '), 
      }));
  
      return updatedImageIds;
    });
  };
  
  return (
    <div className={styles.wrapper}>
      <BreadCrumb isPaddding={true} items={["Products", "Edit products"]} />

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
                {imagePreview?.map((image, index) => (
                  <CardImage image={image} index={index} deleteImage={deleteImage} />
                ))}
               
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
              <label htmlFor="new_make">Marka</label>
              <select
                name="new_make"
                id="new_make"
                value={state.new_make}
                onChange={handleChange}
              >
                <option selected>{carDetail?.make?.name}</option>
                {carFeature?.makes?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="new_fuel">Yanacaq növü</label>
              <select
                name="new_fuel"
                id="new_fuel"
                value={state.new_fuel}
                onChange={handleChange}
              >
                <option selected>{carDetail?.fuel?.name}</option>

                {carFeature?.fuels?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="new_model">Model</label>
              <select
                name="new_model"
                id="new_model"
                value={state.new_model}
                onChange={handleChange}
              >
                <option selected>{carDetail?.model?.name}</option>

                {models?.map((item) => (
                  item?.models?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="new_distance">Yürüş</label>
              <div className={styles.custom_item}>
                <input
                  type="text"
                  name="new_distance"
                  value={state.new_distance}
                  onChange={handleChange}
                />

                <div className={styles.border}></div>
                <select
                  name="new_distance_unit"
                  id="new_distance_unit"
                  value={state.new_distance_unit}
                  onChange={handleChange}
                >
                  <option selected>{carDetail?.distance_unit?.name}</option>
                  {carFeature?.unit?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="new_color">Rəng</label>
              <select
                name="new_color"
                id="new_color"
                value={state.new_color}
                onChange={handleChange}
              >
                <option selected>{carDetail?.color?.name}</option>

                {carFeature?.colors?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="new_price">Qiyməti</label>
              <div className={styles.custom_item}>
                <input
                  type="text"
                  name="new_price"
                  value={state.new_price}
                  onChange={handleChange}
                />

                <div className={styles.border}></div>
                <select
                  name="new_currency"
                  id="new_currency"
                  value={state.new_currency}
                  onChange={handleChange}
                >
                  <option selected>{carDetail?.currency?.name}</option>
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
              <label htmlFor="new_body">Ban növü</label>
              <select
                name="new_body"
                id="new_body"
                value={state.new_body}
                onChange={handleChange}
              >
                <option selected>{carDetail?.body?.name}</option>

                {carFeature?.bans?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="new_drive">Ötürücü</label>
              <select
                name="new_drive"
                id="new_drive"
                value={state.new_drive}
                onChange={handleChange}
              >
                <option selected>{carDetail?.drive?.name}</option>
                {drives?.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="new_owner">Neçənci sahibisiniz?</label>
              <select
                name="new_owner"
                id="new_owner"
                value={state.new_owner}
                onChange={handleChange}
              >
                <option selected>{carDetail?.owner?.name}</option>

                {carFeature?.owner?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="new_gearbox">Sürətlər qutusu</label>
              <select
                name="new_gearbox"
                id="new_gearbox"
                value={state.new_gearbox}
                onChange={handleChange}
              >
                <option selected>{carDetail?.gearbox?.name}</option>

                {carFeature?.gears?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="new_market">Hansı bazar üçün yığılıb</label>
              <select
                name="new_market"
                id="new_market"
                value={state.new_market}
                onChange={handleChange}
              >
                <option selected>{carDetail?.market?.name}</option>

                {carFeature?.markets?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="new_year">İl</label>
              <select
                name="new_year"
                id="new_year"
                value={state.new_year}
                onChange={handleChange}
              >
                <option selected>{carDetail?.year}</option>

                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="new_engine_power">Mühərrikin gücü, a.g. </label>
              <input
                name="new_engine_power"
                className={styles.vin_code_input}
                type="text"
                value={state.new_engine_power}
                onChange={handleChange}
                id="new_engine_power"
              />
            </div>
            <div>
              <label htmlFor="new_engine_volume">Mühərrikin həcmi, sm3</label>
              <select
                name="new_engine_volume"
                id="new_engine_volume"
                value={state.new_engine_volume}
                onChange={handleChange}
              >
                <option selected>{carDetail?.engine_volume}</option>

                {options.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="new_vin">VIN-kod</label>
              <input
                name="new_vin"
                className={styles.vin_code_input}
                type="text"
                value={state.new_vin}
                onChange={handleChange}
              />
            </div>
            <div className={styles.vin_code_item}>
              <p className={styles.vin_code_title}>VIN-kod nədir?</p>
            </div>
          </div>

          <div className={styles.note}>
            <label htmlFor="new_description">Qeydinizi əlavə edin</label>
            <textarea
              name="new_description"
              id="new_description"
              value={state.new_description}
              onChange={handleChange}
            ></textarea>
            <label htmlFor="new_description">
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
                    checked={state.new_optionals.includes(item.id)}
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
                Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
