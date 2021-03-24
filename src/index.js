"use strict";

// Const
const SPEED_SWIPER = 3000;
const swiperNavigateNext = document.querySelector('.gallery-navigate__next');
const swiperNavigatePrev = document.querySelector('.gallery-navigate__prev');
const editionPrice = document.querySelector(".editions-left__container-price");
const editionsTop = document.querySelector(".editions-right__top");
const galleryInfo = document.querySelector(".gallery-left-info__more");
const galleryContainer = document.querySelector(".gallery .main-container");
const title = document.querySelector('.editions-left__title');
const listCategories = document.querySelector('.editions-left__category');
const listTitle = document.querySelector('.editions-left__category');
const gallerySwiper = document.querySelector(".gallery-right .swiper-container");
const galleryNavigation = document.querySelector(".gallery-right .gallery-navigate");
const burgerList = document.querySelector('.header-top__navigate');
const burger = document.querySelector('.header-top__burger');
const privateRoom = document.querySelector('.header-top__link');
const detailCategoties = document.createElement('details');
const summaryCategoties = document.createElement('summary');
const titleCheckbox = document.querySelector('.editions-left__category-title');
// Секции на сайте
const aboutContainer = document.querySelector('.company');
const gallerysContainer = document.querySelector('.gallery');
const catalogContainer = document.querySelector('.catalog');
const eventsContainer = document.querySelector('.events');
const editionsContainer = document.querySelector('.editions');
const projectsContainer = document.querySelector('.projects');
const contactsContainer = document.querySelector('.contacts');
const heroButton = document.querySelector('.hero__button');
const titleContacts = document.querySelector('.contacts-left__title');
const addresContacrs = document.querySelector('.contacts__adress');
if (document.documentElement.clientWidth > 1024) {
    titleContacts.innerHTML = 'Шоурум №4';
    addresContacrs.innerHTML = 'Леонтьевский переулок, дом 5, строение 1';
} else {
    titleContacts.innerHTML = 'Шоурум №2';
    addresContacrs.innerHTML = 'Покровский бульвар, дом 24, строение 3';
}
// Контейнер со всеми секциями на сайте
const arrayContent = [aboutContainer, gallerysContainer, catalogContainer, eventsContainer, editionsContainer, projectsContainer, contactsContainer];
// Список всех ссылок для перемещения по сайту
const arrayLink = document.querySelectorAll('.header-top__item');
// Селектор
const selectAvtor = document.querySelector('.gallery-filter');
// Списки с художниками
const ARTISTS__LIST = {
        1400: document.querySelector('.catalog-accordion__list[data-years="1400-1499"]'),
        1500: document.querySelector('.catalog-accordion__list[data-years="1500-1599"]'),
        1600: document.querySelector('.catalog-accordion__list[data-years="1600-1699"]'),
        1700: document.querySelector('.catalog-accordion__list[data-years="1700-1799"]'),
        1800: document.querySelector('.catalog-accordion__list[data-years="1800-1899"]'),
        1900: document.querySelector('.catalog-accordion__list[data-years="1900-1999"]'),
        2000: document.querySelector('.catalog-accordion__list[data-years="2000"]'),
    }
    // Художники
const ARTISTS = {
        Franch: {
            1400: [
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
                'Test1400__Franch',
            ],
            1500: [],
            1600: [],
            1700: [],
            1800: [],
            1900: [],
            2000: [],
        },
        Germani: {
            1400: [
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
                'Test1400__Germani',
            ],
            1500: [],
            1600: [],
            1700: [],
            1800: [],
            1900: [],
            2000: [],
        },
        Italy: {
            1400: [
                'Бенедетто ди Биндо',
                'Бергоньоне, Амброджо',
                'Биссоло, Франческо',
                'Больтраффио, Джованни',
                'Бонсиньори, Франческо',
                'Боттичини, Рафаэлло',
                'Брамантино',
                'Бреа, Людовико',
                'Бьяджо д’Антонио Туччи',
                'Веккьетта',
                'Андреа Верроккьо',
                'Доменико Гирландайо',
                'Беноццо Гоццоли',
                'Граначчи, Франческо',
                'Грегорио ди Чекко',
                'Джованни да Удине',
                'Джованни ди Паоло',
                'Джорджоне',
                'Парентино, Бернардо',
                'Пезеллино',
                'Пьетро Перуджино',
                'Перуцци, Бальдассаре',
                'Пизанелло',
                'Пинтуриккьо',

            ],
            1500: [],
            1600: [],
            1700: [],
            1800: [],
            1900: [],
            2000: [],
        },
        Russia: {
            1400: [
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
                'Test1400__Rissia',
            ],
            1500: [],
            1600: [],
            1700: [],
            1800: [],
            1900: [],
            2000: [],
        },
        Belgium: {
            1400: [
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
                'Test1400__Belgium',
            ],
            1500: [],
            1600: [],
            1700: [],
            1800: [],
            1900: [],
            2000: [],
        },
    }
    // Стили для иконок аккордиона
const icons = {
    header: "myIcon-1",
    headerSelected: "myIcon-2"
};

//----------------------------------------------------------------------------------
// Функции

// Функия, скрывающая все элементы по классу
function hideElements(elements) {
    document.querySelectorAll(elements).forEach((element) => {
        $(element).hide();
    });
}
// Прокрутка контента
function scrollContent(content) {
    let coin = setInterval(() => {
        if (content.getBoundingClientRect().top > 0) {
            window.scrollBy(0, 5);
        } else {
            clearInterval(coin);
        }
    }, 1)
}
const arrayArtistsLinks = [];
// Реализация смены имени
function artistInfo() {
    const artistLinks = document.querySelectorAll('.catalog-accordion__button');
    const artistName = document.querySelector('.catalog-column-left__name');

    artistLinks.forEach((element, index) => {
        arrayArtistsLinks.push(element);
        if (index === 0) {
            // Даем первому элементу фокус и присваим имя автора
            artistName.innerHTML = element.innerHTML;
            element.classList.add('catalog-accordion__button--state--active');
        }
        element.addEventListener('click', (ev) => {
            ev.preventDefault();
            arrayArtistsLinks.forEach((element) => {
                element.className = "catalog-accordion__button";
            })
            element.classList.add('catalog-accordion__button--state--active');
            const {innerHTML: name} = ev.target;
            artistName.innerHTML = name;
        });
    });
}
// Функции для работы с аккордеоном
function clearLists(lists) {
    lists[1400].innerHTML = '';
    lists[1500].innerHTML = '';
    lists[1600].innerHTML = '';
    lists[1700].innerHTML = '';
    lists[1800].innerHTML = '';
    lists[1900].innerHTML = '';
    lists[2000].innerHTML = '';
}

let addList = false;

function deleteClassFromAnItem (className, element) {
    element.classList.remove(className);
}
// При фокусе удалять класс
document.querySelectorAll('.catalog-country__button').forEach((el) => {
    el.addEventListener('focus', (ev) => {
        createListArtists(ev.target.dataset.country);
    })
})

function createListArtists(country, lists = ARTISTS__LIST, artists = ARTISTS) {
    const tab = `.catalog-country__button[data-country="${country}"]`;
    document.querySelectorAll('.catalog-country__button').forEach((element) => {
        deleteClassFromAnItem('catalog-country__button--state-active', element);
    })
    document.querySelector(tab).classList.add('catalog-country__button--state-active')
    // Очищаем все листы
    clearLists(lists);
    // Помещаем объект с массивами по годам в переменную
    const objectYears = artists[country];
    // Делаем массив значений из объекта годов
    const arrayYears = Object.values(objectYears);
    // Массив списков по годам
    const listsYears = Object.values(lists);
    // Проходимся по каждому году
    for (let i = 0; i < arrayYears.length; i++) {
        // Проходимся по каждому массиву в каждом годе
        for (let k = 0; k < arrayYears[i].length; k++) {
            const listItem = document.createElement('li');
            listItem.classList.add('catalog-accordion__item');
            const listButton = document.createElement('button');
            listButton.classList.add('catalog-accordion__button');
            listButton.innerHTML = arrayYears[i][k];
            listItem.append(listButton);
            listsYears[i].append(listItem);
        }
    }
    artistInfo();
    $("#catalog-accordion").accordion("refresh");
}
//----------------------------------------------------------------------------------
// Неопределенные значения

let swiperGallery, swiperEditions, swiperProjects, swiperEvents, choicesAvtor = null;

//----------------------------------------------------------------------------------
// Основные вычесления

swiperNavigatePrev.addEventListener('click', () => {
    if (swiperNavigateNext.hasAttribute('disabled')) {
        swiperNavigateNext.removeAttribute('disabled');
    }
})
swiperNavigateNext.addEventListener('click', () => {
    setTimeout(() => {
        if (swiperGallery.isEnd) {
            swiperNavigateNext.setAttribute('disabled', true);
        }
    }, 1000)
});

console.log(document.documentElement.clientWidth);

function sliderSizes (ev) {
    if (document.documentElement.clientWidth <= 1200 && document.documentElement.clientWidth > 992) {
        editionsTop.append(editionPrice);
        // Галерея
        swiperGallery = new Swiper('.gallery-right .swiper-container', {
            speed: SPEED_SWIPER,
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
            slidesPerColumn: 2,
            navigation: {
                nextEl: '.gallery-navigate__next',
                prevEl: '.gallery-navigate__prev',
            },
            pagination: {
                el: '.gallery-navigate__pagination',
                type: 'fraction',
            },
        });
        // Издание
        swiperEditions = new Swiper('.editions-right .swiper-container', {
            speed: SPEED_SWIPER,
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
            loop: true,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: '.editions-navigate__next',
                prevEl: '.editions-navigate__prev',
            },
            pagination: {
                el: '.editions-navigate__pagination',
                type: 'fraction',
            },
        });
        // Проекты
        swiperProjects = new Swiper('.projects .swiper-container', {
            speed: SPEED_SWIPER,
            slidesPerView: 2,
            spaceBetween: 60,
            navigation: {
                nextEl: '.projects__swiper-next',
                prevEl: '.projects__swiper-prev',
            },
        });
    }
    else if (document.documentElement.clientWidth > 1440) {
        // Галерея
        swiperGallery = new Swiper('.gallery-right .swiper-container', {
            speed: SPEED_SWIPER,
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
            slidesPerColumn: 2,
            navigation: {
                nextEl: '.gallery-navigate__next',
                prevEl: '.gallery-navigate__prev',
            },
            pagination: {
                el: '.gallery-navigate__pagination',
                type: 'fraction',
            },
        });
        // Издание
        swiperEditions = new Swiper('.editions-right .swiper-container', {
            speed: SPEED_SWIPER,
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 25,
            loop: true,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: '.editions-navigate__next',
                prevEl: '.editions-navigate__prev',
            },
            pagination: {
                el: '.editions-navigate__pagination',
                type: 'fraction',
            },
        });
        // Проекты
        swiperProjects = new Swiper('.projects .swiper-container', {
            speed: SPEED_SWIPER,
            slidesPerView: 3,
            spaceBetween: 60,
            navigation: {
                nextEl: '.projects__swiper-next',
                prevEl: '.projects__swiper-prev',
            },
        });
    }
    else if (document.documentElement.clientWidth <= 992 && document.documentElement.clientWidth > 700) {
        galleryContainer.append(galleryInfo);
        // Галерея
        swiperGallery = new Swiper('.gallery-right .swiper-container', {
            speed: SPEED_SWIPER,
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
            slidesPerColumn: 2,
            navigation: {
                nextEl: '.gallery-navigate__next',
                prevEl: '.gallery-navigate__prev',
            },
            pagination: {
                el: '.gallery-navigate__pagination',
                type: 'fraction',
            },
        });
        // Издание
        swiperEditions = new Swiper('.editions-right .swiper-container', {
            speed: SPEED_SWIPER,
            slidesPerView: 2,
            slidesPerGroup: 2,
            loop: true,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: '.editions-navigate__next',
                prevEl: '.editions-navigate__prev',
            },
            pagination: {
                el: '.editions-navigate__pagination',
                type: 'fraction',
            },
        });
        // Проекты
        swiperProjects = new Swiper('.projects .swiper-container', {
            speed: SPEED_SWIPER,
            slidesPerView: 2,
            spaceBetween: 40,
            navigation: {
                nextEl: '.projects__swiper-next',
                prevEl: '.projects__swiper-prev',
            },
        });
    }
    else if (document.documentElement.clientWidth <= 700) {
        galleryContainer.append(galleryInfo);
        // Галерея
        swiperGallery = new Swiper('.gallery-right .swiper-container', {
            speed: SPEED_SWIPER,
            navigation: {
                nextEl: '.gallery-navigate__next',
                prevEl: '.gallery-navigate__prev',
            },
            pagination: {
                el: '.gallery-navigate__pagination',
                type: 'fraction',
            },
        });
        galleryNavigation.before(gallerySwiper);

        swiperEvents = new Swiper('.events .swiper-container', {
            speed: SPEED_SWIPER,
            pagination: {
                el: '.events__pagination',
            },
        });
        // Проекты
        swiperProjects = new Swiper('.projects .swiper-container', {
            speed: SPEED_SWIPER,
            navigation: {
                nextEl: '.projects__swiper-next',
                prevEl: '.projects__swiper-prev',
            },
        });

        detailCategoties.classList.add('editions-left__details');
        summaryCategoties.classList.add('editions-left__summary');
        summaryCategoties.append(titleCheckbox);
        summaryCategoties.append(listTitle);
        detailCategoties.append(summaryCategoties);
        detailCategoties.append(listCategories);
        title.after(detailCategoties);
    }
    else if (document.documentElement.clientWidth <= 1440 && document.documentElement.clientWidth > 1024) {
        // Галерея
        swiperGallery = new Swiper('.gallery-right .swiper-container', {
            speed: SPEED_SWIPER,
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
            slidesPerColumn: 2,
            navigation: {
                nextEl: '.gallery-navigate__next',
                prevEl: '.gallery-navigate__prev',
            },
            pagination: {
                el: '.gallery-navigate__pagination',
                type: 'fraction',
            },
        });
        // Издание
        swiperEditions = new Swiper('.editions-right .swiper-container', {
            speed: SPEED_SWIPER,
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
            loop: true,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: '.editions-navigate__next',
                prevEl: '.editions-navigate__prev',
            },
            pagination: {
                el: '.editions-navigate__pagination',
                type: 'fraction',
            },
        });
        // Проекты
        swiperProjects = new Swiper('.projects .swiper-container', {
            speed: SPEED_SWIPER,
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.projects__swiper-next',
                prevEl: '.projects__swiper-prev',
            },
        });
    }
    if (document.documentElement.clientWidth <= 1200) {
        burgerList.append(privateRoom);
        burger.after(burgerList);
        burger.addEventListener('click', () => {
            burger.classList.toggle('header-top__burger--active');
        })
    }
}

// window.addEventListener(`resize`, sliderSizes, false);

sliderSizes();

//----------------------------------------------------------------------------------
// Header-bottom

document.body.addEventListener('click', (ev) => {
    if (ev.target.className === 'directions-list__button' || ev.target.className === 'dropdawn__list' || ev.target.className === 'dropdawn__item') {
        return;
    } else {
        hideElements('.dropdawn__list');
    }
})

// При загрузке скрываем все списки
hideElements('.dropdawn__list');
// Делаем фон из свойства элемента списка
document.querySelectorAll(`.dropdawn__item`).forEach((element) => {
    element.style.background = element.dataset.url;
});
// Показывем конкретный список
document.querySelectorAll('.directions-list__button').forEach((element) => {
    element.addEventListener('click', (ev) => {
        hideElements('.dropdawn__list');
        const numberList = Number(ev.target.dataset.target);
        $(document.querySelector(`.dropdawn__list[data-target="${numberList}"]`)).show();
    });
});
// При выборе конкретного художника закрываем список
document.querySelectorAll('.dropdawn__list').forEach((element) => {
    element.addEventListener('click', () => {})
})

//----------------------------------------------------------------------------------
// Перемещение по сайту

heroButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    scrollContent(contactsContainer);
});
for (let i = 0; i < arrayLink.length; i++) {
    arrayLink[i].addEventListener('click', () => {
        scrollContent(arrayContent[i]);
    })
}

//----------------------------------------------------------------------------------
// Селектор в секции гелереи

// Создание стиля для селектора
choicesAvtor = new Choices(selectAvtor, {
    searchEnabled: false,
    itemSelectText: '',
});

function updateChoiceInfo(ev = null) {
    setTimeout(() => {
        const singleCase = document.querySelector(".choices__list--single .choices__item");
        const arrayChoices = document.querySelectorAll(".choices__list--dropdown .choices__item");
        let nameAtttibute = ev ? ev.detail.choice.value : singleCase.getAttribute('data-value');
        arrayChoices.forEach((element) => {
            if (element.getAttribute('data-value') == nameAtttibute) {
                element.style.display = "none";
            } else {
                element.style.display = "flex";
            }
        })
    }, 1)
}

updateChoiceInfo();

selectAvtor.addEventListener('choice', updateChoiceInfo)

//----------------------------------------------------------------------------------
// Каталог

artistInfo();

//----------------------------------------------------------------------------------
// Реализация аккордиона

// Назначение аккордиона
$("#catalog-accordion").accordion({
    // Повторный клик по вкладке закрывает ее
    collapsible: true,
    // Иконки 
    icons: icons,
});

// Определяем стартовый список аккордиона
createListArtists("Italy");

// Массив со всеми ссылка на табы
const caseLinksTabs = [];

// Табы
document.querySelectorAll('.catalog-country__button').forEach((element) => {
    // Ставим обработчик событий на каждую таб
    element.addEventListener('click', (ev) => {
        ev.preventDefault();
        const countryObject = element.dataset.country;
        createListArtists(countryObject);
    });
    // Добавляем все табы в массив
    caseLinksTabs.push(element);
});

//----------------------------------------------------------------------------------
// Работа с карточками событий

// Лист с картчоками
const eventsList = document.querySelector(".events__list");
// Кнопка, открывающая весь список
const eventsButton = document.querySelector(".events__button");
// Добавляем обработчик событий на кнопку
eventsButton.addEventListener("click", (ev) => {
    ev.preventDefault();
    eventsList.style.height = "100%";
    eventsList.style.maxHeight = "100%";
    eventsButton.remove();
    }
)

//----------------------------------------------------------------------------------
// Работа с тултипами

tippy('.project__tooltip_number_1', {
    content: 'Пример современных тенденций - современная методология разработки',
    theme: 'greay',
    trigger: 'mouseenter focus click',
});
tippy('.project__tooltip_number_2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    theme: 'greay',
    trigger: 'mouseenter focus click',
});
tippy('.project__tooltip_number_3', {
    content: 'В стремлении повысить качество',
    theme: 'greay',
    trigger: 'mouseenter focus click',
});

//----------------------------------------------------------------------------------
//Карта

ymaps.ready(init);

function init() {
    const myMap = new ymaps.Map('map', {
        center: [55.758463, 37.601079],
        zoom: 15,
        controls: []
    });
    // Марка на карте
    const mark = new ymaps.Placemark(myMap.getCenter(), {}, {
        iconLayout: 'default#image',
        // Ссылка на мое изображение
        iconImageHref: './svg/map__mark.svg',
        // Размеры значка
        iconImageSize: [20, 20],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0]
    })
    myMap.geoObjects.add(mark);
}

if (document.documentElement.clientWidth <= 700) {
    const contactsTitleForm = document.querySelector('.contacts__title-form');
    const contactsForm = document.querySelector('.contacts__form ');
    const network = document.querySelector('.network');
    const map = document.getElementById('map');
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    mainContainer.append(contactsTitleForm);
    mainContainer.append(contactsForm);
    mainContainer.append(network);
    map.after(mainContainer);
}