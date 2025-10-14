# Workspace Menu Widget

Виджет меню для интеграции в SPA приложения. Предоставляет удобный интерфейс для навигации между различными сервисами и приложениями.

## Установка

```bash
npm install @corp/workspace-menu
```

## Зависимости

Виджет использует следующие peer dependencies, которые должны быть установлены в вашем проекте:

```bash
npm install react react-dom lucide-react @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

## Использование

### Базовое использование

```tsx
import { Widget } from "@corp/workspace-menu";

function App() {
  return (
    <div>
      <Widget />
    </div>
  );
}
```

### Расширенное использование

```tsx
import {
  Widget,
  type QuickAccessApp,
  type FullApp,
} from "@corp/workspace-menu";

const customQuickAccessApps: QuickAccessApp[] = [
  {
    id: "custom-app",
    title: "Мое приложение",
    icon: <CustomIcon className="w-4 h-4" />,
    url: "/custom-app",
  },
];

const customFullApps: FullApp[] = [
  {
    id: "another-app",
    title: "Другое приложение",
    description: "Описание приложения",
    icon: <AnotherIcon className="w-8 h-8" />,
    url: "/another-app",
    iconBg: "bg-blue-100",
  },
];

function App() {
  const handleNavigate = (url: string, appId: string) => {
    // Ваша логика навигации
    console.log(`Navigating to ${url} for app ${appId}`);
  };

  return (
    <Widget
      currentApp="manager"
      quickAccessApps={customQuickAccessApps}
      fullApps={customFullApps}
      onNavigate={handleNavigate}
      showAllServicesButton={true}
      className="w-full"
    />
  );
}
```

## API

### WidgetProps

| Свойство                | Тип                                    | По умолчанию             | Описание                                        |
| ----------------------- | -------------------------------------- | ------------------------ | ----------------------------------------------- |
| `currentApp`            | `AppId`                                | -                        | ID текущего приложения (будет скрыто из списка) |
| `quickAccessApps`       | `QuickAccessApp[]`                     | `defaultQuickAccessApps` | Список приложений для быстрого доступа          |
| `fullApps`              | `FullApp[]`                            | `defaultFullApps`        | Полный список всех приложений                   |
| `onNavigate`            | `(url: string, appId: string) => void` | -                        | Callback для обработки навигации                |
| `className`             | `string`                               | `''`                     | Дополнительные CSS классы                       |
| `showAllServicesButton` | `boolean`                              | `true`                   | Показывать ли кнопку "Все сервисы"              |

### Типы

#### AppId

```tsx
type AppId =
  | "manager"
  | "partners"
  | "knowledge"
  | "helpdesk"
  | "corporate-mail"
  | "documentolog"
  | "bim360"
  | "1c-estimate"
  | "macro-erp"
  | "plan-radar";
```

#### QuickAccessApp

```tsx
interface QuickAccessApp {
  id: AppId;
  title: string;
  icon: React.ReactNode;
  url?: string;
}
```

#### FullApp

```tsx
interface FullApp {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  url?: string;
  iconBg?: string;
}
```

## Совместимость с Ant Design

Виджет полностью совместим с Ant Design! Если у вас проект использует Ant Design, виджет будет корректно отображаться поверх всех компонентов Ant Design благодаря правильно настроенным z-index значениям.

### Технические детали

- Dialog overlay: `z-index: 2000`
- Dialog content: `z-index: 2001`
- DropdownMenu: `z-index: 2000`

Эти значения выше, чем у стандартных компонентов Ant Design (Modal: 1000, Dropdown: 1050, Tooltip: 1060), что гарантирует корректное отображение виджета.

### Кастомная настройка z-index

Если в вашем проекте используются кастомные z-index значения выше 2000, вы можете переопределить CSS переменную:

```css
[data-workspace-menu-portal] {
  --workspace-menu-z-index: 3000; /* ваше значение */
}
```

Подробнее см. [ANTD_COMPATIBILITY.md](./ANTD_COMPATIBILITY.md)

## Стилизация

Виджет использует Tailwind CSS. Убедитесь, что в вашем проекте настроен Tailwind CSS и подключены стили виджета.

### CSS переменные

Виджет использует следующие CSS переменные для кастомизации:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
}
```

## Разработка

```bash
# Установка зависимостей
npm install

# Сборка
npm run build

# Режим разработки
npm run dev
```

## Лицензия

MIT
