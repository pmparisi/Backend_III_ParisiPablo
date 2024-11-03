README.md

# Entrega del Proyecto Final
## Pablo Parisi

## Objetivos Generales
- Implementar las últimas mejoras en nuestro proyecto y Dockerizarlo.

## Objetivos Específicos
- Documentar las rutas restantes de nuestro proyecto.
- Añadir los últimos tests.
- Crear una imagen de Docker.

## Se debe entregar
- Documentar con Swagger el módulo de “Users”.
- Desarrollar los test funcionales para todos los endpoints del router “adoption.router.js”.
- Desarrollar el Dockerfile para generar una imagen del proyecto.
- Subir la imagen de Docker a DockerHub y añadir en este README el link de dicha imagen.

## Instrucciones
### Instalación
1. Clona el repositorio:
   git clone [https://tu_repositorio.git](https://github.com/pmparisi/Backend_III_ParisiPablo.git)
2. Instala las dependencias:
   npm install
   
## Scripts
1. Iniciar en modo producción:
npm start
2. Iniciar en modo desarrollo:
npm run dev
3. Ejecutar pruebas:
npm test

## Docker
1. Construir la imagen:
   docker build -t pablo0000/entregafinal_parisipablo:latest .
2. Ejecutar la imagen:
   docker run -p 8081:8080 pablo0000/entregafinal_parisipablo:latest
3. Subir la imagen a DockerHub:
   docker push pablo0000/entregafinal_parisipablo:latest
4. Descargar la imagen desde el repositorio de Docker:
   docker pull pablo0000/entregafinal_parisipablo:latest
   
## Documentación API
La documentación de la API está disponible en:
* http://localhost:8081/api-docs

## Consideraciones
Asegúrate de incluir un archivo .env en la raíz del proyecto para configurar las variables de entorno necesarias para ejecutar la aplicación.

## Repositorio
Link al repositorio de GitHub (sin la carpeta node_modules).
[https://github.com/pmparisi/Backend_III_ParisiPablo](https://github.com/pmparisi/Backend_III_ParisiPablo)
