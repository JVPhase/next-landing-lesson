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
