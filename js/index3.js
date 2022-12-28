var Surah = ''
var surah_box = document.querySelector('.surah_box')
var desc1 = document.querySelector('.desc1')
var desc2 = document.querySelector('.desc2')
var revelationType = document.querySelector('.revelationType')
var numberOfAyahs = document.querySelector('.numberOfAyahs')
var surah_name = document.querySelector('.surah_name')
var ruku = document.querySelector('.ruku')
var brow = document.getElementById('brow')
var option_vall = document.querySelectorAll('#option_vall')
var search_btn = document.getElementById('search_btn')
var search_surah = document.getElementById('search_surah')
var input_vall
var ARABIC_SURAH
var BANGLA_SURAH
var FULL_QURAN
var SURAH_API_URLS1
var FULL_FATIHA_URLS_1
//
var FULL_BAQARA_URLS_1
var FULL_BAQARA_URLS_2
var FULL_BAQARA_URLS_3
var FULL_BAQARA_URLS_4
var FULL_BAQARA_URLS_5
var FULL_BAQARA_URLS_6
var FULL_BAQARA_URLS_7
var FULL_BAQARA_URLS_8
var FULL_BAQARA_URLS_9
var FULL_BAQARA_URLS_10
var FULL_BAQARA_URLS_11
var FULL_BAQARA_URLS_12
var FULL_BAQARA_URLS_13
var FULL_BAQARA_URLS_14
var FULL_BAQARA_URLS_15
//
var FULL_IMRAN_URLS_1
var FULL_IMRAN_URLS_2
var FULL_IMRAN_URLS_3
var FULL_IMRAN_URLS_4
var FULL_IMRAN_URLS_5
var FULL_IMRAN_URLS_6
var FULL_IMRAN_URLS_7
var FULL_IMRAN_URLS_8
var FULL_IMRAN_URLS_9
var FULL_IMRAN_URLS_10
//
var FULL_NISHA_URLS_1
var FULL_NISHA_URLS_2
var FULL_NISHA_URLS_3
var FULL_NISHA_URLS_4
var FULL_NISHA_URLS_5
var FULL_NISHA_URLS_6
var FULL_NISHA_URLS_7
var FULL_NISHA_URLS_8
var FULL_NISHA_URLS_9
//
var FULL_MAYDA_URLS_1
var FULL_MAYDA_URLS_2
var FULL_MAYDA_URLS_3
var FULL_MAYDA_URLS_4
var FULL_MAYDA_URLS_5
var FULL_MAYDA_URLS_6
//
var FULL_AL_AN_AM_URLS_1
var FULL_AL_AN_AM_URLS_2
var FULL_AL_AN_AM_URLS_3
var FULL_AL_AN_AM_URLS_4
var FULL_AL_AN_AM_URLS_5
var FULL_AL_AN_AM_URLS_6
var FULL_AL_AN_AM_URLS_7
var FULL_AL_AN_AM_URLS_8
var FULL_AL_AN_AM_URLS_9
//
var FULL_AL_ARAF_URLS_1
var FULL_AL_ARAF_URLS_2
var FULL_AL_ARAF_URLS_3
var FULL_AL_ARAF_URLS_4
var FULL_AL_ARAF_URLS_5
var FULL_AL_ARAF_URLS_6
var FULL_AL_ARAF_URLS_7
var FULL_AL_ARAF_URLS_8
var FULL_AL_ARAF_URLS_9
var FULL_AL_ARAF_URLS_10
var FULL_AL_ARAF_URLS_11
//
var FULL_AL_ANFAL_URLS_1
var FULL_AL_ANFAL_URLS_2
var FULL_AL_ANFAL_URLS_3
var FULL_AL_ANFAL_URLS_4
//
var FULL_AT_TOWBA_URLS_1
var FULL_AT_TOWBA_URLS_2
var FULL_AT_TOWBA_URLS_3
var FULL_AT_TOWBA_URLS_4
var FULL_AT_TOWBA_URLS_5
var FULL_AT_TOWBA_URLS_6
var FULL_AT_TOWBA_URLS_7
//
var FULL_AL_YUNUS_URLS_1
var FULL_AL_YUNUS_URLS_2
var FULL_AL_YUNUS_URLS_3
var FULL_AL_YUNUS_URLS_4
var FULL_AL_YUNUS_URLS_5
var FULL_AL_YUNUS_URLS_6
//
var FULL_HOOD_URLS_1
var FULL_HOOD_URLS_2
var FULL_HOOD_URLS_3
var FULL_HOOD_URLS_4
var FULL_HOOD_URLS_5
var FULL_HOOD_URLS_6
var FULL_HOOD_URLS_7
//
var FULL_AL_YUSUF_URLS_1
var FULL_AL_YUSUF_URLS_2
var FULL_AL_YUSUF_URLS_3
var FULL_AL_YUSUF_URLS_4
var FULL_AL_YUSUF_URLS_5
var FULL_AL_YUSUF_URLS_6
//
var FULL_AROOD_URLS_1
var FULL_AROOD_URLS_2
var FULL_AROOD_URLS_3
//
var FULL_IBRAHIM_URLS_1
var FULL_IBRAHIM_URLS_2
var FULL_IBRAHIM_URLS_3
//
var FULL_AL_HIJR_URLS_1
var FULL_AL_HIJR_URLS_2
var FULL_AL_HIJR_URLS_3
var FULL_AL_HIJR_URLS_4
var FULL_AL_HIJR_URLS_5
//
var FULL_AN_NOOH_URLS_1
var FULL_AN_NOOH_URLS_2
var FULL_AN_NOOH_URLS_3
var FULL_AN_NOOH_URLS_4
var FULL_AN_NOOH_URLS_5
var FULL_AN_NOOH_URLS_6
var FULL_AN_NOOH_URLS_7
//
var FULL_BONY_ISRAIL_URLS_1
var FULL_BONY_ISRAIL_URLS_2
var FULL_BONY_ISRAIL_URLS_3
var FULL_BONY_ISRAIL_URLS_4
var FULL_BONY_ISRAIL_URLS_5
var FULL_BONY_ISRAIL_URLS_6
//
var FULL_AL_KAAF_URLS_1
var FULL_AL_KAAF_URLS_2
var FULL_AL_KAAF_URLS_3
var FULL_AL_KAAF_URLS_4
var FULL_AL_KAAF_URLS_5
var FULL_AL_KAAF_URLS_6
//
var FULL_MARIYAM_URLS_1
var FULL_MARIYAM_URLS_2
var FULL_MARIYAM_URLS_3
var FULL_MARIYAM_URLS_4
var FULL_MARIYAM_URLS_5
//
var FULL_AT_TOHA_URLS_1
var FULL_AT_TOHA_URLS_2
var FULL_AT_TOHA_URLS_3
var FULL_AT_TOHA_URLS_4
var FULL_AT_TOHA_URLS_5
var FULL_AT_TOHA_URLS_6
var FULL_AT_TOHA_URLS_7
//
var FULL_AL_AMBIYA_URLS_1
var FULL_AL_AMBIYA_URLS_2
var FULL_AL_AMBIYA_URLS_3
var FULL_AL_AMBIYA_URLS_4
var FULL_AL_AMBIYA_URLS_5
var FULL_AL_AMBIYA_URLS_6
//
var FULL_AL_HAJJ_URLS_1
var FULL_AL_HAJJ_URLS_2
var FULL_AL_HAJJ_URLS_3
var FULL_AL_HAJJ_URLS_4
//
var FULL_AL_MOMIN_URLS_1
var FULL_AL_MOMIN_URLS_2
var FULL_AL_MOMIN_URLS_3
var FULL_AL_MOMIN_URLS_4
var FULL_AL_MOMIN_URLS_5
var FULL_AL_MOMIN_URLS_6
//
var FULL_AN_NOOR_URLS_1
var FULL_AN_NOOR_URLS_2
var FULL_AN_NOOR_URLS_3
var FULL_AN_NOOR_URLS_4
//
var FULL_AL_FORQON_URLS_1
var FULL_AL_FORQON_URLS_2
var FULL_AL_FORQON_URLS_3
var FULL_AL_FORQON_URLS_4
var FULL_AL_FORQON_URLS_5
//
var FULL_AS_ARA_URLS_1
var FULL_AS_ARA_URLS_2
var FULL_AS_ARA_URLS_3
var FULL_AS_ARA_URLS_4
var FULL_AS_ARA_URLS_5
var FULL_AS_ARA_URLS_6
var FULL_AS_ARA_URLS_7
var FULL_AS_ARA_URLS_8
var FULL_AS_ARA_URLS_9
var FULL_AS_ARA_URLS_10
var FULL_AS_ARA_URLS_11
var FULL_AS_ARA_URLS_12
//
var FULL_AN_NAMOL_URLS_1
var FULL_AN_NAMOL_URLS_2
var FULL_AN_NAMOL_URLS_3
var FULL_AN_NAMOL_URLS_4
var FULL_AN_NAMOL_URLS_5
//
var FULL_AN_QASAS_URLS_1
var FULL_AN_QASAS_URLS_2
var FULL_AN_QASAS_URLS_3
var FULL_AN_QASAS_URLS_4
var FULL_AN_QASAS_URLS_5
//
var FULL_AN_KABUT_URLS_1
var FULL_AN_KABUT_URLS_2
var FULL_AN_KABUT_URLS_3
var FULL_AN_KABUT_URLS_4
//
var FULL_AL_ROOM_URLS_1
var FULL_AL_ROOM_URLS_2
var FULL_AL_ROOM_URLS_3
//
var FULL_AL_LUKMAN_URLS_1
var FULL_AL_LUKMAN_URLS_2
//
var FULL_AS_SAJDHA_URLS_1
var FULL_AS_SAJDHA_URLS_2
//
var FULL_AH_JAAB_URLS_1
var FULL_AH_JAAB_URLS_2
var FULL_AH_JAAB_URLS_3
var FULL_AH_JAAB_URLS_4
//
var FULL_AS_SABAH_URLS_1
var FULL_AS_SABAH_URLS_2
//
var FULL_AL_FATER_URLS_1
var FULL_AL_FATER_URLS_2
var FULL_AL_FATER_URLS_3
//
var FULL_YEASIN_URLS_1
var FULL_YEASIN_URLS_2
var FULL_YEASIN_URLS_3
var FULL_YEASIN_URLS_4
var FULL_YEASIN_URLS_5
//
var FULL_AS_SOFFA_URLS_1
var FULL_AS_SOFFA_URLS_2
var FULL_AS_SOFFA_URLS_3
var FULL_AS_SOFFA_URLS_4
var FULL_AS_SOFFA_URLS_5
var FULL_AS_SOFFA_URLS_6
var FULL_AS_SOFFA_URLS_7
var FULL_AS_SOFFA_URLS_8
var FULL_AS_SOFFA_URLS_9
var FULL_AS_SOFFA_URLS_10
//
var FULL_AS_SAAD_URLS_1
var FULL_AS_SAAD_URLS_2
var FULL_AS_SAAD_URLS_3
var FULL_AS_SAAD_URLS_4
var FULL_AS_SAAD_URLS_5
//

var FULL_JUMARO_URLS_1
var FULL_JUMARO_URLS_2
var FULL_JUMARO_URLS_3
var FULL_JUMARO_URLS_4
//
var FULL_AL_MOMINUN_URLS_1
var FULL_AL_MOMINUN_URLS_2
var FULL_AL_MOMINUN_URLS_3
var FULL_AL_MOMINUN_URLS_4
var FULL_AL_MOMINUN_URLS_5
//
var FULL_HAAMIM_URLS_1
var FULL_HAAMIM_URLS_2
var FULL_HAAMIM_URLS_3
//
var FULL_AS_SURAH_URLS_1
var FULL_AS_SURAH_URLS_2
var FULL_AS_SURAH_URLS_3
//
var FULL_AJ_JUKHRUF_URLS_1
var FULL_AJ_JUKHRUF_URLS_2
var FULL_AJ_JUKHRUF_URLS_3
var FULL_AJ_JUKHRUF_URLS_4
var FULL_AJ_JUKHRUF_URLS_5
//
var FULL_AD_DUAKHAN_URLS_1
var FULL_AD_DUAKHAN_URLS_2
var FULL_AD_DUAKHAN_URLS_3
//
var FULL_AL_JASIYA_URLS_1
var FULL_AL_JASIYA_URLS_2
//
var FULL_AL_AHKAF_URLS_1
var FULL_AL_AHKAF_URLS_2
//
var FULL_MOHAMMAD_URLS_1
var FULL_MOHAMMAD_URLS_2
//
var FULL_AL_FATAH_URLS_1
var FULL_AL_FATAH_URLS_2
//
var FULL_AL_HUJURAH_URLS_1
//
var FULL_AL_KAAF_URLS_1
var FULL_AL_KAAF_URLS_2
var FULL_AL_KAAF_URLS_3
//
var FULL_AJ_JARIYA_URLS_1
var FULL_AJ_JARIYA_URLS_2
var FULL_AJ_JARIYA_URLS_3
//
var FULL_AT_TUR_URLS_1
var FULL_AT_TUR_URLS_2
var FULL_AT_TUR_URLS_3
//
var FULL_AN_NAJM_URLS_1
var FULL_AN_NAJM_URLS_2
var FULL_AN_NAJM_URLS_3
var FULL_AN_NAJM_URLS_4
//
var FULL_AL_KAMAR_URLS_1
var FULL_AL_KAMAR_URLS_2
var FULL_AL_KAMAR_URLS_3
//
var FULL_AR_RAHMAN_URLS_1
var FULL_AR_RAHMAN_URLS_2
var FULL_AR_RAHMAN_URLS_3
var FULL_AR_RAHMAN_URLS_4
//
var FULL_AL_WOAKIYA_URLS_1
var FULL_AL_WOAKIYA_URLS_2
var FULL_AL_WOAKIYA_URLS_3
var FULL_AL_WOAKIYA_URLS_4
var FULL_AL_WOAKIYA_URLS_5
//
var FULL_AL_HADID_URLS_1
var FULL_AL_HADID_URLS_2
//
var FULL_AL_MOJADALAH_URLS_1
var FULL_AL_MOJADALAH_URLS_2
//
var FULL_AL_HASOR_URLS_1
var FULL_AL_HASOR_URLS_2
//
var FULL_LA_MOMTAHIN_URLS_1
//
var FULL_AS_SOF_URLS_1
//
var FULL_AL_JUMYA_URLS_1
//
var FULL_AL_MONAFIKUN_URLS_1
//
var FULL_AT_TAGOBUN_URLS_1
//
var FULL_AT_TALAK_URLS_1
//
var FULL_AT_TAHRIM_URLS_1
//
var FULL_AL_MULK_URLS_1
var FULL_AL_MULK_URLS_2
//
var FULL_AL_KOLAM_URLS_1
var FULL_AL_KOLAM_URLS_2
var FULL_AL_KOLAM_URLS_3
//
var FULL_AL_HAKKO_URLS_1
var FULL_AL_HAKKO_URLS_2
var FULL_AL_HAKKO_URLS_3
//
var FULL_AL_MARIJ_URLS_1
var FULL_AL_MARIJ_URLS_2
var FULL_AL_MARIJ_URLS_3
//
var FULL_AN_NOH_URLS_1
var FULL_AN_NOH_URLS_2
//
var FULL_AL_JIN_URLS_1
var FULL_AL_JIN_URLS_2
//
var FULL_AL_MUJJAMMIL_URLS_1
//
var FULL_AL_MUDDACHIR_URLS_1
var FULL_AL_MUDDACHIR_URLS_2
var FULL_AL_MUDDACHIR_URLS_3
//
var FULL_AL_QIYAMAH_URLS_1
var FULL_AL_QIYAMAH_URLS_2
//
var FULL_AD_DAHOR_URLS_1
var FULL_AD_DAHOR_URLS_2
//
var FULL_AL_MURSALAT_URLS_1
var FULL_AL_MURSALAT_URLS_2
var FULL_AL_MURSALAT_URLS_3
//
var FULL_AN_NAVA_URLS_1
var FULL_AN_NAVA_URLS_2
//
var FULL_AN_NAJIYA_URLS_1
var FULL_AN_NAJIYA_URLS_2
var FULL_AN_NAJIYA_URLS_3
//
var FULL_ABACHA_URLS_1
var FULL_ABACHA_URLS_2
var FULL_ABACHA_URLS_3
//
var FULL_AT_TAKDIR_URLS_1
var FULL_AT_TAKDIR_URLS_2
//
var FULL_AL_INFITAR_URLS_1
//
var FULL_AL_MUTOFIFIN_URLS_1
var FULL_AL_MUTOFIFIN_URLS_2
//
var FULL_AL_INFIKAR_URLS_1
var FULL_AL_INFIKAR_URLS_2
//
var FULL_AL_BURUJ_URLS_1
var FULL_AL_BURUJ_URLS_2
//
var FULL_AT_TARIF_URLS_1
//
var FULL_AL_ALA_URLS_1
//
var FULL_AL_GASHIA_URLS_1
var FULL_AL_GASHIA_URLS_2
//
var FULL_AL_FAJJ_URLS_1
var FULL_AL_FAJJ_URLS_2
//
var FULL_AL_BALAD_URLS_1
//
var FULL_AS_SAMCH_URLS_1
//
var FULL_AL_LYLE_URLS_1
var FULL_AL_LYLE_URLS_2
//
var FULL_AD_DUHA_URLS_1
//
var FULL_ALAM_NASRAH_URLS_1
var FULL_AT_TIN_URLS_1
var FULL_AL_ALAK_URLS_1
var FULL_AL_KADR_URLS_1
var FULL_AL_BAYNAH_URLS_1
var FULL_AL_ASOR_URLS_1
var FULL_AL_HUMJAH_URLS_1
var FULL_AL_FILL_URLS_1
var FULL_KURAYS_URLS_1
var FULL_AL_MAWN_URLS_1
var FULL_AL_KAWSER_URLS_1
var FULL_AL_KAFIRUN_URLS_1
var FULL_AN_NASOR_URLS_1
var FULL_AL_LAHAB_URLS_1
var FULL_AL_IKHLAS_URLS_1
var FULL_AL_FALAK_URLS_1
var FULL_AL_NAS_URLS_1
var FULL_AL_JILJAL_URLS_1
var FULL_AL_ADIYAT_URLS_1
var FULL_AL_KARIYA_URLS_1
var FULL_AT_TAKASUR_URLS_1
var FULL_AL_QAAF_URLS_1
var FULL_AL_QAAF_URLS_2
var FULL_AL_QAAF_URLS_3

function ALL_API_URL() {
  var count = 1
  while (count < 114) {
    count++
  }

  FULL_QURAN = `https://api.globalquran.com/complete/quran-simple?key=9f3973666d8bd2dae664853fd6d70cf9`
  SURAH_API_URLS1 = `https://alquranbd.com/api/tafheem/sura/list/`
  FULL_FATIHA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/1/1`
  // surah bakarah
  FULL_BAQARA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/2/1`
  FULL_BAQARA_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/2/2`
  FULL_BAQARA_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/2/3`
  FULL_BAQARA_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/2/4`
  FULL_BAQARA_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/2/5`
  FULL_BAQARA_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/2/6`
  FULL_BAQARA_URLS_7 = `https://alquranbd.com/api/tafheem/suraData/2/7`
  FULL_BAQARA_URLS_8 = `https://alquranbd.com/api/tafheem/suraData/2/8`
  FULL_BAQARA_URLS_9 = `https://alquranbd.com/api/tafheem/suraData/2/9`
  FULL_BAQARA_URLS_10 = `https://alquranbd.com/api/tafheem/suraData/2/10`
  FULL_BAQARA_URLS_11 = `https://alquranbd.com/api/tafheem/suraData/2/11`
  FULL_BAQARA_URLS_12 = `https://alquranbd.com/api/tafheem/suraData/2/12`
  FULL_BAQARA_URLS_13 = `https://alquranbd.com/api/tafheem/suraData/2/13`
  FULL_BAQARA_URLS_14 = `https://alquranbd.com/api/tafheem/suraData/2/14`
  FULL_BAQARA_URLS_15 = `https://alquranbd.com/api/tafheem/suraData/2/15`
  // surah bakarah
  //  al imran
  FULL_IMRAN_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/3/1`
  FULL_IMRAN_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/3/2`
  FULL_IMRAN_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/3/3`
  FULL_IMRAN_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/3/4`
  FULL_IMRAN_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/3/5`
  FULL_IMRAN_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/3/6`
  FULL_IMRAN_URLS_7 = `https://alquranbd.com/api/tafheem/suraData/3/7`
  FULL_IMRAN_URLS_8 = `https://alquranbd.com/api/tafheem/suraData/3/8`
  FULL_IMRAN_URLS_9 = `https://alquranbd.com/api/tafheem/suraData/3/9`
  FULL_IMRAN_URLS_10 = `https://alquranbd.com/api/tafheem/suraData/3/10`
  //  al imran
  //  an nisah
  FULL_NISHA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/4/1/`
  FULL_NISHA_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/4/2/`
  FULL_NISHA_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/4/3/`
  FULL_NISHA_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/4/4/`
  FULL_NISHA_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/4/5/`
  FULL_NISHA_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/4/6/`
  FULL_NISHA_URLS_7 = `https://alquranbd.com/api/tafheem/suraData/4/7/`
  FULL_NISHA_URLS_8 = `https://alquranbd.com/api/tafheem/suraData/4/8/`
  FULL_NISHA_URLS_9 = `https://alquranbd.com/api/tafheem/suraData/4/9/`
  //  an nisah
  // mayeda
  FULL_MAYDA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/5/1/`
  FULL_MAYDA_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/5/2/`
  FULL_MAYDA_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/5/3/`
  FULL_MAYDA_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/5/4/`
  FULL_MAYDA_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/5/5/`
  FULL_MAYDA_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/5/6/`
  // mayeda
  // al an am
  FULL_AL_AN_AM_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/6/1/`
  FULL_AL_AN_AM_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/6/2/`
  FULL_AL_AN_AM_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/6/3/`
  FULL_AL_AN_AM_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/6/4/`
  FULL_AL_AN_AM_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/6/5/`
  FULL_AL_AN_AM_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/6/6/`
  FULL_AL_AN_AM_URLS_7 = `https://alquranbd.com/api/tafheem/suraData/6/7/`
  FULL_AL_AN_AM_URLS_8 = `https://alquranbd.com/api/tafheem/suraData/6/8/`
  FULL_AL_AN_AM_URLS_9 = `https://alquranbd.com/api/tafheem/suraData/6/9/`
  // al an am
  // al araf
  FULL_AL_ARAF_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/7/1/`
  FULL_AL_ARAF_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/7/2/`
  FULL_AL_ARAF_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/7/3/`
  FULL_AL_ARAF_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/7/4/`
  FULL_AL_ARAF_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/7/5/`
  FULL_AL_ARAF_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/7/6/`
  FULL_AL_ARAF_URLS_7 = `https://alquranbd.com/api/tafheem/suraData/7/7/`
  FULL_AL_ARAF_URLS_8 = `https://alquranbd.com/api/tafheem/suraData/7/8/`
  FULL_AL_ARAF_URLS_9 = `https://alquranbd.com/api/tafheem/suraData/7/9/`
  FULL_AL_ARAF_URLS_10 = `https://alquranbd.com/api/tafheem/suraData/7/10/`
  FULL_AL_ARAF_URLS_11 = `https://alquranbd.com/api/tafheem/suraData/7/11/`
  // al araf
  // আল আনফাল"
  FULL_AL_ANFAL_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/8/1/`
  FULL_AL_ANFAL_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/8/2/`
  FULL_AL_ANFAL_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/8/3/`
  FULL_AL_ANFAL_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/8/4/`
  // আল আনফাল"
  // at tauba
  FULL_AT_TOWBA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/9/1/`
  FULL_AT_TOWBA_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/9/2/`
  FULL_AT_TOWBA_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/9/3/`
  FULL_AT_TOWBA_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/9/4/`
  FULL_AT_TOWBA_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/9/5/`
  FULL_AT_TOWBA_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/9/6/`
  FULL_AT_TOWBA_URLS_7 = `https://alquranbd.com/api/tafheem/suraData/9/7/`
  // at tauba
  // yunuf
  FULL_AL_YUNUS_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/10/1/`
  FULL_AL_YUNUS_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/10/2/`
  FULL_AL_YUNUS_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/10/3/`
  FULL_AL_YUNUS_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/10/4/`
  FULL_AL_YUNUS_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/10/5/`
  FULL_AL_YUNUS_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/10/6/`
  // yunuf
  // hud
  FULL_HOOD_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/11/1/`
  FULL_HOOD_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/11/2/`
  FULL_HOOD_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/11/3/`
  FULL_HOOD_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/11/4/`
  FULL_HOOD_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/11/5/`
  FULL_HOOD_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/11/6/`
  FULL_HOOD_URLS_7 = `https://alquranbd.com/api/tafheem/suraData/11/7/`
  // hud
  // yusuf
  FULL_AL_YUSUF_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/12/1/`
  FULL_AL_YUSUF_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/12/2/`
  FULL_AL_YUSUF_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/12/3/`
  FULL_AL_YUSUF_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/12/4/`
  FULL_AL_YUSUF_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/12/5/`
  FULL_AL_YUSUF_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/12/6/`
  // yusuf
  // arod
  FULL_AROOD_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/13/1/`
  FULL_AROOD_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/13/2/`
  FULL_AROOD_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/13/3/`
  // arod
  // ibrahim
  FULL_IBRAHIM_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/14/1/`
  FULL_IBRAHIM_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/14/2/`
  FULL_IBRAHIM_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/14/3/`
  // ibrahim
  // al hijri
  FULL_AL_HIJR_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/15/1/`
  FULL_AL_HIJR_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/15/2/`
  FULL_AL_HIJR_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/15/3/`
  FULL_AL_HIJR_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/15/4/`
  FULL_AL_HIJR_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/15/5/`
  // al hijri
  // an nuh
  FULL_AN_NOOH_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/16/1/`
  FULL_AN_NOOH_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/16/2/`
  FULL_AN_NOOH_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/16/3/`
  FULL_AN_NOOH_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/16/4/`
  FULL_AN_NOOH_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/16/5/`
  FULL_AN_NOOH_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/16/6/`
  FULL_AN_NOOH_URLS_7 = `https://alquranbd.com/api/tafheem/suraData/16/7/`
  // an nuh
  // boni israil
  FULL_BONY_ISRAIL_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/17/1/`
  FULL_BONY_ISRAIL_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/17/2/`
  FULL_BONY_ISRAIL_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/17/3/`
  FULL_BONY_ISRAIL_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/17/4/`
  FULL_BONY_ISRAIL_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/17/5/`
  FULL_BONY_ISRAIL_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/17/6/`
  // boni israil
  // al kaaf
  FULL_AL_KAAF_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/18/1/`
  FULL_AL_KAAF_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/18/2/`
  FULL_AL_KAAF_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/18/3/`
  FULL_AL_KAAF_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/18/4/`
  FULL_AL_KAAF_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/18/5/`
  FULL_AL_KAAF_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/18/6/`
  // al kaaf
  // mariyam
  FULL_MARIYAM_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/19/1/`
  FULL_MARIYAM_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/19/2/`
  FULL_MARIYAM_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/19/3/`
  FULL_MARIYAM_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/19/4/`
  FULL_MARIYAM_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/19/5/`
  // mariyam
  // tohaa
  FULL_AT_TOHA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/20/1/`
  FULL_AT_TOHA_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/20/2/`
  FULL_AT_TOHA_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/20/3/`
  FULL_AT_TOHA_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/20/4/`
  FULL_AT_TOHA_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/20/5/`
  FULL_AT_TOHA_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/20/6/`
  FULL_AT_TOHA_URLS_7 = `https://alquranbd.com/api/tafheem/suraData/20/7/`
  // tohaa
  // ambiya
  FULL_AL_AMBIYA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/21/1/`
  FULL_AL_AMBIYA_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/21/2/`
  FULL_AL_AMBIYA_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/21/3/`
  FULL_AL_AMBIYA_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/21/4/`
  FULL_AL_AMBIYA_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/21/5/`
  FULL_AL_AMBIYA_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/21/6/`
  // ambiya
  // hajj
  FULL_AL_HAJJ_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/22/1/`
  FULL_AL_HAJJ_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/22/2/`
  FULL_AL_HAJJ_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/22/3/`
  FULL_AL_HAJJ_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/22/4/`
  // hajj
  // momin
  FULL_AL_MOMIN_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/23/1/`
  FULL_AL_MOMIN_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/23/2/`
  FULL_AL_MOMIN_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/23/3/`
  FULL_AL_MOMIN_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/23/4/`
  FULL_AL_MOMIN_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/23/5/`
  FULL_AL_MOMIN_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/23/6/`
  // momin
  // nur
  FULL_AN_NOOR_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/24/1/`
  FULL_AN_NOOR_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/24/2/`
  FULL_AN_NOOR_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/24/3/`
  FULL_AN_NOOR_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/24/4/`
  // nur
  // forkan
  FULL_AL_FORQON_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/25/1/`
  FULL_AL_FORQON_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/25/2/`
  FULL_AL_FORQON_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/25/3/`
  FULL_AL_FORQON_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/25/4/`
  FULL_AL_FORQON_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/25/5/`
  // forkan
  // aso ara
  FULL_AS_ARA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/26/1/`
  FULL_AS_ARA_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/26/2/`
  FULL_AS_ARA_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/26/3/`
  FULL_AS_ARA_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/26/4/`
  FULL_AS_ARA_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/26/5/`
  FULL_AS_ARA_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/26/6/`
  FULL_AS_ARA_URLS_7 = `https://alquranbd.com/api/tafheem/suraData/26/7/`
  FULL_AS_ARA_URLS_8 = `https://alquranbd.com/api/tafheem/suraData/26/8/`
  FULL_AS_ARA_URLS_9 = `https://alquranbd.com/api/tafheem/suraData/26/9/`
  FULL_AS_ARA_URLS_10 = `https://alquranbd.com/api/tafheem/suraData/26/10/`
  FULL_AS_ARA_URLS_11 = `https://alquranbd.com/api/tafheem/suraData/26/11/`
  FULL_AS_ARA_URLS_12 = `https://alquranbd.com/api/tafheem/suraData/26/12/`
  // aso ara
  // an namol
  FULL_AN_NAMOL_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/27/1/`
  FULL_AN_NAMOL_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/27/2/`
  FULL_AN_NAMOL_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/27/3/`
  FULL_AN_NAMOL_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/27/4/`
  FULL_AN_NAMOL_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/27/5/`
  // an namol
  // an kasas
  FULL_AN_QASAS_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/28/1/`
  FULL_AN_QASAS_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/28/2/`
  FULL_AN_QASAS_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/28/3/`
  FULL_AN_QASAS_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/28/4/`
  FULL_AN_QASAS_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/28/5/`
  // an kasas
  // an kabut
  FULL_AN_KABUT_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/29/1/`
  FULL_AN_KABUT_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/29/2/`
  FULL_AN_KABUT_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/29/3/`
  FULL_AN_KABUT_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/29/4/`
  // an kabut
  // room
  FULL_AL_ROOM_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/30/1/`
  FULL_AL_ROOM_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/30/2/`
  FULL_AL_ROOM_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/30/3/`
  // room
  // lukman
  FULL_AL_LUKMAN_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/31/1/`
  FULL_AL_LUKMAN_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/31/2/`
  // lukman
  // sajdah
  FULL_AS_SAJDHA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/32/1/`
  FULL_AS_SAJDHA_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/32/2/`
  // / sajdah
  // ahjaab
  FULL_AH_JAAB_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/33/1/`
  FULL_AH_JAAB_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/33/2/`
  FULL_AH_JAAB_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/33/3/`
  FULL_AH_JAAB_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/33/4/`
  // ahjaab
  // shabah
  FULL_AS_SABAH_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/34/1/`
  FULL_AS_SABAH_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/34/2/`
  // shabah
  // fater
  FULL_AL_FATER_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/35/1/`
  FULL_AL_FATER_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/35/2/`
  FULL_AL_FATER_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/35/3/`
  // fater
  // yeasin
  FULL_YEASIN_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/36/1/`
  FULL_YEASIN_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/36/2/`
  FULL_YEASIN_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/36/3/`
  FULL_YEASIN_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/36/4/`
  FULL_YEASIN_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/36/5/`
  // yeasin
  // আস্ সা-ফফা-ত"
  FULL_AS_SOFFA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/37/1/`
  FULL_AS_SOFFA_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/37/2/`
  FULL_AS_SOFFA_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/37/3/`
  FULL_AS_SOFFA_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/37/4/`
  FULL_AS_SOFFA_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/37/5/`
  FULL_AS_SOFFA_URLS_6 = `https://alquranbd.com/api/tafheem/suraData/37/6/`
  FULL_AS_SOFFA_URLS_7 = `https://alquranbd.com/api/tafheem/suraData/37/7/`
  FULL_AS_SOFFA_URLS_8 = `https://alquranbd.com/api/tafheem/suraData/37/8/`
  FULL_AS_SOFFA_URLS_9 = `https://alquranbd.com/api/tafheem/suraData/37/9/`
  FULL_AS_SOFFA_URLS_10 = `https://alquranbd.com/api/tafheem/suraData/37/10/`
  // আস্ সা-ফফা-ত"
  // saad
  FULL_AS_SAAD_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/38/1/`
  FULL_AS_SAAD_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/38/2/`
  FULL_AS_SAAD_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/38/3/`
  FULL_AS_SAAD_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/38/4/`
  FULL_AS_SAAD_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/38/5/`
  // saad
  // jumar
  FULL_JUMARO_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/39/1/`
  FULL_JUMARO_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/39/2/`
  FULL_JUMARO_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/39/3/`
  FULL_JUMARO_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/39/4/`
  // jumar
  // al momin
  FULL_AL_MOMINUN_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/40/1/`
  FULL_AL_MOMINUN_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/40/2/`
  FULL_AL_MOMINUN_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/40/3/`
  FULL_AL_MOMINUN_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/40/4/`
  FULL_AL_MOMINUN_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/40/5/`
  // al momin
  // হা-মীম আস সাজদাহ"
  FULL_HAAMIM_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/41/1/`
  FULL_HAAMIM_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/41/2/`
  FULL_HAAMIM_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/41/3/`
  // হা-মীম আস সাজদাহ"
  // আশ শূরা"
  FULL_AS_SURAH_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/42/1/`
  FULL_AS_SURAH_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/42/2/`
  FULL_AS_SURAH_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/42/3/`
  // আশ শূরা"
  // আয্ যুখরুফ
  FULL_AJ_JUKHRUF_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/43/1/`
  FULL_AJ_JUKHRUF_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/43/2/`
  FULL_AJ_JUKHRUF_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/43/3/`
  FULL_AJ_JUKHRUF_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/43/4/`
  FULL_AJ_JUKHRUF_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/43/5/`
  // আয্ যুখরুফ
  // আদ দুখান"
  FULL_AD_DUAKHAN_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/44/1/`
  FULL_AD_DUAKHAN_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/44/2/`
  FULL_AD_DUAKHAN_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/44/3/`
  // আদ দুখান"
  // আল জাসিয়াহ"
  FULL_AL_JASIYA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/45/1/`
  FULL_AL_JASIYA_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/45/2/`
  // আল জাসিয়াহ"
  // আল আহক্বাফ"
  FULL_AL_AHKAF_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/46/1/`
  FULL_AL_AHKAF_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/46/2/`
  // আল আহক্বাফ"
  //"মুহাম্মদ"
  FULL_MOHAMMAD_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/47/1/`
  FULL_MOHAMMAD_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/47/2/`
  //"মুহাম্মদ"
  //  "আল ফাতহ"
  FULL_AL_FATAH_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/48/1/`
  FULL_AL_FATAH_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/48/2/`
  //  "আল ফাতহ"
  // "আল হুজুরাত"
  FULL_AL_HUJURAH_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/49/1/`
  // "আল হুজুরাত"
  //  "ক্বাফ"
  FULL_AL_QAAF_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/50/1/`
  FULL_AL_QAAF_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/50/2/`
  FULL_AL_QAAF_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/50/3/`
  //  "ক্বাফ"
  // "আয যারিয়াত"
  FULL_AJ_JARIYA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/51/1/`
  FULL_AJ_JARIYA_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/51/2/`
  FULL_AJ_JARIYA_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/51/3/`
  // "আয যারিয়াত"
  // "আত ্তূর"
  FULL_AT_TUR_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/52/1/`
  FULL_AT_TUR_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/52/2/`
  FULL_AT_TUR_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/52/3/`
  // "আত ্তূর"
  // "আন নাজম"
  FULL_AN_NAJM_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/53/1/`
  FULL_AN_NAJM_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/53/2/`
  FULL_AN_NAJM_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/53/3/`
  FULL_AN_NAJM_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/53/4/`
  // "আন নাজম"
  // "আল ক্বামার"
  FULL_AL_KAMAR_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/54/1/`
  FULL_AL_KAMAR_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/54/2/`
  FULL_AL_KAMAR_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/54/3/`
  // "আল ক্বামার"
  //  "আর রহমান"
  FULL_AR_RAHMAN_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/55/1/`
  FULL_AR_RAHMAN_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/55/2/`
  FULL_AR_RAHMAN_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/55/3/`
  FULL_AR_RAHMAN_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/55/4/`
  //  "আর রহমান"
  // "আল ওয়াকি’আ"
  FULL_AL_WOAKIYA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/56/1/`
  FULL_AL_WOAKIYA_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/56/2/`
  FULL_AL_WOAKIYA_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/56/3/`
  FULL_AL_WOAKIYA_URLS_4 = `https://alquranbd.com/api/tafheem/suraData/56/4/`
  FULL_AL_WOAKIYA_URLS_5 = `https://alquranbd.com/api/tafheem/suraData/56/5/`
  // "আল ওয়াকি’আ"
  // "আল হাদীদ"
  FULL_AL_HADID_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/57/1/`
  FULL_AL_HADID_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/57/2/`
  // "আল হাদীদ"
  // "আল মুজাদালাহ"
  FULL_AL_MOJADALAH_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/58/1/`
  FULL_AL_MOJADALAH_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/58/2/`
  // "আল মুজাদালাহ"
  // "আল হাশর"
  FULL_AL_HASOR_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/59/1/`
  FULL_AL_HASOR_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/59/2/`
  // "আল হাশর"
  //  "আল মুমতাহিনা"
  FULL_LA_MOMTAHIN_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/60/1/`
  //  "আল মুমতাহিনা"
  // "আস সফ"
  FULL_AS_SOF_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/61/1/`
  // "আস সফ"
  // "আল জুমআ"
  FULL_AL_JUMYA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/62/1/`
  // "আল জুমআ"
  // "আল মুনাফিকুন"
  FULL_AL_MONAFIKUN_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/63/1/`
  // "আল মুনাফিকুন"
  //  "আত তাগাবুন"
  FULL_AT_TAGOBUN_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/64/1/`
  //  "আত তাগাবুন"
  // "আত তালাক"
  FULL_AT_TALAK_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/65/1/`
  // "আত তালাক"
  // "আত তাহরীম"
  FULL_AT_TAHRIM_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/66/1/`
  // "আত তাহরীম"
  // "আল মুল্ক্"
  FULL_AL_MULK_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/67/1/`
  FULL_AL_MULK_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/67/2/`
  // "আল মুল্ক্"
  // "আল কলম"
  FULL_AL_KOLAM_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/68/1/`
  FULL_AL_KOLAM_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/68/2/`
  FULL_AL_KOLAM_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/68/3/`
  // "আল কলম"
  // "আল হাককাহ"
  FULL_AL_HAKKO_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/69/1/`
  FULL_AL_HAKKO_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/69/2/`
  FULL_AL_HAKKO_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/69/3/`
  // "আল হাককাহ"
  // "আল মাআরিজ"
  FULL_AL_MARIJ_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/70/1/`
  FULL_AL_MARIJ_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/70/2/`
  FULL_AL_MARIJ_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/70/3/`
  // "আল মাআরিজ"
  // "নূহ"
  FULL_AN_NOH_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/71/1/`
  FULL_AN_NOH_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/71/2/`
  // "নূহ"
  //  "আল জিন"
  FULL_AL_JIN_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/72/1/`
  FULL_AL_JIN_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/72/2/`
  //  "আল জিন"
  //  "আল মুযযাম্মিল"
  FULL_AL_MUJJAMMIL_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/73/1/`
  //  "আল মুযযাম্মিল"
  //  "আল মুদ্দাস্সির"
  FULL_AL_MUDDACHIR_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/74/1/`
  FULL_AL_MUDDACHIR_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/74/2/`
  FULL_AL_MUDDACHIR_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/74/3/`
  //  "আল মুদ্দাস্সির"
  // "আল কিয়ামাহ"
  FULL_AL_QIYAMAH_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/75/1/`
  FULL_AL_QIYAMAH_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/75/2/`
  // "আল কিয়ামাহ"
  //  "আদ্ দাহর"
  FULL_AD_DAHOR_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/76/1/`
  FULL_AD_DAHOR_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/76/2/`
  //  "আদ্ দাহর"
  //  "আল মুরসালাত"
  FULL_AL_MURSALAT_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/77/1/`
  FULL_AL_MURSALAT_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/77/3/`
  FULL_AL_MURSALAT_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/77/4/`
  //  "আল মুরসালাত"
  // "আন নাবা"
  FULL_AN_NAVA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/78/1/`
  FULL_AN_NAVA_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/78/2/`
  // "আন নাবা"
  // "আন নাযি’আত"
  FULL_AN_NAJIYA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/79/1/`
  FULL_AN_NAJIYA_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/79/2/`
  FULL_AN_NAJIYA_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/79/3/`
  // "আন নাযি’আত"
  //  "আবাসা"
  FULL_ABACHA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/80/1/`
  FULL_ABACHA_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/80/2/`
  FULL_ABACHA_URLS_3 = `https://alquranbd.com/api/tafheem/suraData/80/3/`
  //  "আবাসা"
  // "আত তাকবীর"
  FULL_AT_TAKDIR_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/81/1/`
  FULL_AT_TAKDIR_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/81/2/`
  // "আত তাকবীর"
  // "আল ইনফিতার"
  FULL_AL_INFITAR_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/82/1/`
  // /"আল ইনফিতার"
  // "আল মুতাফ্ফিফীন"
  FULL_AL_MUTOFIFIN_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/83/1/`
  FULL_AL_MUTOFIFIN_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/83/2/`
  // "আল মুতাফ্ফিফীন"
  // "আল ইনশিকাক"
  FULL_AL_INFIKAR_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/84/1/`
  FULL_AL_INFIKAR_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/84/2/`
  // "আল ইনশিকাক"
  //  "আল বুরূজ"
  FULL_AL_BURUJ_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/85/1/`
  FULL_AL_BURUJ_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/85/2/`
  // / "আল বুরূজ"
  // "আত তারিক"
  FULL_AT_TARIF_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/86/1/`
  // "আত তারিক"
  // "আল আ’লা"
  FULL_AL_ALA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/87/1/`
  // "আল আ’লা"
  // আল গাশিয়াহ"
  FULL_AL_GASHIA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/88/1/`
  FULL_AL_GASHIA_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/88/2/`
  // আল গাশিয়াহ"
  // "আল ফজ্র"
  FULL_AL_FAJJ_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/89/1/`
  FULL_AL_FAJJ_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/89/2/`
  // "আল ফজ্র"
  //  "আল বালাদ"
  FULL_AL_BALAD_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/90/1/`
  //  "আল বালাদ"
  // "আশ শামস"
  FULL_AS_SAMCH_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/91/1/`
  // "আশ শামস"
  // "আল লাইল"
  FULL_AL_LYLE_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/92/1/`
  FULL_AL_LYLE_URLS_2 = `https://alquranbd.com/api/tafheem/suraData/92/2/`
  // "আল লাইল"
  // আদ দুহা"
  FULL_AD_DUHA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/93/1/`
  // আদ দুহা"
  //  "আলাম নাশরাহ"
  FULL_ALAM_NASRAH_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/94/1/`
  //  "আলাম নাশরাহ"
  // "আত তীন"
  FULL_AT_TIN_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/95/1/`
  // "আত তীন"
  // "আল আলাক"
  FULL_AL_ALAK_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/96/1/`
  // "আল আলাক"
  // "আল কাদ্\u200cর"
  FULL_AL_KADR_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/97/1/`
  // "আল কাদ্\u200cর"
  // "আল বাইয়েনাহ"
  FULL_AL_BAYNAH_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/98/1/`
  // "আল বাইয়েনাহ"
  // "আল যিলযাল"
  FULL_AL_JILJAL_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/99/1/`
  // "আল যিলযাল"
  // "আল আদিয়াত"
  FULL_AL_ADIYAT_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/100/1/`
  // "আল আদিয়াত"
  // "আল কারি’আহ"
  FULL_AL_KARIYA_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/101/1/`
  // "আল কারি’আহ"
  // "আত তাকাসুর"
  FULL_AT_TAKASUR_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/102/1/`
  // "আত তাকাসুর"
  // "আল আসর"
  FULL_AL_ASOR_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/103/1/`
  // "আল আসর"
  // "আল হুমাযা"
  FULL_AL_HUMJAH_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/104/1/`
  // "আল হুমাযা"
  // "আল ফীল"
  FULL_AL_FILL_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/105/1/`
  // "আল ফীল"
  // "কুরাইশ"
  FULL_KURAYS_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/106/1/`
  // "কুরাইশ"
  // "আল মাউন"
  FULL_AL_MAWN_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/107/1/`
  // "আল মাউন"
  // "আল কাউসার"
  FULL_AL_KAWSER_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/108/1/`
  // "আল কাউসার"
  // "আল কাফিরূন"
  FULL_AL_KAFIRUN_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/109/1/`
  // "আল কাফিরূন"
  // আন নসর"
  FULL_AN_NASOR_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/110/1/`
  // আন নসর"
  // "আল লাহাব"
  FULL_AL_LAHAB_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/111/1/`
  // "আল লাহাব"
  // "আল ইখলাস"
  FULL_AL_IKHLAS_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/112/1/`
  // "আল ইখলাস"
  // "আল ফালাক"
  FULL_AL_FALAK_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/113/1/`
  // "আল ফালাক"
  // "আন নাস"
  FULL_AL_NAS_URLS_1 = `https://alquranbd.com/api/tafheem/suraData/114/1/`
  // "আন নাস"
}
ALL_API_URL()

async function BAQARA() {
  await fetch(FULL_FATIHA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        // desc1.textContent+=JSON.parse(JSON.stringify(data))[key]['ayah_text'];
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          //   console.log(JSON.parse(JSON.stringify(data))[key]['bn'][i]['token_trans'])
          //   desc2.textContent+=JSON.parse(JSON.stringify(data))[key]['bn'][i]['token_trans']
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.fatiha1').textContent += ARABIC_SURAH
          document.querySelector('.fatiha2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BAQARA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]

          document.querySelector('.desc1').textContent += ARABIC_SURAH
          document.querySelector('.desc2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BAQARA_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.desc3').textContent += ARABIC_SURAH
          document.querySelector('.desc4').textContent += BANGLA_SURAH
        }
      }
    })

  await fetch(FULL_BAQARA_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]

          document.querySelector('.desc5').textContent += ARABIC_SURAH
          document.querySelector('.desc6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BAQARA_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.desc7').textContent += ARABIC_SURAH
          document.querySelector('.desc8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BAQARA_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.desc9').textContent += ARABIC_SURAH
          document.querySelector('.desc10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BAQARA_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.desc11').textContent += ARABIC_SURAH
          document.querySelector('.desc12').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BAQARA_URLS_7, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.desc13').textContent += ARABIC_SURAH
          document.querySelector('.desc14').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BAQARA_URLS_8, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.desc15').textContent += ARABIC_SURAH
          document.querySelector('.desc16').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BAQARA_URLS_9, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.desc17').textContent += ARABIC_SURAH
          document.querySelector('.desc18').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BAQARA_URLS_10, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.desc19').textContent += ARABIC_SURAH
          document.querySelector('.desc20').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BAQARA_URLS_11, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.desc21').textContent += ARABIC_SURAH
          document.querySelector('.desc22').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BAQARA_URLS_12, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.desc23').textContent += ARABIC_SURAH
          document.querySelector('.desc24').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BAQARA_URLS_13, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.desc25').textContent += ARABIC_SURAH
          document.querySelector('.desc26').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BAQARA_URLS_14, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.desc27').textContent += ARABIC_SURAH
          document.querySelector('.desc28').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BAQARA_URLS_15, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.desc29').textContent += ARABIC_SURAH
          document.querySelector('.desc30').textContent += BANGLA_SURAH
        }
      }
    })
}
BAQARA()
async function IMRAN() {
  await fetch(FULL_IMRAN_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.imran1').textContent += ARABIC_SURAH
          document.querySelector('.imran2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_IMRAN_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.imran3').textContent += ARABIC_SURAH
          document.querySelector('.imran4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_IMRAN_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.imran5').textContent += ARABIC_SURAH
          document.querySelector('.imran6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_IMRAN_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.imran7').textContent += ARABIC_SURAH
          document.querySelector('.imran8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_IMRAN_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.imran9').textContent += ARABIC_SURAH
          document.querySelector('.imran10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_IMRAN_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.imran11').textContent += ARABIC_SURAH
          document.querySelector('.imran12').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_IMRAN_URLS_7, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.imran13').textContent += ARABIC_SURAH
          document.querySelector('.imran14').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_IMRAN_URLS_8, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.imran15').textContent += ARABIC_SURAH
          document.querySelector('.imran16').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_IMRAN_URLS_9, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.imran17').textContent += ARABIC_SURAH
          document.querySelector('.imran18').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_IMRAN_URLS_10, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.imran19').textContent += ARABIC_SURAH
          document.querySelector('.imran20').textContent += BANGLA_SURAH
        }
      }
    })
}
IMRAN()
async function NISHA() {
  await fetch(FULL_NISHA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nisha1').textContent += ARABIC_SURAH
          document.querySelector('.nisha2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_NISHA_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nisha3').textContent += ARABIC_SURAH
          document.querySelector('.nisha4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_NISHA_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nisha5').textContent += ARABIC_SURAH
          document.querySelector('.nisha6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_NISHA_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nisha7').textContent += ARABIC_SURAH
          document.querySelector('.nisha8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_NISHA_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nisha9').textContent += ARABIC_SURAH
          document.querySelector('.nisha10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_NISHA_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nisha11').textContent += ARABIC_SURAH
          document.querySelector('.nisha12').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_NISHA_URLS_7, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nisha13').textContent += ARABIC_SURAH
          document.querySelector('.nisha14').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_NISHA_URLS_8, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nisha15').textContent += ARABIC_SURAH
          document.querySelector('.nisha16').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_NISHA_URLS_9, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nisha17').textContent += ARABIC_SURAH
          document.querySelector('.nisha18').textContent += BANGLA_SURAH
        }
      }
    })
}
NISHA()
async function MAYEDA() {
  await fetch(FULL_MAYDA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mayeda1').textContent += ARABIC_SURAH
          document.querySelector('.mayeda2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_MAYDA_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mayeda3').textContent += ARABIC_SURAH
          document.querySelector('.mayeda4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_MAYDA_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mayeda5').textContent += ARABIC_SURAH
          document.querySelector('.mayeda6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_MAYDA_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mayeda7').textContent += ARABIC_SURAH
          document.querySelector('.mayeda8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_MAYDA_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mayeda9').textContent += ARABIC_SURAH
          document.querySelector('.mayeda10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_MAYDA_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mayeda11').textContent += ARABIC_SURAH
          document.querySelector('.mayeda12').textContent += BANGLA_SURAH
        }
      }
    })
}
MAYEDA()
async function AL_AN_AM() {
  await fetch(FULL_AL_AN_AM_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_an_am1').textContent += ARABIC_SURAH
          document.querySelector('.al_an_am2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_AN_AM_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_an_am3').textContent += ARABIC_SURAH
          document.querySelector('.al_an_am4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_AN_AM_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_an_am5').textContent += ARABIC_SURAH
          document.querySelector('.al_an_am6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_AN_AM_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_an_am7').textContent += ARABIC_SURAH
          document.querySelector('.al_an_am8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_AN_AM_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_an_am9').textContent += ARABIC_SURAH
          document.querySelector('.al_an_am10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_AN_AM_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_an_am11').textContent += ARABIC_SURAH
          document.querySelector('.al_an_am12').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_AN_AM_URLS_7, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_an_am13').textContent += ARABIC_SURAH
          document.querySelector('.al_an_am14').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_AN_AM_URLS_8, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_an_am15').textContent += ARABIC_SURAH
          document.querySelector('.al_an_am16').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_AN_AM_URLS_9, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_an_am17').textContent += ARABIC_SURAH
          document.querySelector('.al_an_am18').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_AN_AM()
async function AL_ARAF() {
  await fetch(FULL_AL_ARAF_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_araf1').textContent += ARABIC_SURAH
          document.querySelector('.al_araf2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_ARAF_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_araf3').textContent += ARABIC_SURAH
          document.querySelector('.al_araf4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_ARAF_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_araf5').textContent += ARABIC_SURAH
          document.querySelector('.al_araf6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_ARAF_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_araf7').textContent += ARABIC_SURAH
          document.querySelector('.al_araf8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_ARAF_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_araf9').textContent += ARABIC_SURAH
          document.querySelector('.al_araf10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_ARAF_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_araf11').textContent += ARABIC_SURAH
          document.querySelector('.al_araf12').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_ARAF_URLS_7, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_araf13').textContent += ARABIC_SURAH
          document.querySelector('.al_araf14').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_ARAF_URLS_8, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_araf15').textContent += ARABIC_SURAH
          document.querySelector('.al_araf16').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_ARAF_URLS_9, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_araf17').textContent += ARABIC_SURAH
          document.querySelector('.al_araf18').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_ARAF_URLS_10, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_araf19').textContent += ARABIC_SURAH
          document.querySelector('.al_araf20').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_ARAF_URLS_11, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_araf21').textContent += ARABIC_SURAH
          document.querySelector('.al_araf22').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_ARAF()
async function AL_ANFAL() {
  await fetch(FULL_AL_ANFAL_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_anfal1').textContent += ARABIC_SURAH
          document.querySelector('.al_anfal2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_ANFAL_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_anfal3').textContent += ARABIC_SURAH
          document.querySelector('.al_anfal4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_ANFAL_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_anfal5').textContent += ARABIC_SURAH
          document.querySelector('.al_anfal6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_ANFAL_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_anfal7').textContent += ARABIC_SURAH
          document.querySelector('.al_anfal8').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_ANFAL()
async function AT_TOWBA() {
  await fetch(FULL_AT_TOWBA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.At_Tauba1').textContent += ARABIC_SURAH
          document.querySelector('.At_Tauba2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AT_TOWBA_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.At_Tauba3').textContent += ARABIC_SURAH
          document.querySelector('.At_Tauba4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AT_TOWBA_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.At_Tauba5').textContent += ARABIC_SURAH
          document.querySelector('.At_Tauba6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AT_TOWBA_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.At_Tauba7').textContent += ARABIC_SURAH
          document.querySelector('.At_Tauba8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AT_TOWBA_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.At_Tauba9').textContent += ARABIC_SURAH
          document.querySelector('.At_Tauba10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AT_TOWBA_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.At_Tauba11').textContent += ARABIC_SURAH
          document.querySelector('.At_Tauba12').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AT_TOWBA_URLS_7, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.At_Tauba13').textContent += ARABIC_SURAH
          document.querySelector('.At_Tauba14').textContent += BANGLA_SURAH
        }
      }
    })
}
AT_TOWBA()
async function AL_YUNUS() {
  await fetch(FULL_AL_YUNUS_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Yunus1').textContent += ARABIC_SURAH
          document.querySelector('.Yunus2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_YUNUS_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Yunus3').textContent += ARABIC_SURAH
          document.querySelector('.Yunus4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_YUNUS_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Yunus5').textContent += ARABIC_SURAH
          document.querySelector('.Yunus6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_YUNUS_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Yunus7').textContent += ARABIC_SURAH
          document.querySelector('.Yunus8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_YUNUS_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Yunus9').textContent += ARABIC_SURAH
          document.querySelector('.Yunus10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_YUNUS_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Yunus11').textContent += ARABIC_SURAH
          document.querySelector('.Yunus12').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_YUNUS()
async function Al_HOOD() {
  await fetch(FULL_HOOD_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hood1').textContent += ARABIC_SURAH
          document.querySelector('.hood2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_HOOD_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hood3').textContent += ARABIC_SURAH
          document.querySelector('.hood4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_HOOD_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hood5').textContent += ARABIC_SURAH
          document.querySelector('.hood6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_HOOD_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hood7').textContent += ARABIC_SURAH
          document.querySelector('.hood8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_HOOD_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hood9').textContent += ARABIC_SURAH
          document.querySelector('.hood10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_HOOD_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hood11').textContent += ARABIC_SURAH
          document.querySelector('.hood12').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_HOOD_URLS_7, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hood13').textContent += ARABIC_SURAH
          document.querySelector('.hood14').textContent += BANGLA_SURAH
        }
      }
    })
}
Al_HOOD()
async function AL_YUSUF() {
  await fetch(FULL_AL_YUSUF_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Yusuf1').textContent += ARABIC_SURAH
          document.querySelector('.Yusuf2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_YUSUF_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Yusuf3').textContent += ARABIC_SURAH
          document.querySelector('.Yusuf4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_YUSUF_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Yusuf5').textContent += ARABIC_SURAH
          document.querySelector('.Yusuf6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_YUSUF_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Yusuf7').textContent += ARABIC_SURAH
          document.querySelector('.Yusuf8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_YUSUF_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Yusuf9').textContent += ARABIC_SURAH
          document.querySelector('.Yusuf10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_YUSUF_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Yusuf11').textContent += ARABIC_SURAH
          document.querySelector('.Yusuf12').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_YUSUF()
async function AL_AROOD() {
  await fetch(FULL_AROOD_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.arod1').textContent += ARABIC_SURAH
          document.querySelector('.arod2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AROOD_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.arod3').textContent += ARABIC_SURAH
          document.querySelector('.arod4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AROOD_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.arod5').textContent += ARABIC_SURAH
          document.querySelector('.arod6').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_AROOD()
async function AL_IBRAHIM() {
  await fetch(FULL_IBRAHIM_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Ibrahim1').textContent += ARABIC_SURAH
          document.querySelector('.Ibrahim2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_IBRAHIM_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Ibrahim3').textContent += ARABIC_SURAH
          document.querySelector('.Ibrahim4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_IBRAHIM_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Ibrahim5').textContent += ARABIC_SURAH
          document.querySelector('.Ibrahim6').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_IBRAHIM()
async function AL_HIJR() {
  await fetch(FULL_AL_HIJR_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Al_Hijr1').textContent += ARABIC_SURAH
          document.querySelector('.Al_Hijr2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_HIJR_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Al_Hijr3').textContent += ARABIC_SURAH
          document.querySelector('.Al_Hijr4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_HIJR_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Al_Hijr5').textContent += ARABIC_SURAH
          document.querySelector('.Al_Hijr6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_HIJR_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Al_Hijr7').textContent += ARABIC_SURAH
          document.querySelector('.Al_Hijr8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_HIJR_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Al_Hijr9').textContent += ARABIC_SURAH
          document.querySelector('.Al_Hijr10').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_HIJR()
async function AN_NOH() {
  await fetch(FULL_AN_NOOH_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nooh1').textContent += ARABIC_SURAH
          document.querySelector('.nooh2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NOOH_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nooh3').textContent += ARABIC_SURAH
          document.querySelector('.nooh4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NOOH_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nooh5').textContent += ARABIC_SURAH
          document.querySelector('.nooh6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NOOH_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nooh7').textContent += ARABIC_SURAH
          document.querySelector('.nooh8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NOOH_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nooh9').textContent += ARABIC_SURAH
          document.querySelector('.nooh10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NOOH_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nooh11').textContent += ARABIC_SURAH
          document.querySelector('.nooh12').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NOOH_URLS_7, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nooh13').textContent += ARABIC_SURAH
          document.querySelector('.nooh14').textContent += BANGLA_SURAH
        }
      }
    })
}
AN_NOH()
async function AL_ISRAIL() {
  await fetch(FULL_BONY_ISRAIL_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.israil1').textContent += ARABIC_SURAH
          document.querySelector('.israil2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BONY_ISRAIL_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.israil3').textContent += ARABIC_SURAH
          document.querySelector('.israil4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BONY_ISRAIL_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.israil5').textContent += ARABIC_SURAH
          document.querySelector('.israil6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BONY_ISRAIL_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.israil7').textContent += ARABIC_SURAH
          document.querySelector('.israil8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BONY_ISRAIL_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.israil9').textContent += ARABIC_SURAH
          document.querySelector('.israil10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_BONY_ISRAIL_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.israil11').textContent += ARABIC_SURAH
          document.querySelector('.israil12').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_ISRAIL()
async function AL_KAAF() {
  await fetch(FULL_AL_KAAF_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_kaaf1').textContent += ARABIC_SURAH
          document.querySelector('.al_kaaf2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_KAAF_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_kaaf3').textContent += ARABIC_SURAH
          document.querySelector('.al_kaaf4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_KAAF_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_kaaf5').textContent += ARABIC_SURAH
          document.querySelector('.al_kaaf6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_KAAF_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_kaaf7').textContent += ARABIC_SURAH
          document.querySelector('.al_kaaf8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_KAAF_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_kaaf9').textContent += ARABIC_SURAH
          document.querySelector('.al_kaaf10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_KAAF_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.al_kaaf11').textContent += ARABIC_SURAH
          document.querySelector('.al_kaaf12').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_KAAF()

async function AL_MARIYAM() {
  await fetch(FULL_MARIYAM_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mariyam1').textContent += ARABIC_SURAH
          document.querySelector('.mariyam2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_MARIYAM_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mariyam3').textContent += ARABIC_SURAH
          document.querySelector('.mariyam4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_MARIYAM_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mariyam5').textContent += ARABIC_SURAH
          document.querySelector('.mariyam6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_MARIYAM_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mariyam7').textContent += ARABIC_SURAH
          document.querySelector('.mariyam8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_MARIYAM_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mariyam9').textContent += ARABIC_SURAH
          document.querySelector('.mariyam10').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_MARIYAM()

async function AL_TOHA() {
  await fetch(FULL_AT_TOHA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.toha1').textContent += ARABIC_SURAH
          document.querySelector('.toha2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AT_TOHA_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.toha3').textContent += ARABIC_SURAH
          document.querySelector('.toha4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AT_TOHA_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.toha5').textContent += ARABIC_SURAH
          document.querySelector('.toha6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AT_TOHA_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.toha7').textContent += ARABIC_SURAH
          document.querySelector('.toha8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AT_TOHA_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.toha9').textContent += ARABIC_SURAH
          document.querySelector('.toha10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AT_TOHA_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.toha11').textContent += ARABIC_SURAH
          document.querySelector('.toha12').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AT_TOHA_URLS_7, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.toha13').textContent += ARABIC_SURAH
          document.querySelector('.toha14').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_TOHA()
async function AL_AMBIYA() {
  await fetch(FULL_AL_AMBIYA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.ambiya1').textContent += ARABIC_SURAH
          document.querySelector('.ambiya2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_AMBIYA_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.ambiya3').textContent += ARABIC_SURAH
          document.querySelector('.ambiya4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_AMBIYA_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.ambiya5').textContent += ARABIC_SURAH
          document.querySelector('.ambiya6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_AMBIYA_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.ambiya7').textContent += ARABIC_SURAH
          document.querySelector('.ambiya8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_AMBIYA_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.ambiya9').textContent += ARABIC_SURAH
          document.querySelector('.ambiya10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_AMBIYA_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.ambiya11').textContent += ARABIC_SURAH
          document.querySelector('.ambiya12').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_AMBIYA()
async function AL_HAJJ() {
  await fetch(FULL_AL_HAJJ_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hajj1').textContent += ARABIC_SURAH
          document.querySelector('.hajj2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_HAJJ_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hajj3').textContent += ARABIC_SURAH
          document.querySelector('.hajj4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_HAJJ_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hajj5').textContent += ARABIC_SURAH
          document.querySelector('.hajj6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_HAJJ_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hajj7').textContent += ARABIC_SURAH
          document.querySelector('.hajj8').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_HAJJ()
async function AL_MOMIN() {
  await fetch(FULL_AL_MOMIN_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.momin1').textContent += ARABIC_SURAH
          document.querySelector('.momin2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MOMIN_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.momin3').textContent += ARABIC_SURAH
          document.querySelector('.momin4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MOMIN_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.momin5').textContent += ARABIC_SURAH
          document.querySelector('.momin6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MOMIN_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.momin7').textContent += ARABIC_SURAH
          document.querySelector('.momin8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MOMIN_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.momin9').textContent += ARABIC_SURAH
          document.querySelector('.momin10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MOMIN_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.momin11').textContent += ARABIC_SURAH
          document.querySelector('.momin12').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_MOMIN()
async function AN_NOOR() {
  await fetch(FULL_AN_NOOR_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.noor1').textContent += ARABIC_SURAH
          document.querySelector('.noor1').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NOOR_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.noor3').textContent += ARABIC_SURAH
          document.querySelector('.noor4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NOOR_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.noor5').textContent += ARABIC_SURAH
          document.querySelector('.noor6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NOOR_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.noor7').textContent += ARABIC_SURAH
          document.querySelector('.noor8').textContent += BANGLA_SURAH
        }
      }
    })
}
AN_NOOR()
async function AL_FORQON() {
  await fetch(FULL_AL_FORQON_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.forqan1').textContent += ARABIC_SURAH
          document.querySelector('.forqan2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_FORQON_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.forqan3').textContent += ARABIC_SURAH
          document.querySelector('.forqan4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_FORQON_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.forqan5').textContent += ARABIC_SURAH
          document.querySelector('.forqan6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_FORQON_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.forqan7').textContent += ARABIC_SURAH
          document.querySelector('.forqan8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_FORQON_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.forqan9').textContent += ARABIC_SURAH
          document.querySelector('.forqan10').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_FORQON()
async function AS_ARA() {
  await fetch(FULL_AS_ARA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.asara1').textContent += ARABIC_SURAH
          document.querySelector('.asara2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_ARA_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.asara3').textContent += ARABIC_SURAH
          document.querySelector('.asara4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_ARA_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.asara5').textContent += ARABIC_SURAH
          document.querySelector('.asara6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_ARA_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.asara7').textContent += ARABIC_SURAH
          document.querySelector('.asara8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_ARA_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.asara9').textContent += ARABIC_SURAH
          document.querySelector('.asara10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_ARA_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.asara11').textContent += ARABIC_SURAH
          document.querySelector('.asara12').textContent += BANGLA_SURAH
        }
      }
    })

  await fetch(FULL_AS_ARA_URLS_7, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.asara13').textContent += ARABIC_SURAH
          document.querySelector('.asara14').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_ARA_URLS_8, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.asara15').textContent += ARABIC_SURAH
          document.querySelector('.asara16').textContent += BANGLA_SURAH
        }
      }
    })

  await fetch(FULL_AS_ARA_URLS_9, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.asara17').textContent += ARABIC_SURAH
          document.querySelector('.asara18').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_ARA_URLS_10, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.asara19').textContent += ARABIC_SURAH
          document.querySelector('.asara20').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_ARA_URLS_11, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.asara21').textContent += ARABIC_SURAH
          document.querySelector('.asara22').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_ARA_URLS_12, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.asara23').textContent += ARABIC_SURAH
          document.querySelector('.asara24').textContent += BANGLA_SURAH
        }
      }
    })
}
AS_ARA()
async function AN_NAMOL() {
  await fetch(FULL_AN_NAMOL_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.namol1').textContent += ARABIC_SURAH
          document.querySelector('.namol2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NAMOL_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.namol3').textContent += ARABIC_SURAH
          document.querySelector('.namol4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NAMOL_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.namol5').textContent += ARABIC_SURAH
          document.querySelector('.namol6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NAMOL_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.namol7').textContent += ARABIC_SURAH
          document.querySelector('.namol8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NAMOL_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.namol9').textContent += ARABIC_SURAH
          document.querySelector('.namol10').textContent += BANGLA_SURAH
        }
      }
    })
}
AN_NAMOL()
async function AL_QASAS() {
  await fetch(FULL_AN_QASAS_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Qasas1').textContent += ARABIC_SURAH
          document.querySelector('.Qasas2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_QASAS_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Qasas3').textContent += ARABIC_SURAH
          document.querySelector('.Qasas4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_QASAS_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Qasas5').textContent += ARABIC_SURAH
          document.querySelector('.Qasas6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_QASAS_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Qasas7').textContent += ARABIC_SURAH
          document.querySelector('.Qasas8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_QASAS_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.Qasas9').textContent += ARABIC_SURAH
          document.querySelector('.Qasas10').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_QASAS()
async function AN_KABUT() {
  await fetch(FULL_AN_KABUT_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.kabut1').textContent += ARABIC_SURAH
          document.querySelector('.kabut2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_KABUT_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.kabut3').textContent += ARABIC_SURAH
          document.querySelector('.kabut4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_KABUT_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.kabut5').textContent += ARABIC_SURAH
          document.querySelector('.kabut6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_KABUT_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.kabut7').textContent += ARABIC_SURAH
          document.querySelector('.kabut8').textContent += BANGLA_SURAH
        }
      }
    })
}
AN_KABUT()
async function AL_ROOM() {
  await fetch(FULL_AL_ROOM_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.room1').textContent += ARABIC_SURAH
          document.querySelector('.room2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_ROOM_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.room3').textContent += ARABIC_SURAH
          document.querySelector('.room4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_ROOM_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.room5').textContent += ARABIC_SURAH
          document.querySelector('.room6').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_ROOM()
async function AL_LUKMAN() {
  await fetch(FULL_AL_LUKMAN_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.lukman1').textContent += ARABIC_SURAH
          document.querySelector('.lukman2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_LUKMAN_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.lukman3').textContent += ARABIC_SURAH
          document.querySelector('.lukman4').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_LUKMAN()
async function AS_SAJDAH() {
  await fetch(FULL_AS_SAJDHA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.sajda1').textContent += ARABIC_SURAH
          document.querySelector('.sajda2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_SAJDHA_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.sajda3').textContent += ARABIC_SURAH
          document.querySelector('.sajda4').textContent += BANGLA_SURAH
        }
      }
    })
}
AS_SAJDAH()
async function AH_JAAB() {
  await fetch(FULL_AH_JAAB_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jaab1').textContent += ARABIC_SURAH
          document.querySelector('.jaab2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AH_JAAB_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jaab3').textContent += ARABIC_SURAH
          document.querySelector('.jaab4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AH_JAAB_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jaab5').textContent += ARABIC_SURAH
          document.querySelector('.jaab6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AH_JAAB_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jaab7').textContent += ARABIC_SURAH
          document.querySelector('.jaab8').textContent += BANGLA_SURAH
        }
      }
    })
}
AH_JAAB()
async function AS_SABAH() {
  await fetch(FULL_AS_SABAH_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.sabah1').textContent += ARABIC_SURAH
          document.querySelector('.sabah2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_SABAH_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.sabah3').textContent += ARABIC_SURAH
          document.querySelector('.sabah4').textContent += BANGLA_SURAH
        }
      }
    })
}
AS_SABAH()
async function AL_FATER() {
  await fetch(FULL_AL_FATER_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.fater1').textContent += ARABIC_SURAH
          document.querySelector('.fate2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_FATER_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.fater3').textContent += ARABIC_SURAH
          document.querySelector('.fate4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_FATER_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.fater5').textContent += ARABIC_SURAH
          document.querySelector('.fate6').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_FATER()

async function AL_YEASIN() {
  await fetch(FULL_YEASIN_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.yeasin1').textContent += ARABIC_SURAH
          document.querySelector('.yeasin2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_YEASIN_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.yeasin3').textContent += ARABIC_SURAH
          document.querySelector('.yeasin4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_YEASIN_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.yeasin5').textContent += ARABIC_SURAH
          document.querySelector('.yeasin6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_YEASIN_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.yeasin7').textContent += ARABIC_SURAH
          document.querySelector('.yeasin8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_YEASIN_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.yeasin9').textContent += ARABIC_SURAH
          document.querySelector('.yeasin10').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_YEASIN()
async function AS_SOFFA() {
  await fetch(FULL_AS_SOFFA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.soffa1').textContent += ARABIC_SURAH
          document.querySelector('.soffa2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_SOFFA_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.soffa3').textContent += ARABIC_SURAH
          document.querySelector('.soffa4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_SOFFA_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.soffa5').textContent += ARABIC_SURAH
          document.querySelector('.soffa6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_SOFFA_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.soffa7').textContent += ARABIC_SURAH
          document.querySelector('.soffa8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_SOFFA_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.soffa9').textContent += ARABIC_SURAH
          document.querySelector('.soffa10').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_SOFFA_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.soffa11').textContent += ARABIC_SURAH
          document.querySelector('.soffa12').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_SOFFA_URLS_7, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.soffa13').textContent += ARABIC_SURAH
          document.querySelector('.soffa14').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_SOFFA_URLS_8, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.soffa15').textContent += ARABIC_SURAH
          document.querySelector('.soffa16').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_SOFFA_URLS_9, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.soffa17').textContent += ARABIC_SURAH
          document.querySelector('.soffa18').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_SOFFA_URLS_10, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.soffa19').textContent += ARABIC_SURAH
          document.querySelector('.soffa20').textContent += BANGLA_SURAH
        }
      }
    })
}
AS_SOFFA()
async function AS_SAAD() {
  await fetch(FULL_AS_SAAD_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.saad1').textContent += ARABIC_SURAH
          document.querySelector('.saad2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_SAAD_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.saad3').textContent += ARABIC_SURAH
          document.querySelector('.saad4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_SAAD_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.saad5').textContent += ARABIC_SURAH
          document.querySelector('.saad6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_SAAD_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.saad7').textContent += ARABIC_SURAH
          document.querySelector('.saad8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_SAAD_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.saad9').textContent += ARABIC_SURAH
          document.querySelector('.saad10').textContent += BANGLA_SURAH
        }
      }
    })
}
AS_SAAD()
async function JUMAR() {
  await fetch(FULL_JUMARO_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jumar1').textContent += ARABIC_SURAH
          document.querySelector('.jumar2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_JUMARO_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jumar3').textContent += ARABIC_SURAH
          document.querySelector('.jumar4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_JUMARO_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jumar5').textContent += ARABIC_SURAH
          document.querySelector('.jumar6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_JUMARO_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jumar7').textContent += ARABIC_SURAH
          document.querySelector('.jumar8').textContent += BANGLA_SURAH
        }
      }
    })
}
JUMAR()
async function AL_MOMINUN() {
  await fetch(FULL_AL_MOMINUN_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.muminun1').textContent += ARABIC_SURAH
          document.querySelector('.muminun2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MOMINUN_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.muminun3').textContent += ARABIC_SURAH
          document.querySelector('.muminun4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MOMINUN_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.muminun5').textContent += ARABIC_SURAH
          document.querySelector('.muminun6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MOMINUN_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.muminun7').textContent += ARABIC_SURAH
          document.querySelector('.muminun8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MOMINUN_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.muminun9').textContent += ARABIC_SURAH
          document.querySelector('.muminun10').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_MOMINUN()
async function HAMIM() {
  await fetch(FULL_HAAMIM_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hamim1').textContent += ARABIC_SURAH
          document.querySelector('.hamim2').textContent += BANGLA_SURAH
        }
      }
    })

  await fetch(FULL_HAAMIM_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hamim3').textContent += ARABIC_SURAH
          document.querySelector('.hamim4').textContent += BANGLA_SURAH
        }
      }
    })

  await fetch(FULL_HAAMIM_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hamim5').textContent += ARABIC_SURAH
          document.querySelector('.hamim6').textContent += BANGLA_SURAH
        }
      }
    })
}
HAMIM()
async function AS_SURAH() {
  await fetch(FULL_AS_SURAH_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.assurah1').textContent += ARABIC_SURAH
          document.querySelector('.assurah2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_SURAH_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.assurah3').textContent += ARABIC_SURAH
          document.querySelector('.assurah4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AS_SURAH_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.assurah5').textContent += ARABIC_SURAH
          document.querySelector('.assurah6').textContent += BANGLA_SURAH
        }
      }
    })
}
AS_SURAH()
async function AS_JUKHRUF() {
  await fetch(FULL_AJ_JUKHRUF_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jukhruf1').textContent += ARABIC_SURAH
          document.querySelector('.jukhruf2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AJ_JUKHRUF_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jukhruf3').textContent += ARABIC_SURAH
          document.querySelector('.jukhruf4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AJ_JUKHRUF_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jukhruf5').textContent += ARABIC_SURAH
          document.querySelector('.jukhruf6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AJ_JUKHRUF_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jukhruf7').textContent += ARABIC_SURAH
          document.querySelector('.jukhruf8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AJ_JUKHRUF_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jukhruf9').textContent += ARABIC_SURAH
          document.querySelector('.jukhruf10').textContent += BANGLA_SURAH
        }
      }
    })
}
AS_JUKHRUF()
async function AD_DUKHAN() {
  await fetch(FULL_AD_DUAKHAN_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.dukhan1').textContent += ARABIC_SURAH
          document.querySelector('.dukhan2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AD_DUAKHAN_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.dukhan3').textContent += ARABIC_SURAH
          document.querySelector('.dukhan4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AD_DUAKHAN_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.dukhan5').textContent += ARABIC_SURAH
          document.querySelector('.dukhan6').textContent += BANGLA_SURAH
        }
      }
    })
}
AD_DUKHAN()
async function AL_JASIYA() {
  await fetch(FULL_AL_JASIYA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jasiya1').textContent += ARABIC_SURAH
          document.querySelector('.jasiya2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_JASIYA_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jasiya3').textContent += ARABIC_SURAH
          document.querySelector('.jasiya4').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_JASIYA()
async function AH_KAAF() {
  await fetch(FULL_AL_AHKAF_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.ahkaaf1').textContent += ARABIC_SURAH
          document.querySelector('.ahkaaf2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_AHKAF_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.ahkaaf3').textContent += ARABIC_SURAH
          document.querySelector('.ahkaaf4').textContent += BANGLA_SURAH
        }
      }
    })
}
AH_KAAF()
async function AL_MOHAMMAD() {
  await fetch(FULL_MOHAMMAD_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mohammad1').textContent += ARABIC_SURAH
          document.querySelector('.mohammad2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_MOHAMMAD_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mohammad3').textContent += ARABIC_SURAH
          document.querySelector('.mohammad4').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_MOHAMMAD()
async function AL_FATAH() {
  await fetch(FULL_AL_FATAH_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.fatah1').textContent += ARABIC_SURAH
          document.querySelector('.fatah2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_FATAH_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.fatah3').textContent += ARABIC_SURAH
          document.querySelector('.fatah4').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_FATAH()
async function HUJURAH() {
  await fetch(FULL_AL_HUJURAH_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hujurah1').textContent += ARABIC_SURAH
          document.querySelector('.hujurah2').textContent += BANGLA_SURAH
        }
      }
    })
}
HUJURAH()
async function AL_QAAF() {
  await fetch(FULL_AL_QAAF_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.qaaf1').textContent += ARABIC_SURAH
          document.querySelector('.qaaf2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_QAAF_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.qaaf3').textContent += ARABIC_SURAH
          document.querySelector('.qaaf4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_QAAF_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.qaaf5').textContent += ARABIC_SURAH
          document.querySelector('.qaaf6').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_QAAF()
async function AL_JARIYA() {
  await fetch(FULL_AJ_JARIYA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jariya1').textContent += ARABIC_SURAH
          document.querySelector('.jariya2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AJ_JARIYA_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jariya3').textContent += ARABIC_SURAH
          document.querySelector('.jariya4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AJ_JARIYA_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jariya5').textContent += ARABIC_SURAH
          document.querySelector('.jariya6').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_JARIYA()
async function AT_TUR() {
  await fetch(FULL_AT_TUR_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.tur1').textContent += ARABIC_SURAH
          document.querySelector('.tur2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AT_TUR_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.tur3').textContent += ARABIC_SURAH
          document.querySelector('.tur4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AT_TUR_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.tur5').textContent += ARABIC_SURAH
          document.querySelector('.tur6').textContent += BANGLA_SURAH
        }
      }
    })
}
AT_TUR()
async function AN_NAMJ() {
  await fetch(FULL_AN_NAJM_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.namj1').textContent += ARABIC_SURAH
          document.querySelector('.namj2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NAJM_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.namj3').textContent += ARABIC_SURAH
          document.querySelector('.namj4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NAJM_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.namj5').textContent += ARABIC_SURAH
          document.querySelector('.namj6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NAJM_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.namj7').textContent += ARABIC_SURAH
          document.querySelector('.namj8').textContent += BANGLA_SURAH
        }
      }
    })
}
AN_NAMJ()
async function AL_KAMAR() {
  await fetch(FULL_AL_KAMAR_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.kamar1').textContent += ARABIC_SURAH
          document.querySelector('.kamar2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_KAMAR_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.kamar3').textContent += ARABIC_SURAH
          document.querySelector('.kamar5').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_KAMAR_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.kamar6').textContent += ARABIC_SURAH
          document.querySelector('.kamar7').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_KAMAR()
async function AR_ROHMAN() {
  await fetch(FULL_AR_RAHMAN_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.rohman1').textContent += ARABIC_SURAH
          document.querySelector('.rohman2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AR_RAHMAN_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.rohman3').textContent += ARABIC_SURAH
          document.querySelector('.rohman4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AR_RAHMAN_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.rohman5').textContent += ARABIC_SURAH
          document.querySelector('.rohman6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AR_RAHMAN_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.rohman7').textContent += ARABIC_SURAH
          document.querySelector('.rohman8').textContent += BANGLA_SURAH
        }
      }
    })
}
AR_ROHMAN()
async function AL_WOAKIYA() {
  await fetch(FULL_AL_WOAKIYA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.woakiya1').textContent += ARABIC_SURAH
          document.querySelector('.woakiya2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_WOAKIYA_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.woakiya3').textContent += ARABIC_SURAH
          document.querySelector('.woakiya4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_WOAKIYA_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.woakiya5').textContent += ARABIC_SURAH
          document.querySelector('.woakiya6').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_WOAKIYA_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.woakiya7').textContent += ARABIC_SURAH
          document.querySelector('.woakiya8').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_WOAKIYA_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.woakiya9').textContent += ARABIC_SURAH
          document.querySelector('.woakiya10').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_WOAKIYA()
async function AL_HADID() {
  await fetch(FULL_AL_HADID_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hadid1').textContent += ARABIC_SURAH
          document.querySelector('.hadid2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_HADID_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hadid3').textContent += ARABIC_SURAH
          document.querySelector('.hadid4').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_HADID()
async function AL_MUJADILA() {
  await fetch(FULL_AL_MOJADALAH_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mujadila1').textContent += ARABIC_SURAH
          document.querySelector('.mujadila2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MOJADALAH_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mujadila3').textContent += ARABIC_SURAH
          document.querySelector('.mujadila4').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_MUJADILA()
async function AL_HASOR() {
  await fetch(FULL_AL_HASOR_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hasor1').textContent += ARABIC_SURAH
          document.querySelector('.hasor2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_HASOR_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hasor3').textContent += ARABIC_SURAH
          document.querySelector('.hasor4').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_HASOR()
async function MUMTAHIN() {
  await fetch(FULL_LA_MOMTAHIN_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mumtahin1').textContent += ARABIC_SURAH
          document.querySelector('.mumtahin2').textContent += BANGLA_SURAH
        }
      }
    })
}
MUMTAHIN()
async function AS_SOFFA() {
  await fetch(FULL_AS_SOF_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.soffa1').textContent += ARABIC_SURAH
          document.querySelector('.soffa2').textContent += BANGLA_SURAH
        }
      }
    })
}
AS_SOFFA()
async function JUMIYA() {
  await fetch(FULL_AL_JUMYA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jumiya1').textContent += ARABIC_SURAH
          document.querySelector('.jumiya2').textContent += BANGLA_SURAH
        }
      }
    })
}
JUMIYA()
async function MUNAFIKUN() {
  await fetch(FULL_AL_MONAFIKUN_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.monafikun1').textContent += ARABIC_SURAH
          document.querySelector('.monafikun2').textContent += BANGLA_SURAH
        }
      }
    })
}
MUNAFIKUN()
async function AT_TAGOBUN() {
  await fetch(FULL_AT_TAGOBUN_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.tagobun1').textContent += ARABIC_SURAH
          document.querySelector('.tagobun2').textContent += BANGLA_SURAH
        }
      }
    })
}
AT_TAGOBUN()
async function AT_TALAK() {
  await fetch(FULL_AT_TALAK_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.talak1').textContent += ARABIC_SURAH
          document.querySelector('.talak2').textContent += BANGLA_SURAH
        }
      }
    })
}
AT_TALAK()
async function AT_TAHRIM() {
  await fetch(FULL_AT_TAHRIM_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.tahrim1').textContent += ARABIC_SURAH
          document.querySelector('.tahrim2').textContent += BANGLA_SURAH
        }
      }
    })
}
AT_TAHRIM()
async function AL_MULK() {
  await fetch(FULL_AL_MULK_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mulk1').textContent += ARABIC_SURAH
          document.querySelector('.mulk2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MULK_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mulk3').textContent += ARABIC_SURAH
          document.querySelector('.mulk4').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_MULK()
async function AL_KOLAM() {
  await fetch(FULL_AL_KOLAM_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.kolam1').textContent += ARABIC_SURAH
          document.querySelector('.kolam2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_KOLAM_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.kolam3').textContent += ARABIC_SURAH
          document.querySelector('.kolam4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_KOLAM_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.kolam5').textContent += ARABIC_SURAH
          document.querySelector('.kolam6').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_KOLAM()
async function AL_HAKKO() {
  await fetch(FULL_AL_HAKKO_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hakko1').textContent += ARABIC_SURAH
          document.querySelector('.hakko2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_HAKKO_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hakko3').textContent += ARABIC_SURAH
          document.querySelector('.hakko4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_HAKKO_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hakko5').textContent += ARABIC_SURAH
          document.querySelector('.hakko6').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_HAKKO()
async function AL_MARIJ() {
  await fetch(FULL_AL_MARIJ_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.marij1').textContent += ARABIC_SURAH
          document.querySelector('.marij2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MARIJ_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.marij3').textContent += ARABIC_SURAH
          document.querySelector('.marij4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MARIJ_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.marij5').textContent += ARABIC_SURAH
          document.querySelector('.marij6').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_MARIJ()
async function AN_NOOH() {
  await fetch(FULL_AN_NOH_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nooh1').textContent += ARABIC_SURAH
          document.querySelector('.nooh2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NOH_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nooh3').textContent += ARABIC_SURAH
          document.querySelector('.nooh4').textContent += BANGLA_SURAH
        }
      }
    })
}
AN_NOOH()
async function AL_JINN() {
  await fetch(FULL_AL_JIN_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jin1').textContent += ARABIC_SURAH
          document.querySelector('.jin2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_JIN_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jin3').textContent += ARABIC_SURAH
          document.querySelector('.jin4').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_JINN()
async function AL_MUJJAMMIL() {
  await fetch(FULL_AL_MUJJAMMIL_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mujjammil1').textContent += ARABIC_SURAH
          document.querySelector('.mujjammil2').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_MUJJAMMIL()
async function AL_MUDDACHIR() {
  await fetch(FULL_AL_MUDDACHIR_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mudaththir1').textContent += ARABIC_SURAH
          document.querySelector('.mudaththir2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MUDDACHIR_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mudaththir3').textContent += ARABIC_SURAH
          document.querySelector('.mudaththir4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MUDDACHIR_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mudaththir5').textContent += ARABIC_SURAH
          document.querySelector('.mudaththir6').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_MUDDACHIR()
async function AL_QIYAMA() {
  await fetch(FULL_AL_QIYAMAH_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.qiyama1').textContent += ARABIC_SURAH
          document.querySelector('.qiyama2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_QIYAMAH_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.qiyama3').textContent += ARABIC_SURAH
          document.querySelector('.qiyama4').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_QIYAMA()
async function AD_DAHOR() {
  await fetch(FULL_AD_DAHOR_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.dahor1').textContent += ARABIC_SURAH
          document.querySelector('.dahor2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AD_DAHOR_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.dahor3').textContent += ARABIC_SURAH
          document.querySelector('.dahor4').textContent += BANGLA_SURAH
        }
      }
    })
}
AD_DAHOR()
async function AL_MURSALAT() {
  await fetch(FULL_AL_MURSALAT_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mursalat1').textContent += ARABIC_SURAH
          document.querySelector('.mursalat2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MURSALAT_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mursalat3').textContent += ARABIC_SURAH
          document.querySelector('.mursalat4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MURSALAT_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mursalat5').textContent += ARABIC_SURAH
          document.querySelector('.mursalat6').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_MURSALAT()
async function AN_NAVA() {
  await fetch(FULL_AN_NAVA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nava1').textContent += ARABIC_SURAH
          document.querySelector('.nava2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NAVA_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nava3').textContent += ARABIC_SURAH
          document.querySelector('.nava4').textContent += BANGLA_SURAH
        }
      }
    })
}
AN_NAVA()
async function AN_NAJIYA() {
  await fetch(FULL_AN_NAJIYA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.najiya1').textContent += ARABIC_SURAH
          document.querySelector('.najiya2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NAJIYA_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.najiya3').textContent += ARABIC_SURAH
          document.querySelector('.najiya4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AN_NAJIYA_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.najiya5').textContent += ARABIC_SURAH
          document.querySelector('.najiya6').textContent += BANGLA_SURAH
        }
      }
    })
}
AN_NAJIYA()
async function AL_ABACHA() {
  await fetch(FULL_ABACHA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.abacha1').textContent += ARABIC_SURAH
          document.querySelector('.abacha2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_ABACHA_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.abacha3').textContent += ARABIC_SURAH
          document.querySelector('.abacha4').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_ABACHA_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.abacha5').textContent += ARABIC_SURAH
          document.querySelector('.abacha6').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_ABACHA()
async function AT_TAKDIR() {
  await fetch(FULL_AT_TAKDIR_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.takdir1').textContent += ARABIC_SURAH
          document.querySelector('.takdir2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AT_TAKDIR_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.takdir3').textContent += ARABIC_SURAH
          document.querySelector('.takdir4').textContent += BANGLA_SURAH
        }
      }
    })
}
AT_TAKDIR()
async function INFITAR() {
  await fetch(FULL_AL_INFITAR_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.infitar1').textContent += ARABIC_SURAH
          document.querySelector('.infitar2').textContent += BANGLA_SURAH
        }
      }
    })
}
INFITAR()
async function MUTOFIFIN() {
  await fetch(FULL_AL_MUTOFIFIN_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mutofifin1').textContent += ARABIC_SURAH
          document.querySelector('.mutofifin2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_MUTOFIFIN_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mutofifin3').textContent += ARABIC_SURAH
          document.querySelector('.mutofifin4').textContent += BANGLA_SURAH
        }
      }
    })
}
MUTOFIFIN()
async function INFIKAR() {
  await fetch(FULL_AL_INFIKAR_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.infikak1').textContent += ARABIC_SURAH
          document.querySelector('.infikak2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_INFIKAR_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.infikak3').textContent += ARABIC_SURAH
          document.querySelector('.infikak4').textContent += BANGLA_SURAH
        }
      }
    })
}
INFIKAR()
async function AL_BURUJ() {
  await fetch(FULL_AL_INFIKAR_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.buruj1').textContent += ARABIC_SURAH
          document.querySelector('.buruj2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_INFIKAR_URLS_22, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.buruj3').textContent += ARABIC_SURAH
          document.querySelector('.buruj4').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_BURUJ()
async function AT_TARIF() {
  await fetch(FULL_AT_TARIF_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.tarif1').textContent += ARABIC_SURAH
          document.querySelector('.tarif2').textContent += BANGLA_SURAH
        }
      }
    })
}
AT_TARIF()
async function AL_ALA() {
  await fetch(FULL_AL_ALA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.ala1').textContent += ARABIC_SURAH
          document.querySelector('.ala2').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_ALA()
async function AL_GASHIYA() {
  await fetch(FULL_AL_GASHIA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.gashiya1').textContent += ARABIC_SURAH
          document.querySelector('.gashiya2').textContent += BANGLA_SURAH
        }
      }
    })

  await fetch(FULL_AL_GASHIA_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.gashiya3').textContent += ARABIC_SURAH
          document.querySelector('.gashiya4').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_GASHIYA()
async function AL_FAAJ() {
  await fetch(FULL_AL_FAJJ_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.fajj1').textContent += ARABIC_SURAH
          document.querySelector('.fajj2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_FAJJ_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.fajj3').textContent += ARABIC_SURAH
          document.querySelector('.fajj4').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_FAAJ()
async function AL_BALAD() {
  await fetch(FULL_AL_BALAD_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.balad1').textContent += ARABIC_SURAH
          document.querySelector('.balad2').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_BALAD()
async function AS_SAMCE() {
  await fetch(FULL_AS_SAMCH_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.samc1').textContent += ARABIC_SURAH
          document.querySelector('.samc2').textContent += BANGLA_SURAH
        }
      }
    })
}
AS_SAMCE()

async function AL_LYLE() {
  await fetch(FULL_AL_LYLE_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.lyle1').textContent += ARABIC_SURAH
          document.querySelector('.lyle2').textContent += BANGLA_SURAH
        }
      }
    })
  await fetch(FULL_AL_LYLE_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.lyle3').textContent += ARABIC_SURAH
          document.querySelector('.lyle4').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_LYLE()
async function AD_DUHA() {
  await fetch(FULL_AD_DUHA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.duha1').textContent += ARABIC_SURAH
          document.querySelector('.duha2').textContent += BANGLA_SURAH
        }
      }
    })
}
AD_DUHA()
async function AN_NASRAH() {
  await fetch(FULL_ALAM_NASRAH_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.hasrah1').textContent += ARABIC_SURAH
          document.querySelector('.hasrah2').textContent += BANGLA_SURAH
        }
      }
    })
}
AN_NASRAH()
async function AT_TIN() {
  await fetch(FULL_AT_TIN_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.tin1').textContent += ARABIC_SURAH
          document.querySelector('.tin2').textContent += BANGLA_SURAH
        }
      }
    })
}
AT_TIN()
async function AL_ALAK() {
  await fetch(FULL_AL_ALAK_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.alak1').textContent += ARABIC_SURAH
          document.querySelector('.alak2').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_ALAK()
async function AL_BAYINA() {
  await fetch(FULL_AL_BAYNAH_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.baiyina1').textContent += ARABIC_SURAH
          document.querySelector('.baiyina2').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_BAYINA()
async function AL_JILJAL() {
  await fetch(FULL_AL_JILJAL_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.jiljal1').textContent += ARABIC_SURAH
          document.querySelector('.jiljal2').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_JILJAL()
async function AL_ADIYAT() {
  await fetch(FULL_AL_ADIYAT_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.adiyat1').textContent += ARABIC_SURAH
          document.querySelector('.adiyat2').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_ADIYAT()
async function AL_KARIA() {
  await fetch(FULL_AL_KARIYA_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.kariay1').textContent += ARABIC_SURAH
          document.querySelector('.kariay2').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_KARIA()
async function AT_TAKASUR() {
  await fetch(FULL_AT_TAKASUR_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.takasur1').textContent += ARABIC_SURAH
          document.querySelector('.takasur2').textContent += BANGLA_SURAH
        }
      }
    })
}
AT_TAKASUR()
async function AT_ASOR() {
  await fetch(FULL_AL_ASOR_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.asor1').textContent += ARABIC_SURAH
          document.querySelector('.asor2').textContent += BANGLA_SURAH
        }
      }
    })
}
AT_ASOR()
async function HUMAJA() {
  await fetch(FULL_AL_HUMJAH_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.humaja1').textContent += ARABIC_SURAH
          document.querySelector('.humaja2').textContent += BANGLA_SURAH
        }
      }
    })
}
HUMAJA()
async function AL_FILL() {
  await fetch(FULL_AL_FILL_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.fill1').textContent += ARABIC_SURAH
          document.querySelector('.fill2').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_FILL()
async function AL_KURAYS() {
  await fetch(FULL_KURAYS_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.kurays1').textContent += ARABIC_SURAH
          document.querySelector('.kurays2').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_KURAYS()
async function AL_MAWON() {
  await fetch(FULL_AL_MAWN_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.mawon1').textContent += ARABIC_SURAH
          document.querySelector('.mawon2').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_MAWON()
async function AL_KAWSER() {
  await fetch(FULL_AL_KAWSER_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.kawser1').textContent += ARABIC_SURAH
          document.querySelector('.kawser2').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_KAWSER()
async function AL_KAFIRUN() {
  await fetch(FULL_AL_KAFIRUN_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.kafirun1').textContent += ARABIC_SURAH
          document.querySelector('.kafirun2').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_KAFIRUN()
async function AN_NASOR() {
  await fetch(FULL_AN_NASOR_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.nasor1').textContent += ARABIC_SURAH
          document.querySelector('.nasor2').textContent += BANGLA_SURAH
        }
      }
    })
}
AN_NASOR()
async function LAHAB() {
  await fetch(FULL_AL_LAHAB_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.lahab1').textContent += ARABIC_SURAH
          document.querySelector('.lahab2').textContent += BANGLA_SURAH
        }
      }
    })
}
LAHAB()
async function AL_IKHLASS() {
  await fetch(FULL_AL_IKHLAS_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.ikhlas1').textContent += ARABIC_SURAH
          document.querySelector('.ikhlas2').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_IKHLASS()
async function AL_FALAK() {
  await fetch(FULL_AL_FALAK_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.falak1').textContent += ARABIC_SURAH
          document.querySelector('.falak2').textContent += BANGLA_SURAH
        }
      }
    })
}
AL_FALAK()
async function AN_NAAS() {
  await fetch(FULL_AL_NAS_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in JSON.parse(JSON.stringify(data))) {
        ARABIC_SURAH = JSON.parse(JSON.stringify(data))[key]['ayah_text']
        for (const i in JSON.parse(JSON.stringify(data))[key]['bn']) {
          BANGLA_SURAH = JSON.parse(JSON.stringify(data))[key]['bn'][i][
            'token_trans'
          ]
          document.querySelector('.naas1').textContent += ARABIC_SURAH
          document.querySelector('.naas2').textContent += BANGLA_SURAH
        }
      }
    })
}
AN_NAAS()
