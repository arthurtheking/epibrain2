!function(s){var t={};function e(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return s[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=s,e.c=t,e.d=function(s,t,a){e.o(s,t)||Object.defineProperty(s,t,{enumerable:!0,get:a})},e.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},e.t=function(s,t){if(1&t&&(s=e(s)),8&t)return s;if(4&t&&"object"==typeof s&&s&&s.__esModule)return s;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:s}),2&t&&"string"!=typeof s)for(var i in s)e.d(a,i,function(t){return s[t]}.bind(null,i));return a},e.n=function(s){var t=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(t,"a",t),t},e.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},e.p="",e(e.s=0)}([function(s,t,e){"use strict";e.r(t);e(1);const a={toogleBtn:document.querySelector(".toggle__btn"),sidebar:document.querySelector(".header__sidebar"),hamburgerBtn:document.querySelector(".hamburger"),list:document.querySelector(".header__sidebar__nav"),toggleUa:document.querySelector("#toggle--ukr"),toggleRu:document.querySelector("#toggle--ru"),headerTop:document.querySelector(".header__top"),headerBottom:document.querySelector(".header__bottom"),mastersTop:document.querySelector(".masters--top"),primaryMaster:document.querySelector(".primary--info"),secondaryMaster:document.querySelector(".secondary--info"),thirdMaster:document.querySelector(".third--info"),forthMaster:document.querySelector(".forth--info"),advantagesTop:document.querySelector(".advantages--top"),advantagesBottom:document.querySelector(".advantages--bottom"),servicesTop:document.querySelector(".services--top"),first:document.querySelector(".first"),second:document.querySelector(".second"),third:document.querySelector(".third"),forth:document.querySelector(".forth"),contactsTop:document.querySelector(".contacts--top"),contactsBottom:document.querySelector(".contacts__bottom--left")},i=()=>{a.sidebar.classList.toggle("active"),a.hamburgerBtn.classList.toggle("is-active"),a.toogleBtn.classList.toggle("swiped")};a.toggleRu.addEventListener("click",s=>{"flag--ru"===s.target.classList.value&&(a.headerBottom.innerHTML="",a.headerBottom.insertAdjacentHTML("afterbegin",'<img class="purp_logo" src="./images/logo.png" alt="Epibrain logo"> \n      <h1 class="header__welcome__message">Добро пожаловать<br> на сайт медицинского центра<br>EpiBrain</h1>'),a.list.innerHTML="",a.list.insertAdjacentHTML("afterbegin",'<li class="sidebar__nav__item"><a href="#masters__section" class="nav__item__link">Наши специалисты</a></li>\n      <li class="sidebar__nav__item"><a href="#advantages__section" class="nav__item__link">Преимущества</a></li>\n      <li class="sidebar__nav__item"><a href="#services" class="nav__item__link">Услуги</a></li>\n      <li class="sidebar__nav__item"><a href="#contacts__section" class="nav__item__link">Контакты</a></li>'),a.mastersTop.innerHTML="",a.mastersTop.insertAdjacentHTML("afterbegin",'<h3 class="masters__title">Наши специалисты</h3>'),a.primaryMaster.innerHTML="",a.primaryMaster.insertAdjacentHTML("afterbegin",' <p class="masters__subtitle">\n      Кандидат медицинских наук, <br> Врач высшей категории <br> Харчук Сергей Михайлович</p>\n  <ul class="masters__list">\n    <li class="masters__list__item">Врач-психиатр, эпилептолог</li>\n    <li class="masters__list__item">Вицепрезидет Украинской <br> противоэпилептической лиги</li>\n    <li class="masters__list__item">Стаж работы в психиатрии - 30 лет</li>\n</ul>\n<p class="masters__description">В 1990 году окончил Национальный медицинский университет имени О. О. Богомольца по специальности лечебное дело.</p>'),a.secondaryMaster.innerHTML="",a.secondaryMaster.insertAdjacentHTML("afterbegin",'<p class="masters__subtitle">Врач высшей категории <br> Дубинина Каролина Сергеевна</p>\n    <ul class="masters__list">\n        <li class="masters__list__item">Врач-психиатр</li>\n        <li class="masters__list__item">Стаж работы в психиатрии - 25 лет</li>\n    </ul>\n    <p class="masters__description">В 1994 году окончила Национальный медицинский университет имени О. О. Богомольца по специальности лечебное дело.</p>'),a.thirdMaster.innerHTML="",a.thirdMaster.insertAdjacentHTML("afterbegin",'<p class="masters__subtitle">Врач высшей категории <br> Рейнгардт Ольга Борисовна</p>\n    <ul class="masters__list">\n        <li class="masters__list__item">Врач-психиатр, эпилептолог</li>\n        <li class="masters__list__item">Врач функциональной диагностики</li>\n        <li class="masters__list__item">Стаж работы в психиатрии - 20 лет</li>\n    </ul>\n    <p class="masters__description">В 1998  году окончила Национальный медицинский университет имени О. О. Богомольца по специальности лечебное дело.</p>'),a.forthMaster.innerHTML="",a.forthMaster.insertAdjacentHTML("afterbegin",'<p class="masters__subtitle">Врач-психолог <br> Лиссова-Лупаренко Анна Алексеевна </p>\n      <ul class="masters__list">\n          <li class="masters__list__item">Медицинский психолог</li>\n          <li class="masters__list__item">Стаж работы в психиатрии - 3 года</li>\n      </ul>\n      <p class="masters__description">В 2016 году окончила Национальный медицинский университет имени О. О. Богомольца по специальности медицинская психология.</p>'),a.advantagesTop.innerHTML="",a.advantagesTop.insertAdjacentHTML("afterbegin",' <h3 class="advantages__title">Преимущества</h3>'),a.advantagesBottom.innerHTML="",a.advantagesBottom.insertAdjacentHTML("afterbegin",'<ul class="advantages__list">\n      <li class="advantages__item">\n          <div class="advantage__img__block experience__img"></div><br>\n          <span class="advantages__subtitle">Опыт</span>\n          <p class="advantages__text">Специалисты нашего центра уже более 20 лет работают в сфере психиатрии, эпилептологии</p>\n      </li>\n      <li class="advantages__item">\n          <div class="advantage__img__block confidential__img"></div><br>\n          <span class="advantages__subtitle">Конфиденциальность</span>\n          <p class="advantages__text">Специфика работы подразумевает образование доверительных отношений и чувства безопасности в работе с психологом или психиатром</p>\n      </li>\n      <li class="advantages__item">\n          <div class="advantage__img__block doctor__img"></div><br>\n          <span class="advantages__subtitle">Профессионализм</span>\n          <p class="advantages__text">Мы – команда высокопрофессиональных специалистов с многолетним опытом работы</p>\n      </li>\n      <li class="advantages__item">\n          <div class="advantage__img__block license__img"></div><br>\n          <span class="advantages__subtitle">Лицензированность</span>\n          <p class="advantages__text">Все врачи нашего центра имеют лицензию МОЗ на предоставление медицинских услуг</p>\n      </li>\n      <li class="advantages__item">\n          <div class="advantage__img__block equip__img"></div><br>\n          <span class="advantages__subtitle">Профессиональное оборудование</span>\n          <p class="advantages__text">Высокое качество оборудования и диагностического инструментария обеспечивает хорошие диагностические и, в дальнейшем, терапевтические результаты</p>\n      </li>\n      <li class="advantages__item">\n          <div class="advantage__img__block client__img"></div><br>\n          <span class="advantages__subtitle">Клиенториенторованность</span>\n          <p class="advantages__text">Индивидуальный подход к каждому клиенту – основная философия центра</p>\n      </li>\n  </ul>'),a.servicesTop.innerHTML="",a.servicesTop.insertAdjacentHTML("afterbegin",'<h3 class="services__title">Услуги</h3>'),a.first.innerHTML="",a.first.insertAdjacentHTML("afterbegin",'<article class="services__img__info">\n  <h3 class="services__subtitle">Консультация эпилептолога</h3>\n  <ul class="services__list">\n      <li class="services__list__item">\n          <h4 class="list__item__title">Первичная консультация  1500 грн</h4>\n          (включает в себя первичную диагностику нашего эпилептолога – Харчука Сергея Михайловича; при необходимости, назначение дополнительной диагностики у смежных специалистов; первичные подбор медикаментов)\n      </li>\n      <li class="services__list__item">\n          <h4 class="list__item__title">Повторная консультация 1000 грн</h4>\n          (повторная встреча, назначенная врачом  и согласованная  с пациентом; проводится  после дополнительного обследования и определённого периода приема препаратов)\n      </li>\n  </ul>\n</article>'),a.second.innerHTML="",a.second.insertAdjacentHTML("afterbegin",'<article class="services__img__info">\n    <h3 class="services__subtitle">Консультация психиатра</h3>\n    <ul class="services__list">\n        <li class="services__list__item">\n            <h4 class="list__item__title">Первичная консультация 1000 грн\n                    </h4>\n            (включает в себя первичную диагностику нашего психиатра – Дубининой Каролины Сергеевны; при необходимости, назначение дополнительного обследование у других специалистов; первичные подбор медикаментов)\n        </li>\n        <li class="services__list__item">\n            <h4 class="list__item__title">Повторная консультация 800 грн</h4>\n            (назначенная врачом и оговоренная с пациентом, повторная встреча, после дополнительного обследования или определённого периода приема препаратов)\n        </li>\n    </ul>\n</article>'),a.third.innerHTML="",a.third.insertAdjacentHTML("afterbegin",'<article class="services__img__info">\n    <h3 class="services__subtitle">Электроэнцефалография</h3>\n    <ul class="services__list">\n        <li class="services__list__item">\n            <h4 class="list__item__title">ЭЭГ-мониторинг 1000 грн</h4>\n            (Исследование работы головного мозга продолжительностью от 1 часа с последующим заключением врача функциональной диагностики)\n        </li>\n        <li class="services__list__item">\n            <h4 class="list__item__title">Стандарт 600 грн</h4>\n            (Аппаратное исследование активности головного мозга с функциональными пробами и дальнейшее заключение врача)\n        </li>\n    </ul>\n</article>'),a.forth.innerHTML="",a.forth.insertAdjacentHTML("afterbegin",'<article class="services__img__info">\n    <h3 class="services__subtitle">Консультация психолога</h3>\n    <ul class="services__list">\n        <li class="services__list__item">\n            <h4 class="list__item__title">Патопсихологическая диагностика 650 грн</h4>\n            (диагностика основных функций психики – памяти, внимание, мышления и эмоционального фона и подготовка заключения врача-психолога)\n        </li>\n        <li class="services__list__item">\n            <h4 class="list__item__title">Психокоррекционная сессия 700 грн</h4>\n            (включает в себя выявление запроса клиента и последующую их коррекция психотерапевтическими методиками)\n        </li>\n    </ul>\n</article>'),a.contactsTop.innerHTML="",a.contactsTop.insertAdjacentHTML("afterbegin",'<h3 class="contacts__title">Контакты</h3>')),a.contactsBottom.innerHTML="",a.contactsBottom.insertAdjacentHTML("afterbegin",'<h5 class="contacts__bottom__subtitle">Наш телефон:</h5>\n    <ul class="contacts__bottom__list">\n        <li class="contacts__bottom__items">044-486-77-25</li>\n        <li class="contacts__bottom__items">093-092-89-89</li>\n        <li class="contacts__bottom__items">098-092-89-89</li>\n    </ul>\n    <h5 class="contacts__bottom__subtitle">Адрес:</h5>\n    <p class="contacts__bottom__text">ул. Винниченка 14, <br> Медицинский центр </p>\n    <h5 class="contacts__bottom__subtitle">График работы:</h5>\n    <p class="contacts__bottom__text">Понедельник – Пятница: 9:00 до 20:00<br>Суббота: 10:00 до 18:00. </p>'),i()}),a.toggleUa.addEventListener("click",s=>{"flag--ukr"===s.target.classList.value&&(a.headerBottom.innerHTML="",a.headerBottom.insertAdjacentHTML("afterbegin",'<img class="purp_logo" src="./images/logo.png" alt="Epibrain logo">\n      <h1 class="header__welcome__message">Ласкаво просимо<br> на сайт медичного центру<br>EpiBrain</h1>'),a.list.innerHTML="",a.list.insertAdjacentHTML("afterbegin",'<li class="sidebar__nav__item"><a href="#masters__section" class="nav__item__link">Наші фахівці</a></li>\n      <li class="sidebar__nav__item"><a href="#advantages__section" class="nav__item__link">Переваги</a></li>\n      <li class="sidebar__nav__item"><a href="#services" class="nav__item__link">Послуги</a></li>\n      <li class="sidebar__nav__item"><a href="#contacts__section" class="nav__item__link">Контакти</a></li>'),a.mastersTop.innerHTML="",a.mastersTop.insertAdjacentHTML("afterbegin",'<h3 class="masters__title">Наші фахівці</h3>'),a.primaryMaster.innerHTML="",a.primaryMaster.insertAdjacentHTML("afterbegin",'<p class="masters__subtitle">\n      Кандидат медичних наук, <br> Лікар вищої категорії <br> Харчук Сергій Михайлович</p>\n      <ul class="masters__list">\n          <li class="masters__list__item">Лікар-психіатр, епілептолог</li>\n          <li class="masters__list__item">Віцепрезидент Української <br> протиепілептичної ліги</li>\n          <li class="masters__list__item">Досвід роботи в психіатріїї - 30 років</li>\n      </ul>\n      <p class="masters__description">У 1990 році закінчив Національний медичний університет імені О.       О. Богомольця за спеціальністю лікувальна справа.</p>'),a.secondaryMaster.innerHTML="",a.secondaryMaster.insertAdjacentHTML("afterbegin",'<p class="masters__subtitle">Лікар вищої       категорії <br> Дубініна Кароліна Сергіївна</p>\n      <ul class="masters__list">\n          <li class="masters__list__item">Лікар-психіатр</li>\n          <li class="masters__list__item">Досвід роботи в психіатрії - 25 років</li>\n      </ul>\n      <p class="masters__description">У 1994 році закінчила Національний медичний університет імені О.      О. Богомольця за спеціальністю лікувальна справа.</p>'),a.thirdMaster.innerHTML="",a.thirdMaster.insertAdjacentHTML("afterbegin",'<p class="masters__subtitle">Лікар вищої       категорії<br>Рейнгардт Ольга Борисівна</p>\n          <ul class="masters__list">\n              <li class="masters__list__item">Лікар-психіатр, епілептолог</li>\n              <li class="masters__list__item">Лікар функціональної діагностики</li>\n              <li class="masters__list__item">Досвід роботи в психіатрії - 20 років</li>\n          </ul>\n          <p class="masters__description">У 1998 році закінчила Національний медичний університет імені       О. О. Богомольця за спеціальністю лікувальна справа.</p>'),a.forthMaster.innerHTML="",a.forthMaster.insertAdjacentHTML("afterbegin",'<p class="masters__subtitle">Лікар-психолог<br>Ліссова-Лупаренко Анна Олексіївна</p>\n      <ul class="masters__list">\n          <li class="masters__list__item">Медичний психолог</li>\n          <li class="masters__list__item">Досвід роботи в психіатрії - 3 роки</li>\n      </ul>\n      <p class="masters__description">У 2016 році закінчила Національний медичний університет імені О. О. Богомольця за спеціальністю медична психологія.</p>'),a.advantagesTop.innerHTML="",a.advantagesTop.insertAdjacentHTML("afterbegin",' <h3 class="advantages__title">Переваги</h3>'),a.advantagesBottom.innerHTML="",a.advantagesBottom.insertAdjacentHTML("afterbegin",'<ul class="advantages__list">\n      <li class="advantages__item">\n          <div class="advantage__img__block experience__img"></div><br>\n          <span class="advantages__subtitle">Досвід</span>\n          <p class="advantages__text">Фахівці нашого центру вже понад 20 років працюють в сфері психіатрії, епілептології</p>\n      </li>\n      <li class="advantages__item">\n          <div class="advantage__img__block confidential__img"></div><br>\n          <span class="advantages__subtitle">Конфіденційність</span>\n          <p class="advantages__text">Специфіка роботи обумовлює необхідність створення довірчих відносин і почуття безпеки в роботі з психологом або психіатром</p>\n      </li>\n      <li class="advantages__item">\n          <div class="advantage__img__block doctor__img"></div><br>\n          <span class="advantages__subtitle">Профессіоналізм</span>\n          <p class="advantages__text">Ми - команда високопрофесійних фахівців з багаторічним досвідом роботи</p>\n      </li>\n      <li class="advantages__item">\n          <div class="advantage__img__block license__img"></div><br>\n          <span class="advantages__subtitle">Ліцензування</span>\n          <p class="advantages__text">Всі лікарі нашого центру мають ліцензію МОЗ на надання медичних послуг</p>\n      </li>\n      <li class="advantages__item">\n          <div class="advantage__img__block equip__img"></div><br>\n          <span class="advantages__subtitle">Професійне обладнання</span>\n          <p class="advantages__text">Висока якість обладнання і діагностичного інструментарію забезпечує ефективні діагностичні заходи та в подальшому результативність лікування</p>\n      </li>\n      <li class="advantages__item">\n          <div class="advantage__img__block client__img"></div><br>\n          <span class="advantages__subtitle">Клієнтоорєнтовність</span>\n          <p class="advantages__text">Індивідуальних підхід до кожного клієнта - основна філософія центру</p>\n      </li>\n  </ul>'),a.servicesTop.innerHTML="",a.servicesTop.insertAdjacentHTML("afterbegin",'<h3 class="services__title">Послуги</h3>'),a.first.innerHTML="",a.first.insertAdjacentHTML("afterbegin",'<article class="services__img__info">\n  <h3 class="services__subtitle">Консультація епілептолога</h3>\n  <ul class="services__list">\n      <li class="services__list__item">\n          <h4 class="list__item__title">Первинна консультація  1500 грн</h4>\n          (включає в себе первинну діагностику нашого епілептолога - Харчука Сергія Михайловича; за необхідноств, рекомендація додаткової діагностики у суміжних фахівців; первинне назначення медикаментів)\n      </li>\n      <li class="services__list__item">\n          <h4 class="list__item__title">Повторна консультація 1000 грн</h4>\n          (повторна зустріч, призначена лікарем і узгоджена з пацієнтом; проводиться після додаткового обстеження або певного періоду прийому препаратів)\n      </li>\n  </ul>\n</article>'),a.second.innerHTML="",a.second.insertAdjacentHTML("afterbegin",'<article class="services__img__info">\n    <h3 class="services__subtitle">Консультація психіатра</h3>\n    <ul class="services__list">\n        <li class="services__list__item">\n            <h4 class="list__item__title">Первинна консультація 1000 грн</h4>\n            (включає в себе первинну діагностику нашого психіатра - Дубініної Кароліни Сергіївни; за необхідності, рекомендацію додаткового обстеження у інших спеціалістів; первинний підбор медикаментів)\n        </li>\n        <li class="services__list__item">\n            <h4 class="list__item__title">Повторна консультація 800 грн</h4>\n            (Призначена лікарем і обговорена з паціентом, повторна зустріч, після додаткового обстаження або певного періоду прийому препаратів)\n        </li>\n    </ul>\n</article>'),a.third.innerHTML="",a.third.insertAdjacentHTML("afterbegin",'<article class="services__img__info">\n<h3 class="services__subtitle">Електроенцефалографія</h3>\n<ul class="services__list">\n    <li class="services__list__item">\n        <h4 class="list__item__title">ЕЕГ-моніторінг 1000 грн</h4>\n        (дослідження роботи головного мозку тривалістю від 1 години з написання висновку  лікаря функціональної діагностики)\n        \n    </li>\n    <li class="services__list__item">\n        <h4 class="list__item__title">Стандартна 600 грн</h4>\n        (апаратне дослідження активності головного мозку з функціональними пробами і подальшим висновком лікаря)\n    </li>\n</ul>\n</article>'),a.forth.innerHTML="",a.forth.insertAdjacentHTML("afterbegin",'<article class="services__img__info">\n<h3 class="services__subtitle">Консультація психолога</h3>\n<ul class="services__list">\n    <li class="services__list__item">\n        <h4 class="list__item__title">Патопсихологічна діагностика 650 грн</h4>\n        (діагностика основних функцій психіки - пам\'яті, уваги, мислення і емоційного фону і підготовка висновку лікаря-психолога)\n    </li>\n    <li class="services__list__item">\n        <h4 class="list__item__title">Психокорекційна сесія 700 грн</h4>\n        (включає в себе виявлення запиту клієнта, аналіз несвідомих механізмів формування «симптому» і подальша їх корекція)\n    </li>\n</ul>\n</article>'),a.contactsTop.innerHTML="",a.contactsTop.insertAdjacentHTML("afterbegin",'<h3 class="contacts__title">Контакти</h3>'),a.contactsBottom.innerHTML="",a.contactsBottom.insertAdjacentHTML("afterbegin",'<h5 class="contacts__bottom__subtitle">Наш телефон:</h5>\n<ul class="contacts__bottom__list">\n    <li class="contacts__bottom__items">044-486-77-25</li>\n    <li class="contacts__bottom__items">093-092-89-89</li>\n    <li class="contacts__bottom__items">098-092-89-89</li>\n</ul>\n<h5 class="contacts__bottom__subtitle">Адресса:</h5>\n<p class="contacts__bottom__text">вул. Винниченка 14, <br> Медичний центр</p>\n<h5 class="contacts__bottom__subtitle">Графік роботи:</h5>\n<p class="contacts__bottom__text">Понеділок – П\'ятниця: 9:00 до 20:00<br>Субота: 10:00 до 18:00. </p>'),i())}),a.list.addEventListener("click",s=>{"A"===s.target.nodeName&&i()}),a.toogleBtn.addEventListener("click",i);new Swiper(".swiper-container",{direction:"horizontal",loop:!1,speed:500,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})},function(s,t,e){}]);
//# sourceMappingURL=bundle.js.map