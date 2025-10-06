# Установка виджета через Git

## Способ 1: Установка через package.json

Добавьте в ваш `package.json`:

```json
{
  "dependencies": {
    "@corp/workspace-menu": "git+ssh://git@your-git-server.com/path/to/workspace-menu.git#main"
  }
}
```

Или для конкретной ветки/тега:

```json
{
  "dependencies": {
    "@corp/workspace-menu": "git+ssh://git@your-git-server.com/path/to/workspace-menu.git#v1.0.0",
    "@corp/workspace-menu": "git+ssh://git@your-git-server.com/path/to/workspace-menu.git#beta"
  }
}
```

Затем выполните:

```bash
npm install
```

## Способ 2: Прямая установка через npm

```bash
npm install git+ssh://git@your-git-server.com/path/to/workspace-menu.git#main
```

## Примеры для разных Git серверов

### GitHub

```json
"@corp/workspace-menu": "git+ssh://git@github.com/your-org/workspace-menu.git#main"
```

### GitLab

```json
"@corp/workspace-menu": "git+ssh://git@gitlab.com/your-org/workspace-menu.git#main"
```

### Ваш собственный Git сервер (как в примере с itpro72.ru)

```json
"@corp/workspace-menu": "git+https://git@itpro72.ru/your-org/workspace-menu.git#main"
```

или через SSH:

```json
"@corp/workspace-menu": "git+ssh://git@itpro72.ru/your-org/workspace-menu.git#main"
```

## Использование веток и тегов

### Установка с конкретной ветки

```json
"@corp/workspace-menu": "git+ssh://git@your-server.com/path/workspace-menu.git#develop"
"@corp/workspace-menu": "git+ssh://git@your-server.com/path/workspace-menu.git#beta"
"@corp/workspace-menu": "git+ssh://git@your-server.com/path/workspace-menu.git#feature/new-design"
```

### Установка с конкретного тега

```json
"@corp/workspace-menu": "git+ssh://git@your-server.com/path/workspace-menu.git#v1.0.0"
"@corp/workspace-menu": "git+ssh://git@your-server.com/path/workspace-menu.git#v1.2.3"
```

### Установка с конкретного коммита

```json
"@corp/workspace-menu": "git+ssh://git@your-server.com/path/workspace-menu.git#abc123def"
```

## Важные моменты

### 1. Убедитесь, что dist папка включена в репозиторий

Обновите `.gitignore` и **закомментируйте** строку с `dist`:

```gitignore
# Закомментируйте эту строку, чтобы dist попал в Git
# dist/
```

Или добавьте в `.gitignore`:

```gitignore
# Все игнорируем кроме dist
*
!dist/
!src/
!package.json
!README.md
```

### 2. Используйте prepare скрипт

В `package.json` уже настроен скрипт `prepare`, который автоматически соберет проект после установки:

```json
{
  "scripts": {
    "prepare": "npm run build"
  }
}
```

Это означает, что при установке пакета через Git, npm автоматически выполнит сборку.

### 3. Создайте тег для релиза

```bash
# Создать тег
git tag -a v1.0.0 -m "Release v1.0.0"

# Отправить тег в репозиторий
git push origin v1.0.0
```

### 4. Создайте разные ветки для разных версий

```bash
# Создать beta ветку
git checkout -b beta
git push origin beta

# Создать production ветку
git checkout -b production
git push origin production
```

## Пример использования в проекте

**package.json:**

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "@corp/workspace-menu": "git+ssh://git@itpro72.ru/your-org/workspace-menu.git#main",
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

**Установка:**

```bash
npm install
```

**Использование:**

```tsx
import { Widget } from "@corp/workspace-menu";
import "@corp/workspace-menu/dist/styles.css";

function App() {
  return <Widget currentApp="manager" />;
}
```

## Обновление пакета

Для обновления до последней версии из Git:

```bash
npm update @corp/workspace-menu
```

Или принудительная переустановка:

```bash
npm install @corp/workspace-menu --force
```

## Troubleshooting

### Проблема: "Permission denied"

Убедитесь, что у вас настроены SSH ключи для доступа к Git серверу:

```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
# Добавьте публичный ключ (~/.ssh/id_rsa.pub) в настройки Git сервера
```

### Проблема: "Build failed"

Проверьте, что все devDependencies установлены и скрипт prepare работает:

```bash
cd node_modules/@corp/workspace-menu
npm install
npm run build
```

### Проблема: "Module not found"

Убедитесь, что установлены все peer dependencies:

```bash
npm install react react-dom lucide-react @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```
