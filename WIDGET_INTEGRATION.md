# 🎨 Интеграция виджета workspace-menu

## 📦 Установка

### Из GitHub

```bash
npm install git+https://github.com/your-username/workspace-menu.git
```

### Из npm (если опубликован)

```bash
npm install @corp/workspace-menu
```

## ⚙️ Настройка проекта

### 1. Добавьте CSS переменные в ваш главный CSS файл

```css
/* Импортируйте стили виджета */
@import "@corp/workspace-menu/dist/styles.css";
```

### 2. Настройте Tailwind в вашем проекте

Виджет **не генерирует свои Tailwind классы**, а использует классы из вашего главного проекта. Убедитесь что:

1. У вас установлен Tailwind CSS
2. В вашем `tailwind.config.js` добавлены цвета темы виджета:

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // ВАЖНО: добавьте путь к node_modules виджета
    "./node_modules/@corp/workspace-menu/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Цвета виджета (можно настроить под вашу тему)
        border: "hsl(var(--wm-border))",
        input: "hsl(var(--wm-input))",
        ring: "hsl(var(--wm-ring))",
        background: "hsl(var(--wm-background))",
        foreground: "hsl(var(--wm-foreground))",
        primary: {
          DEFAULT: "hsl(var(--wm-primary))",
          foreground: "hsl(var(--wm-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--wm-secondary))",
          foreground: "hsl(var(--wm-secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--wm-destructive))",
          foreground: "hsl(var(--wm-destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--wm-muted))",
          foreground: "hsl(var(--wm-muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--wm-accent))",
          foreground: "hsl(var(--wm-accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--wm-popover))",
          foreground: "hsl(var(--wm-popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--wm-card))",
          foreground: "hsl(var(--wm-card-foreground))",
        },
      },
    },
  },
  plugins: [],
};
```

### 3. Использование в React компоненте

```tsx
import { Widget } from "@corp/workspace-menu";

function App() {
  return (
    <div>
      <Widget
        currentApp="manager"
        onNavigate={(url, appId) => {
          console.log("Navigate to:", url, appId);
          // Ваша логика навигации
        }}
      />
    </div>
  );
}
```

## 🎯 Почему не было конфликтов

### Решённые проблемы:

1. **Размер пакета уменьшен:**

   - ❌ Убраны исходники `src/` из пакета
   - ✅ Только `dist/` включён в пакет
   - ✅ Добавлен `.npmignore` для исключения лишних файлов

2. **Конфликты стилей решены:**

   - ❌ Убрана генерация `@tailwind components` и `@tailwind utilities`
   - ✅ CSS переменные изолированы с префиксом `--wm-`
   - ✅ Виджет использует Tailwind классы из вашего главного проекта
   - ✅ Стили извлечены в отдельный файл `dist/styles.css`

3. **Изоляция компонентов:**
   - ✅ Все переменные виджета привязаны к классу `.workspace-menu-root`
   - ✅ Не влияют на глобальные стили вашего приложения

## 🔧 Альтернативный подход: Shadow DOM

Если вам нужна полная изоляция стилей (например, виджет встраивается в сторонние приложения), можно использовать Shadow DOM:

```tsx
import { createRoot } from "react-dom/client";
import { Widget } from "@corp/workspace-menu";

function initWidget(containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const shadow = container.attachShadow({ mode: "open" });
  const mountPoint = document.createElement("div");

  // Подключаем стили в Shadow DOM
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "/path/to/workspace-menu/dist/styles.css";
  shadow.appendChild(style);

  // Также нужно добавить Tailwind стили
  const tailwindStyle = document.createElement("link");
  tailwindStyle.rel = "stylesheet";
  tailwindStyle.href = "/path/to/your/tailwind.css";
  shadow.appendChild(tailwindStyle);

  shadow.appendChild(mountPoint);

  const root = createRoot(mountPoint);
  root.render(<Widget />);
}

initWidget("workspace-menu-container");
```

## 📝 Примечания

- Виджет требует React 18+ и установленный Tailwind CSS в вашем проекте
- Убедитесь что у вас установлены peer dependencies: `lucide-react`, `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-slot`
- CSS переменные можно кастомизировать, переопределив их в вашем CSS

## 🚀 Пересборка после изменений

После внесения изменений:

```bash
npm run build
```

Затем в главном проекте:

```bash
npm update @corp/workspace-menu
# или
npm install git+https://github.com/your-username/workspace-menu.git
```
