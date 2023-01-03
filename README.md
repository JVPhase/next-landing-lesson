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
<Button className={styles.HeaderButton}>Try for free</Button>
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
        <Button className={styles.HeaderButton}>Try for free</Button>
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
// TODO: Header styles
```
