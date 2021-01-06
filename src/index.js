"use strict";

const editionPrice = document.querySelector(".editions-left__priceContainer");
const editionsTop = document.querySelector(".editions-right__top");
const galleryInfo = document.querySelector(".gallery-left-info__more");
const galleryContainer = document.querySelector(".gallery .main-container");
if (document.documentElement.clientWidth <= 1366 && document.documentElement.clientWidth > 992) {
    editionsTop.append(editionPrice);
    // Галерея
    let swiperGallery = new Swiper('.gallery-right .swiper-container', {
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
    const swiperEditions = new Swiper('.editions-right .swiper-container', {
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
    const swiperProjects = new Swiper('.projects .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 60,
        navigation: {
            nextEl: '.projects__swiper-next',
            prevEl: '.projects__swiper-prev',
        },
    });
} else if (document.documentElement.clientWidth > 1670) {
    // Галерея
    let swiperGallery = new Swiper('.gallery-right .swiper-container', {
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
    const swiperEditions = new Swiper('.editions-right .swiper-container', {
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
    const swiperProjects = new Swiper('.projects .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 60,
        navigation: {
            nextEl: '.projects__swiper-next',
            prevEl: '.projects__swiper-prev',
        },
    });
} else if (document.documentElement.clientWidth <= 992 && document.documentElement.clientWidth > 700) {
    galleryContainer.append(galleryInfo);
    // Галерея
    let swiperGallery = new Swiper('.gallery-right .swiper-container', {
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
    const swiperEditions = new Swiper('.editions-right .swiper-container', {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
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
    const swiperProjects = new Swiper('.projects .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 50,
        navigation: {
            nextEl: '.projects__swiper-next',
            prevEl: '.projects__swiper-prev',
        },
    });
} else if (document.documentElement.clientWidth <= 700) {
    galleryContainer.append(galleryInfo);
    // Галерея
    let swiperGallery = new Swiper('.gallery-right .swiper-container', {
        navigation: {
            nextEl: '.gallery-navigate__next',
            prevEl: '.gallery-navigate__prev',
        },
        pagination: {
            el: '.gallery-navigate__pagination',
            type: 'fraction',
        },
    });
    const gallerySwiper = document.querySelector(".gallery-right .swiper-container");
    const galleryNavigation = document.querySelector(".gallery-right .gallery-navigate");
    galleryNavigation.before(gallerySwiper);

    let swiperEvents = new Swiper('.events .swiper-container', {
        pagination: {
            el: '.events__pagination',
        },
    });
    // Проекты
    const swiperProjects = new Swiper('.projects .swiper-container', {
        spaceBetween: 34,
        navigation: {
            nextEl: '.projects__swiper-next',
            prevEl: '.projects__swiper-prev',
        },
    });
    const editionsPrice = document.querySelector('.editions-left__price');
    // Массив со всеми полями для выбора категории
    let arrayCategory = document.querySelectorAll(".editions-left__label");
    // Создаем селект
    const selectEditions = document.createElement('select');
    // Присваиваем селекту класс
    selectEditions.classList.add('editions__select');
    // Бобавляем его перед секцией с ценой
    editionsPrice.before(selectEditions);
    // Пустой массив для хранения объектов choices
    let arrauChoices = [];
    // Создаем чойсы
    arrayCategory.forEach((element) => {
        const objectChoices = {
            value: 'Test',
            label: element.innerHTML,
            disabled: true,
        }
        arrauChoices.push(objectChoices);
    });
    // Добавляем перед всеми чойсами название секции
    arrauChoices.unshift({
        value: 'Категории',
        label: 'Категории'
    })
    const choicesCategory = new Choices(selectEditions, {
        searchEnabled: false,
        choices: arrauChoices,
        sorter: (a, b) => {
            return;
        },
    })
    const listChoice = document.createElement("ul");
    listChoice.classList.add('editions__choices-list');
    editionsPrice.before(listChoice);
    selectEditions.addEventListener("choice", (ev) => {
        console.log(ev);
        const itemChoice = document.createElement('li');
        itemChoice.classList.add('editions__choices-item');
        const buttonTest = document.createElement('button');
        buttonTest.addEventListener('click', (ev) => {
            itemChoice.remove();
        })
        buttonTest.innerHTML = `<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.501981 11.4789L11.502 0.000216305L12.002 0.521973L1.00198 12.0006L0.501981 11.4789Z" fill="#C283F3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.500026 9.03416e-05L11.5 11.4787L11 12.0005L2.74963e-05 0.521847L0.500026 9.03416e-05Z" fill="#C283F3"/>
</svg>`;
        itemChoice.innerHTML = ev.detail.choice.label;
        itemChoice.append(buttonTest);
        listChoice.append(itemChoice);
    })
} else if (document.documentElement.clientWidth <= 1670 && document.documentElement.clientWidth > 1366) {
    // Галерея
    let swiperGallery = new Swiper('.gallery-right .swiper-container', {
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
    const swiperEditions = new Swiper('.editions-right .swiper-container', {
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
    const swiperProjects = new Swiper('.projects .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
            nextEl: '.projects__swiper-next',
            prevEl: '.projects__swiper-prev',
        },
    });
}
if (document.documentElement.clientWidth <= 1366) {
    const burgerList = document.querySelector('.header-top__navigate');
    const burger = document.querySelector('.header-top__burger');
    const privateRoom = document.querySelector('.header-top__link');
    burgerList.append(privateRoom);
    burger.after(burgerList);
    burger.addEventListener('click', (ev) => {
        burger.classList.toggle('header-top__burger--active');
    })
}

// Перемещение по сайту
const aboutContainer = document.querySelector('.aboutCompany');
const gallerysContainer = document.querySelector('.gallery');
const catalogContainer = document.querySelector('.catalog');
const eventsContainer = document.querySelector('.events');
const editionsContainer = document.querySelector('.editions');
const projectsContainer = document.querySelector('.projects');
const contactsContainer = document.querySelector('.contacts');
const heroButton = document.querySelector('.hero__button');

function scrollContent(content) {
    let coin = setInterval(() => {
        if (content.getBoundingClientRect().top > 0) {
            window.scrollBy(0, 5);
        } else {
            clearInterval(coin);
        }
    }, 1)
};
heroButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    scrollContent(contactsContainer);
});
const arrayContent = [aboutContainer, gallerysContainer, catalogContainer, eventsContainer, editionsContainer, projectsContainer, contactsContainer];
const arrayLink = document.querySelectorAll('.header-top__item');
for (let i = 0; i < arrayLink.length; i++) {
    arrayLink[i].addEventListener('click', (ev) => {
        scrollContent(arrayContent[i]);
    })
}

// Селектор
const selectAvtor = document.querySelector('.gallery-filter__select[name="avtor"]');
const selectDirection = document.querySelector('.gallery-filter__select[name="direction"]');
const selectTechnic = document.querySelector('.gallery-filter__select[name="technic"]');

const choicesAvtor = new Choices(selectAvtor, {
    searchEnabled: false,
    itemSelectText: '',
    choices: [{
            value: 'Автор',
            label: 'Автор',
            selected: true,
            disabled: true,
        }, {
            value: 'Тинторетто',
            label: '<a href="#">Тинторетто</a>',
        },
        {
            value: 'Фридрих',
            label: '<a href="#">Фридрих</a>',
        },
        {
            value: 'Леонардо',
            label: '<a href="#">Леонардо</a>',
        }, {
            value: 'Веррокью',
            label: '<a href="#">Веррокью</a>',
        }
    ],
    sorter: (a, b) => {
        return;
    },
});
const choicesDirection = new Choices(selectDirection, {
    searchEnabled: false,
    itemSelectText: '',
    choices: [{
        value: 'Направление',
        label: 'Направление',
        selected: true,
        disabled: true,
    }, ]
});
const choicesTechnic = new Choices(selectTechnic, {
    searchEnabled: false,
    itemSelectText: '',
    choices: [{
        value: 'Техника',
        label: 'Техника',
        selected: true,
        disabled: true,
    }, ]
});

let element = document.querySelector(".choices__list[role = 'listbox']");
let simplebar = null;
choicesAvtor.callbackOnInit = initSimpleBar();
selectAvtor.addEventListener('showDropdown', initSimpleBar);
selectAvtor.addEventListener('hideDropdown', initSimpleBar);

function initSimpleBar() {
    if (!simplebar) {
        simplebar = new SimpleBar(element);
    } else {
        simplebar.unMount();
        simplebar = new SimpleBar(element);
    }
}

// Аккордеон


var icons = {
    header: "myIcon-1",
    headerSelected: "myIcon-2"
}
$("#catalog-accordion").accordion({
    // Все вкладки при загрузке закрыты
    active: false,
    // Повторный клик по вкладке закрывает ее
    collapsible: true,
    icons: icons,
    autoHeight: false
});

// Работа с тултипами
tippy('.project__tooltip_number_1', {
    content: 'Пример современных тенденций - современная методология разработки',
    theme: 'greay',
    trigger: 'click',
});
tippy('.project__tooltip_number_2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    theme: 'greay',
    trigger: 'click',
});
tippy('.project__tooltip_number_3', {
    content: 'В стремлении повысить качество',
    theme: 'greay',
    trigger: 'click',
});

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
        iconImageHref: '../svg/map__mark.svg',
        // Размеры значка
        iconImageSize: [20, 20],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0]
    })
    myMap.geoObjects.add(mark);
}