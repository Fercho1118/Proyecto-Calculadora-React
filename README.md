
<br />

<div align="center">
  <h1>Proyecto 1 - Calculadora con React</h1>
</div>

---

## Objetivos

- **Practicar diseño de aplicaciones basado en componentes**
- **Implementar testing con Jest y React Testing Library**
- **Configurar linting con ESLint (JavaScript Standard Style)**
- **Desplegar la aplicación en un servidor Ubuntu con Nginx**
- **Documentar componentes con Storybook**

---

## Descripción del Proyecto

Este proyecto consistión en hacecr una calculadura interactiva que incluye:

- Operaciones básicas (+, -, *, /)
- Manejo de números decimales
- Función de cambio de signo (+/-)
- Operación módulo (%)
- Límite de 9 caracteres en pantalla
- Validación de resultados (ERROR para números negativos o > 999999999)

---

## Tecnologías Utilizadas

| Tecnología       | Uso                              |
|------------------|----------------------------------|
| React 19         | Biblioteca principal             |
| Vite             | Bundler y entorno de desarrollo  |
| Storybook        | Documentación de componentes     |
| Jest             | Testing unitario                 |
| ESLint           | Linting (JavaScript Standard)    |
| Nginx            | Servidor web en producción       |
| Cloudflare SSL   | Certificados HTTPS               |

---

## Comandos útiles

### 1. Inicia servidor de desarrollo

   ```
   npm run dev
   ```
### 2. Genera versión para producción

   ```
   npm run build
   ```
### 3. Ejecuta tests unitarios

   ```
   npm run test
   ```
### 4. Verifica estilo de código

   ```
   npm run lint
   ```
### 5. Inicia Storybook

   ```
   npm run storybook
   ```

---


## Estructura del Proyecto
Proyecto-Calculadora-React/

├── src/

│ ├── components/

│ │ ├── Calculator.jsx

│ │ ├── Display.jsx

│ │ ├── Key.jsx

│ │ └── Keypad.jsx

│ ├── hooks/

│ │ └── useCalculatorLogic.js

│ ├── styles/

│ │ └── variables.css

│ ├── tests/

│ └── App.jsx

├── public/

├── stories/

├── vite.config.js

├── package.json

---

## Contacto

- **Estudiante:** Fernando Rueda  
- **Carnet:** 23748  
- **Email:** rue3748@uvg.edu.gt

---

## Créditos

- Basado en [Best-README-Template](https://github.com/othneildrew/Best-README-Template).

