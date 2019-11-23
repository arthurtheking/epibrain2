import './sass/main.scss';

const refs = {
    toogleBtn: document.querySelector('.toggle__btn'),
    sidebar: document.querySelector('.header__sidebar'),
    hamburgerBtn: document.querySelector('.hamburger'),
    list: document.querySelector('.header__sidebar__nav'),
    toggleUa: document.querySelector('#toggle--ukr'),
    toggleRu: document.querySelector('#toggle--ru'),

    headerTop: document.querySelector('.header__top'),
    headerBottom: document.querySelector('.header__bottom'),
    mastersTop: document.querySelector('.masters--top'),
    primaryMaster: document.querySelector('.primary--info'),
    secondaryMaster: document.querySelector('.secondary--info'),
    thirdMaster: document.querySelector('.third--info'),
    forthMaster: document.querySelector('.forth--info'),
    advantagesTop: document.querySelector('.advantages--top'),
    advantagesBottom: document.querySelector('.advantages--bottom'),
    servicesTop: document.querySelector('.services--top'),
    first: document.querySelector('.first'),
    second: document.querySelector('.second'),
    third: document.querySelector('.third'),
    forth: document.querySelector('.forth'),
    contactsTop: document.querySelector('.contacts--top'),
    contactsBottom: document.querySelector('.contacts__bottom--left')
}

const openMenu = () => {
    refs.sidebar.classList.toggle('active');
    refs.hamburgerBtn.classList.toggle('is-active');
    refs.toogleBtn.classList.toggle('swiped');
}

const menuClose = (e) => {
  if(e.target.nodeName === 'A') {
    openMenu();
  }
}


const langChangeToRus = e => {
  if(e.target.classList.value === 'flag--ru') {

      refs.headerBottom.innerHTML = '';
      refs.headerBottom.insertAdjacentHTML('afterbegin', `<img class="purp_logo" src="./images/logo.png" alt="Epibrain logo"> 
      <h1 class="header__welcome__message">Добро пожаловать<br> на сайт медицинского центра<br>EpiBrain</h1>`);

      refs.list.innerHTML = '';
      refs.list.insertAdjacentHTML('afterbegin', `<li class="sidebar__nav__item"><a href="#masters__section" class="nav__item__link">Наши специалисты</a></li>
      <li class="sidebar__nav__item"><a href="#advantages__section" class="nav__item__link">Преимущества</a></li>
      <li class="sidebar__nav__item"><a href="#services" class="nav__item__link">Услуги</a></li>
      <li class="sidebar__nav__item"><a href="#contacts__section" class="nav__item__link">Контакты</a></li>`);

      refs.mastersTop.innerHTML = '';
      refs.mastersTop.insertAdjacentHTML('afterbegin', `<h3 class="masters__title">Наши специалисты</h3>`)

      refs.primaryMaster.innerHTML = '';
      refs.primaryMaster.insertAdjacentHTML('afterbegin', ` <p class="masters__subtitle">
      Кандидат медицинских наук, <br> Врач высшей категории <br> Харчук Сергей Михайлович</p>
  <ul class="masters__list">
    <li class="masters__list__item">Врач-психиатр, эпилептолог</li>
    <li class="masters__list__item">Вицепрезидет Украинской <br> противоэпилептической лиги</li>
    <li class="masters__list__item">Стаж работы в психиатрии - 30 лет</li>
</ul>
<p class="masters__description">В 1990 году окончил Национальный медицинский университет имени О. О. Богомольца по специальности лечебное дело.</p>`);

    refs.secondaryMaster.innerHTML = '';
    refs.secondaryMaster.insertAdjacentHTML('afterbegin', `<p class="masters__subtitle">Врач высшей категории <br> Дубинина Каролина Сергеевна</p>
    <ul class="masters__list">
        <li class="masters__list__item">Врач-психиатр</li>
        <li class="masters__list__item">Стаж работы в психиатрии - 25 лет</li>
    </ul>
    <p class="masters__description">В 1994 году окончила Национальный медицинский университет имени О. О. Богомольца по специальности лечебное дело.</p>`);

    refs.thirdMaster.innerHTML = '';
    refs.thirdMaster.insertAdjacentHTML('afterbegin', `<p class="masters__subtitle">Врач высшей категории <br> Рейнгардт Ольга Борисовна</p>
    <ul class="masters__list">
        <li class="masters__list__item">Врач-психиатр, эпилептолог</li>
        <li class="masters__list__item">Врач функциональной диагностики</li>
        <li class="masters__list__item">Стаж работы в психиатрии - 20 лет</li>
    </ul>
    <p class="masters__description">В 1998  году окончила Национальный медицинский университет имени О. О. Богомольца по специальности лечебное дело.</p>`)
    
    refs.forthMaster.innerHTML = '';
      refs.forthMaster.insertAdjacentHTML('afterbegin', `<p class="masters__subtitle">Врач-психолог <br> Лиссова-Лупаренко Анна Алексеевна </p>
      <ul class="masters__list">
          <li class="masters__list__item">Медицинский психолог</li>
          <li class="masters__list__item">Стаж работы в психиатрии - 3 года</li>
      </ul>
      <p class="masters__description">В 2016 году окончила Национальный медицинский университет имени О. О. Богомольца по специальности медицинская психология.</p>`)

      refs.advantagesTop.innerHTML = '';
      refs.advantagesTop.insertAdjacentHTML('afterbegin', ` <h3 class="advantages__title">Преимущества</h3>`)

      refs.advantagesBottom.innerHTML = '';
      refs.advantagesBottom.insertAdjacentHTML('afterbegin', `<ul class="advantages__list">
      <li class="advantages__item">
          <div class="advantage__img__block experience__img"></div><br>
          <span class="advantages__subtitle">Опыт</span>
          <p class="advantages__text">Специалисты нашего центра уже более 20 лет работают в сфере психиатрии, эпилептологии</p>
      </li>
      <li class="advantages__item">
          <div class="advantage__img__block confidential__img"></div><br>
          <span class="advantages__subtitle">Конфиденциальность</span>
          <p class="advantages__text">Специфика работы подразумевает образование доверительных отношений и чувства безопасности в работе с психологом или психиатром</p>
      </li>
      <li class="advantages__item">
          <div class="advantage__img__block doctor__img"></div><br>
          <span class="advantages__subtitle">Профессионализм</span>
          <p class="advantages__text">Мы – команда высокопрофессиональных специалистов с многолетним опытом работы</p>
      </li>
      <li class="advantages__item">
          <div class="advantage__img__block license__img"></div><br>
          <span class="advantages__subtitle">Лицензированность</span>
          <p class="advantages__text">Все врачи нашего центра имеют лицензию МОЗ на предоставление медицинских услуг</p>
      </li>
      <li class="advantages__item">
          <div class="advantage__img__block equip__img"></div><br>
          <span class="advantages__subtitle">Профессиональное оборудование</span>
          <p class="advantages__text">Высокое качество оборудование и диагностического инструментария обеспечивает хорошие диагностические и, в дальнейшем, терапевтические результаты</p>
      </li>
      <li class="advantages__item">
          <div class="advantage__img__block client__img"></div><br>
          <span class="advantages__subtitle">Клиенториенторованность</span>
          <p class="advantages__text">Индивидуальный подход к каждому клиенту – основная философия центра</p>
      </li>
  </ul>`)

    refs.servicesTop.innerHTML = '';
    refs.servicesTop.insertAdjacentHTML('afterbegin', `<h3 class="services__title">Услуги</h3>`);

  refs.first.innerHTML = '';
  refs.first.insertAdjacentHTML('afterbegin', `<article class="services__img__info">
  <h3 class="services__subtitle">Консультация эпилептолога</h3>
  <ul class="services__list">
      <li class="services__list__item">
          <h4 class="list__item__title">Первичная консультация  1500 грн</h4>
          (включает в себя первичную диагностику нашего эпилептолога – Харчука Сергея Михайловича; при необходимости, назначение дополнительной диагностики у смежных специалистов; первичные подбор медикаментов)
      </li>
      <li class="services__list__item">
          <h4 class="list__item__title">Повторная консультация 1000 грн</h4>
          (повторная встреча, назначенная врачом  и согласованная  с пациентом; проводится  после дополнительного обследования и определённого периода приема препаратов)
      </li>
  </ul>
</article>`)

    refs.second.innerHTML = '';
    refs.second.insertAdjacentHTML('afterbegin', `<article class="services__img__info">
    <h3 class="services__subtitle">Консультация психиатра</h3>
    <ul class="services__list">
        <li class="services__list__item">
            <h4 class="list__item__title">Первичная консультация 1000 грн
                    </h4>
            (включает в себя первичную диагностику нашего психиатра – Дубининой Каролины Сергеевны; при необходимости, назначение дополнительного обследование у других специалистов; первичные подбор медикаментов)
        </li>
        <li class="services__list__item">
            <h4 class="list__item__title">Повторная консультация 800 грн</h4>
            (назначенная врачом и оговоренная с пациентом, повторная встреча, после дополнительного обследования или определённого периода приема препаратов)
        </li>
    </ul>
</article>`)

    refs.third.innerHTML = '';
    refs.third.insertAdjacentHTML('afterbegin', `<article class="services__img__info">
    <h3 class="services__subtitle">Электроэнцефалография</h3>
    <ul class="services__list">
        <li class="services__list__item">
            <h4 class="list__item__title">ЭЭГ-мониторинг 1000 грн</h4>
            (Исследование работы головного мозга продолжительностью от 1 часа с последующим заключением врача функциональной диагностики)
        </li>
        <li class="services__list__item">
            <h4 class="list__item__title">Стандарт 600 грн</h4>
            (Аппаратное исследование активности головного мозга с функциональными пробами и дальнейшее заключение врача)
        </li>
    </ul>
</article>`)

refs.forth.innerHTML = '';
refs.forth.insertAdjacentHTML('afterbegin', `<article class="services__img__info">
    <h3 class="services__subtitle">Консультация психолога</h3>
    <ul class="services__list">
        <li class="services__list__item">
            <h4 class="list__item__title">Патопсихологическая диагностика 650 грн</h4>
            (диагностика основных функций психики – памяти, внимание, мышления и эмоционального фона и подготовка заключения врача-психолога)
        </li>
        <li class="services__list__item">
            <h4 class="list__item__title">Психокоррекционная сессия 700 грн</h4>
            (включает в себя выявление запроса клиента и последующую их коррекция психотерапевтическими методиками)
        </li>
    </ul>
</article>`)

    refs.contactsTop.innerHTML = '';
    refs.contactsTop.insertAdjacentHTML('afterbegin', `<h3 class="contacts__title">Контакты</h3>`)
  }

    refs.contactsBottom.innerHTML = '';
    refs.contactsBottom.insertAdjacentHTML('afterbegin', `<h5 class="contacts__bottom__subtitle">Наш телефон:</h5>
    <ul class="contacts__bottom__list">
        <li class="contacts__bottom__items">044-486-77-25</li>
        <li class="contacts__bottom__items">093-092-89-89</li>
        <li class="contacts__bottom__items">098-092-89-89</li>
    </ul>
    <h5 class="contacts__bottom__subtitle">Адрес:</h5>
    <p class="contacts__bottom__text">ул. Винниченка 14, <br> Медицинский центр </p>
    <h5 class="contacts__bottom__subtitle">График работы:</h5>
    <p class="contacts__bottom__text">Понедельник – Пятница: 9:00 до 20:00<br>Суббота: 10:00 до 18:00. </p>`)

    openMenu();
}

const langChangeToUkr = e => {
  if(e.target.classList.value === 'flag--ukr') {

      refs.headerBottom.innerHTML = '';
      refs.headerBottom.insertAdjacentHTML('afterbegin', `<img class="purp_logo" src="./images/logo.png" alt="Epibrain logo">
      <h1 class="header__welcome__message">Ласкаво просимо<br> на сайт медичного центру<br>EpiBrain</h1>`);

      refs.list.innerHTML = '';
      refs.list.insertAdjacentHTML('afterbegin', `<li class="sidebar__nav__item"><a href="#masters__section" class="nav__item__link">Наші фахівці</a></li>
      <li class="sidebar__nav__item"><a href="#advantages__section" class="nav__item__link">Переваги</a></li>
      <li class="sidebar__nav__item"><a href="#services" class="nav__item__link">Послуги</a></li>
      <li class="sidebar__nav__item"><a href="#contacts__section" class="nav__item__link">Контакти</a></li>`);

      refs.mastersTop.innerHTML = '';
      refs.mastersTop.insertAdjacentHTML('afterbegin', `<h3 class="masters__title">Наші фахівці</h3>`)

      refs.primaryMaster.innerHTML = '';
      refs.primaryMaster.insertAdjacentHTML('afterbegin', `<p class="masters__subtitle">
      Кандидат медичних наук, <br> Лікар вищої категорії <br> Харчук Сергій Михайлович</p>
      <ul class="masters__list">
          <li class="masters__list__item">Лікар-психіатр, епілептолог</li>
          <li class="masters__list__item">Віцепрезидент Української <br> протиепілептичної ліги</li>
          <li class="masters__list__item">Досвід роботи в психіатріїї - 30 років</li>
      </ul>
      <p class="masters__description">У 1990 році закінчив Національний медичний університет імені О.       О. Богомольця за спеціальністю лікувальна справа.</p>`);

      refs.secondaryMaster.innerHTML = '';
      refs.secondaryMaster.insertAdjacentHTML('afterbegin', `<p class="masters__subtitle">Лікар вищої       категорії <br> Дубініна Кароліна Сергіївна</p>
      <ul class="masters__list">
          <li class="masters__list__item">Лікар-психіатр</li>
          <li class="masters__list__item">Досвід роботи в психіатрії - 25 років</li>
      </ul>
      <p class="masters__description">У 1994 році закінчила Національний медичний університет імені О.      О. Богомольця за спеціальністю лікувальна справа.</p>`);

      refs.thirdMaster.innerHTML = '';
          refs.thirdMaster.insertAdjacentHTML('afterbegin', `<p class="masters__subtitle">Лікар вищої       категорії<br>Рейнгардт Ольга Борисівна</p>
          <ul class="masters__list">
              <li class="masters__list__item">Лікар-психіатр, епілептолог</li>
              <li class="masters__list__item">Лікар функціональної діагностики</li>
              <li class="masters__list__item">Досвід роботи в психіатрії - 20 років</li>
          </ul>
          <p class="masters__description">У 1998 році закінчила Національний медичний університет імені       О. О. Богомольця за спеціальністю лікувальна справа.</p>`)

      refs.forthMaster.innerHTML = '';
      refs.forthMaster.insertAdjacentHTML('afterbegin', `<p class="masters__subtitle">Лікар-психолог<br>Ліссова-Лупаренко Анна Олексіївна</p>
      <ul class="masters__list">
          <li class="masters__list__item">Медичний психолог</li>
          <li class="masters__list__item">Досвід роботи в психіатрії - 3 роки</li>
      </ul>
      <p class="masters__description">У 2016 році закінчила Національний медичний університет імені О. О. Богомольця за спеціальністю медична психологія.</p>`)

      refs.advantagesTop.innerHTML = '';
      refs.advantagesTop.insertAdjacentHTML('afterbegin', ` <h3 class="advantages__title">Переваги</h3>`)

      refs.advantagesBottom.innerHTML = '';
      refs.advantagesBottom.insertAdjacentHTML('afterbegin', `<ul class="advantages__list">
      <li class="advantages__item">
          <div class="advantage__img__block experience__img"></div><br>
          <span class="advantages__subtitle">Досвід</span>
          <p class="advantages__text">Фахівці нашого центру вже понад 20 років працюють в сфері психіатрії, епілептології</p>
      </li>
      <li class="advantages__item">
          <div class="advantage__img__block confidential__img"></div><br>
          <span class="advantages__subtitle">Конфіденційність</span>
          <p class="advantages__text">Специфіка роботи обумовлює необхідність створення довірчих відносин і почуття безпеки в роботі з психологом або психіатром</p>
      </li>
      <li class="advantages__item">
          <div class="advantage__img__block doctor__img"></div><br>
          <span class="advantages__subtitle">Профессіоналізм</span>
          <p class="advantages__text">Ми - команда високопрофесійних фахівців з багаторічним досвідом роботи</p>
      </li>
      <li class="advantages__item">
          <div class="advantage__img__block license__img"></div><br>
          <span class="advantages__subtitle">Ліцензування</span>
          <p class="advantages__text">Всі лікарі нашого центру мають ліцензію МОЗ на надання медичних послуг</p>
      </li>
      <li class="advantages__item">
          <div class="advantage__img__block equip__img"></div><br>
          <span class="advantages__subtitle">Професійне обладнання</span>
          <p class="advantages__text">Висока якість обладнання і діагностичного інструментарію забезпечує ефективні діагностичні заходи та в подальшому результативність лікування</p>
      </li>
      <li class="advantages__item">
          <div class="advantage__img__block client__img"></div><br>
          <span class="advantages__subtitle">Клієнтоорєнтовність</span>
          <p class="advantages__text">Індивідуальних підхід до кожного клієнта - основна філософія центру</p>
      </li>
  </ul>`)

  refs.servicesTop.innerHTML = '';
  refs.servicesTop.insertAdjacentHTML('afterbegin', `<h3 class="services__title">Послуги</h3>`);

  refs.first.innerHTML = '';
  refs.first.insertAdjacentHTML('afterbegin', `<article class="services__img__info">
  <h3 class="services__subtitle">Консультація епілептолога</h3>
  <ul class="services__list">
      <li class="services__list__item">
          <h4 class="list__item__title">Первинна консультація  1500 грн</h4>
          (включає в себе первинну діагностику нашого епілептолога - Харчука Сергія Михайловича; за необхідноств, рекомендація додаткової діагностики у суміжних фахівців; первинне назначення медикаментів)
      </li>
      <li class="services__list__item">
          <h4 class="list__item__title">Повторна консультація 1000 грн</h4>
          (повторна зустріч, призначена лікарем і узгоджена з пацієнтом; проводиться після додаткового обстеження або певного періоду прийому препаратів)
      </li>
  </ul>
</article>`)

    refs.second.innerHTML = '';
    refs.second.insertAdjacentHTML('afterbegin', `<article class="services__img__info">
    <h3 class="services__subtitle">Консультація психіатра</h3>
    <ul class="services__list">
        <li class="services__list__item">
            <h4 class="list__item__title">Первинна консультація 1000 грн</h4>
            (включає в себе первинну діагностику нашого психіатра - Дубініної Кароліни Сергіївни; за необхідності, рекомендацію додаткового обстеження у інших спеціалістів; первинний підбор медикаментів)
        </li>
        <li class="services__list__item">
            <h4 class="list__item__title">Повторна консультація 800 грн</h4>
            (Призначена лікарем і обговорена з паціентом, повторна зустріч, після додаткового обстаження або певного періоду прийому препаратів)
        </li>
    </ul>
</article>`)

refs.third.innerHTML = '';
refs.third.insertAdjacentHTML('afterbegin', `<article class="services__img__info">
<h3 class="services__subtitle">Електроенцефалографія</h3>
<ul class="services__list">
    <li class="services__list__item">
        <h4 class="list__item__title">ЕЕГ-моніторінг 1000 грн</h4>
        (дослідження роботи головного мозку тривалістю від 1 години з написання висновку  лікаря функціональної діагностики)
        
    </li>
    <li class="services__list__item">
        <h4 class="list__item__title">Стандартна 600 грн</h4>
        (апаратне дослідження активності головного мозку з функціональними пробами і подальшим висновком лікаря)
    </li>
</ul>
</article>`)

refs.forth.innerHTML = '';
refs.forth.insertAdjacentHTML('afterbegin', `<article class="services__img__info">
<h3 class="services__subtitle">Консультація психолога</h3>
<ul class="services__list">
    <li class="services__list__item">
        <h4 class="list__item__title">Патопсихологічна діагностика 650 грн</h4>
        (діагностика основних функцій психіки - пам'яті, уваги, мислення і емоційного фону і підготовка висновку лікаря-психолога)
    </li>
    <li class="services__list__item">
        <h4 class="list__item__title">Психокорекційна сесія 700 грн</h4>
        (включає в себе виявлення запиту клієнта, аналіз несвідомих механізмів формування «симптому» і подальша їх корекція)
    </li>
</ul>
</article>`)

refs.contactsTop.innerHTML = '';
refs.contactsTop.insertAdjacentHTML('afterbegin', `<h3 class="contacts__title">Контакти</h3>`)

refs.contactsBottom.innerHTML = '';
refs.contactsBottom.insertAdjacentHTML('afterbegin', `<h5 class="contacts__bottom__subtitle">Наш телефон:</h5>
<ul class="contacts__bottom__list">
    <li class="contacts__bottom__items">044-486-77-25</li>
    <li class="contacts__bottom__items">093-092-89-89</li>
    <li class="contacts__bottom__items">098-092-89-89</li>
</ul>
<h5 class="contacts__bottom__subtitle">Адресса:</h5>
<p class="contacts__bottom__text">вул. Винниченка 14, <br> Медичний центр</p>
<h5 class="contacts__bottom__subtitle">Графік роботи:</h5>
<p class="contacts__bottom__text">Понеділок – П'ятниця: 9:00 до 20:00<br>Субота: 10:00 до 18:00. </p>`)

openMenu();
  }
}

refs.toggleRu.addEventListener('click', langChangeToRus);
refs.toggleUa.addEventListener('click', langChangeToUkr);
refs.list.addEventListener('click', menuClose);
refs.toogleBtn.addEventListener('click', openMenu);

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 500,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })