# next-landing-lesson

## Инициализация проекта

Для начала убедитесь, что у вас установлен NodeJS.

`
Кстати для удобства PowerShell можно открыть в VSCode, для этого нажмите в верхнем меню VSCode "Terminal" -> "New Terminal"
`

Чтобы узнать установлен ли у вас NodeJS введите команду в терминале

```bash
node -v
```

если установлен, то PowerShell пришлет номер версии NodeJS. Если нет, то скачать установщик можно по этой [ссылке](https://nodejs.org/ru/)

После установки NodeJS необходимо установить пакетный менеджер [Yarn](https://yarnpkg.com/getting-started) ([возможно вам захочется NPM](https://bestprogrammer.ru/izuchenie/yarn-ili-npm-vsyo-chto-vam-nuzhno-znat), но в этом уроке мы будем использовать Yarn). Для этого введите следующую команду в терминале

```bash
npm install -g yarn
```

После установки Yarn создадим NextJS проект. Для этого введите следующую команду в терминале

```bash
yarn create next-app
```

После этого Yarn предложит назвать проект(по умолчанию "my-app"), здесь просто нажмите Enter. Далее yarn спросит хотите ли вы использовать TypeScript. По умолчанию стоит Yes, если нет, то стрелками выберите Yes. Далее нажмите Enter. То же самое для ESLint. После этого yarn установит все необходимые зависимости и создаст проект.

Еще немного терминологии. Корневая директория - это директория под названием "next-landing-lesson".

После создания проекта у нас появится директория "my-app" и в ней файлы проекта. Лишние вложенности = лишние телодвижения, поэтому перенесем все файлы кроме README.md из директории "my-app" в корневую директорию. Затем удалите директорию "my-app".

![переместите файлы](https://github.com/JVPhase/next-landing-lesson/raw/main/readme-images/move-files.png)

Чтобы запустить проект введите команду в терминале

```bash
yarn dev
```

Вы замечательны! Вы запустили проект! Теперь вы можете посмотреть на него в браузере по адресу [http://localhost:3000](http://localhost:3000)

![next app](https://github.com/JVPhase/next-landing-lesson/raw/main/readme-images/next-app.png)

Увидимся в следующей части! (Чтобы перейти к следующей части выберите селекторе веток вверху страницы ветку "1-assets")

![селектор веток](https://github.com/JVPhase/next-landing-lesson/raw/main/readme-images/select-branch.png)
