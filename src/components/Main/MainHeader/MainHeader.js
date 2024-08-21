"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./MainHeader.module.css";
import Image from "next/image";
import headerBg from "../../../assets/images/headerBg.png";
import azFlag from "../../../assets/icons/azFlag.svg";
import mobileMenu from "../../../assets/icons/mobileHeader/menu.svg";
import searchInput from "../../../assets/icons/mobileHeader/searchInput.svg";
import filter from "../../../assets/icons/mobileHeader/filter.svg";
import downArrow from "../../../assets/icons/arrow/down.svg";
import leftBlue from "../../../assets/icons/arrow/leftBlue.svg";
import { useDispatch, useSelector } from "react-redux";
import { handleMenuFilter } from "../../../redux/features/mobileMenuFilterSlice";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import saved from "../../../assets/icons/saved/saved.svg";

import {
  carFeatureListModel,
  getCarFeature,
  getCarFilter,
} from "../../../services";
import Dropdown2 from "../../Dropdown2/Dropdown";
import DropdownMobile from "../../DropdownMobile/Dropdown";

const Title = ({ filterData }) => {
  const { push } = useRouter();
  const [yearOptions, setYearOptions] = useState([]);
  const [isMenu, setIsMenu] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [carFeature, setCarFeature] = useState([]);
  const [models, setModels] = useState([]);
  const [data, setData] = useState([]);

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

  const [state, setState] = useState({
    body: "",
    color: "",
    fuel: "",
    gearbox: "",
    make: "",
    market: "",
    max_engine_power: "",
    max_engine_volume: "",
    max_price_azn: "",
    max_year: "",
    min_engine_power: "",
    min_engine_volume: "",
    min_price_azn: "",
    min_year: "",
    model: "",
    min_monthly_payment: "",
    max_monthly_payment: "",
    min_initial_payment: "",
    max_initial_payment: ""
  });
  useEffect(() => {
    if (state.min_year) {
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let year = parseInt(state.min_year); year <= currentYear; year++) {
        years.push(year);
      }
      setYearOptions(years);
    }
  }, [state.min_year]);
  useEffect(() => {
    Cookies.get("data") == undefined
      ? console.log("undefined")
      : setData(JSON.parse(Cookies.get("data")));
  }, []);

  const isMobileFilterActive = useSelector(
    (state) => state.mobileMenuFilter.isMobileFilterActive
  );

  const dispatch = useDispatch();

  const handleClickMenuFilter = () => {
    dispatch(handleMenuFilter());
  };

  const insideMobileMenu = useRef(null);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuActive((prevState) => !prevState);
  };

  const handleClickOutside = (e) => {
    if (
      insideMobileMenu.current &&
      !insideMobileMenu.current.contains(e.target)
    ) {
      setIsMobileMenuActive(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuActive]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [isMobileFilterActive]);

  const handleSend = () => {
    if (!data?.username) {
      push("/signin");
    }
  };

  const getCarFeatureData = async () => {
    const response = await getCarFeature();
    console.log(response);
    setCarFeature(response);
  };

  useEffect(() => {
    getCarFeatureData();
  }, []);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "make") {
      const data = await carFeatureListModel(e.target.value);
      console.log(data);
      setModels(data);
    } else if (name == "model") {
      console.log(e.target.value);
      let item = models.filter((item) => item.id == e.target.value);
      let modelsData = item[0]?.models?.map((item) => item.id);
      console.log(modelsData);
    }
  };

  const searchFunction = async () => {
    const queryParams = Object.keys(state)
      .reduce((acc, key) => {
        const value = state[key];
        if (value !== "") {
          if (key === "model" && Array.isArray(value)) {
            value.forEach((model) => acc.push(`${key}=${model}`));
          } else {
            acc.push(`${key}=${value}`);
          }
        }
        return acc;
      }, []);

    const queryString = queryParams.join("&");

    push(`/main?${queryString}`);
    const response = await getCarFilter(queryString);
    filterData(response);
    handleClickMenuFilter(false)
  };


  const exitFunction = () => {
    Cookies.remove("data");
    push("/signin");
  };

  const callBackValue = async (name, id) => {
    if (name === "make") {
      const data = await carFeatureListModel(id);
      setModels(data);
      setState(prevFilters => ({
        ...prevFilters,
        [name]: id,
        model: "" 
      }));
    } else {
      setState(prevFilters => ({
        ...prevFilters,
        [name]: id
      }));
    }
  };

  return (
    <section>
      <div
        className={`${styles.headerContainer} ${styles.widhtLimitContainer}`}
      >
        <Image src={headerBg} width={1440} height={580} alt="header-bg" />
        <div className={`${styles.content} ${styles.widhtLimit}`}>
          <nav className={`${styles.navbar} `}>
            <div onClick={() => push("/main")} className={styles.leftLogo}>
              <a>Fincar.az</a>
            </div>
            <div className={styles.rightNav}>
              <a onClick={() => push("/search")}>Bütün Elanlar</a>
              <a onClick={() => push("/dealerships")}>Salonlar</a>
              <a onClick={() => push("/about")}>Haqqımızda</a>
              <a onClick={() => push("/contactus")}>Bizimlə əlaqə</a>
              <a onClick={() => push("/faqs")}>FAQ</a>
              {data && (
                    <div
                      className="cursor-pointer"
                      onClick={() => push("/saved")}
                    >
                      <Image src={saved} alt="" />
                    </div>
                  )}
              {/* <div className={styles.languageDivar}>
                AZ
                <Image src={azFlag} width={20} height={15} alt="header-bg" />
              </div> */}
              <div
                onMouseEnter={() => setIsMenu(true)}
                onMouseLeave={() => setIsMenu(false)}
                className={styles.user_body}
              >
                <button onClick={handleSend}>
                  {data?.username ? data.username : "Daxil ol"}
                </button>
                {isMenu && data.username ? (
                  <div className={styles.user_menu}>
                    <p className={styles.userAccontTitle} onClick={() => push("/personalcabinet")}>User account</p>
                    <p className={styles.logout_button} onClick={exitFunction}>Çıxış</p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </nav>
          <h1 className={styles.desc}>Xəyalınızın maşınına bizlə sahib olun</h1>
          <div className="mt-[84px] flex gap-[12px] items-center justify-center">
            <div className={styles.search}>
                <div className={styles.dropdown}>
                  <Dropdown2 callBackValue={callBackValue} carfeature={carFeature?.makes} name={"make"} placeholder={"Marka"} />
                </div>
                <div className={styles.dropdown2}>
                  <Dropdown2 callBackValue={callBackValue} carfeature={models} name={"model"} placeholder={"Model"} />
                </div>
              <input
                className="rounded-tr-sm rounded-br-sm rounded-tl-sm  rounded-bl-sm h-[56px] ml-[2px] bg-white"
                placeholder="Qiymət min"
                type="text"
                name="min_price_azn"
                value={state.min_price_azn}
                onChange={handleChange}
              />
              <input
                className="rounded-tr-sm rounded-br-sm rounded-tl-sm  rounded-bl-sm h-[56px] ml-[2px] bg-white"
                placeholder="Qiymət max"
                type="text"
                name="max_price_azn"
                value={state.max_price_azn}
                onChange={handleChange}
              />
              <input
                className="rounded-tr-sm rounded-br-sm rounded-tl-sm  rounded-bl-sm h-[56px] ml-[2px] bg-white"
                placeholder="Buraxılış ili"
                type="text"
                name="min_year"
                value={state.min_year}
                onChange={handleChange}
              />
              <div
                onClick={searchFunction}
                className="searchContent bg-white p-1 rounded-tr-[30px] ml-1 rounded-br-[30px] h-[56px] rounded-tl-sm  rounded-bl-sm max-w-[116px] w-full"
              >
                <button className={styles.searchButton}>Axtar </button>
              </div>
            </div>
            <button
              onClick={() => push("/search")}
              className={styles.detailSearch}
            >
              Ətraflı axtarış
            </button>
          </div>
        </div>
      </div>
      <div  className={styles.mobileHeaderContainer}>
        <div className={styles.mobileTitle}>
          <div
            onClick={handleToggleMobileMenu}
            className={styles.mobileMenuBtn}
          >
            <Image
              src={mobileMenu}
              className="w-full h-fu8ll"
              width={24}
              height={24}
            />
          </div>
          <div className={styles.mobileInput}>
            <div className="h-full w-[30px]">
              <Image
                src={searchInput}
                className="w-full h-full"
                width={24}
                height={24}
              />
            </div>
            <input type="text" placeholder="Search" />
            <div onClick={handleClickMenuFilter} className="h-full w-[30px]">
              <Image
                src={filter}
                className="w-full h-full"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        <div
          onClick={handleClickOutside}
          className={`${!isMobileMenuActive && "hidden !opacity-0"} ${
            styles.mobileMenuOutSide
          }`}
        >
          <div
            ref={insideMobileMenu}
            className={`${styles.mobileMenu} ${
              !isMobileMenuActive && "!left-[-100vw]"
            }`}
          >
            <a onClick={() => push("/main")} className={styles.mobileFincarTitle}>
              <h1>Fincar.az</h1>
            </a>
            
            <div className={styles.mobileList}>
              <div className="pt-[18px]">
                <a  onClick={() => push("/main")}>
                  <span>Bütün elanlar</span>
                </a>
                <div className="h-[1px] w-full bg-[#D9D9D9] mt-[18px]"></div>
              </div>
              <div className="pt-[18px]">
                <a onClick={() => push("/dealerships")}>
                  <span>Salonlar</span>
                </a>
                <div className="h-[1px] w-full bg-[#D9D9D9] mt-[18px]"></div>
              </div>
              <div className="pt-[18px]">
                <a>
                  <span>Dil</span>
                </a>
                <div className="h-[1px] w-full bg-[#D9D9D9] mt-[18px]"></div>
              </div>
              <div className="pt-[18px]">
                <a onClick={() => push("/about")}>
                  <span>Haqqımızda</span>
                </a>
                <div className="h-[1px] w-full bg-[#D9D9D9] mt-[18px]"></div>
              </div>
              
              <div className="pt-[18px]">
                <a onClick={() => push("/contactus")}>
                  <span>Bizimlə əlaqə</span>
                </a>
                <div className="h-[1px] w-full bg-[#D9D9D9] mt-[18px]"></div>
              </div>
              <div className="pt-[18px]">
                <a onClick={() => push("/faqs")}>
                  <span>FAQ</span>
                </a>
                <div className="h-[1px] w-full bg-[#D9D9D9] mt-[18px]"></div>
              </div>
              <div className="pt-[18px]">
                <div className="flex justify-between items-center">
                  <a  onClick={() => push("/personalcabinet")}>
                    <span>Şəxsi kabinet</span>
                  </a>
                  <div>
                    <Image src={downArrow} width={24} height={24} />
                  </div>
                </div>
                <div className="h-[1px] w-full bg-[#D9D9D9] mt-[18px]"></div>
              </div>
              <div onClick={exitFunction} className="">
                <a className={styles.logout_title}>
                  <p>Çıxış</p>
                </a>
                <div className="h-[1px] w-full bg-[#D9D9D9] mt-[18px]"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.mobileFliter} ${
            !isMobileFilterActive && "hidden !opacity-1 !top-[100vh]"
          }`}
          id="mobileHeaderContainer"
        >
          <div
            className={`${styles.fixedHeader}  ${
              !isMobileFilterActive && "hidden !opacity-1 !top-[-100px]"
            }`}
          >
            <div className={styles.mobileFilterHeader}>
              <div
                onClick={handleClickMenuFilter}
                className="flex gap-[11px] items-center"
              >
                <Image src={leftBlue} width={10} height={15} alt="arrow" />
                <p>Back</p>
              </div>
            </div>
            <div>
              <h1>Filtrlər</h1>
            </div>
          </div>
          <div className={`${styles.filterMobileContent}`}>
              <div className="flex flex-col gap-4">
                <DropdownMobile callBackValue={callBackValue} carfeature={carFeature?.makes} name={"make"} placeholder={"Marka"} />
                <DropdownMobile callBackValue={callBackValue} carfeature={models} name={"model"} placeholder={"Model"} />
              </div>
            
              <div className="mt-[24px]">
                <label>Qiymət</label>
                <div className="flex gap-[20px] mt-[8px]">
                  <div className="w-full">
                    <input
                      name="min_price_azn"
                      placeholder="Minimum"
                      type="text"
                      value={state.min_price_azn}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full">
                  <input
                    name="max_price_azn"
                    placeholder="Maksimum"
                    type="text"
                    value={state.max_price_azn}
                    onChange={handleChange}
                  />
                  </div>
                </div>

                <div className="flex gap-[20px] mt-[8px]">
                  <div className="w-full">
                  <input
                    name="min_monthly_payment"
                    placeholder="Aylıq min."
                    type="text"
                    value={state.min_monthly_payment}
                    onChange={handleChange}
                  />
                  </div>
                  <div className="w-full">
                  <input
                    name="max_monthly_payment"
                    placeholder="Aylıq max."
                    type="text"
                    value={state.max_monthly_payment}
                    onChange={handleChange}
                  />
                  </div>
                </div>

                <div className="flex gap-[20px] mt-[8px]">
                  <div className="w-full">
                    <input
                      name="min_initial_payment"
                      placeholder="Ilkin min."
                      type="text"
                      value={state.min_initial_payment}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full">
                  <input
                    name="max_initial_payment"
                    placeholder="Ilkin Max"
                    type="text"
                    value={state.max_initial_payment}
                    onChange={handleChange}
                  />
                  </div>
                </div>

                <div className="flex gap-[20px] mt-[21px]">
                  <div className="w-full">
                    <DropdownMobile callBackValue={callBackValue} carfeature={carFeature?.bans} name={"body"} placeholder={"Ban növü"} />
                  </div>
                  <div className="w-full">
                    <DropdownMobile callBackValue={callBackValue} carfeature={carFeature?.gears} name={"gearbox"} placeholder={"Sürət qutusu"} />
                  </div>
                </div>
              </div>
              <div className="mt-[24px]">
                <label>İstehsal ili</label>
                <div className="flex gap-[20px] mt-[8px]">
                  <div className="w-full">
                  <select
                    name="min_year"
                    onChange={handleChange}
                    value={state.min_year}
                  >
                    <option value="" disabled>
                      Minimum
                    </option>
                    <option value="1992">1992</option>
                  </select>
                  </div>
                  <div className="w-full">
                  <select
                      name="max_year"
                      onChange={handleChange}
                      value={state.max_year}
                    >
                      <option value="" disabled>
                        Maksimum
                      </option>
                      {yearOptions.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-[24px]">
                <label>Güc (a.g.)</label>
                <div className="flex gap-[20px] mt-[8px]">
                  <div className="w-full">
                    <input
                      name="min_engine_power"
                      placeholder="Minimum"
                      type="number"
                      value={state.min_engine_power}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full">
                    <input
                        name="max_engine_power"
                        placeholder="Maksimum"
                        type="number"
                        value={state.max_engine_power}
                        onChange={handleChange}
                      />
                  </div>
                </div>
              </div>
              <div className="mt-[24px]">
                <label>Motorun həcmi </label>
                <div className="flex gap-[20px] mt-[8px]">
                  <div className="w-full">
                    <select
                      name="min_engine_volume"
                      onChange={handleChange}
                      value={state.min_engine_volume}
                    >
                      <option value="" disabled>
                        Minimum
                      </option>
                      <option value="1500">1500</option>
                    </select>
                    </div>
                  <div className="w-full">
                  <select
                    name="max_engine_volume"
                    onChange={handleChange}
                    value={state.max_engine_volume}
                  >
                    <option value="" disabled>
                      Maksimum
                    </option>
                    <option value="5000">5000</option>
                  </select>
                  </div>
                </div>
                <div className="w-full mt-[24px]">
                  <DropdownMobile callBackValue={callBackValue} carfeature={carFeature?.markets} name={"market"} placeholder={"Hansı bazar üçün yığılıb"} />
                </div>
                <div className="flex gap-[20px] mt-[24px]">
                  <div className="w-full">
                      <DropdownMobile callBackValue={callBackValue} carfeature={carFeature?.fuels} name={"fuel"} placeholder={"Yanacaq növü"} />
                  </div>
                  <div className="w-full">
                      <DropdownMobile callBackValue={callBackValue} carfeature={carFeature?.colors} name={"color"} placeholder={"Rəng"} />
                  </div>
                </div>
              </div>
              
              <button onClick={searchFunction}>Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
