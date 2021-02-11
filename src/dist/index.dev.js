"use strict"; // Const

var SPEED_SWIPER = 4000;
var swiperNavigateNext = document.querySelector('.gallery-navigate__next');
var swiperNavigatePrev = document.querySelector('.gallery-navigate__prev');
var editionPrice = document.querySelector(".editions-left__priceContainer");
var editionsTop = document.querySelector(".editions-right__top");
var galleryInfo = document.querySelector(".gallery-left-info__more");
var galleryContainer = document.querySelector(".gallery .main-container");
var title = document.querySelector('.editions-left__title');
var listCategories = document.querySelector('.editions-left__category');
var listTitle = document.querySelector('.editions-left__titleCategory');
var gallerySwiper = document.querySelector(".gallery-right .swiper-container");
var galleryNavigation = document.querySelector(".gallery-right .gallery-navigate");
var burgerList = document.querySelector('.header-top__navigate');
var burger = document.querySelector('.header-top__burger');
var privateRoom = document.querySelector('.header-top__link');
var detailCategoties = document.createElement('details');
var summaryCategoties = document.createElement('summary'); // Количество листов

var numberList = 5; // Количество художников в одном листе

var numberItem = 4; // Секции на сайте

var aboutContainer = document.querySelector('.company');
var gallerysContainer = document.querySelector('.gallery');
var catalogContainer = document.querySelector('.catalog');
var eventsContainer = document.querySelector('.events');
var editionsContainer = document.querySelector('.editions');
var projectsContainer = document.querySelector('.projects');
var contactsContainer = document.querySelector('.contacts');
var heroButton = document.querySelector('.hero__button'); // RКонтейнер со всеми секциями на сайте

var arrayContent = [aboutContainer, gallerysContainer, catalogContainer, eventsContainer, editionsContainer, projectsContainer, contactsContainer]; // Список всех ссылок для перемещения по сайту

var arrayLink = document.querySelectorAll('.header-top__item'); // Селектор

var selectAvtor = document.querySelector('.gallery-filter'); // Списки с художниками

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
}; // Стили для иконок аккордиона

var icons = {
  header: "myIcon-1",
  headerSelected: "myIcon-2"
}; //----------------------------------------------------------------------------------
// Функции
// Функия, скрывающая все элементы по классу

function hideElements(elements) {
  document.querySelectorAll(elements).forEach(function (element) {
    $(element).hide();
  });
} // Прокрутка контента


function scrollContent(content) {
  var coin = setInterval(function () {
    if (content.getBoundingClientRect().top > 0) {
      window.scrollBy(0, 5);
    } else {
      clearInterval(coin);
    }
  }, 1);
}

; // Реализация смены имени

function artistInfo() {
  var artistLinks = document.querySelectorAll('.catalog-accordion__link');
  var artistName = document.querySelector('.catalog-leftColumn__name'); // Cтартовое значение имени

  artistName.innerHTML = artistLinks[0] ? artistLinks[0].innerHTML : '';
  artistLinks.forEach(function (element) {
    element.addEventListener('click', function (ev) {
      ev.preventDefault();
      var name = ev.target.innerHTML;
      artistName.innerHTML = name;
    });
  });
} // Функции для работы с аккордеоном


function clearLists(lists) {
  lists[1400].innerHTML = '';
  lists[1500].innerHTML = '';
  lists[1600].innerHTML = '';
  lists[1700].innerHTML = '';
  lists[1800].innerHTML = '';
  lists[1900].innerHTML = '';
  lists[2000].innerHTML = '';
}

function createListArtists(country) {
  var lists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ARTISTS__LIST;
  var artists = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ARTISTS;
  // Очищаем все листы
  clearLists(lists); // Помещаем объект с массивами по годам в переменную

  var objectYears = artists[country]; // Делаем массив значений из объекта годов

  var arrayYears = Object.values(objectYears); // Массив списков по годам

  var listsYears = Object.values(lists); // Проходимся по каждому году

  for (var i = 0; i < arrayYears.length; i++) {
    // Проходимся по каждому массиву в каждом годе
    for (var k = 0; k < arrayYears[i].length; k++) {
      var listItem = document.createElement('li');
      listItem.classList.add('catalog-accordion__item');
      var listLink = document.createElement('a');
      listLink.classList.add('catalog-accordion__link');
      listLink.href = '#';
      listLink.innerHTML = arrayYears[i][k];
      listItem.append(listLink);
      listsYears[i].append(listItem);
    }
  }

  ;
  artistInfo();
  $("#catalog-accordion").accordion("refresh");
} //----------------------------------------------------------------------------------
// Неопределенные значения


var swiperGallery,
    swiperEditions,
    swiperProjects,
    swiperEvents,
    choicesAvtor = null; //----------------------------------------------------------------------------------
// Основные вычесления

swiperNavigatePrev.addEventListener('click', function (ev) {
  if (swiperNavigateNext.hasAttribute('disabled')) {
    swiperNavigateNext.removeAttribute('disabled');
  }
});
swiperNavigateNext.addEventListener('click', function (ev) {
  setTimeout(function () {
    if (swiperGallery.isEnd) {
      swiperNavigateNext.setAttribute('disabled', true);
    }
  }, 1000);
});

if (document.documentElement.clientWidth <= 1366 && document.documentElement.clientWidth > 992) {
  editionsTop.append(editionPrice); // Галерея

  swiperGallery = new Swiper('.gallery-right .swiper-container', {
    speed: SPEED_SWIPER,
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

  swiperEditions = new Swiper('.editions-right .swiper-container', {
    speed: SPEED_SWIPER,
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

  swiperProjects = new Swiper('.projects .swiper-container', {
    speed: SPEED_SWIPER,
    slidesPerView: 2,
    spaceBetween: 60,
    navigation: {
      nextEl: '.projects__swiper-next',
      prevEl: '.projects__swiper-prev'
    }
  });
} else if (document.documentElement.clientWidth > 1670) {
  // Галерея
  swiperGallery = new Swiper('.gallery-right .swiper-container', {
    speed: SPEED_SWIPER,
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

  swiperEditions = new Swiper('.editions-right .swiper-container', {
    speed: SPEED_SWIPER,
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

  swiperProjects = new Swiper('.projects .swiper-container', {
    speed: SPEED_SWIPER,
    slidesPerView: 3,
    spaceBetween: 60,
    navigation: {
      nextEl: '.projects__swiper-next',
      prevEl: '.projects__swiper-prev'
    }
  });
} else if (document.documentElement.clientWidth <= 992 && document.documentElement.clientWidth > 700) {
  galleryContainer.append(galleryInfo); // Галерея

  swiperGallery = new Swiper('.gallery-right .swiper-container', {
    speed: SPEED_SWIPER,
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

  swiperEditions = new Swiper('.editions-right .swiper-container', {
    speed: SPEED_SWIPER,
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

  swiperProjects = new Swiper('.projects .swiper-container', {
    speed: SPEED_SWIPER,
    slidesPerView: 2,
    spaceBetween: 40,
    navigation: {
      nextEl: '.projects__swiper-next',
      prevEl: '.projects__swiper-prev'
    }
  });
} else if (document.documentElement.clientWidth <= 700) {
  galleryContainer.append(galleryInfo); // Галерея

  swiperGallery = new Swiper('.gallery-right .swiper-container', {
    speed: SPEED_SWIPER,
    navigation: {
      nextEl: '.gallery-navigate__next',
      prevEl: '.gallery-navigate__prev'
    },
    pagination: {
      el: '.gallery-navigate__pagination',
      type: 'fraction'
    }
  });
  galleryNavigation.before(gallerySwiper);
  swiperEvents = new Swiper('.events .swiper-container', {
    speed: SPEED_SWIPER,
    pagination: {
      el: '.events__pagination'
    }
  }); // Проекты

  swiperProjects = new Swiper('.projects .swiper-container', {
    speed: SPEED_SWIPER,
    spaceBetween: 34,
    navigation: {
      nextEl: '.projects__swiper-next',
      prevEl: '.projects__swiper-prev'
    }
  });
  detailCategoties.classList.add('editions-left__details');
  summaryCategoties.classList.add('editions-left__summary');
  summaryCategoties.append(listTitle);
  detailCategoties.append(summaryCategoties);
  detailCategoties.append(listCategories);
  title.after(detailCategoties);
} else if (document.documentElement.clientWidth <= 1670 && document.documentElement.clientWidth > 1366) {
  // Галерея
  swiperGallery = new Swiper('.gallery-right .swiper-container', {
    speed: SPEED_SWIPER,
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

  swiperEditions = new Swiper('.editions-right .swiper-container', {
    speed: SPEED_SWIPER,
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

  swiperProjects = new Swiper('.projects .swiper-container', {
    speed: SPEED_SWIPER,
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.projects__swiper-next',
      prevEl: '.projects__swiper-prev'
    }
  });
}

if (document.documentElement.clientWidth <= 1366) {
  burgerList.append(privateRoom);
  burger.after(burgerList);
  burger.addEventListener('click', function (ev) {
    burger.classList.toggle('header-top__burger--active');
  });
} //----------------------------------------------------------------------------------
// Header-bottom


document.body.addEventListener('click', function (ev) {
  if (ev.target.className == 'directions-list__button' || ev.target.className == 'dropdawn__list' || ev.target.className == 'dropdawn__item') {
    return;
  } else {
    hideElements('.dropdawn__list');
  }
}); // При загрузке скрываем все списки

hideElements('.dropdawn__list'); // Делаем фон из свойства элемента списка

document.querySelectorAll(".dropdawn__item").forEach(function (element) {
  element.style.background = element.dataset.url;
}); // Показывем конкретный список

document.querySelectorAll('.directions-list__button').forEach(function (element) {
  element.addEventListener('click', function (ev) {
    hideElements('.dropdawn__list');
    var numberList = Number(ev.target.dataset.target);
    $(document.querySelector(".dropdawn__list[data-target=\"".concat(numberList, "\"]"))).show();
  });
}); // При выборе конкретного художника закрываем список

document.querySelectorAll('.dropdawn__list').forEach(function (element) {
  element.addEventListener('click', function (ev) {});
}); //----------------------------------------------------------------------------------
// Перемещение по сайту

heroButton.addEventListener('click', function (ev) {
  ev.preventDefault();
  scrollContent(contactsContainer);
});

var _loop = function _loop(i) {
  arrayLink[i].addEventListener('click', function (ev) {
    scrollContent(arrayContent[i]);
  });
};

for (var i = 0; i < arrayLink.length; i++) {
  _loop(i);
} //----------------------------------------------------------------------------------
// Селектор в секции гелереи
// Создание стиля для селектора


choicesAvtor = new Choices(selectAvtor, {
  searchEnabled: false,
  itemSelectText: ''
});

function updateChoiceInfo() {
  var ev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  setTimeout(function () {
    var singleCase = document.querySelector(".choices__list--single .choices__item");
    var arrayChoices = document.querySelectorAll(".choices__list--dropdown .choices__item");
    var nameAtttibute = ev ? ev.detail.choice.value : singleCase.getAttribute('data-value');
    arrayChoices.forEach(function (element) {
      if (element.getAttribute('data-value') == nameAtttibute) {
        element.style.display = "none";
      } else {
        element.style.display = "flex";
      }
    });
  }, 500);
}

updateChoiceInfo();
selectAvtor.addEventListener('choice', updateChoiceInfo); //----------------------------------------------------------------------------------
// Каталог

artistInfo(); //----------------------------------------------------------------------------------
// Реализация аккордиона
// Назначение аккордиона

$("#catalog-accordion").accordion({
  // Повторный клик по вкладке закрывает ее
  collapsible: true,
  // Иконки 
  icons: icons
}); // Массив со всеми ссылка на табы

var caseLinksTabs = []; // Табы

document.querySelectorAll('.catalog-titleContainer__link').forEach(function (element) {
  // Стартовая страна
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = element.classList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var prop = _step.value;

      // Ищем совпадение по классу при первой загрузке и сразу подгружаю ифнормацию в аккордеон
      if (prop == 'catalog-titleContainer__link--state--check') {
        createListArtists(element.dataset.country);
      }
    } // Ставим обработчик событий на каждую таб

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  element.addEventListener('click', function (ev) {
    ev.preventDefault();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = caseLinksTabs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;
        item.classList.remove("catalog-titleContainer__link--state--check");
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    element.classList.add("catalog-titleContainer__link--state--check");
    var countryObject = element.dataset.country;
    createListArtists(countryObject);
  }); // Добавляем все табы в массив

  caseLinksTabs.push(element);
}); //----------------------------------------------------------------------------------
// Работа с тултипами

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
}); //----------------------------------------------------------------------------------
//Карта

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
    iconImageHref: './svg/map__mark.svg',
    // Размеры значка
    iconImageSize: [20, 20],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [0, 0]
  });
  myMap.geoObjects.add(mark);
}