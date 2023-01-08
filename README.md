# next-landing-lesson

## Страницы

Страницы это компоненты, которые отображаются в браузере. Страницы могут быть различными, но в основном они представляют собой страницы сайта, которые отображаются в браузере.

Страницы находятся в папке `pages` и имеют расширение такое же, как и компонентов `.tsx`.

## Создание страницы

Чтобы создать страницу, просто создайте файл в папке `pages` с расширением `.tsx`. Например, чтобы создать страницу `about`, создайте файл `about.tsx` в папке `pages`.

В нашем примере страница всего лишь одна (index.tsx), но в реальном проекте их может быть много.

Для начала уберем все, что есть в файле `index.tsx` и оставим только следующее:

```tsx
import styles from '../styles/Home.module.css';
import SocialLinks from '../components/SocialLinks';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Home() {
  return (
    <div className={styles.Root}>
      
    </div>
  );
}
```

За стили страницы отвечает файл `styles/Home.module.css`. Его мы тоже очистим и оставим только следующее:

```css
.Root {
  background: #ffffff;
}
```

Рядом с файлом `Home.module.css` есть файл `global.css`. Это глобальные стили, которые применяются ко всему проекту. В нем мы уберем все, что есть и оставим только следующее:

```css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

/* следующие стили элементов взяты из компонентов фигмы  */

h1 {
  font-size: 74px;
  line-height: 84px;
  font-weight: 700;
}

h2 {
  font-size: 48px;
  line-height: 56px;
  font-weight: 400;
}

h3 {
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
}

h4 {
  font-size: 28px;
  line-height: 40px;
  font-weight: 400;
}

h5 {
  font-size: 16px;
  line-height: 23px;
  font-weight: 400;
}

p {
  font-size: 18px;
  line-height: 25px;
  font-weight: 400;
}

a {
  text-decoration: none;
  font-size: 15px;
  line-height: 28px;
}
```

Теперь приступим к верстке страницы. Для этого поделим макет на несколько блоков:

  1. Header
  2. Features
  3. Advantage
  4. Newsletter
  5. Partners
  6. Testimonials
  7. Pricing
  8. Contact
  9. Footer

Отобразим это на странице добавив в `div` с классом `Root` следующее:

```tsx
<div className={styles.Header}></div>
<div className={styles.Features}></div>
<div className={styles.Advantage}></div>
<div className={styles.Newsletter}></div>
<div className={styles.Partners}></div>
<div className={styles.Testimonials}></div>
<div className={styles.Pricing}></div>
<div className={styles.Contact}></div>
<div className={styles.Footer}></div>
```

Теперь `index.tsx` должен выглядеть следующим образом:

```tsx
import styles from '../styles/Home.module.css';
import SocialLinks from '../components/SocialLinks';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Home() {
  return (
    <div className={styles.Root}>
      <div className={styles.Header}></div>
      <div className={styles.Features}></div>
      <div className={styles.Advantage}></div>
      <div className={styles.Newsletter}></div>
      <div className={styles.Partners}></div>
      <div className={styles.Testimonials}></div>
      <div className={styles.Pricing}></div>
      <div className={styles.Contact}></div>
      <div className={styles.Footer}></div>
    </div>
  );
}
```

### Header

Приступим к верстке блока `Header`. В нем есть несколько элементов:

  1. Навигация (здесь мы используем тег `div` с классом `Navigation`, так как внутри него будут дочерние элементы)
  2. Заголовок (здесь тег `h1` с классом `HeaderTitle`)
  3. Подзаголовок (здесь тег `h4` c классом `HeaderSubtitle`)
  4. Кнопка (здесь мы используем компонент `Button` с классом `HeaderButton`)

отобразим это на странице добавив в `div` с классом `Header` следующее:

```tsx
<div className={styles.Navigation}></div>
<h1 className={styles.HeaderTitle}>
  The best products <br /> {/*тег br используется для переноса текста на новую строку*/}
  start with Figma
</h1>
<h4 className={styles.HeaderSubtitle}>
  Most calendars are designed for teams. Slate is designed
  <br />
  for freelancers
</h4>
<Button className={styles.HeaderButton}>
  <h3>Try For Free</h3>
</Button>
```

В блоке `Header` один из элементов остался в виде черного ящика. Это блок навигации. В нем есть несколько элементов:

  1. Ссылки (здесь мы используем тег `a` с классом `HeaderLink`)
  2. Логотип (здесь мы используем тег `a` с классом `HeaderLogo` и внутри него компонент для изображений Image (не забудьте импортировать его в начале файла `import Image from 'next/image';`))
  3. социальные сети (здесь мы используем компонент `SocialLinks` обернутый в `div` с классом `HeaderSocialLinks`)
  
отобразим это на странице добавив в `div` с классом `Navigation` следующее:
  
```tsx
<a href='#' className={styles.HeaderLink}>Home</a>
<a href='#' className={styles.HeaderLink}>Product</a>
<a href='#' className={styles.HeaderLink}>Pricing</a>
<a href='#' className={styles.HeaderLink}>About</a>
<a href='#' className={styles.HeaderLink}>Contact</a>
<a href='#' className={styles.HeaderLogo}>
  <Image src='/logo.png'  width={186} height={58} alt='Logo' />
</a>
<div className={styles.HeaderSocialLinks}>
  <SocialLinks />
</div>
```

index.tsx

```tsx
import styles from '../styles/Home.module.css';
import SocialLinks from '../components/SocialLinks';
import Button from '../components/Button';
import Input from '../components/Input';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.Root}>
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
        </div>
        <h1 className={styles.HeaderTitle}>
          The best products <br />
          start with Figma
        </h1>
        <h4 className={styles.HeaderSubtitle}>
          Most calendars are designed for teams. Slate is designed
          <br />
          for freelancers
        </h4>
        <Button className={styles.HeaderButton}>
          <h3>Try For Free</h3>
        </Button>
      </div>
      <div className={styles.Features}></div>
      <div className={styles.Advantage}></div>
      <div className={styles.Newsletter}></div>
      <div className={styles.Partners}></div>
      <div className={styles.Testimonials}></div>
      <div className={styles.Pricing}></div>
      <div className={styles.Contact}></div>
      <div className={styles.Footer}></div>
    </div>
  );
}
```

Теперь файл стал еще больше, но это не страшно. Все элементы блока `Header` мы разместили на странице. Теперь добавим стили для них. Для этого в файле `Home.module.css` добавим следующее:

```css
.Root {
  background: #ffffff; /* цвет фона белый */
}

.Header {
  width: 100%; /* блок Header занимает 100 процентов ширины страницы */
  height: 864px; /* высота блока Header 864 пикселя */
  background-image: url(/header.jpeg); /* фоновое изображение блока Header */
  background-repeat: no-repeat; /* фоновое изображение не повторяется */
  background-size: cover; /* фоновое изображение растягивается на всю ширину блока */
  background-position: center; /* фоновое изображение выравнивается по центру */
  text-align: center; /* текст выравнивается по центру */
  color: #ffffff; /* цвет текста белый */
}

.Navigation {
  display: flex; /* элементы блока Navigation выстраиваются в ряд */
  max-width: 1210px; /* максимальная ширина блока Navigation 1210 пикселей */
  margin: 0 auto; /* блок Navigation выравнивается по центру */
  padding: 54px 40px; /* внутренние отступы блока Navigation 54 пикселя сверху и снизу, 40 пикселей слева и справа */
}

.HeaderLink {
  display: inline-block; /* элементы блока HeaderLink выстраиваются в ряд */
  padding: 10px; /* внутренние отступы элементов блока HeaderLink 10 пикселей */
  margin-top: 10px; /* верхний внешний отступ элементов блока HeaderLink 10 пикселей */
  margin-right: 21px; /* правый внешний отступ элементов блока HeaderLink 21 пиксель */
  font-size: 15px; /* размер шрифта 15 пикселей */
  line-height: 28px; /* межстрочный интервал 28 пикселей */
  color: #ffffff; /* цвет текста белый */
  text-decoration: none; /* убираем подчеркивание у ссылок */
}

.HeaderLogo {
  height: 58px; /* высота элемента блока HeaderLogo 58 пикселей */
}

.HeaderSocialLinks {
  flex: 1; /* элементы блока HeaderSocialLinks занимают всю доступную ширину */
  text-align: right; /* текст выравнивается по правому краю */
  padding: 10px; /* внутренние отступы элементов блока HeaderSocialLinks 10 пикселей */
}

.HeaderTitle {
  margin-top: 100px; /* верхний внешний отступ элемента блока HeaderTitle 100 пикселей */
}

.HeaderSubtitle {
  margin-top: 30px; /* верхний внешний отступ элемента блока HeaderSubtitle 30 пикселей */
  margin-bottom: 100px; /* нижний внешний отступ элемента блока HeaderSubtitle 100 пикселей */
}

.HeaderButton {
  width: 236px; /* ширина элемента блока HeaderButton 236 пикселей */
}
```

### Features

Приступим к созданию блока Features. Этот блок состоит из следующих элементов:

  1. Заголовок блока (тег `h2`)
  2. Подзаголовок блока (тег `h4`)
  3. Список элементов Features (тег `div` с классом `FeaturesList`)
  4. Блок с превью видео (тег `div` с классом `FeaturesVideo`)

Отобразим это в html коде добавив в `div` с классом `Features` следующие элементы:

```tsx
<h2>Features</h2>
<h4>Most calendars are designed for teams. <br/>
Slate is designed for freelancers</h4>
<div className={styles.FeaturesList}></div>
<div className={styles.FeaturesVideo}></div>
```

Внутри блока `FeaturesList` добавим три элемента списка (тег `div`) в котором будут находиться иконка (компонент Image, ранее мы его использовали, чтобы добавить лого, он уже должен быть импортирован `import Image from 'next/image';`), заголовок (тег `h3`) и текст (тег `p`):

```tsx
<div>
  <Image src="/shapes.svg" alt="shapes" className={styles.FeaturesListItemIcon} width={47} height={47} />
  <h3>OpenType features<br/>
  Variable fonts</h3>
  <p className={styles.FeaturesListItemText}>Slate helps you see how many more days you need to work to reach your financial goal.</p>
</div>
<div>
  <Image src="/drawning.svg" alt="dravning" className={styles.FeaturesListItemIcon} width={45} height={42} />
  <h3>Design with real data</h3>
  <p className={styles.FeaturesListItemText}>Slate helps you see how many more days you need to work to reach your financial goal.</p>
</div>
<div>
  <Image src="/brush.svg" alt="brush" className={styles.FeaturesListItemIcon} width={49} height={47} />
  <h3>Fastest way to<br />
  take action</h3>
  <p className={styles.FeaturesListItemText}>Slate helps you see how many more days you need to work to reach your financial goal.</p>
</div>
```

Внутри блока `FeaturesVideo` добавим компонент кнопки Button c классом `FeaturesVideoButton` (внутри него будет находиться иконка компонента Image с классом `FeaturesVideoButtonIcon`):

```tsx
<Button className={styles.FeaturesVideoButton}>
  <Image src="/play.svg" alt="play" className={styles.FeaturesVideoButtonIcon} width={40} height={48} />
</Button>
```

Теперь добавим стили для блока Features. Для этого в файле `Home.module.css` добавим следующее:

```css
.Features {
  margin-top: 181px; /* верхний внешний отступ блока Features 181 пиксель */
  width: 100%; /* ширина блока Features 100% */
  text-align: center; /* контент выравнивается по центру */
}

.FeaturesList {
  margin: 80px auto 0; /* верхний внешний отступ элемента блока FeaturesList 80 пикселей, отступы по бокам автоматические */
  max-width: 869px; /* максимальная ширина блока FeaturesList 869 пикселей */
  display: grid; /* элементы блока FeaturesList выстраиваются в сетку */
  grid-template-columns: auto auto auto; /* ширина колонок 1, 2 и 3 равна ширине содержимого */
  column-gap: 52px; /* расстояние между колонками 52 пикселей */
}

.FeaturesListItemIcon {
  margin-bottom: 17px; /* нижний внешний отступ элемента блока FeaturesListItemIcon 17 пикселей */
}

.FeaturesListItemText {
  margin-top: 17px; /* верхний внешний отступ элемента блока FeaturesListItemText 17 пикселей */
}

.FeaturesVideo {
  margin: 132px auto 0; /* верхний внешний отступ блока FeaturesVideo 132 пикселей, отступы по бокам автоматические */
  width: 1177px; /* ширина блока FeaturesVideo 1177 пикселей */
  height: 658px; /* высота блока FeaturesVideo 658 пикселей */
  background-image: url(/screen.jpg); /* задний фон блока FeaturesVideo */
  background-size: cover; /* фоновое изображение растягивается на всю ширину блока */
  background-position: center; /* фоновое изображение выравнивается по центру */
  background-repeat: no-repeat; /* фоновое изображение не повторяется */
  display: flex; /* для позиционирование дочернего элемента блока FeaturesVideo */
  justify-content: center; /* дочерний элемент блока FeaturesVideo выравнивается по центру по горизонтали */
  align-items: center; /* дочерний элемент блока FeaturesVideo выравнивается по центру по вертикали */
}

.FeaturesVideoButton {
  width: 187px; /* ширина элемента блока FeaturesVideoButton 187 пикселей */
  height: 187px; /* высота элемента блока FeaturesVideoButton 187 пикселей */
  border-radius: 50%; /* радиус скругления углов элемента блока FeaturesVideoButton 50% */
}
```

Вы всегда можете сравнить результат с кодом в репозитории.

### Advantage

А теперь давайте создадим блок Advantage. Этот блок будет состоять из двух колонок. В левой колонке будет заголовок, подзаголовок и кнопка, а в правой колонке будет изображение.

Отобразим это в шаблоне добавив в блок Advantage два элемента `div` внутри которых будут находится дочерние компоненты, описанные выше.

```tsx
<div>
  <h2>
    Fastest way to <br />
    organize
  </h2>
  <h4>
    Most calendars are designed for teams. <br />
    Slate is designed for freelancers
  </h4>
  <Button className={styles.AdvantageButton}>
    <h3>Try For Free</h3>
  </Button>
</div>
<div>
  <Image src="/macbook.png" alt="macbook" width={624} height={349} />
</div>
```

Теперь добавим стили для блока Advantage. Для этого в файле `Home.module.css` добавим следующее:

```css
.Advantage {
  max-width: 1283px; /* максимальная ширина блока Advantage 1283 пикселей */
  margin: 226px auto 0; /* верхний внешний отступ блока Advantage 226 пикселей, отступы по бокам автоматические */
  padding: 43px 0; /* верхний и нижний внутренние отступы блока Advantage 43 пикселей, отступы по бокам 0 */
  display: grid; /* элементы блока Advantage выстраиваются в сетку */
  grid-template-columns: auto auto; /* ширина колонок 1 и 2 равна ширине содержимого */
  column-gap: 50px; /* расстояние между колонками 50 пикселей */
}

.AdvantageButton {
  margin-top: 60px; /* верхний внешний отступ элемента блока AdvantageButton 60 пикселей */
  width: 236px; /* ширина элемента блока AdvantageButton 236 пикселей */ 
}
```

### Newsletter

Теперь давайте создадим блок Newsletter. Этот блок будет состоять так же из двух колонок (тег `div`). Только в левой колонке будет изображение, а в правой колонке будет заголовок (тег `h2`) с "надзаголовком" (тег `h3`) и простая форма с название, описанием, полем ввода текста и кнопкой.

Отобразим это в шаблоне добавив в блок Newsletter два элемента `div` внутри которых будут находится дочерние компоненты, описанные выше.

```tsx
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
```

Теперь добавим стили для блока Newsletter. Для этого в файле `Home.module.css` добавим следующее:

```css
.Newsletter {
  max-width: 1440px; /* максимальная ширина блока Newsletter 1440 пикселей */
  margin: 0 auto; /* отступы по бокам автоматические */
  padding: 43px 0; /* верхний и нижний внутренние отступы блока Newsletter 43 пикселей, отступы по бокам 0 */
  display: grid; /* элементы блока Newsletter выстраиваются в сетку */
  grid-template-columns: auto auto; /* ширина колонок 1 и 2 равна ширине содержимого */
  column-gap: 50px; /* расстояние между колонками 50 пикселей */
}

.Newsletter > div:last-child {
  padding-top: 121px; /* верхний внутренний отступ второго дочернего элемента блока Newsletter 121 пикселей */
}

.NewsletterForm {
  margin-top: 30px; /* верхний внешний отступ элемента блока NewsletterForm 30 пикселей */
}

.NewsletterInput, .NewsletterButton {
  margin: 36px 0; /* верхний и нижний внешние отступы элементов блока NewsletterInput и NewsletterButton 36 пикселей, отступы по бокам 0 */
}

.NewsletterInput {
  width: 273px; /* ширина элемента блока NewsletterInput 273 пикселей */
}

.NewsletterButton {
  width: 177px; /* ширина элемента блока NewsletterButton 177 пикселей */
  margin-left: 12px; /* левый внешний отступ элемента блока NewsletterButton 12 пикселей */
}
```

### Partners

Теперь давайте создадим блок Partners. Этот блок будет состоять из нескольких элементов:

  1. Заголовок (`h2`)
  2. Подзаголовок (`h4`)
  3. Список партнеров (`div` с классом `PartnersList`)
  4. Кнопка (`Button` с классом `PartnersButton`)

Отобразим это в шаблоне добавив в `div` с классом `Partners` элементы `h2`, `h4`, `div` и `Button`.

```tsx
<h2>Partners</h2>
<h4>
  Most calendars are designed for teams. <br />
  Slate is designed for freelancers
</h4>
<div className={styles.PartnersList}></div>
<Button className={styles.PartnersButton}>
  <h3>Try For Free</h3>
</Button>
```

Внутри `div` с классом `PartnersList` добавим элементы `div` с классом `PartnersItem` и внутри каждого элемента `div` с классом `PartnersItem` добавим элемент `h5` и `div` с классом `PartnersItemImage` (для центрирования изображения внутри элемента), внутри которого будет находится `Image` с атрибутами `src`, `alt`, `width` и `height`.

```tsx
<div className={styles.PartnersItem}>
  <h5>Client Name</h5>
  <div className={styles.PartnersItemImage}>
    <Image src="/google.svg" alt="google" width={194} height={64} />
  </div>
</div>
<div className={styles.PartnersItem}>
  <h5>Client Name</h5>
  <div className={styles.PartnersItemImage}>
    <Image src="/amazon.png" alt="amazon" width={193} height={58} />
  </div>
</div>
<div className={styles.PartnersItem}>
  <h5>Client Name</h5>
  <div className={styles.PartnersItemImage}>
    <Image
      src="/microsoft.png"
      alt="microsoft"
      width={221}
      height={77}
    />
  </div>
</div>
<div className={styles.PartnersItem}>
  <h5>Client Name</h5>
  <div className={styles.PartnersItemImage}>
    <Image src="/uber.png" alt="uber" width={140} height={77} />
  </div>
</div>
<div className={styles.PartnersItem}>
  <h5>Client Name</h5>
  <div className={styles.PartnersItemImage}>
    <Image src="/dropbox.png" alt="dropbox" width={229} height={46} />
  </div>
</div>
<div className={styles.PartnersItem}>
  <h5>Client Name</h5>
  <div className={styles.PartnersItemImage}>
    <Image src="/google.svg" alt="google" width={194} height={64} />
  </div>
</div>
<div className={styles.PartnersItem}>
  <h5>Client Name</h5>
  <div className={styles.PartnersItemImage}>
    <Image src="/uber.png" alt="uber" width={140} height={77} />
  </div>
</div>
<div className={styles.PartnersItem}>
  <h5>Client Name</h5>
  <div className={styles.PartnersItemImage}>
    <Image src="/amazon.png" alt="amazon" width={193} height={58} />
  </div>
</div>
```

Теперь давайте добавим стили для блока Partners.

```css
.Partners {
  margin: 130px auto 80px; /* верхний внешний отступ блока Partners 130 пикселей, отступы по бокам автоматические, нижний внешний отступ блока Partners 80 пикселей */
  text-align: center; /* выравнивание текста по центру */
}

.PartnersList {
  max-width: 1075px; /* максимальная ширина блока PartnersList 1075 пикселей */
  margin: 80px auto; /* верхний внешний отступ блока PartnersList 80 пикселей, отступы по бокам автоматические */
  display: flex; /* элементы блока PartnersList выстраиваются в ряд */
  flex-wrap: wrap; /* элементы блока PartnersList переносятся на новую строку, если не помещаются в ряд */
  border: 0.5px solid #D8D8D8; /* рамка блока PartnersList 0.5 пикселя, цвет #D8D8D8 */
}

.PartnersItem {
  border: 0.5px solid #D8D8D8; /* рамка элемента блока PartnersItem 0.5 пикселя, цвет #D8D8D8 */
  padding: 25px 38px; /* верхний и нижний внутренние отступы элемента блока PartnersItem 0 пикселей, отступы по бокам 38 пикселей */
  flex: 1; /* элемент блока PartnersItem занимает все доступное пространство */
}

.PartnersItemImage {
  display: flex; /* для позиционирования содержимого элемента блока PartnersItemImage используется flexbox */
  justify-content: center; /* выравнивание содержимого по центру */
  align-items: center; /* выравнивание содержимого по центру */
  min-height: 77px; /* минимальная высота элемента блока PartnersItemImage 77 пикселей */
}

.PartnersButton {
  width: 236px; /* ширина элемента блока PartnersButton 236 пикселей */
}
```
