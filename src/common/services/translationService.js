import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const translationsEn = {
    'LIVING COMPLEXES': 'LIVING COMPLEXES',
    'COMMERCES': 'COMMERCES',
    'SHOPPING CENTERS': 'SHOPPING CENTERS',
    'BUSINESS CENTERS': 'BUSINESS CENTERS',
    'commissioning date': 'commissioning date',
    'quater': 'quater',
    'status': 'status',
    'expected soon': 'expected soon',
    'Architects': 'Architects',
    'Upload more': 'Upload more',
    'residental complex': 'residental complex',
    'Alison Brooks': 'Alison Brooks',
    'Ella Logistics Center': 'Ella Logistics Center',
    '11 Stable Street, KingCross': '11 Stable Street, KingCross',
    'Atlas Building': 'Atlas Building',
    'Burlington': 'Burlington'
}

const translationsUa = {
    'LIVING COMPLEXES': 'ЖИТЛОВІ КОМПЛЕКСИ',
    'COMMERCES': 'КОМЕРЦІЯ',
    'SHOPPING CENTERS': 'ТОРГОВЕЛЬНІ ЦЕНТРИ',
    'BUSINESS CENTERS': 'ОФІСИ',
    'commissioning date': 'термін здачі',
    'quater': 'квартал',
    'status': 'статус',
    'expected soon': 'незабаром очікується',
    'Architects': 'Архітектор',
    'Upload more': 'Заваннтажити ще',
    'residental complex': 'ЖБК "Резиденція"',
    'Alison Brooks': 'Елісон Брукс',
    'Ella Logistics Center': 'Логістичний центр Елла',
    '11 Stable Street, KingCross': 'вул. Стейбл 11, Кінгс Крос',
    'Atlas Building': 'АТЛАС',
    'Burlington': 'БЕРЛІНГТОН'
}

const translationsRu = {
    'LIVING COMPLEXES': 'ЖЫЛЫЕ КОМПЛЕКСЫ',
    'COMMERCES': 'КОМЕРЦИЯ',
    'SHOPPING CENTERS': 'ТОРГОВЫЕ ЦЕНТРЫ',
    'BUSINESS CENTERS': 'ОФИСЫ',
    'commissioning date': 'срок здачи',
    'quater': 'квартал',
    'status': 'статус',
    'expected soon': 'вскоре ожидается',
    'Architects': 'Архитектор',
    'Upload more': 'Загрузить еще',
    'residental complex': 'ЖСК "Резиденцыя"',
    'Alison Brooks': 'Элисон Брукс',
    'Ella Logistics Center': 'Логистический центр Элла',
    '11 Stable Street, KingCross': 'ул. Стейбл 11, Кингс Крос',
    'Atlas Building': 'АТЛАС',
    'Burlington': 'БЕРЛИНГТОН'
}

i18n
    .use(initReactI18next)
    .init({
        resources: {
            'EN': { translation: translationsEn },
            'UA': { translation: translationsUa },
            'RU': { translation: translationsRu }
        },
        lng: 'UA',
        fallbackLng: 'UA',
        interpolation: { escapeValue: false }
    })

export const translator = i18n;