import { carFeatureListModel, getCarFilter } from "../../../services";
import React, { useState, useEffect } from "react";
import Dropdown from '../../Dropdown/Dropdown';
import styles from "./FilterBox.module.css";
import { useRouter } from "next/navigation";

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
    min_monthly_payment: "",
    max_monthly_payment: "",
    min_initial_payment: "",
    max_initial_payment: ""
  });
  const [yearOptions, setYearOptions] = useState([]);
  const [models, setModels] = useState([]);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });

    if (name === "make") {
      const data = await carFeatureListModel(e.target.value);
      setModels(data);
    }
  };

  const handleSearch = async () => {
    const queryParams = Object.keys(filters)
      .reduce((acc, key) => {
        const value = filters[key];
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

    push(`/search?${queryString}`);
    const response = await getCarFilter(queryString);
    filterData(response);
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

  const callBackValue = async (name, id) => {
    if (name === "make") {
      const data = await carFeatureListModel(id);
      setModels(data);
      setFilters(prevFilters => ({
        ...prevFilters,
        [name]: id,
        model: "" 
      }));
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        [name]: id
      }));
    }
  };

  return (
    <div className={styles.box}>
      <p className={styles.headTitle}>Filtrlər</p>

      <div className={styles.filter_content}>
        <div className={styles.special_select_content}>
            <Dropdown callBackValue={callBackValue} carfeature={carfeature?.makes} name={"make"} placeholder={"Marka"} />
            
            <Dropdown callBackValue={callBackValue} carfeature={models} name={"model"} placeholder={"Model"} />
        </div>
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

        <div className="flex gap-2 mt-2">
          <input
            name="min_monthly_payment"
            placeholder="Aylıq min."
            type="text"
            value={filters.min_monthly_payment}
            onChange={handleChange}
          />
          <input
            name="max_monthly_payment"
            placeholder="Aylıq max."
            type="text"
            value={filters.max_monthly_payment}
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-2 mt-2">
          <input
            name="min_initial_payment"
            placeholder="Ilkin min."
            type="text"
            value={filters.min_initial_payment}
            onChange={handleChange}
          />
          <input
            name="max_initial_payment"
            placeholder="Ilkin Max"
            type="text"
            value={filters.max_initial_payment}
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-2 mt-4">
          <Dropdown callBackValue={callBackValue} carfeature={carfeature?.bans} name={"body"} placeholder={"Ban növü"} />

          <Dropdown callBackValue={callBackValue} carfeature={carfeature?.gears} name={"gearbox"} placeholder={"Sürət qutusu"} />
        </div>

        <label>İstehsal ili</label>
        <div className="flex gap-2 mb-4 mt-1">
          <div className={styles.select_wrapper}>
            <select
              name="min_year"
              onChange={handleChange}
              value={filters.min_year}
            >
              <option value="" disabled>
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

        
        <label>Güc (a.g.)</label>
        <div className="flex gap-2 mt-1 mb-4">
          <input
            name="min_engine_power"
            placeholder="Minimum"
            type="number"
            value={filters.min_engine_power}
            onChange={handleChange}
          />
          <input
            name="max_engine_power"
            placeholder="Maksimum"
            type="number"
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
              <option value="" disabled>
                Minimum
              </option>
              <option value="0">0</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
              <option value="500">500</option>
              <option value="600">600</option>
              <option value="700">700</option>
              <option value="800">800</option>
              <option value="900">900</option>
              <option value="1000">1000</option>
              <option value="1100">1100</option>
              <option value="1200">1200</option>
              <option value="1300">1300</option>
              <option value="1400">1400</option>
              <option value="1500">1500</option>
              <option value="1600">1600</option>
              <option value="1700">1700</option>
              <option value="1800">1800</option>
              <option value="1900">1900</option>
              <option value="2000">2000</option>
              <option value="2100">2100</option>
              <option value="2200">2200</option>
              <option value="2300">2300</option>
              <option value="2400">2400</option>
              <option value="2500">2500</option>
              <option value="2600">2600</option>
              <option value="2700">2700</option>
              <option value="2800">2800</option>
              <option value="2900">2900</option>
              <option value="3000">3000</option>
              <option value="3100">3100</option>
              <option value="3200">3200</option>
              <option value="3300">3300</option>
              <option value="3400">3400</option>
              <option value="3500">3500</option>
              <option value="3600">3600</option>
              <option value="3700">3700</option>
              <option value="3800">3800</option>
              <option value="3900">3900</option>
              <option value="4000">4000</option>
            </select>
          </div>
          <div className={styles.select_wrapper}>
            <select
              name="max_engine_volume"
              onChange={handleChange}
              value={filters.max_engine_volume}
            >
              <option value="" disabled>
                Maksimum
              </option>
              <option value="5000">5000</option>
            </select>
          </div>
        </div>

        <Dropdown callBackValue={callBackValue} carfeature={carfeature?.markets} name={"market"} placeholder={"Hansı bazar üçün yığılıb"} />
       
        <div className="flex gap-2 mb-4 mt-4">
          <Dropdown callBackValue={callBackValue} carfeature={carfeature?.fuels} name={"fuel"} placeholder={"Yanacaq növü"} />
          
          <Dropdown callBackValue={callBackValue} carfeature={carfeature?.colors} name={"color"} placeholder={"Rəng"} />
        </div> 

        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterBox;