This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Colitas con Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth


Este es un repositorio para HackFest 2023,  con el enrutador de aplicaciones Next.js 13: React, Tailwind, Prisma, MongoDB, NextAuth.

Características:

- Tailwind design
- Tailwind animations y effects
- Full responsiveness
- Autenticación de credenciales
- Autenticación de Google
- Autenticación de Github
- Carga de imágenes usando Cloudinary CDN
- Validación y manejo de formularios de clientes usando react-hook-form
- Manejo de errores del servidor usando react-toast
- Estado de carga de la página
- Estado de página vacía
- Sistema de reservas / reservas
- Filtros de URL compartibles
- Cómo escribir rutas POST y DELETE en controladores de ruta (aplicación/api)
- Cómo manejar archivos como error.tsx y loading.tsx, que son nuevos archivos de plantillas Next 13 para unificar la carga y el manejo de errores

### Requisitos previos

**Versión de nodo 18.x**

### Clonar el repositorio

```concha
clon de git https://github.com/elmergustavo/hackfest-2023
```

### Instalar paquetes

```concha
npm install
```

### Configurar archivo .env


```js
DATABASE_URL=""
NEXTAUTH_SECRET=''
GITHUB_ID=''
GITHUB_SECRET=''
GOOGLE_CLIENT_ID=''
GOOGLE_CLIENT_SECRET=''
BACKEND_URL=''
```

### Configurar Prisma

```concha
npx prisma db push


```

### Inicie la aplicación

```concha
npm run dev
```

## Comandos disponibles

Ejecutar comandos con npm `npm run [comando]`

| comando | descripción |
| :-------------- | :--------------------------------------- |
| `dev` | Inicia una instancia de desarrollo de la aplicación |
