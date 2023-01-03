# next-landing-lesson

## Компоненты

Основная задача компонента - отрисовать интерфейс. Компоненты могут использоваться в других компонентах и на страницах. Компоненты содержатся в директории `components`. Поэтому давайте создадим ее в корне проекта.

### Создание компонента

В текущем макете есть 3 элемента, которые могут стать компонентами, которые будут переиспользоваться в разных местах страницы. Это кнопка, поле ввода текста и ссылки на социальные сети. Давайте сначала создадим компонент для кнопки.

Создайте файл `components/Button.tsx` и добавьте следующий код:

```tsx
interface ButtonProps {  // Определяем интерфейс для пропсов
  children: React.ReactNode; // Добавляем свойство children, которое будет содержать в себе все дочерние элементы
}

export default function Button ({ children }: ButtonProps) {
  return <button>{children}</button>; // Возвращаем кнопку, которая будет содержать в себе все дочерние элементы
};
```

Компонент кнопки создан. А теперь стилизуем его. Для этого создайте файл `components/Button.module.css` и добавьте следующий код:

```css
.Root {
  border: none;
  background: #2091F9;
  padding: 16px;
  text-align: center;
  color: white;
  font-size: 20px;
}
```

Теперь добавим стили к компоненту. Для этого импортируем файл стилей в компоненте `components/Button.tsx`:

```tsx
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return <button className={styles.Root}>{children}</button>;
}
```

Теперь наша кнопка имеет стили. Давайте сделаем так, чтобы ее можно было кастомизировать с помощью других классов. Для этого добавим пропс `className`:

```tsx
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return <button className={`${styles.Root} ${className}`}>{children}</button>;
}
```

Давайте теперь создадим компонент для поля ввода текста. Создайте файл `components/Input.tsx` и добавьте следующий код:

```tsx
import styles from './Input.module.css';

interface InputProps { // компонент input не имеет дочерних элементов, поэтому мы не используем свойство children
  className?: string;
  placeholder?: string; // добавляем пропс placeholder отвечающий за текст подсказки внутри поля ввода
}

export default function Input({ className, placeholder }: InputProps) {
  return (
    <input
      className={`${styles.Root} ${className}`}
      placeholder={placeholder}
    />
  );
}
```

Теперь создайте файл `components/Input.module.css` и добавьте следующий код:

```css
.Root {
  background: #f4f4f4;
  border: 1px solid #e8e8e8;
  border-radius: 39px;
  color: #18171d;
  min-width: 100px;
  padding: 19px 20px;
  font-size: 14px;
}
```

Теперь создадим компонент для отображения ссылок на социальные сети. Создайте файл `components/SocialLinks.tsx` и добавьте следующий код:

```tsx
import styles from './SocialLinks.module.css';
import Image from 'next/image';

interface SocialLinksProps {
  isBlue?: boolean; // добавляем пропс isBlue, который будет отвечать за то, какие иконки будут отображаться
}

export default function SocialLinks({ isBlue }: SocialLinksProps) {
  return (
    <div className={styles.Root}>
      <a href="#" className={styles.Link}>
        <Image
          src={isBlue ? '/twitter-blue.svg' : '/twitter.svg'}
          width={34}
          height={34}
          alt="Twitter"
        />
      </a>
      <a href="#" className={styles.Link}>
        <Image
          src={isBlue ? '/facebook-blue.svg' : '/facebook.svg'}
          width={34}
          height={34}
          alt="Facebook"
        />
      </a>
      <a href="#" className={styles.Link}>
        <Image
          src={isBlue ? '/linkedin-blue.svg' : '/linkedin.svg'}
          width={34}
          height={34}
          alt="LinkedIn"
        />
      </a>
    </div>
  );
}
```

Теперь создайте файл `components/SocialLinks.module.css` и добавьте следующий код:

```css
.Root {
  padding: 5px;
  display: inline-block;
}

.Link {
  margin-right: 24px;
}

.Link:last-child {
  margin-right: 0;
}
```

Теперь посмотрим как они выглядят вместе. Подготовьте файл `pages/index.tsx`, очистив его от дефолтной верстки и добавьте следующий код:

```tsx
import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Home() {
  return (
    <>
      <Button>Button</Button>
      <Input placeholder="Input" />
      <SocialLinks isBlue />
      <SocialLinks />
    </>
  );
}
```

Если ваше приложение не запущено, запустите его командой `yarn dev`. После этого откройте в браузере `http://localhost:3000/` и убедитесь, что у вас получилось следующее:

![jpg изображение](https://github.com/JVPhase/next-landing-lesson/raw/main/readme-images/first-components.png)

Вы умопомрачительны! В следующей части 3-pages мы перейдем к созданию страницы лендинга. Увидимся там!
