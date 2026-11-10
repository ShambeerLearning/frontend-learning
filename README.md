# Frontend Learning

Коллекция самостоятельных учебных проектов. У активных примеров один корневой `package.json`, один `package-lock.json` и общая папка `node_modules`.

## Установка

Рекомендуется Node.js 24 LTS и npm 10 или новее. Выполни из корня репозитория:

```sh
npm ci
```

Если добавляешь пакет, запускай `npm install <пакет>` из корня. Для каждого активного проекта отдельно устанавливать зависимости не нужно.

## Веб-проекты

| Папка | Содержимое |
| --- | --- |
| `projects/full-code-and-html/` | Примеры с HTML, TypeScript и Preact |
| `projects/autogen/` | Мини-проекты с HTML, CSS/SCSS и JavaScript |
| `projects/scss/` | Примеры SCSS |

Каждая непосредственная подпапка с `index.html` доступна для запуска. Как в `vite-monkey`, проект можно выбрать по уникальному имени, указать путём от корня или выбрать из списка в интерактивном терминале.

```sh
npm run dev
npm run dev -- proj2
npm run dev -- projects/scss/project1
npm run build -- projects/autogen/cards
```

`dev` запускает Vite для одного проекта и печатает локальный адрес. `build` сохраняет результат в `dist/` выбранного проекта. Для `autogen` сборка встраивает JS и CSS в `dist/index.html`.

### Новый веб-проект

```sh
npm run gen-project -- my-example
npm run dev -- my-example
```

Генератор создаёт `projects/autogen/my-example/` с `index.html` и исходниками в `src/`. Имя может содержать строчные латинские буквы, цифры и дефисы между ними. `npm run start-project -- my-example` также запускает этот проект.

## TypeScript и аналитика

```sh
npm run test-console
npm run json-p -- proj1/index.ts
```

`single-p`, `fun-p`, `json-p` и `old-p` принимают путь к файлу относительно одноимённой группы в `projects/only-typescript/`: `single-proj`, `fun-proj`, `json-proj` и `old-proj` соответственно. Команды используют общий `tsx` и перезапускают скрипт при изменениях.

`npm run analytics` запускает `projects/analyticsLearn/proj1/main.ts`. Текущий сценарий читает данные из PostgreSQL. Для него нужны `DATABASE_URL` в окружении или в `projects/analyticsLearn/proj1/.env` и доступная таблица `user_logs`.

## Архив

В `projects/old/` хранятся старые самостоятельные приложения. Их зависимости и команды запуска описаны в их собственных `package.json` и README, где они есть. Общие команды из корня обслуживают активные примеры.

## Правила написания кода

* **Правильное форматирование кода:** Логика, интерфейсы и стили выносятся в отдельные файлы.
* **Изоляция:** Каждому файлу — своя функция.
* **Чистота:** Никакого мусора из хлама в основном коде. Вспомогательные блоки убираются и обрабатываются отдельно.
