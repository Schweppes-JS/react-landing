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
    'rezidenncija': 'residental-complex',
    'rezydenciya': 'residental-complex',
    'Alison Brooks': 'Alison Brooks',
    'Ella Logistics Center': 'Ella Logistics Center',
    '11 Stable Street, KingCross': '11 Stable Street, KingCross',
    'Atlas Building': 'Atlas Building',
    'Burlington': 'Burlington',
    'residental-complex': 'residental-complex',
    'ella-logistics-center': 'ella-logistics-center',
    'lohistychnyy-center-ella': 'ella-logistics-center',
    'logisticheskiy-center-ella': 'ella-logistics-center',
    'atlas-building': 'atlas-building',
    'atlas-bud': 'atlas-building',
    'atlas': 'atlas-building',
    'burlington': 'burlington',
    'berlington': 'burlington',
    'berlinhton': 'burlington',
    'Description of': 'Description of',
    'main stones': 'Main stones',
    'hour concierge': 'hour concierge',
    'acres of public realm': 'acres of public realm',
    'swimming pool overlooking the South Dock': 'swimming pool overlooking the South Dock',
    'high spec bathroom': 'high spec bathroom',
    'homes': 'homes',
    'population': 'population',
    'See all': 'See all'
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
    'Burlington': 'БЕРЛІНГТОН',
    'residental-complex': 'rezydenciya',
    'rezidenncija': 'rezydenciya',
    'ella-logistics-center': 'lohistychnyy-center-ella',
    'logisticheskiy-center-ella': 'lohistychnyy-center-ella',
    'atlas-building': 'atlas-bud',
    'atlas-bud': 'atlas-bud',
    'atlas': 'atlas-bud',
    'berlington': 'berlinhton',
    'burlington': 'berlinhton',
    'Description of': 'Опис',
    'main stones': 'Головні переваги',
    'hour concierge': "цілодобовий консьєрж",
    'acres of public realm': 'акрів громадського простору',
    'swimming pool overlooking the South Dock': 'басейн з видом на Південний Док',
    'high spec bathroom': 'ванна кімната з високими технічними характеристиками',
    'homes': 'будинків',
    'population': 'населення',
    'See all': 'переглянути всі'
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
    'Burlington': 'БЕРЛИНГТОН',
    'residental-complex': 'rezidenncija',
    'rezydenciya': 'rezidenncija',
    'ella-logistics-center': 'logisticheskiy-center-ella',
    'lohistychnyy-center-ella': 'logisticheskiy-center-ella',
    'atlas-building': 'atlas',
    'atlas-bud': 'atlas',
    'atlas': 'atlas-building',
    'burlington': 'berlington',
    'berlinhton': 'berlington',
    'Description of': 'Описание',
    'main stones': 'Главные преимущества',
    'hour concierge': "круглосуточный консьерж",
    'acres of public realm': 'акры публичного пространства',
    'swimming pool overlooking the South Dock': 'бассейн с видом на Южный Док',
    'high spec bathroom': 'ванная комната с высокими техническими характеристиками',
    'homes': 'домов',
    'population': 'население',
    'See all': 'просмотреть все'
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


const translationsUrl = {
    'rezydenciya': 'residental-complex',
    'rezidenncija': 'residental-complex',
    'residental-complex': 'residental-complex',
    'logisticheskiy-center-ella': 'ella-logistics-center',
    'lohistychnyy-center-ella': 'ella-logistics-center',
    'ella-logistics-center': 'ella-logistics-center',
    'atlas': 'atlas-building',
    'atlas-building': 'atlas-building',
    'atlas-bud': 'atlas-building',
    'berlington': 'burlington',
    'berlinhton': 'burlington',
    'burlington': 'burlington'
}

export const urlTransation = (key) => {
    return translationsUrl[key]
}