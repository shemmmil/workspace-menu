# 🚀 Настройка для установки через Git

## Шаг 1: Подготовка репозитория

Все файлы уже подготовлены и добавлены в Git. Теперь нужно создать коммит и запушить в ваш Git сервер.

### Создайте коммит

```bash
git commit -m "feat: initial release of workspace-menu widget v1.0.0

- Add Widget component with dropdown and modal
- Add UI components (Button, Dialog, DropdownMenu, Card)
- Add TypeScript support with full type definitions
- Add Tailwind CSS styling
- Add documentation (README, QUICK_START, CHANGELOG, INSTALLATION)
- Include dist folder for Git installation"
```

### Создайте тег для версии

```bash
git tag -a v1.0.0 -m "Release v1.0.0 - Initial release"
```

### Запуште в remote репозиторий

```bash
# Если remote уже настроен
git push origin main
git push origin v1.0.0

# Если нужно добавить remote (замените URL на ваш)
git remote add origin git@itpro72.ru:your-org/workspace-menu.git
git push -u origin main
git push origin v1.0.0
```

## Шаг 2: Создайте ветку beta (опционально)

Для разных окружений можно создать отдельные ветки:

```bash
# Создать beta ветку
git checkout -b beta
git push origin beta

# Вернуться на main
git checkout main
```

## Шаг 3: Использование в других проектах

### В package.json другого проекта добавьте:

```json
{
  "dependencies": {
    "@corp/workspace-menu": "git+ssh://git@itpro72.ru/your-org/workspace-menu.git#main"
  }
}
```

### Или для beta версии:

```json
{
  "dependencies": {
    "@corp/workspace-menu": "git+ssh://git@itpro72.ru/your-org/workspace-menu.git#beta"
  }
}
```

### Или для конкретного тега:

```json
{
  "dependencies": {
    "@corp/workspace-menu": "git+ssh://git@itpro72.ru/your-org/workspace-menu.git#v1.0.0"
  }
}
```

### Установите пакет:

```bash
npm install
```

## Примеры URL для разных Git серверов

### С SSH (рекомендуется):
```json
"@corp/workspace-menu": "git+ssh://git@itpro72.ru/your-org/workspace-menu.git#main"
"@corp/workspace-menu": "git+ssh://git@github.com/your-org/workspace-menu.git#main"
"@corp/workspace-menu": "git+ssh://git@gitlab.com/your-org/workspace-menu.git#main"
```

### С HTTPS:
```json
"@corp/workspace-menu": "git+https://git@itpro72.ru/your-org/workspace-menu.git#main"
"@corp/workspace-menu": "git+https://github.com/your-org/workspace-menu.git#main"
```

## Workflow для обновлений

### 1. Внесите изменения в код

```bash
# Внесите изменения
npm run build

# Закоммитьте
git add .
git commit -m "feat: add new feature"
```

### 2. Создайте новый тег

```bash
git tag -a v1.1.0 -m "Release v1.1.0 - New features"
git push origin main
git push origin v1.1.0
```

### 3. Обновите в проектах

В проектах, где используется виджет:

```bash
# Обновить до последней версии
npm update @corp/workspace-menu

# Или принудительно переустановить
npm install @corp/workspace-menu --force
```

## Структура веток (рекомендуемая)

```
main         - стабильная версия для production
beta         - тестовая версия
develop      - разработка новых фич
feature/*    - отдельные фичи
```

## SSH ключи для доступа

Если у вас проблемы с доступом к Git серверу, настройте SSH ключи:

```bash
# Генерация SSH ключа
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

# Копируйте публичный ключ
cat ~/.ssh/id_rsa.pub

# Добавьте его в настройки вашего Git сервера
# GitHub: Settings → SSH and GPG keys
# GitLab: Settings → SSH Keys
# Ваш сервер: обратитесь к администратору
```

## Проверка установки

После установки в другом проекте:

```bash
# Проверьте, что пакет установлен
ls -la node_modules/@corp/workspace-menu/

# Должны быть файлы:
# - package.json
# - dist/
# - src/
# - README.md
```

## Важно! ⚠️

1. ✅ Папка `dist` должна быть в Git (уже настроено)
2. ✅ Скрипт `prepare` запустит сборку при установке (уже настроено)
3. ✅ Все зависимости должны быть в `peerDependencies` (уже настроено)
4. ⚠️ Не забудьте запушить все изменения в remote репозиторий
5. ⚠️ Создайте теги для версий

## Быстрый чеклист

- [ ] Создать коммит: `git commit -m "feat: initial release"`
- [ ] Создать тег: `git tag -a v1.0.0 -m "Release v1.0.0"`
- [ ] Настроить remote: `git remote add origin <URL>`
- [ ] Запушить код: `git push origin main`
- [ ] Запушить тег: `git push origin v1.0.0`
- [ ] Добавить в другой проект: `"@corp/workspace-menu": "git+ssh://...#main"`
- [ ] Установить: `npm install`
- [ ] Проверить импорт: `import { Widget } from "@corp/workspace-menu"`

Готово! 🎉

