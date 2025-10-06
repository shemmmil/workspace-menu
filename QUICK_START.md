# Быстрый старт

## 1. Установка

```bash
npm install @corp/workspace-menu
```

## 2. Установка зависимостей

```bash
npm install react react-dom lucide-react @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

## 3. Настройка Tailwind CSS

Убедитесь, что в вашем `tailwind.config.js` включены файлы виджета:

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@corp/workspace-menu/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // ... остальная конфигурация
};
```

## 4. Подключение стилей

Импортируйте стили виджета в ваш основной CSS файл:

```css
@import "@corp/workspace-menu/dist/styles.css";
```

Или в JavaScript:

```tsx
import "@corp/workspace-menu/dist/styles.css";
```

## 5. Использование

```tsx
import React from "react";
import { Widget } from "@corp/workspace-menu";

function App() {
  return (
    <div className="p-4">
      <h1>Мое приложение</h1>
      <Widget />
    </div>
  );
}

export default App;
```

## 6. Кастомизация

```tsx
import React from "react";
import { Widget, type QuickAccessApp } from "@corp/workspace-menu";
import { CustomIcon } from "lucide-react";

const customApps: QuickAccessApp[] = [
  {
    id: "my-app",
    title: "Мое приложение",
    icon: <CustomIcon className="w-4 h-4 text-blue-500" />,
    url: "/my-app",
  },
];

function App() {
  const handleNavigate = (url: string, appId: string) => {
    // Ваша логика навигации
    window.location.href = url;
  };

  return (
    <div className="p-4">
      <Widget
        currentApp="my-app"
        quickAccessApps={customApps}
        onNavigate={handleNavigate}
        className="w-full max-w-sm"
      />
    </div>
  );
}

export default App;
```

## 7. Сборка

```bash
npm run build
```

Готово! Виджет готов к использованию в вашем SPA приложении.
