'use client'
import React, { useState, useRef, useEffect } from 'react'
import styles from './MainHeader.module.css'
import Image from 'next/image'
import headerBg from '../../../assets/images/headerBg.png'
import azFlag from '../../../assets/icons/azFlag.svg'
import mobileMenu from '../../../assets/icons/mobileHeader/menu.svg'
import searchInput from '../../../assets/icons/mobileHeader/searchInput.svg'
import filter from '../../../assets/icons/mobileHeader/filter.svg'
import downArrow from '../../../assets/icons/arrow/down.svg'
import leftBlue from '../../../assets/icons/arrow/leftBlue.svg'
import { useDispatch, useSelector } from 'react-redux'
import { handleMenuFilter } from '@/redux/features/mobileMenuFilterSlice'

const Title = () => {
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedModel, setSelectedModel] = useState('')

  const [selectedBrandFilter, setSelectedBrandFilter] = useState('')
  const [selectedModelFilter, setSelectedModelFilter] = useState('')
  const [selectedTypeOfBanFilter, setSelectedTypeOfBanFilter] = useState('')
  const [selectedTransmissionFilter, setSelectedTransmissionFilter] =
    useState('')
  const [selectedYearFilter, setSelectedYearFilter] = useState('')
  const [selectedEngineMinFilter, setSelectedEngineMinFilter] = useState('')
  const [selectedEngineMaxFilter, setSelectedEngineMaxFilter] = useState('')
  const [selectedForMarketFilter, setSelectedForMarketFilter] = useState('')
  const [selectedFuelTypeFilter, setSelectedFuelTypeFilter] = useState('')
  const [selectedColorFilter, setSelectedColorFilter] = useState('')

  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

  const isMobileFilterActive = useSelector(
    (state) => state.mobileMenuFilter.isMobileFilterActive
  )

  const dispatch = useDispatch()

  const handleClickMenuFilter = () => {
    dispatch(handleMenuFilter())
  }

  const insideMobileMenu = useRef(null)

  const handleToggleMobileMenu = () => {
    console.log('click')
    setIsMobileMenuActive((prevState) => !prevState)
  }

  const handleClickOutside = (e) => {
    if (
      insideMobileMenu.current &&
      !insideMobileMenu.current.contains(e.target)
    ) {
      setIsMobileMenuActive(false)
    }
  }

  useEffect(() => {
    if (isMobileMenuActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuActive])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [isMobileFilterActive])

  return (
    <section>
      <div
        className={`${styles.headerContainer} ${styles.widhtLimitContainer}`}
      >
        <Image src={headerBg} width={1440} height={580} alt="header-bg" />
        <div className={`${styles.content} ${styles.widhtLimit}`}>
          <nav className={`${styles.navbar} `}>
            <div className={styles.leftLogo}>
              <a>Fincar.az</a>
            </div>
            <div className={styles.rightNav}>
              <a>Bütün Elanlar</a>
              <a>Salonlar</a>
              <div className={styles.languageDivar}>
                AZ
                <Image src={azFlag} width={20} height={15} alt="header-bg" />
              </div>
              <button>Daxil ol</button>
            </div>
          </nav>
          <h1 className={styles.desc}>Xəyalınızın maşınına bizlə sahib olun</h1>
          <div className="mt-[84px] flex gap-[12px] items-center justify-center">
            <div className={styles.search}>
              <select
                className={`${styles.dropdown} ml-[37px]`}
                name="cars"
                id="cars"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="" disabled hidden>
                  Marka
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <div className="h-full w-[2px] rounded bg-[#cecece] mx-[16px]"></div>
              <select
                className={`${styles.dropdown} `}
                name="cars"
                id="cars"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
              >
                <option value="" disabled hidden>
                  Model
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
              </select>
              <div className="h-full w-[2px] rounded bg-[#cecece] mx-[16px]"></div>
              <input placeholder="Axtarış" type="text" maxLength={20} />
              <button className={styles.searchButton}>Axtar </button>
            </div>
            <button className={styles.detailSearch}>Ətraflı axtarış</button>
          </div>
        </div>
      </div>
      <div className={styles.mobileHeaderContainer}>
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
          className={`${!isMobileMenuActive && 'hidden !opacity-0'} ${
            styles.mobileMenuOutSide
          }`}
        >
          <div
            ref={insideMobileMenu}
            className={`${styles.mobileMenu} ${
              !isMobileMenuActive && '!left-[-100vw]'
            }`}
          >
            <a>
              <h1>Fincar.az</h1>
            </a>
            <div className={styles.mobileList}>
              <div className="mt-[18px]">
                <a>
                  <span>Bütün elanlar</span>
                </a>
                <div className="h-[1px] w-full bg-[#D9D9D9] mt-[10px]"></div>
              </div>
              <div className="mt-[18px]">
                <a>
                  <span>Salonlar</span>
                </a>
                <div className="h-[1px] w-full bg-[#D9D9D9] mt-[10px]"></div>
              </div>
              <div className="mt-[18px]">
                <a>
                  <span>Dil</span>
                </a>
                <div className="h-[1px] w-full bg-[#D9D9D9] mt-[10px]"></div>
              </div>
              <div className="mt-[18px]">
                <a>
                  <span>Haqqımızda</span>
                </a>
                <div className="h-[1px] w-full bg-[#D9D9D9] mt-[10px]"></div>
              </div>
              <div className="mt-[18px]">
                <div className="flex justify-between items-center">
                  <a>
                    <span>Şəxsi kabinet</span>
                  </a>
                  <div>
                    <Image src={downArrow} width={24} height={24} />
                  </div>
                </div>
                <div className="h-[1px] w-full bg-[#D9D9D9] mt-[10px]"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.mobileFliter} ${
            !isMobileFilterActive && 'hidden !opacity-1 !top-[100vh]'
          }`}
        >
          <div
            className={`${styles.fixedHeader}  ${
              !isMobileFilterActive && 'hidden !opacity-1 !top-[-100px]'
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
              <p>Reset</p>
            </div>
            <div>
              <h1>Filtrlər</h1>
            </div>
          </div>
          <div className={`${styles.filterMobileContent}`}>
            <div>
              <select
                className={`${styles.dropdown} ml-[37px]`}
                name="cars"
                id="cars"
                value={selectedBrandFilter}
                onChange={(e) => setSelectedBrandFilter(e.target.value)}
              >
                <option value="" disabled hidden>
                  Marka
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="mt-[16px]">
              <select
                className={`${styles.dropdown} ml-[37px]`}
                name="cars"
                id="cars"
                value={selectedModelFilter}
                onChange={(e) => setSelectedModelFilter(e.target.value)}
              >
                <option value="" disabled hidden>
                  Model
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="mt-[24px]">
              <label>Qiymət</label>
              <div className="flex gap-[20px] mt-[8px]">
                <div className="w-full">
                  <input type="text" placeholder="Minimum" />
                </div>
                <div className="w-full">
                  <input type="text" placeholder="Maksimum" />
                </div>
              </div>
              <div className="flex gap-[20px] mt-[21px]">
                <div className="w-full">
                  <select
                    className={`${styles.dropdown} ml-[37px]`}
                    name="cars"
                    id="cars"
                    value={selectedTypeOfBanFilter}
                    onChange={(e) => setSelectedTypeOfBanFilter(e.target.value)}
                  >
                    <option value="" disabled hidden>
                      Ban növü
                    </option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="w-full">
                  <select
                    className={`${styles.dropdown} ml-[37px]`}
                    name="cars"
                    id="cars"
                    value={selectedTransmissionFilter}
                    onChange={(e) =>
                      setSelectedTransmissionFilter(e.target.value)
                    }
                  >
                    <option value="" disabled hidden>
                      Sürət qutusu
                    </option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-[24px]">
              <label>Qiymət</label>
              <div className="flex gap-[20px] mt-[8px]">
                <div className="w-full">
                  <input type="text" placeholder="Minimum" />
                </div>
                <div className="w-full">
                  <select
                    className={`${styles.dropdown} ml-[37px]`}
                    name="cars"
                    id="cars"
                    value={selectedYearFilter}
                    onChange={(e) => setSelectedYearFilter(e.target.value)}
                  >
                    <option value="" disabled hidden>
                      2023
                    </option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-[24px]">
              <label>Güc (a.g.)</label>
              <div className="flex gap-[20px] mt-[8px]">
                <div className="w-full">
                  <input type="text" placeholder="Minimum" />
                </div>
                <div className="w-full">
                  <input type="text" placeholder="Maksimum" />
                </div>
              </div>
            </div>
            <div className="mt-[24px]">
              <label>Motorun həcmi </label>
              <div className="flex gap-[20px] mt-[8px]">
                <div className="w-full">
                  <select
                    className={`${styles.dropdown} ml-[37px]`}
                    name="cars"
                    id="cars"
                    value={selectedEngineMinFilter}
                    onChange={(e) => setSelectedEngineMinFilter(e.target.value)}
                  >
                    <option value="" disabled hidden>
                      Minimum
                    </option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="w-full">
                  <select
                    className={`${styles.dropdown} ml-[37px]`}
                    name="cars"
                    id="cars"
                    value={selectedEngineMaxFilter}
                    onChange={(e) => setSelectedEngineMaxFilter(e.target.value)}
                  >
                    <option value="" disabled hidden>
                      Maksimum
                    </option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className="w-full mt-[24px]">
                <select
                  className={`${styles.dropdown} ml-[37px]`}
                  name="cars"
                  id="cars"
                  value={selectedForMarketFilter}
                  onChange={(e) => setSelectedForMarketFilter(e.target.value)}
                >
                  <option value="" disabled hidden>
                    Hansı bazar üçün yığılıb
                  </option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div className="flex gap-[20px] mt-[24px]">
                <div className="w-full">
                  <select
                    className={`${styles.dropdown} ml-[37px]`}
                    name="cars"
                    id="cars"
                    value={selectedFuelTypeFilter}
                    onChange={(e) => setSelectedFuelTypeFilter(e.target.value)}
                  >
                    <option value="" disabled hidden>
                      Yanacaq növü
                    </option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="w-full">
                  <select
                    className={`${styles.dropdown} ml-[37px]`}
                    name="cars"
                    id="cars"
                    value={selectedColorFilter}
                    onChange={(e) => setSelectedColorFilter(e.target.value)}
                  >
                    <option value="" disabled hidden>
                      Color
                    </option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Title
