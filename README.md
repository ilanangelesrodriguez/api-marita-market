<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

<p align="center"><strong><h1 align="center">API de Notificaciones Push</h1></strong></p>

## Description

Este proyecto es una aplicación del lado del servidor basada en [Nest](https://github.com/nestjs/nest)  diseñada para gestionar usuarios, dispositivos y notificaciones. Incluye autenticación mediante JWT, gestión de usuarios, gestión de dispositivos y envío de notificaciones.

## Configuración del proyecto
```bash
$ git clone <repository-url>

$ cd <project-directory>

$ cp .env.example .env

$ npm install
```

## Compilar y ejecutar el proyecto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Endpoints de la API

### Autenticación

#### `POST /auth/login`
- **Descripción**: Iniciar sesión para obtener un JWT.
- **Body**:
    - `username`: Nombre de usuario.
    - `password`: Contraseña.

---

### Usuarios

#### `POST /users`
- **Descripción**: Crear un nuevo usuario.
- **Body**:
    - `username`: Nombre de usuario.
    - `password`: Contraseña.
    - `email`: Correo electrónico.

#### `GET /users/:id`
- **Descripción**: Obtener un usuario por ID.
- **Params**:
    - `id`: ID del usuario.

#### `GET /users`
- **Descripción**: Obtener todos los usuarios.
- **Respuesta**: Lista de usuarios.

#### `DELETE /users/:id`
- **Descripción**: Eliminar un usuario por ID.
- **Params**:
    - `id`: ID del usuario.

---

### Dispositivos

#### `POST /devices`
- **Descripción**: Crear un nuevo dispositivo.
- **Body**:
    - `deviceId`: ID del dispositivo.
    - `userId`: ID del usuario al que pertenece el dispositivo.
    - `type`: Tipo de dispositivo (por ejemplo, "android", "ios").
    - `token`: Token para enviar notificaciones push.

#### `GET /devices/:id`
- **Descripción**: Obtener un dispositivo por ID.
- **Params**:
    - `id`: ID del dispositivo.

#### `GET /devices`
- **Descripción**: Obtener todos los dispositivos.
- **Respuesta**: Lista de dispositivos.

#### `DELETE /devices/:id`
- **Descripción**: Eliminar un dispositivo por ID.
- **Params**:
    - `id`: ID del dispositivo.

---

### Notificaciones

#### `POST /notifications`
- **Descripción**: Enviar una nueva notificación.
- **Body**:
    - `message`: Mensaje de la notificación.
    - `deviceId`: ID del dispositivo al que se enviará la notificación.

#### `GET /notifications/:id`
- **Descripción**: Obtener una notificación por ID.
- **Params**:
    - `id`: ID de la notificación.

#### `GET /notifications`
- **Descripción**: Obtener todas las notificaciones.
- **Respuesta**: Lista de notificaciones.

#### `DELETE /notifications/:id`
- **Descripción**: Eliminar una notificación por ID.
- **Params**:
    - `id`: ID de la notificación.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Mantente en contacto

- Autor - [Ilan Angeles Rodriguez](https://linkedin.com/in/ilanangelesrodriguez)
- Sitio web - [https://ilanangelesrodriguez.vercel.app](https://ilanangelesrodriguez.vercel.app/)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
