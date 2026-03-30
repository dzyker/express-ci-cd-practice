# 🚀 Express CI/CD Practice

Учебный проект по созданию автоматизированного конвейера доставки программного обеспечения. Включает в себя полный цикл **CI (Continuous Integration)** и **CD (Continuous Deployment)**.

## 🛠 Стек технологий

  * **Backend:** Node.js (v22.x), Express
  * **QA:** Jest, Supertest (Unit & Integration tests)
  * **Code Quality:** ESLint 10+
  * **Containerization:** Docker
  * **Automation:** GitHub Actions
  * **Deployment:** Docker Hub + Watchtower

-----

## 🏗 Архитектура конвейера (Pipeline)

1.  **Code Push:** Разработчик отправляет код в ветку `main`.
2.  **Linting:** GitHub Actions проверяет синтаксис и стиль кода.
3.  **Testing:** Запускаются автоматические тесты. Если тест упал — сборка прерывается.
4.  **Docker Build & Push:** При успешных тестах собирается образ и пушится в Docker Hub.
5.  **Auto-Deploy (Watchtower):** На сервере агент Watchtower замечает обновление в Docker Hub и автоматически перезапускает контейнер.

-----

## 🚀 Быстрый старт (Локально)

1.  **Установка зависимостей:**
    ```bash
    npm install
    ```
2.  **Запуск тестов:**
    ```bash
    npm test
    ```
3.  **Запуск приложения:**
    ```bash
    npm start
    ```
    Приложение доступно на `http://localhost:3000`.

-----

## 🐳 Docker & Deployment

### Сборка образа вручную:

```bash
docker build -t your-docker-login/express-ci-app:latest .
```

### Запуск с автоматическим обновлением (CD):

Чтобы сервер обновлялся сам при каждом пуше, запустите приложение вместе с **Watchtower**:

```bash
# Запуск приложения
docker run -d --name express-app -p 3000:3000 your-docker-login/express-ci-app:latest

# Запуск Watchtower (проверка обновлений каждые 60 секунд)
docker run -d \
  --name watchtower \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower --interval 60 express-app
```

-----

## ⚙️ Настройка GitHub Actions

Для работы Pipeline необходимо добавить в **GitHub Secrets** вашего репозитория:

  * `DOCKERHUB_USERNAME` — ваш логин на Docker Hub.
  * `DOCKERHUB_TOKEN` — Access Token (создается в настройках Docker Hub).

-----

### 📝 Статус сборки
<img width="1266" height="151" alt="image" src="https://github.com/user-attachments/assets/f8a64fac-8f6b-4f01-924a-063b7ac80121" />

-----

### Какие навыки были получены << ? >>

1.  Писать тестируемый код.
2.  Настраивать строгий линтинг.
3.  Работать с Docker-контейнерами.
4.  Автоматизировать деплой без ручного вмешательства.
