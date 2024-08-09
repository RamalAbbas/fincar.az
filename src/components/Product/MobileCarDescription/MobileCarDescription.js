'use client'
import React, { useState } from 'react'
import styles from './MobileCarDescription.module.css'

const MobileCarDescription = ({optionals}) => {
  const [appealDiv, setApeealDiv] = useState(false)

  const toggleButtonVisibility = () => {
    setApeealDiv((prevState) => !prevState)
  }

  const appeals = [
    'Parça ayaqaltılar',
    'Elektron Sabitliyə Nəzarət Sistemi (ESC)',
    'Polad diskli ehtiyat təkər, alətlər dəsti, domkrat və açar',
    'Ön hissədə əlavə alt müdafiə',
    'Uşaq oturacağının bərkidilməsi "İSOFİX"',
    'Informasiya kitabçası Rus dilində',
    'Arxa oturacaqların bel hissələrinin mexaniki qatlanması və mərkəzi dirsəkaltlıq',
    'Damda qara rəngli reylinqlər',
    'Arxada 3 ədəd başaltlıqlar',
    'Ön oturacaqların qızdırılması',
    'Avtomatik tündləşən arxa görüntü güzgüsü',
    'Şüşələrin elektrik tənzimlənməsi (komfort funksiyalı)',
    'Ön frontal və ön yan hava yastıqları',
    'Salonda qara rəngli dekorativ taxmalar',
    'Sürücü və ön sərnişin günlüklərində güzgülər',
    'Ön dirsəkaltı (JUMBO BOX)',
    'Elektron Sabitliyə Nəzarət Sistemi (ESC)',
    'Polad diskli ehtiyat təkər, alətlər dəsti, domkrat və açar',
    'Ön hissədə əlavə alt müdafiə',
    'Uşaq oturacağının bərkidilməsi "İSOFİX"',
    'Informasiya kitabçası Rus dilində',
    'Arxa oturacaqların bel hissələrinin mexaniki qatlanması və mərkəzi dirsəkaltlıq',
    'Damda qara rəngli reylinqlər',
    'Arxada 3 ədəd başaltlıqlar',
    'Ön oturacaqların qızdırılması',
    'Avtomatik tündləşən arxa görüntü güzgüsü',
    'Şüşələrin elektrik tənzimlənməsi (komfort funksiyalı)',
    'Ön frontal və ön yan hava yastıqları',
    'Salonda qara rəngli dekorativ taxmalar',
    'Sürücü və ön sərnişin günlüklərində güzgülər',
    'Ön dirsəkaltı (JUMBO BOX)',
    'Elektron Sabitliyə Nəzarət Sistemi (ESC)',
    'Polad diskli ehtiyat təkər, alətlər dəsti, domkrat və açar',
    'Ön hissədə əlavə alt müdafiə',
  ]

  return (
    <div className={`${styles.wrapper}`}>
      <div className="w-full bg-[#DADEF2] h-[1px] mb-[18px]"></div>
      <div
        className={`${
          appealDiv ? 'max-h-[1500px]' : 'max-h-[358px] '
        } overflow-hidden`}
      >
        {optionals?.map((item, index) => (
          <span key={index}>{item.name}</span>
        ))}
      </div>
      {optionals?.length > 15 && (
        <p onClick={toggleButtonVisibility}>
          {appealDiv ? 'Close' : 'Read more'}
        </p>
      )}
      <div className="w-full bg-[#DADEF2] h-[1px] mt-[35px]"></div>
    </div>
  )
}

export default MobileCarDescription
