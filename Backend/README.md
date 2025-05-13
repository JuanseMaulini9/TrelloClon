# Project Management Server

Este repositorio contiene el backend para un gestor de proyectos basado en un formato de tablero estilo Trello. El servidor proporciona la API necesaria para manejar las funcionalidades de la aplicación, incluyendo la gestión de tareas y autenticación de usuarios.

## Características

- **Gestión de Tareas:** Permite crear, actualizar, eliminar y mover tareas entre diferentes estados: "Completadas", "En Progreso" y "No Empezadas".
- **Autenticación de Usuarios:** Implementa autenticación mediante JWT (JSON Web Tokens) para proteger las rutas y gestionar sesiones de usuario.
- **Persistencia de Datos:** Utiliza MongoDB para almacenar datos de usuarios y tareas.

## Tecnologías Utilizadas

- **Node.js:** Entorno de ejecución para el servidor.
- **Express:** Framework para crear y manejar rutas.
- **MongoDB:** Base de datos NoSQL para la persistencia de datos.
- **Mongoose:** Librería de modelado de objetos MongoDB para Node.js.
- **JWT (JSON Web Tokens):** Sistema de autenticación para asegurar las rutas protegidas.

## Instalación

1. **Clona el repositorio:**
    ```bash
    git clone https://github.com/tuusuario/project-management-server.git
    ```

2. **Navega al directorio del proyecto:**
    ```bash
    cd project-management-server
    ```

3. **Instala las dependencias:**
    ```bash
    npm install
    ```

4. **Configura las variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. **Inicia el servidor:**
    ```bash
    npm start
    ```

## Endpoints

- **POST /api/auth/register:** Registra un nuevo usuario.
- **POST /api/auth/login:** Inicia sesión y obtiene un token JWT.
- **GET /api/tasks:** Obtiene todas las tareas.
- **POST /api/tasks:** Crea una nueva tarea.
- **PUT /api/tasks/:id:** Actualiza una tarea existente.
- **DELETE /api/tasks/:id:** Elimina una tarea.
