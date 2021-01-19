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
        spaceBetween: 40,
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

    const title = document.querySelector('.editions-left__title');
    const listCategories = document.querySelector('.editions-left__category');
    const listTitle = document.querySelector('.editions-left__titleCategory');

    const detailCategoties = document.createElement('details');
    detailCategoties.classList.add('editions-left__details');
    const summaryCategoties = document.createElement('summary');
    summaryCategoties.classList.add('editions-left__summary');
    summaryCategoties.append(listTitle);
    detailCategoties.append(summaryCategoties);
    detailCategoties.append(listCategories);
    title.after(detailCategoties);
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

// Спиcок в секции header-bottom
document.querySelectorAll('.artists-list').forEach((element) => {
    $(element).hide();
});

document.querySelectorAll('.directions-list__button').forEach((element) => {
    element.addEventListener('click', (ev) => {
        const numberList = Number(ev.target.dataset.target);
        $(document.querySelectorAll(`.artists-list[data-target="${numberList}"]`)).toggle();
    });
})

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

// Селектор в секции гелереи
const selectAvtor = document.querySelector('.gallery-filter__select');

const choicesAvtor = new Choices(selectAvtor, {
    searchEnabled: false,
    itemSelectText: '',
    sorter: (a, b) => {
        return;
    },
});

//----------------------------------------------------------------------------------

// Каталог

// Реализация табов

const countryTab = document.querySelectorAll('.catalog-titleContainer__link').forEach((element) => {
    element.addEventListener('click', (ev) => {
        ev.preventDefault();
    })
})

// Реализация смены имени
const artistLinks = document.querySelectorAll('.catalog-accordion__link');
const artistName = document.querySelector('.catalog-leftColumn__name');

artistLinks.forEach((element) => {
    element.addEventListener('click', (ev) => {
        ev.preventDefault();
        console.log(ev);
        const name = ev.target.innerHTML;
        artistName.innerHTML = name;
    });
});

// Реализация аккордиона

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