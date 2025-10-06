# 💡 Примеры использования виджета

## 🎯 Вариант 1: Установка через GitHub (текущий репозиторий)

### В вашем проекте добавьте в `package.json`:

```json
{
  "dependencies": {
    "@corp/workspace-menu": "git+ssh://git@github.com/shemmmil/workspace-menu.git#main",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "lucide-react": "^0.263.1",
    "@radix-ui/react-dialog": "^1.0.0",
    "@radix-ui/react-dropdown-menu": "^2.0.0",
    "@radix-ui/react-slot": "^1.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

### Или через HTTPS:

```json
{
  "dependencies": {
    "@corp/workspace-menu": "git+https://github.com/shemmmil/workspace-menu.git#main"
  }
}
```

### Для конкретной версии:

```json
{
  "dependencies": {
    "@corp/workspace-menu": "git+ssh://git@github.com/shemmmil/workspace-menu.git#v1.0.0"
  }
}
```

## 🎯 Вариант 2: Перенос на itpro72.ru (как в вашем примере)

### Создайте репозиторий на itpro72.ru

```bash
# Добавьте дополнительный remote
git remote add itpro git@itpro72.ru:your-org/workspace-menu.git

# Или замените существующий
git remote set-url origin git@itpro72.ru:your-org/workspace-menu.git

# Запуште код
git push itpro main
git push itpro v1.0.0
```

### В других проектах используйте:

```json
{
  "dependencies": {
    "@corp/workspace-menu": "git+ssh://git@itpro72.ru/your-org/workspace-menu.git#main"
  }
}
```

### Или для beta ветки (как в вашем примере):

```json
{
  "dependencies": {
    "@corp/workspace-menu": "git+ssh://git@itpro72.ru/your-org/workspace-menu.git#beta"
  }
}
```

## 📝 Пример полного package.json

```json
{
  "name": "my-spa-app",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    
    "// UI библиотеки": "",
    "@corp/workspace-menu": "git+ssh://git@itpro72.ru/your-org/workspace-menu.git#main",
    "lucide-react": "^0.263.1",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-slot": "^1.0.2",
    
    "// Утилиты": "",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.2.0",
    "tailwindcss": "^3.4.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0"
  }
}
```

## 🔧 Код использования в вашем приложении

### 1. Базовое использование

```tsx
// src/components/Header.tsx
import { Widget } from "@corp/workspace-menu";
import "@corp/workspace-menu/dist/styles.css";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3">
        <Widget currentApp="manager" />
      </div>
    </header>
  );
}
```

### 2. С навигацией (React Router)

```tsx
// src/components/Header.tsx
import { useNavigate } from "react-router-dom";
import { Widget } from "@corp/workspace-menu";
import "@corp/workspace-menu/dist/styles.css";

export function Header() {
  const navigate = useNavigate();

  const handleNavigate = (url: string, appId: string) => {
    console.log(`Навигация на ${url} (${appId})`);
    navigate(url);
  };

  return (
    <header className="border-b p-4">
      <Widget 
        currentApp="manager" 
        onNavigate={handleNavigate}
      />
    </header>
  );
}
```

### 3. С кастомными приложениями

```tsx
import { Widget, QuickAccessApp, FullApp } from "@corp/workspace-menu";
import { Database, Users, Settings } from "lucide-react";

const myApps: QuickAccessApp[] = [
  {
    id: "manager",
    title: "Админка",
    icon: <Settings className="w-4 h-4" />,
    url: "/admin",
  },
  {
    id: "knowledge",
    title: "База знаний",
    icon: <Database className="w-4 h-4" />,
    url: "/kb",
  },
];

export function CustomHeader() {
  return (
    <Widget 
      currentApp="manager"
      quickAccessApps={myApps}
      className="w-64"
    />
  );
}
```

### 4. В Next.js приложении

```tsx
// app/components/Header.tsx
"use client";

import { useRouter } from "next/navigation";
import { Widget } from "@corp/workspace-menu";
import "@corp/workspace-menu/dist/styles.css";

export function Header() {
  const router = useRouter();

  return (
    <Widget 
      currentApp="manager"
      onNavigate={(url) => router.push(url)}
    />
  );
}
```

### 5. В Layout компоненте

```tsx
// src/layouts/MainLayout.tsx
import { Widget } from "@corp/workspace-menu";
import "@corp/workspace-menu/dist/styles.css";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">Мое Приложение</h1>
          <div className="w-64">
            <Widget currentApp="manager" />
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
```

## 🔄 Обновление виджета

### Обновить до последней версии:

```bash
npm update @corp/workspace-menu
```

### Принудительная переустановка:

```bash
npm install @corp/workspace-menu --force
```

### Обновить до конкретного тега:

```bash
# В package.json измените версию
"@corp/workspace-menu": "git+ssh://git@itpro72.ru/your-org/workspace-menu.git#v1.1.0"

# Затем
npm install
```

## 🎨 Tailwind CSS конфигурация

### Добавьте пути к виджету в `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@corp/workspace-menu/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 🐛 Решение проблем

### Проблема: "Module not found"

```bash
# Установите все peer dependencies
npm install react react-dom lucide-react @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

### Проблема: "Permission denied (publickey)"

```bash
# Проверьте SSH ключ
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

# Добавьте публичный ключ в GitHub/GitLab/ваш сервер
cat ~/.ssh/id_rsa.pub
```

### Проблема: Стили не применяются

```tsx
// Убедитесь, что импортировали стили
import "@corp/workspace-menu/dist/styles.css";

// И что Tailwind конфигурация включает пути к виджету
```

## ✅ Готово!

Теперь вы можете использовать виджет во всех ваших SPA приложениях! 🚀

