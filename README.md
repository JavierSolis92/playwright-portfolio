# 🎭 Playwright Automation Framework - SauceDemo E2E Suite

Este repositorio contiene una suite de pruebas automatizadas **End-to-End (E2E)** desarrollada con **Playwright** sobre la plataforma [SauceDemo](https://www.saucedemo.com/). El proyecto implementa buenas prácticas de automatización, arquitectura escalable y ejecución continua en la nube.

---

## 🛠️ Tecnologías Utilizadas

* **Lenguaje:** JavaScript (Node.js)
* **Framework de Testing:** Playwright (`@playwright/test`)
* **Arquitectura:** Page Object Model (POM) para UI & Cliente HTTP nativo (`APIRequestContext`)
* **Integración Continua (CI/CD):** GitHub Actions
* **Estrategia de Selectores:** Atributos robustos (`data-test`, IDs explícitos)

---

## 🚀 Características del Proyecto

### 🌐 Suite UI End-to-End (SauceDemo)
* **Patrón Page Object Model:** Separación clara entre la lógica de interacción (`SaucePage.js`) y las suites de prueba (`saucedemo.spec.js`).
* **Flujo Completo:** Automatización del proceso de autenticación, selección de productos y proceso de checkout E2E.

### 📡 Suite Backend API (ReqRes)
* **Pruebas de Integración HTTP:** Implementación con el cliente nativo de Playwright sin dependencias externas.
* **GET `/api/users`:** Validación de códigos de respuesta (`200 OK`), parámetros de consulta (`query params`) y esquemas JSON.
* **POST `/api/users`:** Validación de creación de recursos (`201 Created`), envío de payloads y verificación de propiedades generadas (`id`, `createdAt`).

### ⚙️ Infraestructura y Calidad
* **Ejecución Cross-Browser:** Validación paralela en **Chromium**, **Firefox** y **WebKit**.
* **Pipeline de CI/CD:** Ejecución automática de pruebas UI y API ante eventos de `push` o `pull_request` en la rama `main` mediante GitHub Actions.
* **Reportes Automáticos:** Generación y preservación de artefactos con el informe HTML oficial de Playwright.
---

## 💻 Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/JavierSolis92/playwright-portfolio.git](https://github.com/JavierSolis92/playwright-portfolio.git)
   cd playwright-portfolio