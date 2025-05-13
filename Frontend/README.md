# Project Management Frontend

Este repositorio contiene el frontend para un gestor de proyectos basado en un formato de tablero estilo Trello. La aplicación permite a los usuarios interactuar con el backend para gestionar tareas y autenticar usuarios.

## Características

- **Interfaz de Usuario:** Muestra un tablero donde los usuarios pueden ver y gestionar tareas mediante cards organizadas en columnas: "Completadas", "En Progreso" y "No Empezadas".
- **Autenticación:** Permite a los usuarios registrarse e iniciar sesión utilizando JWT (JSON Web Tokens) para acceder a las funcionalidades protegidas.
- **Interactividad:** Incluye funcionalidades de arrastrar y soltar para mover tasks entre columnas, así como formularios para añadir y editar tareas.

## Tecnologías Utilizadas

- **React:** Biblioteca para construir interfaces de usuario.
- **Redux Toolkit:** Maneja el estado global de la aplicación.
- **Tailwind CSS:** Utilizado para el diseño y la estilización de la interfaz.
- **React Router:** Para la gestión de rutas y navegación en la aplicación.

## Instalación

1. **Clona el repositorio:**
    ```bash
    git clone https://github.com/tuusuario/project-management-frontend.git
    ```

2. **Navega al directorio del proyecto:**
    ```bash
    cd project-management-frontend
    ```

3. **Instala las dependencias:**
    ```bash
    npm install
    ```

4. **Configura las variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:
    ```env
    REACT_APP_API_URL=http://localhost:5000/api
    ```

5. **Inicia la aplicación:**
    ```bash
    npm start
    ```

## Rutas

- **/login:** Página de inicio de sesión.
- **/register:** Página de registro de nuevo usuario.
- **/board:** Vista principal del tablero de gestión de tareas.
