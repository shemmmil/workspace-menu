# Пример интеграции

## React приложение с Vite

### 1. Установка

```bash
npm install @corp/workspace-menu
npm install react react-dom lucide-react @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

### 2. Настройка Tailwind CSS

**tailwind.config.js:**

```js
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

### 3. Подключение стилей

**src/main.tsx или src/index.tsx:**

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@corp/workspace-menu/dist/styles.css"; // Подключаем стили виджета
```

### 4. Использование в компоненте

**src/components/Header.tsx:**

```tsx
import React from "react";
import { Widget } from "@corp/workspace-menu";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (url: string, appId: string) => {
    // Внутренняя навигация
    navigate(url);

    // Или внешняя навигация
    // window.location.href = `https://your-domain.com${url}`;
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Мое приложение</h1>
          <div className="w-64">
            <Widget
              currentApp="manager"
              onNavigate={handleNavigate}
              showAllServicesButton={true}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
```

## Next.js приложение

### 1. Настройка

**next.config.js:**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@corp/workspace-menu"],
};

export default nextConfig;
```

### 2. Использование с SSR

**src/components/Header.tsx:**

```tsx
"use client"; // Для Next.js 13+ App Router

import React from "react";
import { Widget } from "@corp/workspace-menu";
import { useRouter } from "next/navigation";

export const Header: React.FC = () => {
  const router = useRouter();

  const handleNavigate = (url: string, appId: string) => {
    router.push(url);
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <Widget currentApp="manager" onNavigate={handleNavigate} />
      </div>
    </header>
  );
};
```

## Кастомизация приложений

```tsx
import React from "react";
import {
  Widget,
  type QuickAccessApp,
  type FullApp,
} from "@corp/workspace-menu";
import { Database, Settings, Users } from "lucide-react";

const myQuickApps: QuickAccessApp[] = [
  {
    id: "manager",
    title: "Панель управления",
    icon: <Settings className="w-4 h-4 text-blue-500" />,
    url: "/dashboard",
  },
  {
    id: "knowledge",
    title: "База данных",
    icon: <Database className="w-4 h-4 text-green-500" />,
    url: "/database",
  },
];

const myFullApps: FullApp[] = [
  {
    id: "users",
    title: "Управление пользователями",
    description: "Создание, редактирование и удаление пользователей",
    icon: <Users className="w-8 h-8 text-purple-600" />,
    url: "/users",
    iconBg: "bg-purple-100",
  },
  // ... другие приложения
];

export const CustomWidget = () => {
  return (
    <Widget
      currentApp="manager"
      quickAccessApps={myQuickApps}
      fullApps={myFullApps}
      className="w-full max-w-xs"
    />
  );
};
```

## Интеграция с микрофронтендами

```tsx
import React from "react";
import { Widget } from "@corp/workspace-menu";

export const MicroFrontendHeader = () => {
  const handleNavigate = (url: string, appId: string) => {
    // Отправляем событие для навигации между микрофронтендами
    window.dispatchEvent(
      new CustomEvent("navigate-to-app", {
        detail: { url, appId },
      })
    );
  };

  return (
    <Widget
      currentApp={window.APP_ID} // Глобальная переменная с ID текущего приложения
      onNavigate={handleNavigate}
    />
  );
};
```
