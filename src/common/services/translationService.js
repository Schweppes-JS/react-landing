import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const translationsEn = {
    'commissioning date': 'commissioning date',
    'quater': 'quater',
    'status': 'status',
    'expected soon': 'expected soon',
    'Architects': 'Architects',
    'Upload more': 'Upload more',
    'Description of': 'Description of',
    'main stones': 'Main stones',
    'See all': 'See all',
}

const translationsUa = {
    'commissioning date': 'термін здачі',
    'quater': 'квартал',
    'status': 'статус',
    'expected soon': 'незабаром очікується',
    'Architects': 'Архітектор',
    'Upload more': 'Заваннтажити ще',
    'Description of': 'Опис',
    'main stones': 'Головні переваги',
    'See all': 'переглянути всі',
}

const translationsRu = {
    'commissioning date': 'срок здачи',
    'quater': 'квартал',
    'status': 'статус',
    'expected soon': 'вскоре ожидается',
    'Architects': 'Архитектор',
    'Upload more': 'Загрузить еще',
    'Description of': 'Описание',
    'main stones': 'Главные преимущества',
    'See all': 'просмотреть все',
}

i18n
    .use(initReactI18next)
    .init({
        resources: {
            'en': { translation: translationsEn },
            'ua': { translation: translationsUa },
            'ru': { translation: translationsRu }
        },
        lng: 'ua',
        fallbackLng: 'ua',
        interpolation: { escapeValue: false }
    })

export const translator = i18n