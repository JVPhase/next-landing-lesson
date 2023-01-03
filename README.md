# next-landing-lesson

## Экспортирование асетов

Макет ([ссылка](https://www.figma.com/file/EbgRFInBDdBBmabiJm8YVd/Figmaland--Business-Landing-page-(Community)?node-id=65%3A0&t=4F9havPGUoUTWnGF-1)) в Figma содержит много асетов, которые нужно экспортировать в проект. Все асеты находятся в папке `public` в корневой директории (в корне) проекта.

### Экспорт SVG

![векторное изображение](https://github.com/JVPhase/next-landing-lesson/raw/main/readme-images/vector.png)

Если изображение векторное, то вам нужно экспортировать SVG, для этого сделайте следующее:

  1. Выберите SVG в Figma
  2. Нажмите на кнопку `Export` в правом нижнем углу
  3. Выберите `SVG` в списке форматов
  4. Нажмите на кнопку `Export [название изображения]`
  5. Сохраните файл в папку `public` в корневой директории проекта
  6. Переименуйте файл в название изображения, которое вы хотите использовать в проекте

### Экспорт PNG

![png изображение](https://github.com/JVPhase/next-landing-lesson/raw/main/readme-images/png.png)

Если изображение растровое с прозрачным слоем, то вам нужно экспортировать PNG, для этого сделайте следующее:

  1. Выберите PNG в Figma
  2. Нажмите на кнопку `Export` в правом нижнем углу
  3. Выберите `PNG` в списке форматов
  4. Нажмите на кнопку `Export [название изображения]`
  5. Сохраните файл в папку `public` в корневой директории проекта
  6. Переименуйте файл в название изображения, которое вы хотите использовать в проекте

### Экспорт JPG

![jpg изображение](https://github.com/JVPhase/next-landing-lesson/raw/main/readme-images/jpg.png)

Если изображение растровое без прозрачного слоя, то вам нужно экспортировать JPG, для этого сделайте следующее:

  1. Выберите JPG в Figma
  2. Нажмите на кнопку `Export` в правом нижнем углу
  3. Выберите `JPG` в списке форматов
  4. Нажмите на кнопку `Export [название изображения]`
  5. Сохраните файл в папку `public` в корневой директории проекта
  6. Переименуйте файл в название изображения, которое вы хотите использовать в проекте

### Экспорт шрифтов

В хорошем макете есть [страница с компонентами](https://www.figma.com/file/EbgRFInBDdBBmabiJm8YVd/Figmaland--Business-Landing-page-(Community)?node-id=0%3A1&t=4F9havPGUoUTWnGF-0)

![библиотека стилей](https://github.com/JVPhase/next-landing-lesson/raw/main/readme-images/text-styles.png)

Здесь вы можете найти названия используемых шрифтов, размер текста и так далее.

В данном макете используется гугловский шрифт [Poppins](https://fonts.google.com/specimen/Poppins?query=poppins) и он уже есть в NextJS, поэтому вам осталось только подключить его.
Для этого нужно сделать следующее:

  1. откройте файл `pages/_app.tsx`
  2. импортируйте шрифт в файл `import { Poppins } from '@next/font/google';`
  3. укажите нужное начертание и вес шрифта `const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });` (в данном случае это 400 - regular и 700 - bold)
  4. добавьте тег style в разметку `<style jsx global>styles</style>`

Вот так должно выглядеть:

```tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from '@next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
```

Вы изумительны! Теперь вы можете использовать изображения и шрифт в своем проекте.

О том как их использовать, вы узнаете в следующих частях урока. А пока переходите к части 2-components. Встретимся там!
