"use strict";

var editionPrice = document.querySelector(".editions-left__priceContainer");
var editionsTop = document.querySelector(".editions-right__top");
var galleryInfo = document.querySelector(".gallery-left-info__more");
var galleryContainer = document.querySelector(".gallery .main-container");

if (document.documentElement.clientWidth <= 1366 && document.documentElement.clientWidth > 992) {
  editionsTop.append(editionPrice); // Галерея

  var swiperGallery = new Swiper('.gallery-right .swiper-container', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 34,
    slidesPerColumn: 2,
    navigation: {
      nextEl: '.gallery-navigate__next',
      prevEl: '.gallery-navigate__prev'
    },
    pagination: {
      el: '.gallery-navigate__pagination',
      type: 'fraction'
    }
  }); // Издание

  var swiperEditions = new Swiper('.editions-right .swiper-container', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 50,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.editions-navigate__next',
      prevEl: '.editions-navigate__prev'
    },
    pagination: {
      el: '.editions-navigate__pagination',
      type: 'fraction'
    }
  }); // Проекты

  var swiperProjects = new Swiper('.projects .swiper-container', {
    slidesPerView: 2,
    spaceBetween: 60,
    navigation: {
      nextEl: '.projects__swiper-next',
      prevEl: '.projects__swiper-prev'
    }
  });
} else if (document.documentElement.clientWidth > 1670) {
  // Галерея
  var _swiperGallery = new Swiper('.gallery-right .swiper-container', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    slidesPerColumn: 2,
    navigation: {
      nextEl: '.gallery-navigate__next',
      prevEl: '.gallery-navigate__prev'
    },
    pagination: {
      el: '.gallery-navigate__pagination',
      type: 'fraction'
    }
  }); // Издание


  var _swiperEditions = new Swiper('.editions-right .swiper-container', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 25,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.editions-navigate__next',
      prevEl: '.editions-navigate__prev'
    },
    pagination: {
      el: '.editions-navigate__pagination',
      type: 'fraction'
    }
  }); // Проекты


  var _swiperProjects = new Swiper('.projects .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 60,
    navigation: {
      nextEl: '.projects__swiper-next',
      prevEl: '.projects__swiper-prev'
    }
  });
} else if (document.documentElement.clientWidth <= 992 && document.documentElement.clientWidth > 700) {
  galleryContainer.append(galleryInfo); // Галерея

  var _swiperGallery2 = new Swiper('.gallery-right .swiper-container', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 34,
    slidesPerColumn: 2,
    navigation: {
      nextEl: '.gallery-navigate__next',
      prevEl: '.gallery-navigate__prev'
    },
    pagination: {
      el: '.gallery-navigate__pagination',
      type: 'fraction'
    }
  }); // Издание


  var _swiperEditions2 = new Swiper('.editions-right .swiper-container', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.editions-navigate__next',
      prevEl: '.editions-navigate__prev'
    },
    pagination: {
      el: '.editions-navigate__pagination',
      type: 'fraction'
    }
  }); // Проекты


  var _swiperProjects2 = new Swiper('.projects .swiper-container', {
    slidesPerView: 2,
    spaceBetween: 40,
    navigation: {
      nextEl: '.projects__swiper-next',
      prevEl: '.projects__swiper-prev'
    }
  });
} else if (document.documentElement.clientWidth <= 700) {
  galleryContainer.append(galleryInfo); // Галерея

  var _swiperGallery3 = new Swiper('.gallery-right .swiper-container', {
    navigation: {
      nextEl: '.gallery-navigate__next',
      prevEl: '.gallery-navigate__prev'
    },
    pagination: {
      el: '.gallery-navigate__pagination',
      type: 'fraction'
    }
  });

  var gallerySwiper = document.querySelector(".gallery-right .swiper-container");
  var galleryNavigation = document.querySelector(".gallery-right .gallery-navigate");
  galleryNavigation.before(gallerySwiper);
  var swiperEvents = new Swiper('.events .swiper-container', {
    pagination: {
      el: '.events__pagination'
    }
  }); // Проекты

  var _swiperProjects3 = new Swiper('.projects .swiper-container', {
    spaceBetween: 34,
    navigation: {
      nextEl: '.projects__swiper-next',
      prevEl: '.projects__swiper-prev'
    }
  });

  var title = document.querySelector('.editions-left__title');
  var listCategories = document.querySelector('.editions-left__category');
  var listTitle = document.querySelector('.editions-left__titleCategory');
  var detailCategoties = document.createElement('details');
  detailCategoties.classList.add('editions-left__details');
  var summaryCategoties = document.createElement('summary');
  summaryCategoties.classList.add('editions-left__summary');
  summaryCategoties.append(listTitle);
  detailCategoties.append(summaryCategoties);
  detailCategoties.append(listCategories);
  title.after(detailCategoties);
} else if (document.documentElement.clientWidth <= 1670 && document.documentElement.clientWidth > 1366) {
  // Галерея
  var _swiperGallery4 = new Swiper('.gallery-right .swiper-container', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 50,
    slidesPerColumn: 2,
    navigation: {
      nextEl: '.gallery-navigate__next',
      prevEl: '.gallery-navigate__prev'
    },
    pagination: {
      el: '.gallery-navigate__pagination',
      type: 'fraction'
    }
  }); // Издание


  var _swiperEditions3 = new Swiper('.editions-right .swiper-container', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 25,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.editions-navigate__next',
      prevEl: '.editions-navigate__prev'
    },
    pagination: {
      el: '.editions-navigate__pagination',
      type: 'fraction'
    }
  }); // Проекты


  var _swiperProjects4 = new Swiper('.projects .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.projects__swiper-next',
      prevEl: '.projects__swiper-prev'
    }
  });
}

if (document.documentElement.clientWidth <= 1366) {
  var burgerList = document.querySelector('.header-top__navigate');
  var burger = document.querySelector('.header-top__burger');
  var privateRoom = document.querySelector('.header-top__link');
  burgerList.append(privateRoom);
  burger.after(burgerList);
  burger.addEventListener('click', function (ev) {
    burger.classList.toggle('header-top__burger--active');
  });
} // Спиcок в секции header-bottom
// Фон для аторов
// Количество листов


var numberList = 5; // Количество художников в одном листе

var numberItem = 4;
document.querySelectorAll(".dropdawn__item").forEach(function (element) {
  console.log(element.dataset);
  element.style.background = element.dataset.url;
}); // Функия, скрывающая все элементы по классу

function hideElements(element) {
  document.querySelectorAll(".".concat(element)).forEach(function (element) {
    $(element).hide();
  });
} // При загрузке скрываем все списки


hideElements('dropdawn__list');
document.querySelectorAll('.directions-list__button').forEach(function (element) {
  element.addEventListener('click', function (ev) {
    hideElements('dropdawn__list');
    var numberList = Number(ev.target.dataset.target);
    $(document.querySelectorAll(".dropdawn__list[data-target=\"".concat(numberList, "\"]"))).show();
  });
}); // При выборе конкретного художника закрываем список

document.querySelectorAll('.dropdawn__item').forEach(function (element) {
  element.addEventListener('click', function (ev) {
    hideElements('dropdawn__list');
  }); // element.style.background = 
}); // Перемещение по сайту

var aboutContainer = document.querySelector('.aboutCompany');
var gallerysContainer = document.querySelector('.gallery');
var catalogContainer = document.querySelector('.catalog');
var eventsContainer = document.querySelector('.events');
var editionsContainer = document.querySelector('.editions');
var projectsContainer = document.querySelector('.projects');
var contactsContainer = document.querySelector('.contacts');
var heroButton = document.querySelector('.hero__button');

function scrollContent(content) {
  var coin = setInterval(function () {
    if (content.getBoundingClientRect().top > 0) {
      window.scrollBy(0, 5);
    } else {
      clearInterval(coin);
    }
  }, 1);
}

;
heroButton.addEventListener('click', function (ev) {
  ev.preventDefault();
  scrollContent(contactsContainer);
});
var arrayContent = [aboutContainer, gallerysContainer, catalogContainer, eventsContainer, editionsContainer, projectsContainer, contactsContainer];
var arrayLink = document.querySelectorAll('.header-top__item');

var _loop = function _loop(i) {
  arrayLink[i].addEventListener('click', function (ev) {
    scrollContent(arrayContent[i]);
  });
};

for (var i = 0; i < arrayLink.length; i++) {
  _loop(i);
} // Селектор в секции гелереи


var selectAvtor = document.querySelector('.gallery-filter__select');
var choicesAvtor = new Choices(selectAvtor, {
  searchEnabled: false,
  itemSelectText: '',
  sorter: function sorter(a, b) {
    return;
  }
}); //----------------------------------------------------------------------------------
// Каталог
// Реализация смены имени

function artistInfo() {
  var artistLinks = document.querySelectorAll('.catalog-accordion__link');
  var artistName = document.querySelector('.catalog-leftColumn__name');
  artistLinks.forEach(function (element) {
    element.addEventListener('click', function (ev) {
      ev.preventDefault();
      var name = ev.target.innerHTML;
      artistName.innerHTML = name;
    });
  });
}

artistInfo(); // Реализация аккордиона
// Табы

var countryTab = document.querySelectorAll('.catalog-titleContainer__link').forEach(function (element) {
  element.addEventListener('click', function (ev) {
    ev.preventDefault();
    var countryObject = ev.target.dataset.country;
    createListArtists(countryObject, ARTISTS__LIST, ARTISTS);
  });
});

function clearLists(lists) {
  lists[1400].innerHTML = '';
  lists[1500].innerHTML = '';
  lists[1600].innerHTML = '';
  lists[1700].innerHTML = '';
  lists[1800].innerHTML = '';
  lists[1900].innerHTML = '';
  lists[2000].innerHTML = '';
}

function createListArtists(country, lists, artists) {
  // Очищаем все листы
  clearLists(lists); // Помещаем объект с массивами по годам в переменную

  var objectYears = artists[country]; // Делаем массив значений из объекта годов

  var arrayYears = Object.values(objectYears); // Массив списков по годам

  var listsYears = Object.values(lists); // Проходимся по каждому году

  for (var _i = 0; _i < arrayYears.length; _i++) {
    // Проходимся по каждому массиву в каждом годе
    for (var k = 0; k < arrayYears[_i].length; k++) {
      var listItem = document.createElement('li');
      listItem.classList.add('catalog-accordion__item');
      var listLink = document.createElement('a');
      listLink.classList.add('catalog-accordion__link');
      listLink.href = '#';
      listLink.innerHTML = arrayYears[_i][k];
      listItem.append(listLink);

      listsYears[_i].append(listItem);
    }
  }

  ;
  artistInfo();
  $("#catalog-accordion").accordion("refresh");
} // Списки с художниками


var ARTISTS__LIST = {
  1400: document.querySelector('.catalog-accordion__list[data-years="1400-1499"]'),
  1500: document.querySelector('.catalog-accordion__list[data-years="1500-1599"]'),
  1600: document.querySelector('.catalog-accordion__list[data-years="1600-1699"]'),
  1700: document.querySelector('.catalog-accordion__list[data-years="1700-1799"]'),
  1800: document.querySelector('.catalog-accordion__list[data-years="1800-1899"]'),
  1900: document.querySelector('.catalog-accordion__list[data-years="1900-1999"]'),
  2000: document.querySelector('.catalog-accordion__list[data-years="2000"]')
}; // Художники

var ARTISTS = {
  Franch: {
    1400: ['Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch', 'Test1400__Franch'],
    1500: [],
    1600: [],
    1700: [],
    1800: [],
    1900: [],
    2000: []
  },
  Germani: {
    1400: ['Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani', 'Test1400__Germani'],
    1500: [],
    1600: [],
    1700: [],
    1800: [],
    1900: [],
    2000: []
  },
  Italy: {
    1400: ['Бенедетто ди Биндо', 'Бергоньоне, Амброджо', 'Биссоло, Франческо', 'Больтраффио, Джованни', 'Бонсиньори, Франческо', 'Боттичини, Рафаэлло', 'Брамантино', 'Бреа, Людовико', 'Бьяджо д’Антонио Туччи', 'Веккьетта', 'Андреа Верроккьо', 'Доменико Гирландайо', 'Беноццо Гоццоли', 'Граначчи, Франческо', 'Грегорио ди Чекко', 'Джованни да Удине', 'Джованни ди Паоло', 'Джорджоне', 'Парентино, Бернардо', 'Пезеллино', 'Пьетро Перуджино', 'Перуцци, Бальдассаре', 'Пизанелло', 'Пинтуриккьо'],
    1500: [],
    1600: [],
    1700: [],
    1800: [],
    1900: [],
    2000: []
  },
  Russia: {
    1400: ['Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia', 'Test1400__Rissia'],
    1500: [],
    1600: [],
    1700: [],
    1800: [],
    1900: [],
    2000: []
  },
  Belgium: {
    1400: ['Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium', 'Test1400__Belgium'],
    1500: [],
    1600: [],
    1700: [],
    1800: [],
    1900: [],
    2000: []
  }
};
var icons = {
  header: "myIcon-1",
  headerSelected: "myIcon-2"
};
$("#catalog-accordion").accordion({
  // Все вкладки при загрузке закрыты
  active: false,
  // Повторный клик по вкладке закрывает ее
  collapsible: true,
  icons: icons
}); // Работа с тултипами

tippy('.project__tooltip_number_1', {
  content: 'Пример современных тенденций - современная методология разработки',
  theme: 'greay',
  trigger: 'click'
});
tippy('.project__tooltip_number_2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'greay',
  trigger: 'click'
});
tippy('.project__tooltip_number_3', {
  content: 'В стремлении повысить качество',
  theme: 'greay',
  trigger: 'click'
}); //Карта

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('map', {
    center: [55.758463, 37.601079],
    zoom: 15,
    controls: []
  }); // Марка на карте

  var mark = new ymaps.Placemark(myMap.getCenter(), {}, {
    iconLayout: 'default#image',
    // Ссылка на мое изображение
    iconImageHref: '../svg/map__mark.svg',
    // Размеры значка
    iconImageSize: [20, 20],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [0, 0]
  });
  myMap.geoObjects.add(mark);
}