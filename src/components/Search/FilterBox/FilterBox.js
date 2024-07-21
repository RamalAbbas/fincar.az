import React, { useState, useEffect } from "react";
import styles from "./FilterBox.module.css";
import { useRouter } from "next/navigation";
import { getCarFilter } from "../../../services";

const FilterBox = ({ carfeature, filterData }) => {
  const { push } = useRouter();
  const [filters, setFilters] = useState({
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
  });
  const [yearOptions, setYearOptions] = useState([]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    const queryString = Object.keys(filters)
      .filter((key) => filters[key] !== "")
      .map((key) => `${key}=${filters[key]}`)
      .join("&");

    push(`/search?${queryString}`);

    const response = await getCarFilter(filters);
    filterData(response);
    console.log(filters, "menim gonderdiyim data");
    console.log("-------------");
    console.log(response, "backendden gelen data");
  };

  useEffect(() => {
    if (filters.min_year) {
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let year = parseInt(filters.min_year); year <= currentYear; year++) {
        years.push(year);
      }
      setYearOptions(years);
    }
  }, [filters.min_year]);

  return (
    <div className={styles.box}>
      <p className={styles.headTitle}>Filtrlər</p>

      <div className={styles.filter_content}>
{/* <<<<<<< HEAD */}
        <label htmlFor="">Qiymət</label>
       
        <div className="flex gap-2 mt-2">
          <input placeholder="Minimum" type="text"/> 
          <input placeholder="Maksimum" type="text" />
        </div>
      
{/* ======= */}
        <label>Qiymət</label>
        <div className="flex gap-2 mt-2">
          <input
            name="min_price_azn"
            placeholder="Minimum"
            type="text"
            value={filters.min_price_azn}
            onChange={handleChange}
          />
          <input
            name="max_price_azn"
            placeholder="Maksimum"
            type="text"
            value={filters.max_price_azn}
            onChange={handleChange}
          />
        </div>

{/*  */}
        <div className="flex gap-2 mt-4">
          <div className={styles.select_wrapper}>
            <select name="body" onChange={handleChange} value={filters.body}>
              <option value="" disabled selected>
                Ban növü
              </option>
              {carfeature?.bans?.map((item) => (
                <option value={item.name} key={item?.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.select_wrapper}>
            <select
              name="gearbox"
              onChange={handleChange}
              value={filters.gearbox}
            >
              <option value="" disabled selected>
                Sürət qutusu
              </option>
              {carfeature?.gears?.map((item) => (
                <option value={item.name} key={item?.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-2 my-4">
          <div className={styles.select_wrapper}>
            <select name="make" onChange={handleChange} value={filters.make}>
              <option value="" disabled selected>
                Marka
              </option>
              {carfeature?.makes?.map((item) => (
                <option value={item.name} key={item?.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.select_wrapper}>
            <select name="model" onChange={handleChange} value={filters.model}>
              <option value="" disabled selected>
                Model
              </option>
              {carfeature?.models?.map((item) => (
                <option value={item.name} key={item?.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <label>İstehsal ili</label>

        <div className="flex gap-2 mb-4 mt-1">
          <div className={styles.select_wrapper}>
            <select
              name="min_year"
              onChange={handleChange}
              value={filters.min_year}
            >
              <option value="" disabled selected>
                Minimum
              </option>
              <option value="1992">1992</option>
            </select>
          </div>

          <div className={styles.select_wrapper}>
            <select
              name="max_year"
              onChange={handleChange}
              value={filters.max_year}
            >
              <option value="" disabled selected>
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

        <label>Güc (a.g.)</label>

        <div className="flex gap-2 mt-1 mb-4">
          <input
            name="min_engine_power"
            placeholder="Minimum"
            type="text"
            value={filters.min_engine_power}
            onChange={handleChange}
          />
          <input
            name="max_engine_power"
            placeholder="Maksimum"
            type="text"
            value={filters.max_engine_power}
            onChange={handleChange}
          />
        </div>

        <label>Motorun həcmi</label>

        <div className="flex gap-2 mb-4 mt-1">
          <div className={styles.select_wrapper}>
            <select
              name="min_engine_volume"
              onChange={handleChange}
              value={filters.min_engine_volume}
            >
              <option value="" disabled selected>
                Minimum
              </option>
              <option value="1500">1500</option>
            </select>
          </div>

          <div className={styles.select_wrapper}>
            <select
              name="max_engine_volume"
              onChange={handleChange}
              value={filters.max_engine_volume}
            >
              <option value="" disabled selected>
                Maksimum
              </option>
              <option value="5000">5000</option>
            </select>
          </div>
        </div>

        <div className={styles.special_select_wrapper}>
          <select
            className={styles.special_select}
            name="market"
            onChange={handleChange}
            value={filters.market}
          >
            <option value="" disabled selected>
              Hansı bazar üçün yığılıb
            </option>
            {carfeature?.markets?.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2 mb-4 mt-4">
          <div className={styles.select_wrapper}>
            <select name="fuel" onChange={handleChange} value={filters.fuel}>
              <option value="" disabled selected>
                Yanacaq növü
              </option>
              {carfeature?.fuels?.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.select_wrapper}>
            <select name="color" onChange={handleChange} value={filters.color}>
              <option value="" disabled selected>
                Rəng
              </option>
              {carfeature?.colors?.map((item) => (
                <option value={item.name} key={item?.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
