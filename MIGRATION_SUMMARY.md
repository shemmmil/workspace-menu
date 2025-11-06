# Миграция на кастомные компоненты без сторонних зависимостей

## Обзор
Проект полностью переписан с использованием кастомных компонентов без сторонних UI-библиотек. Используется TypeScript, React и CSS Modules.

## Удаленные зависимости

### Production зависимости
- ❌ `class-variance-authority` - замещено кастомной логикой вариантов
- ❌ `clsx` - больше не нужно
- ❌ `tailwind-merge` - больше не нужно

### Peer зависимости
- ❌ `@radix-ui/react-dialog` - заменено на кастомный Dialog
- ❌ `@radix-ui/react-dropdown-menu` - заменено на кастомный DropdownMenu
- ❌ `@radix-ui/react-slot` - больше не нужно
- ❌ `lucide-react` - заменено на кастомные SVG иконки

### Dev зависимости
- ❌ `@tailwindcss/postcss` - Tailwind CSS удален
- ❌ `tailwindcss` - заменено на CSS Modules
- ❌ `tw-animate-css` - анимации реализованы в CSS

### Оставшиеся зависимости
Только необходимые:
- ✅ `react` и `react-dom` (peer dependencies)
- ✅ Инструменты сборки (Rollup, TypeScript, PostCSS)

## Созданные компоненты

### 1. Иконки (`src/components/icons/index.tsx`)
Все иконки реализованы как SVG компоненты:
- BarChart3, Brain, ChevronRight, ChevronsUpDown
- HandMetal, Headphones, LayoutGrid, ExternalLink
- Mail, Newspaper, FileCheck2, PencilRuler
- Handshake, BookOpen, HeadsetIcon, XIcon
- OneCIcon, MacroERPIcon, SensataServicesIcon, RefbookIcon

### 2. Button (`src/components/ui/button.tsx`)
Кастомный компонент кнопки с поддержкой:
- Варианты: default, destructive, outline, secondary, ghost, link
- Размеры: default, sm, lg, icon, icon-sm, icon-lg
- CSS Modules для стилизации
- Полная типизация TypeScript

### 3. Card (`src/components/ui/card.tsx`)
Компонент карточки с подкомпонентами:
- Card, CardHeader, CardTitle, CardDescription
- CardAction, CardContent, CardFooter
- CSS Modules для стилизации

### 4. Dialog (`src/components/ui/dialog.tsx`)
Модальное окно с нуля:
- Управление состоянием через Context API
- Portal для рендеринга поверх контента
- Overlay с затемнением фона
- Закрытие по Escape и клику вне модала
- Блокировка скролла body при открытии
- Плавные анимации открытия/закрытия
- Кнопка закрытия

### 5. DropdownMenu (`src/components/ui/dropdown-menu.tsx`)
Выпадающее меню с:
- Управление состоянием через Context API
- Portal для рендеринга
- Автоматическое позиционирование (top, right, bottom, left)
- Выравнивание (start, center, end)
- Закрытие при клике вне меню и по Escape
- Поддержка групп, разделителей, чекбоксов, радио-кнопок
- Поддержка вложенных меню (submenu)
- Keyboard navigation готова к расширению

## Структура файлов

```
src/
├── components/
│   ├── icons/
│   │   └── index.tsx              # Все SVG иконки
│   └── ui/
│       ├── button.tsx             # Компонент Button
│       ├── button.module.css      # Стили Button
│       ├── card.tsx               # Компонент Card
│       ├── card.module.css        # Стили Card
│       ├── dialog.tsx             # Компонент Dialog
│       ├── dialog.module.css      # Стили Dialog
│       ├── dropdown-menu.tsx      # Компонент DropdownMenu
│       └── dropdown-menu.module.css # Стили DropdownMenu
├── types/
│   └── css-modules.d.ts           # Type definitions для CSS Modules
├── widget.tsx                     # Главный компонент Widget
├── widget.module.css              # Стили Widget
└── index.ts                       # Публичные экспорты

Удалено:
├── lib/utils.ts                   # Утилиты clsx/tailwind-merge
└── styles.css                     # Tailwind CSS файл
```

## Изменения в конфигурации

### package.json
- Удалены все UI зависимости
- Оставлены только React и инструменты сборки

### rollup.config.js
- Включена поддержка CSS Modules
- `modules: true` в конфигурации postcss
- `autoModules: true` для автоматического определения `.module.css`
- Удалены внешние зависимости (Radix, Lucide, etc.)

### postcss.config.cjs
- Удален `@tailwindcss/postcss`
- Оставлен только `autoprefixer`

### tsconfig.json
- Добавлена поддержка типов для CSS Modules

## CSS Modules

Все стили теперь изолированы через CSS Modules:
- Нет конфликтов имен классов
- Типобезопасность (с TypeScript)
- Лучшая поддержка tree-shaking
- Явные зависимости стилей

Пример использования:
```tsx
import styles from './button.module.css';

<button className={styles.button} />
```

## Функциональность

Все функции сохранены:
- ✅ Выпадающее меню с быстрым доступом
- ✅ Модальное окно со списком сервисов
- ✅ Сетка карточек приложений (3 колонки)
- ✅ Иконки для каждого приложения
- ✅ Открытие ссылок в новой вкладке
- ✅ Фильтрация текущего приложения
- ✅ Анимации и переходы
- ✅ Адаптивность (responsive design)
- ✅ Доступность (accessibility)

## Сборка

```bash
# Установка зависимостей
npm install

# Разработка с watch mode
npm run dev

# Production сборка
npm run build
```

Результат сборки:
```
dist/
├── index.js          # CommonJS сборка
├── index.esm.js      # ES Modules сборка
├── index.d.ts        # TypeScript типы
└── components/       # Типы компонентов
```

## Размер бандла

Значительное уменьшение размера:
- Нет Radix UI (большая библиотека)
- Нет Lucide React (набор иконок)
- Нет Tailwind utilities
- Только необходимый CSS

## API (без изменений)

```tsx
import { Widget } from '@corp/workspace-menu';

<Widget
  currentApp="manager"
  quickAccessApps={[...]}
  fullApps={[...]}
  showAllServicesButton={true}
/>
```

Все типы и интерфейсы сохранены.

## Преимущества

1. **Полный контроль**: Все компоненты под вашим контролем
2. **Меньше зависимостей**: Проще поддержка и обновления
3. **Меньший размер**: Оптимизированный бандл
4. **Нет конфликтов**: CSS Modules изолирует стили
5. **Типобезопасность**: Полная поддержка TypeScript
6. **Производительность**: Нет лишних абстракций
7. **Гибкость**: Легко кастомизировать под нужды

## Особенности реализации

### Dialog
- Используется React Portal для рендеринга
- Context API для управления состоянием
- `useEffect` для обработки Escape и блокировки скролла
- CSS анимации для плавного появления/исчезновения

### DropdownMenu  
- Динамическое позиционирование через `getBoundingClientRect()`
- Portal для рендеринга поверх контента
- Автоматическое закрытие при выборе элемента
- Поддержка вложенности (submenu)

### CSS Modules
- Автоматическая генерация уникальных классов
- Поддержка композиции стилей
- Type-safe через TypeScript definitions

## Миграция завершена

Проект полностью готов к использованию без внешних UI-зависимостей. Все функции работают, типы экспортированы, сборка успешна.

