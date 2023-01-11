# next-landing-lesson

## Адаптивная верстка

Основной инструмент для адаптивной верстки - это медиа-запросы. Они позволяют задавать различные стили для разных размеров экрана. (Подробнее о медиа-запросах можно почитать [здесь](https://html5css.ru/css/css3_mediaqueries_ex.php)).

Для того, чтобы определить точку с которой будут применяться адаптивные стили, попробуйте уменьшать ширину окна браузера. После того, как вы увидите, что контент перестал помещаться, запишите эту ширину в медиа-запрос.

Я выбрал ширину 1270px.

Теперь сравним элементы мобильной и декстопной версии макета лендинга. Сделаем это по блокам.

### Header

В мобильной версии отсутствуют ссылки Home, Product, Pricing, About, Contact, а также ссылки на соц. сети. Вместо них есть иконка меню, которая открывает боковое меню. Вместо заголовка `h1` в мобильной версии используется `h2`. Давайте добавим элементы мобильной версии в разметку.

Теперь блок `Header` выглядит так:

```tsx
<div className={styles.Header}>
  <div className={styles.Navigation}>
    <a href="#" className={styles.HeaderLink}>
      Home
    </a>
    <a href="#" className={styles.HeaderLink}>
      Product
    </a>
    <a href="#" className={styles.HeaderLink}>
      Pricing
    </a>
    <a href="#" className={styles.HeaderLink}>
      About
    </a>
    <a href="#" className={styles.HeaderLink}>
      Contact
    </a>
    <a href="#" className={styles.HeaderLogo}>
      <Image src="/logo.png" width={186} height={58} alt="Logo" />
    </a>
    <div className={styles.HeaderSocialLinks}>
      <SocialLinks />
    </div>
    <div className={styles.HeaderMenu}>
      <Image src="/burger-menu.svg" width={28} height={16} alt="Menu" />
    </div>
  </div>
  <h1 className={styles.HeaderTitle}>
    The best products <br />
    start with Figma
  </h1>
  <h2 className={styles.HeaderTitleMobile}>
    The best
    <br />
    products start
    <br />
    with Figma
  </h2>
  <h4 className={styles.HeaderSubtitle}>
    Most calendars are designed for teams. Slate is designed
    <br />
    for freelancers
  </h4>
  <Button className={styles.HeaderButton}>
    <h3>Try For Free</h3>
  </Button>
</div>
```

Теперь добавим стили для мобильной версии в `Home.module.css`.

```css
.HeaderMenu,
.HeaderTitleMobile {
  display: none; /* скрываем элементы блока HeaderMenu и HeaderTitleMobile в десктопной версии */
}

@media (max-width: 1270px) { /* медиа-запрос для мобильной версии */
  .Header {
    height: 833px; /* высота элемента блока Header 833 пикселей */
  }

  .Navigation {
    padding: 16px; /* внутренние отступы элемента блока Navigation 16 пикселей сверху и снизу, 16 пикселей по бокам */
    justify-content: space-between; /* элементы блока Navigation выстраиваются в ряд, расстояние между элементами равно ширине экрана минус ширина элементов блока Navigation */
    margin-bottom: 60px; /* нижний внешний отступ элемента блока Navigation 50 пикселей */
  }

  .HeaderLink,
  .HeaderSocialLinks,
  .HeaderTitle {
    display: none; /* скрываем элементы блока HeaderLink, HeaderSocialLinks, HeaderTitle при ширине экрана меньше 1270 пикселей */
  }

  .HeaderMenu,
  .HeaderTitleMobile {
    display: block; /* показываем элементы блока HeaderMenu, HeaderTitleMobile при ширине экрана меньше 1270 пикселей */
  }

  .HeaderMenu {
    display: flex;
    align-items: center; /* элементы блока HeaderMenu выравниваются по вертикали по центру */
  }

  .HeaderTitleMobile,
  .HeaderSubtitle {
    padding: 0 16px; /* внутренние отступы элемента блока HeaderTitleMobile 0 пикселей сверху и снизу, 16 пикселей по бокам */
  }
}
```

### Features

В мобильной версии в блоке Feutures добавляется элемент видео над списком преимуществ.

Теперь блок `Features` выглядит так:

```tsx
<div className={styles.Features}>
  <h2>Features</h2>
  <h4>
    Most calendars are designed for teams. <br />
    Slate is designed for freelancers
  </h4>
  <div className={styles.FeaturesVideoMobile}>
    <Button className={styles.FeaturesVideoButtonMobile}>
      <Image
        src="/play.svg"
        alt="play"
        className={styles.FeaturesVideoButtonIcon}
        width={13}
        height={15}
      />
    </Button>
  </div>
  <div className={styles.FeaturesList}>
    <div>
      <Image
        src="/shapes.svg"
        alt="shapes"
        className={styles.FeaturesListItemIcon}
        width={47}
        height={47}
      />
      <h3>
        OpenType features
        <br />
        Variable fonts
      </h3>
      <p className={styles.FeaturesListItemText}>
        Slate helps you see how many more days you need to work to reach
        your financial goal.
      </p>
    </div>
    <div>
      <Image
        src="/drawning.svg"
        alt="dravning"
        className={styles.FeaturesListItemIcon}
        width={45}
        height={42}
      />
      <h3>Design with real data</h3>
      <p className={styles.FeaturesListItemText}>
        Slate helps you see how many more days you need to work to reach
        your financial goal.
      </p>
    </div>
    <div>
      <Image
        src="/brush.svg"
        alt="brush"
        className={styles.FeaturesListItemIcon}
        width={49}
        height={47}
      />
      <h3>
        Fastest way to
        <br />
        take action
      </h3>
      <p className={styles.FeaturesListItemText}>
        Slate helps you see how many more days you need to work to reach
        your financial goal.
      </p>
    </div>
  </div>
  <div className={styles.FeaturesVideo}>
    <Button className={styles.FeaturesVideoButton}>
      <Image
        src="/play.svg"
        alt="play"
        className={styles.FeaturesVideoButtonIcon}
        width={40}
        height={48}
      />
    </Button>
  </div>
</div>
```

Теперь скроем элемент `FeaturesVideoMobile` в десктопной версии:

было

```css
.HeaderMenu,
.HeaderTitleMobile {
  display: none; /* скрываем элементы блока HeaderMenu и HeaderTitleMobile в десктопной версии */
}
```

стало

```css
.HeaderMenu,
.HeaderTitleMobile,
.FeaturesVideoMobile {
  display: none; /* скрываем элементы блока HeaderMenu, блока HeaderTitleMobile, блока FeaturesVideoMobile */
}
```

Теперь добавим стили для мобильной версии в медиа-запрос `@media (max-width: 1270px)`:

```css
.Features {
  margin-top: 110px; /* верхний внешний отступ элемента блока Features 110 пикселей */
}

.FeaturesVideoMobile {
  display: block; /* показываем элемент блока FeaturesVideoMobile при ширине экрана меньше 1270 пикселей */
  margin: 50px auto 0; /* верхний внешний отступ блока FeaturesVideoMobile 132 пикселей, отступы по бокам автоматические */
  width: 100%; /* ширина блока FeaturesVideoMobile 100% */
  max-width: 386px; /* максимальная ширина блока FeaturesVideoMobile 386 пикселей */
  height: 229px; /* высота блока FeaturesVideoMobile 229 пикселей */
  background-image: url(/screen-mobile.png); /* задний фон блока FeaturesVideoMobile */
  background-size: cover; /* фоновое изображение растягивается на всю ширину блока */
  background-position: center; /* фоновое изображение выравнивается по центру */
  background-repeat: no-repeat; /* фоновое изображение не повторяется */
  display: flex; /* для позиционирование дочернего элемента блока FeaturesVideoMobile */
  justify-content: center; /* дочерний элемент блока FeaturesVideoMobile выравнивается по центру по горизонтали */
  align-items: center; /* дочерний элемент блока FeaturesVideoMobile выравнивается по центру по вертикали */
}

.FeaturesVideoButtonMobile {
  width: 61px; /* ширина элемента блока FeaturesVideoButtonMobile 61 пикселей */
  height: 61px; /* высота элемента блока FeaturesVideoButtonMobile 61 пикселей */
}

.FeaturesList {
  width: 255px; /* ширина элемента блока FeaturesList 255 пикселей */
  grid-template-columns: auto; /* количество колонок в сетке элемента блока FeaturesList 1 */
  row-gap: 75px; /* расстояние между строками элемента блока FeaturesList 75 пикселей */
}

.FeaturesVideo {
  display: none; /* скрываем элемент блока FeaturesVideo при ширине экрана меньше 1270 пикселей */
}
```

### Advantage

Блок `Advantage` в мобильной версии отличается только стилями. Добавим стили для мобильной версии в медиа-запрос `@media (max-width: 1270px)`:

```css
.Advantage {
  text-align: center; /* текст элемента блока Advantage выравнивается по центру */
  grid-template-columns: auto; /* количество колонок в сетке элемента блока Advantage 1 */
  row-gap: 60px; /* расстояние между строками элемента блока Advantage 60 пикселей */
  margin: 126px auto; /* верхний и нижний внешние отступы блока Advantage 126 пикселей, отступы по бокам автоматические */
}

.Advantage img { /* элемент изображения блока Advantage */
  width: 372px; /* ширина изображения блока Advantage 372 пикселей */
  height: 225px; /* высота изображения блока Advantage 225 пикселей */
}
```

### Newsletters

Блок `NewsLetter` в мобильной версии изображение помещено под заголовком. Добавим это изображение в разметку блока `NewsLetter`:

Теперь блок выглядит так:

```tsx
<div className={styles.Newsletter}>
  <div>
    <Image
      src="/newsletter.svg"
      alt="newsletter"
      width={678}
      height={515}
    />
  </div>
  <div>
    <h3>At your fingertips</h3>
    <h2>
      Lightning fast <br />
      prototyping
    </h2>
    <Image
      src="/newsletter.svg"
      alt="newsletter"
      width={371}
      height={347}
      className={styles.NewsletterImageMobile}
    />
    <form className={styles.NewsletterForm}>
      <h3>Subscribe to our Newsletter</h3>
      <p>Available exclusivery on Figmaland</p>
      <Input
        placeholder="Your email"
        className={styles.NewsletterInput}
      />
      <Button className={styles.NewsletterButton}>Subscribe</Button>
    </form>
  </div>
</div>
```

Теперь скроем элемент `NewsletterImageMobile` в десктопной версии:

было

```css
.HeaderMenu,
.HeaderTitleMobile,
.FeaturesVideoMobile {
  display: none; /* скрываем элементы блока HeaderMenu, блока HeaderTitleMobile, блока FeaturesVideoMobile */
}
```

стало

```css
.HeaderMenu,
.HeaderTitleMobile,
.FeaturesVideoMobile,
.NewsletterImageMobile {
  display: none; /* скрываем элементы блока HeaderMenu, блока HeaderTitleMobile, блока FeaturesVideoMobile, блока NewsletterImageMobile */
}
```

Теперь добавим стили для мобильной версии в медиа-запрос `@media (max-width: 1270px)`:

```css
.Newsletter {
  text-align: center; /* текст элемента блока Newsletter выравнивается по центру */
  grid-template-columns: auto; /* количество колонок в сетке элемента блока Newsletter 1 */
}

.Newsletter > div:first-child {
  /* первый дочерний элемент блока Newsletter */
  display: none; /* скрываем элемент при ширине экрана меньше 1270 пикселей */
}

.Newsletter > div:last-child {
  /* последний дочерний элемент блока Newsletter */
  padding: 0; /* обнуляем внутренние отступы */
}

.NewsletterImageMobile {
  display: inline-block; /* элемент блока NewsletterImageMobile отображается как строчный элемент */
}

.NewsletterForm {
  padding: 0 33px; /* внутренние отступы элемента блока NewsletterForm 33 пикселя по бокам */
  max-width: 418px; /* максимальная ширина элемента блока NewsletterForm 418 пикселей */
  margin: 0 auto; /* отступы по бокам автоматические */
}

.NewsletterInput,
.NewsletterButton {
  width: 100%; /* ширина элемента блока NewsletterInput 100% */
}

.NewsletterButton {
  margin: 0; /* обнуляем внешние отступы */
}
```

### Partners

Блок `Partners` в мобильной версии отличается только стилями. Добавим стили для мобильной версии в медиа-запрос `@media (max-width: 1270px)`:

```css
.PartnersList {
  border: none; /* убираем рамку элемента блока PartnersList */
  width: 275px; /* ширина элемента блока PartnersList 275 пикселей */
}

.PartnersItem {
  flex: 1 1 100%; /* элемент блока PartnersItem занимает 100% ширины родительского элемента */
  margin-bottom: 30px; /* нижний внешний отступ элемента блока PartnersItem 30 пикселей */
  display: none;
}

.PartnersItem img {
  width: 100%; /* ширина изображения элемента блока PartnersItem 100% */
}

.PartnersItem:nth-child(1),
.PartnersItem:nth-child(2),
.PartnersItem:nth-child(3) {
  /* первые три элемента блока PartnersItem */
  display: block; /* элемент блока PartnersItem отображается как блочный элемент */
}
```

### Testimonials

Блок `Partners` в мобильной версии отличается только стилями. Добавим стили для мобильной версии в медиа-запрос `@media (max-width: 1270px)`:

```css
.Testimonials h4 {
  font-size: 20px; /* размер шрифта элемента блока Testimonials 20 пикселей */
  line-height: 20px; /* высота строки элемента блока Testimonials 20 пикселей */
}
```

### Pricing

Блок `Pricing` в мобильной версии отличается только стилями. Добавим стили для мобильной версии в медиа-запрос `@media (max-width: 1270px)`:

```css
.PricingList {
  grid-template-columns: auto; /* количество колонок в сетке элемента блока PricingList 1 */
  row-gap: 50px; /* расстояние между строками элемента блока PricingList 50 пикселей */
  max-width: 335px; /* максимальная ширина элемента блока PricingList 335 пикселей */
}
```

### Contact

В блоке `Contact` в мобильной версии компонент `SocialLinks` и блок `ContactInfo` находятся над формой обратной связи. Давайте добавим их в разметку блока `Contact`:

```tsx
<div className={styles.ContactRow}>
  <div className={styles.ContactInfoMobile}>
    <SocialLinks isBlue />
    <div className={styles.ContactInfoItem}>
      <Image src="/pin-blue.svg" alt="pin" width={27} height={33} />
      <h5>
        6386 Spring St undefined Anchorage,
        <br />
        Georgia 12473 United States
      </h5>
    </div>
    <div className={styles.ContactInfoItem}>
      <Image src="/phone-blue.svg" alt="phone" width={21} height={33} />
      <h5>(843) 555-0130</h5>
    </div>
    <div className={styles.ContactInfoItem}>
      <Image src="/mail-blue.svg" alt="mail" width={27} height={22} />
      <h5>willie.jennings@example.com</h5>
    </div>
  </div>
  <form className={styles.ContactForm}>
    <h3>Contact Us</h3>
    <Input
      className={styles.ContactFormInput}
      placeholder="Your Name"
    />
    <Input
      className={styles.ContactFormInput}
      placeholder="Your Email"
    />
    <textarea
      className={styles.ContactFormTextarea}
      placeholder="Your Message"
    />
    <Button className={styles.ContactFormButton}>Send</Button>
  </form>
  <div className={styles.ContactInfo}>
    <div className={styles.ContactInfoItem}>
      <Image src="/pin-blue.svg" alt="pin" width={27} height={33} />
      <h5>
        6386 Spring St undefined Anchorage,
        <br />
        Georgia 12473 United States
      </h5>
    </div>
    <div className={styles.ContactInfoItem}>
      <Image src="/phone-blue.svg" alt="phone" width={21} height={33} />
      <h5>(843) 555-0130</h5>
    </div>
    <div className={styles.ContactInfoItem}>
      <Image src="/mail-blue.svg" alt="mail" width={27} height={22} />
      <h5>willie.jennings@example.com</h5>
    </div>
    <div className={styles.ContactInfoMap}>
      <Image src="/map.jpg" alt="map" width={516} height={323} />
    </div>
    <SocialLinks isBlue />
  </div>
</div>
```

Теперь скроем элемент `NewsletterImageMobile` в десктопной версии:

было

```css
.HeaderMenu,
.HeaderTitleMobile,
.FeaturesVideoMobile,
.NewsletterImageMobile,
 {
  display: none; /* скрываем элементы блока HeaderMenu, блока HeaderTitleMobile, блока FeaturesVideoMobile, блока NewsletterImageMobile */
}
```

стало

```css
.HeaderMenu,
.HeaderTitleMobile,
.FeaturesVideoMobile,
.NewsletterImageMobile,
.ContactInfoMobile {
  display: none; /* скрываем элементы блока HeaderMenu, элементы блока HeaderTitleMobile, элементы блока FeaturesVideoMobile, элементы блока NewsletterImageMobile, элементы блока ContactInfoMobile */
}
```

Теперь добавим стили для мобильной версии в медиа-запрос `@media (max-width: 1270px)`:

```css
.ContactRow {
  display: block; /* элемент блока ContactRow отображается как блочный элемент */
}

.ContactInfo {
  display: none; /* скрываем элемент при ширине экрана меньше 1270 пикселей */
}

.ContactInfoMobile {
  display: block; /* элемент блока ContactInfoMobile отображается как блочный элемент */
  max-width: 378px; /* максимальная ширина элемента блока ContactInfoMobile 378 пикселей */
  margin: 0 auto 100px; /* отступы по бокам автоматические, нижний внешний отступ элемента блока ContactInfoMobile 100 пикселей */
}

.ContactInfoMobile > div:first-child {
  margin-bottom: 100px; /* нижний внешний отступ элемента блока ContactInfoMobile 150 пикселей */
}

.ContactInfoItem {
  display: flex; /* элемент блока ContactInfoItem отображается как блочный элемент */
  margin-bottom: 20px; /* нижний внешний отступ элемента блока ContactInfoItem 20 пикселей */
}

.ContactInfoItem img {
  width: 60px; /* ширина изображения элемента блока ContactInfoItem 60 пикселей */
}

.ContactInfoItem h5 {
  height: unset; /* высота элемента блока ContactInfoItem не задана */
}

.ContactForm {
  margin: 0 auto; /* отступы по бокам автоматические */
  width: 100%; /* ширина элемента блока ContactForm 100% */
  max-width: 378px; /* максимальная ширина элемента блока ContactForm 378 пикселей */
}

.ContactFormTextarea {
  width: 100%; /* ширина элемента блока ContactFormTextarea 100% */
}
```

### Footer

Добавим стили для мобильной версии в медиа-запрос `@media (max-width: 1270px)`:

```css
.Footer {
  padding: 107px 0; /* внутренние отступы элемента блока Footer 107 пикселей сверху и снизу, 0 пикселей по бокам */
}

.FooterRow {
  width: 300px; /* ширина элемента блока FooterRow 300 пикселей */
  text-align: center; /* выравнивание текста по центру */
  display: block; /* элемент блока FooterRow отображается как блочный элемент */
}

.FooterItem {
  margin: 0 auto 100px !important; /* отступы по бокам автоматические, нижний внешний отступ элемента блока FooterItem 100 пикселей */
}

.FooterContact {
  text-align: left; /* выравнивание текста по левому краю */
}
```

Вы просто класс! Теперь лендинг адаптирован под мобильные устройства.

На этом пока все. Однако вполне возможно урок будет дополнен в будущем.
