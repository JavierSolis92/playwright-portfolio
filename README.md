# 🎭 Playwright Automation Framework - SauceDemo E2E Suite

Este repositorio contiene una suite de pruebas automatizadas **End-to-End (E2E)** desarrollada con **Playwright** sobre la plataforma [SauceDemo](https://www.saucedemo.com/). El proyecto implementa buenas prácticas de automatización, arquitectura escalable y ejecución continua en la nube.

---

## 🛠️ Tecnologías Utilizadas

* **Lenguaje:** JavaScript (Node.js)
* **Framework de Testing:** Playwright
* **Patrón de Diseño:** Page Object Model (POM)
* **Integración Continua (CI/CD):** GitHub Actions
* **Estrategia de Selectores:** Atributos robustos (`data-test`, IDs explícitos)

---

## 🚀 Características del Proyecto

* **Patrón Page Object Model:** Separación clara entre la lógica de interacción de las páginas (`SaucePage.js`) y las suites de prueba (`saucedemo.spec.js`).
* **Ejecución Cross-Browser:** Validación paralela en **Chromium**, **Firefox** y **WebKit**.
* **Pipeline de CI/CD:** Ejecución automática de pruebas ante eventos de `push` o `pull_request` en la rama `main` mediante GitHub Actions.
* **Reportes Automáticos:** Generación y preservación de artefactos con el informe HTML oficial de Playwright.

---

## 💻 Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/JavierSolis92/playwright-portfolio.git](https://github.com/JavierSolis92/playwright-portfolio.git)
   cd playwright-portfolio