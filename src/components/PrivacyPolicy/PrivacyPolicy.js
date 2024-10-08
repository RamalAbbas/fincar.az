'use client'
import styles from './PrivacyPolicy.module.css'

const privacy_policy_data = [
    {
        title: "1. Məxfilik siyasəti",
        items: [
            "1.1. Hazırkı məxfilik Siyasəti Fincar.az Servisin İstifadəçi Razılaşmasının ayrılmaz hissəsidir.",
            "1.2. Hazırkı məxfilik Siyasəti İstifadəçinin şəxsi məlumatlarının alması, saxlaması, işlənməsi, istifadəsi, açılması və müdafiəsi qaydasını müəyyən edir.",
            "1.3. İstifadəçilərin şəxsi məlumat bazası Administrasiyanın ünvanı üzrə yerləşir.",
            "1.4. Şəxsi məlumatlar Bazasının sərəncamçısı Administrasiyadır – “DİGİTAL CLASSİFİEDS MMC” şirkətidir.",
            "1.5. Elanın dərc edilməsi üçün formanı dolduran zaman və ya Servisdə İstifadəçinin qeydiyyatı zamanı, və ya göndərmələrə abunə yazılma zamanı, həmçinin də Servisdən istifadənin başqa hallarında, İstifadəçi Administrasiyaya məlumatları və şəxsi məlumatları verir. Məlumatın toplanması həmçinin Servisin İstifadəçilərinin sorğularının keçirilməsi yolu ilə həyata keçirilə bilər. İstifadəçilərin sorğularında iştirak İstifadəçilər icazəsi ilə həyata keçirilir.",
            "1.6. İstifadəçi Servisə özü haqqında şəxsi məlumatların və istənilən başqa informasiyanın verilməsi haqqında sərbəst və könüllü qərar qəbul edir, həmçinin də bununla belə şəxsi məlumatların və informasiyanın Administrasiya tərəfindən işlənməsinə, işlənməsi üçün onların Administrasiyanın tapşırığı ilə hərəkət edən başqa İstifadəçilərə və/və ya üçüncü şəxslərə ötürülməsinə öz razılığını bildirir.",
            "1.7. Şəxsi məlumatların işlənməsi istənilən hərəkət və ya hərəkətlərin toplanma, qeydiyyat, yığım, saxlama, uyğunlaşma, dəyişiklik, yeniləmə, istifadə və yayılma kimi məcmusudur (yayılma, reallaşdırma, ötürülmə, həmçinin xaricə) və şəxsi məlumatların, həmçinin informasiya (avtomatlaşdırılmış) sistemlərinin istifadəsi ilə məhv edilməsidir.",
            "1.8. Şəxsi məlumatların işlənməsinin məqsədləri, o cümlədən, aşağıdakılardır:",
            "1.8.1. Servisin, onun servislərinin və xidmətlərinin fəaliyyətinin yaxşılaşması üçün statistik və analitik məlumatların alınması;",
            "1.8.2. göstərilən xidmətlərin spektrinin genişləndirilməsi;",
            "1.8.3. Servisin və ya üçüncü şəxslərin informasiya və ya reklam xəbərlərinin alınması (yeni imkanlar, aksiyalar və başqa xəbərlər haqqında xəbərdarlıq);",
            "1.8.4. İstifadəçilərin və ya üçüncü şəxslərin qanunsuz və ya icazəsiz hərəkətlərinin xəbərdarlığı və qabağının alınması;",
            "1.8.5. qüvvədə olan qanunvericiliyin tələblərinə riayətin təminatı.",
            "1.9. Servis İstifadəçilər haqqında növbəti informasiyanı toplayır:",
            "1.9.1. Servisdən istifadə zamanı Administrasiyaya İstifadəçinin daxil etdiyi şəxsi informasiyanı göstərir və ya başqa üsulla açır. Belə informasiya, xüsusi halda (lakin, məhdudlaşdırılmadan), İstifadəçinin adı və soyadı, elektron poçt ünvanı və parolu, telefon nömrəsi, İstifadəçinin yerləşdiyi yer, həmçinin ünvanı ola bilər. Əgər İstifadəçi sosial şəbəkənin profili vasitəsilə daxil olursa, Servis həmçinin belə sosial şəbəkənin profilində yerləşdirilmiş informasiyanı toplaya bilər. İstifadəçi ona verilmiş informasiyaya görə məsuliyyət daşıyır, halbuki Servis İnternetdə İstifadəçinin məlumatlarının yayılması və dərc edilməsi üçün kanalı verir.",
            "1.9.2. Servisin, ona giriş zamanı, proqram təminatı tərəfindən avtomatik toplanan texniki informasiya.",
            "1.10. Servis, həmçinin də Administrasiya, irqi və ya etnik mənşə haqqında məlumatları, siyasi, dini və dünyagörüşü məsləklər, siyasi partiyalara və həmkarlar ittifaqlarına üzvlük, cinayət cəzasına məhkumluqlar, həmçinin də sağlamlığa, cinsiyyət həyatına aid olan məlumatları, biometrik və ya genetik məlumatları toplamır və işləmir.",
            "1.11. Servis və Administrasiya Servisə aidiyyəti olmayan üçüncü şəxslərə İstifadəçilər tərəfindən təqdim edilmiş heç bir şəxsi və ya başqa məlumatları, İstifadəçinin belə icazəni verdiyi hal istisna olmaqla, həmçinin də İstifadəçi razılaşması ilə və ya qanunvericiliklə nəzərdə tutulmuş hallarda, vermir.",
            "1.12. Servis və Administrasiya bəzi hallarda bəzi məlumatları Servislə əməkdaşlıq edən və ya Administrasiya ilə bağlı olan şəxslərə verə bilər.",
            "1.13. Administrasiya Servisdən istifadə prosesində İstifadəçilər tərəfindən verilmiş informasiyanı və şəxsi məlumatları satmır və icarəyə vermir.",
            "1.14. İstifadəçilər arasında qarşılıqlı təsiri yüngülləşdirmək üçün, xidmətlər başqa İstifadəçilərin əlaqə informasiyasına məhdudlaşdırılmış girişi nəzərdə tutur. Başqa İstifadəçilər tərəfindən verilmiş məlumatlardan istifadə hüququ İstifadəçi razılaşması ilə məhdudlaşdırılır.",
            "1.15. Servisin İstifadəçisi başqa İstifadəçi tərəfindən verilmiş məlumatlardan, belə İstifadəçinin yazılı icazəsi olmadan və ya belə məlumatlardan hər hansı başqa yolla istifadə etmək hüququnun təsdiqi olmadan istifadə etməməyi öhdəsinə götürür. Servisdən istifadə ilə əlaqədar başqa İstifadəçilər haqqında İstifadəçi tərəfindən alınmış bütün məlumatlar yalnız Mallar barəsində sazişlərin icrasında istifadə edilə bilər. Beləliklə, İstifadəçiyə düz reklam göndərməsi və ya arzu edilməyən elektron xəbərlərin başqa göndərməsi məqsədləri üçün elektron ünvandan istifadə etməyə, başqa İstifadəçinin telefon nömrəsi kimi, həmçinin xəbərsiz edilən qeyri-qanuni hərəkətlərə və ya başqa İstifadəçinin xəbəri və razılığı olmadan həyata keçirilmiş hərəkətlərə icazə verilmir.",
            "1.16. Servisin İstifadəçisi onun Servisdən istifadə prosesində verdiyi şəxsi və başqa məlumatları istənilən vaxt qismən dəyişdirmək, silmək və ya başqa üsulla düzəliş etmək imkanına malikdir.",
            "1.17. İstifadəçi onun göstərdiyi istənilən informasiyanın və məlumatların dəqiqliyi və düzgünlüyü üçün məsuliyyət daşıyır.",
            "1.18. Əgər İstifadəçi girişi, qeydiyyatı həyata keçirmişsə və OpenID xidmətinin köməyi ilə Servisdən istifadə edirsə, İstifadəçi onun məlumatlarının ötürülməsi və onlardan istifadə qaydasını belə xidmətin parametrlərində qura bilər.",
            "1.19. Servis və Administrasiya İstifadəçinin şəxsi məlumatlarının üçüncü şəxslərin icazəsiz girişindən müdafiəsi üçün bütün səmərəli ölçüləri qəbul edir.",
            "1.20. Servis tərəfindən toplanmış və işlənmiş bütün şəxsi məlumatlar bir və ya bir neçə qorunan korporativ şəbəkədən kənarda giriş olmayan serverdə saxlanılır. Administrasiyanın İstifadəçilərin şəxsi və başqa informasiyasından girişlə və istifadə ilə funksiyaları yerinə yetirən bütün əməkdaşları üçüncü şəxslərə İstifadəçilər haqqında informasiyanın yayılmaması haqqında razılaşma imzalamışlar.",
            "1.21. Servisin İstifadəçisi şəxsi məlumatlarının Servisdən silinməsinə sorğu göndərə bilər. Belə bir sorğu olduqda, onun haqqında toplanan bütün şəxsi məlumatlar silinəcək və gələcəkdə Servisə girişin təmin edilməsinə zəmanət verilməyəcək.",
            "İstifadəçi haqqında şəxsi məlumatları silmək üçün Fincar ilə əlaqə saxlamalısınız."
        ]
    },

    {
        title: "2. Cookies, veb-mayaklar, və oxşar texnologiyalar",
        items: [
            "2.1. Servis informasiyanın saxlanılması üçün cookies fayllarından, veb-mayaklardan və başqa oxşar texnologiyalardan istifadə edə bilər. Bu fayllar veb-saytın və onun əlavələrinin istifadəsini yüngülləşdirmək məqsədi ilə, Servis xidmətlərinin keyfiyyətinin artırılması məqsədi ilə (həmçinin təhlükəsizlik), həmçinin reklam məqsədi ilə istifadə olunur.",
            "2.2. Servis tərəfindən İstifadəçidən alınan istənilən informasiya, həmçinin cookies fayllarının İstifadəçinin brauzerində yerləşdirilməsi, xəbərdarlıq vasitəsilə və İstifadəçinin icazəsi ilə həyata keçirilir. Servisdən istifadəni davam edərək, İstifadəçi Servisə cookies fayllarının İstifadəçinin brauzerində saxlamasına öz icazəsini verir.",
            "2.3. Servis cookies-dən və oxşar texnologiyalardan, İstifadəçinin brauzerinin fəallığı prosesində İstifadəçinin qurğusunda qalan və cookies, həmçinin də daha uzun müddətli dövr ərzində İstifadəçinin qurğusunda qalan başqa oxşar texnologiyalardan istifadə edir. İstifadəçi belə cookies və oxşar texnologiyaları bloklamaqda, silməkdə və ya kəsməkdə, əgər İstifadəçinin qurğusu buna icazə verirsə, haqlıdır.",
            "2.3.1. Cookies – kompüter terminologiyasında Servisdən alınmış mətn və ya ikili məlumatlar şəklində informasiyanın təsviri üçün istifadə edilən anlayışdır ki, İstifadəçidə saxlanılır, yəni brauzerdə, sonra isə, əgər Servisin İstifadəçisi ona təkrar olaraq baş çəkirsə, Servisə yollanır. Beləliklə, Servis baş çəkmə vaxtı İstifadəçinin brauzerini qeyd edir. Cookies faylları sistemə giriş və statistika yığımı üçün lazımı məlumatları yazaraq Servisdən istifadəni yüngülləşdirir. Cookies falları özündə şəxsi məlumatları saxlamır.",
            "2.3.2. Veb-mayaklar – Servisdə, həmçinin onun xidmətlərində, əlavələrdə, mübadilə xəbərlərində, və İstifadəçini müəyyən etmək üçün adətən cookies ilə uyğunluqda işləyən alətlərdə qoşula bilən kiçik qrafik təsvirlərdir (həmçinin nöqtə markörləri və ya Şəbəkə mayakları kimi məlumdur).",
            "2.3.3. Oxşar texnologiyalar – lokal ümumi obyektləri və ya lokal anbarı və proqram veb-əlavələrinin başqa metodları istifadə edən, brauzerdə və ya qurğuda informasiyanı saxlayan, flashcookies HTML 5 cookies kimi, texnologiyalardır. Bu texnologiyalar İstifadəçinin bütün brauzerlərində işləyə bilər, bəzi hallarda isə tamamilə brauzerlə idarə oluna bilmirlər və İstifadəçi tərəfindən təyin edilmiş əlavələr və ya qurğular vasitəsilə bilavasitə idarəetməni tələb edə bilərlər.",
            "2.4. Cookies-ə və oxşar texnologiyalara icazə olunmamış girişin qarşısını almaq üçün Administrasiya bütün təhlükəsizlik tədbirlərini görür. İstifadəçi analoji təhlükəsizlik tədbirlərini görməyi öhdəsinə götürür. Administrasiya zəmanət verir ki, yalnız Administrasiya və/və ya Servis xidmətlərinin səlahiyyətli təchizatçıları cookies məlumatlarına girişə malikdirlər.",
            "2.5. Servisin xidmətlərinin təchizatçıları Servisin müxtəlif aspektləri ilə kömək edən şirkətlərdir. Administrasiya Servisin uyğun olan xidmətlərinin İstifadəçiyə verilməsi, həmçinin də Servisin bilavasitə fəaliyyəti ilə bağlı başqa məqsədlər üçün xidmətlərin bəzi səlahiyyətli təchizatçılarından istifadə edir. Xidmətlərin belə təchizatçıları həmçinin Servisin (kənar cookies) xidmətləri vasitəsilə cookies-i İstifadəçinin qurğusunda yerləşdirə bilərlər. Onlar həmçinin başqa informasiyanı, məsələn, IP-ünvan və ya başqa eyniləşdiriciləri, toplaya bilərlər.",
            "2.6. Servisin yuxarıda göstərilmiş texnologiyalardan istifadə vasitəsilə toplayıb və saxladığı istənilən informasiyadan İstifadəçinin icazəsi ilə istifadə olunur.",
            "2.7. İstifadəçi brauzerin və ya qurğunun parametrlərində cookies-i idarə edə bilər. İnformasiyanın toplanmasından və saxlanılmasından imtina üçün brauzerin parametrlərində Cookies-i saxlamamaq bəndində bayraqcığı qurmaq, həmçinin Cookies-i təmizləmək düyməsini basmaq lazımdır.",
            "2.8. Sistemdə olan texniki xarakterli informasiya, məsələn, ip-ünvanlar, Servis tərəfindən şəbəkə avadanlığının xidməti üçün, həmçinin statistik və başqa informasiyanın ümumiləşdirilməsi üçün istifadə olunur.",
            "2.9. İstifadəçinin fərdi ehtiyaclarına və maraqlarına uyğunlaşdırılan verilən servislərin yüksək keyfiyyətli təminatı məqsədi ilə Servis İstifadəçinin sistemə son girişinin məlumatlarını saxlayır."
        ]
    },

    {
        title: "3. Məxfiliyin siyasətinə dəyişikliklərin daxil etməsi",
        items: [
            "3.1. Administrasiya Məxfilik Siyasətinə dəyişikliklər edə, silə və ya qaydalarını yeniləyə bilər.",
            "3.2. Əgər İstifadəçi daxil edilmiş dəyişikliklərlə razı deyilsə, o Servisdən istifadəni dayandırmalıdır. Əgər İstifadəçi Servisdən istifadə etməyə davam edirsə, o razılaşır və bütün dəyişiklikləri və Məxfilik siyasətinin yeni redaksiyasını bütövlükdə qəbul edir."
        ]
    },
];


const PrivacyPolicy = () => {

    return (
        <div className={styles.container}>
            <p className={styles.head_title}>
                Fincar məxfilik siyasəti
            </p>

            <div>
                {
                    privacy_policy_data.map((item) => (
                        <>
                            <p className={styles.faqs_item_head_title}>
                                {
                                    item.title
                                }
                            </p>

                            <div className={styles.faq_items_body}>
                                    {
                                        item.items.map((privacy_data,index) => (
                                            <p className={styles.faq_item} key={index}>
                                                {
                                                    privacy_data
                                                }
                                            </p>
                                        ))
                                    }
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default PrivacyPolicy