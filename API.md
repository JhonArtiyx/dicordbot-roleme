# Discord Bot Dashboard API

REST API para gestionar la configuración del bot de Discord a través de un dashboard web.

## 🚀 Inicio Rápido

### Instalación y Ejecución

```bash
# Desarrollo (con hot-reload)
bun run api:dev

# Producción
bun run api:start

# Producción con configuración personalizada
API_PORT=3000 API_KEY=tu-clave-secreta bun run api:prod
```

## ✨ Validación y Tipado con Zod

La API utiliza **Zod** para validación de schemas y type-safety completo. Esto significa:

- ✅ Validación automática de todos los datos de entrada
- ✅ Mensajes de error descriptivos y específicos
- ✅ Tipos TypeScript exportados para tu cliente
- ✅ Validación de Discord Snowflake IDs (17-19 dígitos)
- ✅ Validación de enums (mode, difficulty)

### Tipos Exportados

Puedes importar los tipos desde `src/api/schemas.ts`:

```typescript
import type {
  CreateAutoRoleInput,
  CreateReactionRoleInput,
  UpdateReactionRoleInput,
  CreateVerificationConfigInput,
  UpdateVerificationConfigInput,
} from './api/schemas';

// Uso con type-safety completo
const data: CreateReactionRoleInput = {
  guildId: '123456789012345678',
  channelId: '111111111111111111',
  messageId: '222222222222222222',
  emoji: '🎮',
  roleId: '333333333333333333',
  mode: 'SINGLE', // TypeScript te sugerirá 'SINGLE' | 'MULTIPLE'
  description: 'Role de Gamers',
};
```

### Ejemplos de Validación

```typescript
// Validación del lado del cliente antes de enviar
import { createAutoRoleSchema } from './api/schemas';

const data = { guildId: '12345', roleId: '987654321098765432' };
const result = createAutoRoleSchema.safeParse(data);

if (!result.success) {
  console.error('Errores:', result.error.issues);
  // [{ message: "Invalid Discord ID format", path: ["guildId"], ... }]
}
```

Ver [src/api/examples.ts.example](src/api/examples.ts.example) para ejemplos completos con fetch, axios y React hooks.

### Configuración

Crea un archivo `.env` con las siguientes variables:

```env
# API Configuration
API_PORT=3000
API_KEY=tu-clave-secreta-aqui

# Database (same as bot)
DATABASE_URL=postgresql://usuario:contraseña@host:5432/database
```

## 🔐 Autenticación

Todas las rutas bajo `/api/*` (excepto `/health`) requieren autenticación mediante API key.

### Métodos de Autenticación

**Opción 1: Header X-API-Key**
```bash
curl -H "X-API-Key: tu-clave-secreta" http://localhost:3000/api/autoroles/123456789
```

**Opción 2: Bearer Token**
```bash
curl -H "Authorization: Bearer tu-clave-secreta" http://localhost:3000/api/autoroles/123456789
```

### Códigos de Error de Autenticación

- `401 Unauthorized` - API key faltante o inválida

## 📡 Endpoints

### Información General

#### `GET /`
Información sobre la API y endpoints disponibles.

**Respuesta:**
```json
{
  "name": "Discord Bot Dashboard API",
  "version": "1.0.0",
  "endpoints": {
    "autoroles": "/api/autoroles",
    "reactionroles": "/api/reactionroles",
    "verification": "/api/verification"
  }
}
```

#### `GET /health`
Health check del servidor. **No requiere autenticación.**

**Respuesta:**
```json
{
  "status": "ok",
  "timestamp": "2025-01-16T10:30:00.000Z"
}
```

---

## 🎭 Auto Roles

Los auto roles son roles que se asignan automáticamente cuando un usuario se une al servidor.

### `GET /api/autoroles/:guildId`
Listar todos los auto roles de un servidor.

**Parámetros:**
- `guildId` (string) - ID del servidor de Discord

**Ejemplo:**
```bash
curl -H "X-API-Key: tu-clave" http://localhost:3000/api/autoroles/123456789012345678
```

**Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "guildId": "123456789012345678",
      "roleId": "987654321098765432",
      "createdAt": "2025-01-16T10:00:00.000Z",
      "updatedAt": "2025-01-16T10:00:00.000Z"
    }
  ]
}
```

### `POST /api/autoroles`
Crear un nuevo auto role.

**Body:**
```json
{
  "guildId": "123456789012345678",
  "roleId": "987654321098765432"
}
```

**Ejemplo:**
```bash
curl -X POST -H "Content-Type: application/json" \
  -H "X-API-Key: tu-clave" \
  -d '{"guildId":"123456789012345678","roleId":"987654321098765432"}' \
  http://localhost:3000/api/autoroles
```

**Respuesta (201 Created):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "guildId": "123456789012345678",
    "roleId": "987654321098765432",
    "createdAt": "2025-01-16T10:00:00.000Z",
    "updatedAt": "2025-01-16T10:00:00.000Z"
  },
  "message": "Auto role created successfully"
}
```

**Errores:**
- `409 Conflict` - Ya existe un auto role para ese guild+role
- `400 Bad Request` - Campos faltantes o inválidos

### `DELETE /api/autoroles/:id`
Eliminar un auto role por ID.

**Parámetros:**
- `id` (number) - ID del auto role

**Ejemplo:**
```bash
curl -X DELETE -H "X-API-Key: tu-clave" \
  http://localhost:3000/api/autoroles/1
```

**Respuesta:**
```json
{
  "success": true,
  "message": "Auto role deleted successfully"
}
```

### `DELETE /api/autoroles/guild/:guildId/role/:roleId`
Eliminar un auto role específico por guild y role.

**Parámetros:**
- `guildId` (string) - ID del servidor
- `roleId` (string) - ID del rol

**Ejemplo:**
```bash
curl -X DELETE -H "X-API-Key: tu-clave" \
  http://localhost:3000/api/autoroles/guild/123456789012345678/role/987654321098765432
```

---

## 🎪 Reaction Roles

Los reaction roles permiten a los usuarios obtener roles al reaccionar con emojis en mensajes específicos.

### `GET /api/reactionroles/:guildId`
Listar todos los reaction roles de un servidor.

**Parámetros:**
- `guildId` (string) - ID del servidor

**Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "guildId": "123456789012345678",
      "channelId": "111111111111111111",
      "messageId": "222222222222222222",
      "emoji": "🎮",
      "roleId": "333333333333333333",
      "mode": "MULTIPLE",
      "description": "Role de Gamers",
      "createdAt": "2025-01-16T10:00:00.000Z",
      "updatedAt": "2025-01-16T10:00:00.000Z"
    }
  ]
}
```

### `GET /api/reactionroles/message/:messageId`
Listar todos los reaction roles de un mensaje específico.

**Parámetros:**
- `messageId` (string) - ID del mensaje

**Respuesta:** (Igual al anterior)

### `POST /api/reactionroles`
Crear un nuevo reaction role.

**Body:**
```json
{
  "guildId": "123456789012345678",
  "channelId": "111111111111111111",
  "messageId": "222222222222222222",
  "emoji": "🎮",
  "roleId": "333333333333333333",
  "mode": "SINGLE",
  "description": "Role de Gamers"
}
```

**Campos:**
- `guildId` (string, requerido) - ID del servidor
- `channelId` (string, requerido) - ID del canal
- `messageId` (string, requerido) - ID del mensaje
- `emoji` (string, requerido) - Emoji (Unicode o formato Discord `<:nombre:id>`)
- `roleId` (string, requerido) - ID del rol
- `mode` (string, opcional) - `"SINGLE"` o `"MULTIPLE"` (default: `"MULTIPLE"`)
- `description` (string, opcional) - Descripción del rol

**Ejemplo:**
```bash
curl -X POST -H "Content-Type: application/json" \
  -H "X-API-Key: tu-clave" \
  -d '{
    "guildId":"123456789012345678",
    "channelId":"111111111111111111",
    "messageId":"222222222222222222",
    "emoji":"🎮",
    "roleId":"333333333333333333",
    "mode":"SINGLE",
    "description":"Role de Gamers"
  }' \
  http://localhost:3000/api/reactionroles
```

**Respuesta (201 Created):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "guildId": "123456789012345678",
    "channelId": "111111111111111111",
    "messageId": "222222222222222222",
    "emoji": "🎮",
    "roleId": "333333333333333333",
    "mode": "SINGLE",
    "description": "Role de Gamers",
    "createdAt": "2025-01-16T10:00:00.000Z",
    "updatedAt": "2025-01-16T10:00:00.000Z"
  },
  "message": "Reaction role created successfully"
}
```

**Errores:**
- `409 Conflict` - Ya existe un reaction role con ese mensaje+emoji
- `400 Bad Request` - Campos faltantes o inválidos

### `PATCH /api/reactionroles/:id`
Actualizar un reaction role.

**Parámetros:**
- `id` (number) - ID del reaction role

**Body (todos opcionales):**
```json
{
  "mode": "MULTIPLE",
  "description": "Nueva descripción",
  "roleId": "444444444444444444"
}
```

**Ejemplo:**
```bash
curl -X PATCH -H "Content-Type: application/json" \
  -H "X-API-Key: tu-clave" \
  -d '{"mode":"MULTIPLE","description":"Actualizado"}' \
  http://localhost:3000/api/reactionroles/1
```

### `PATCH /api/reactionroles/message/:messageId/mode`
Cambiar el modo de todos los reaction roles de un mensaje.

**Parámetros:**
- `messageId` (string) - ID del mensaje

**Body:**
```json
{
  "mode": "SINGLE"
}
```

**Ejemplo:**
```bash
curl -X PATCH -H "Content-Type: application/json" \
  -H "X-API-Key: tu-clave" \
  -d '{"mode":"SINGLE"}' \
  http://localhost:3000/api/reactionroles/message/222222222222222222/mode
```

**Respuesta:**
```json
{
  "success": true,
  "message": "Updated 5 reaction roles to SINGLE mode"
}
```

### `DELETE /api/reactionroles/:id`
Eliminar un reaction role por ID.

**Parámetros:**
- `id` (number) - ID del reaction role

**Ejemplo:**
```bash
curl -X DELETE -H "X-API-Key: tu-clave" \
  http://localhost:3000/api/reactionroles/1
```

### `DELETE /api/reactionroles/message/:messageId`
Eliminar todos los reaction roles de un mensaje.

**Parámetros:**
- `messageId` (string) - ID del mensaje

**Ejemplo:**
```bash
curl -X DELETE -H "X-API-Key: tu-clave" \
  http://localhost:3000/api/reactionroles/message/222222222222222222
```

**Respuesta:**
```json
{
  "success": true,
  "message": "Deleted 5 reaction roles"
}
```

---

## 🔒 Verification

Sistema de verificación con preguntas y respuestas para nuevos usuarios.

### `GET /api/verification/:guildId`
Obtener la configuración de verificación de un servidor.

**Parámetros:**
- `guildId` (string) - ID del servidor

**Respuesta:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "guildId": "123456789012345678",
    "roleId": "555555555555555555",
    "difficulty": "MEDIUM",
    "question": "¿Cuál es la capital de México?",
    "answers": ["Ciudad de México", "CDMX", "Mexico City"],
    "createdAt": "2025-01-16T10:00:00.000Z",
    "updatedAt": "2025-01-16T10:00:00.000Z"
  }
}
```

**Errores:**
- `404 Not Found` - No existe configuración de verificación para este servidor

### `POST /api/verification`
Crear una nueva configuración de verificación.

**Body:**
```json
{
  "guildId": "123456789012345678",
  "roleId": "555555555555555555",
  "difficulty": "MEDIUM",
  "question": "¿Cuál es la capital de México?",
  "answers": ["Ciudad de México", "CDMX", "Mexico City"]
}
```

**Campos:**
- `guildId` (string, requerido) - ID del servidor
- `question` (string, requerido) - Pregunta de verificación
- `answers` (string[], requerido) - Array de respuestas válidas (al menos una)
- `roleId` (string, opcional) - ID del rol a asignar al verificar
- `difficulty` (string, opcional) - `"EASY"`, `"MEDIUM"`, o `"HARD"` (default: `"MEDIUM"`)

**Ejemplo:**
```bash
curl -X POST -H "Content-Type: application/json" \
  -H "X-API-Key: tu-clave" \
  -d '{
    "guildId":"123456789012345678",
    "roleId":"555555555555555555",
    "difficulty":"MEDIUM",
    "question":"¿Cuál es la capital de México?",
    "answers":["Ciudad de México","CDMX","Mexico City"]
  }' \
  http://localhost:3000/api/verification
```

**Respuesta (201 Created):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "guildId": "123456789012345678",
    "roleId": "555555555555555555",
    "difficulty": "MEDIUM",
    "question": "¿Cuál es la capital de México?",
    "answers": ["Ciudad de México", "CDMX", "Mexico City"],
    "createdAt": "2025-01-16T10:00:00.000Z",
    "updatedAt": "2025-01-16T10:00:00.000Z"
  },
  "message": "Verification config created successfully"
}
```

**Errores:**
- `409 Conflict` - Ya existe una configuración de verificación para este servidor
- `400 Bad Request` - Campos faltantes, dificultad inválida, o respuestas vacías

### `PATCH /api/verification/:guildId`
Actualizar la configuración de verificación.

**Parámetros:**
- `guildId` (string) - ID del servidor

**Body (todos opcionales):**
```json
{
  "roleId": "666666666666666666",
  "difficulty": "HARD",
  "question": "Nueva pregunta",
  "answers": ["Respuesta 1", "Respuesta 2"]
}
```

**Ejemplo:**
```bash
curl -X PATCH -H "Content-Type: application/json" \
  -H "X-API-Key: tu-clave" \
  -d '{"difficulty":"HARD","answers":["Nueva respuesta"]}' \
  http://localhost:3000/api/verification/123456789012345678
```

**Errores:**
- `404 Not Found` - No existe configuración para este servidor
- `400 Bad Request` - Dificultad inválida o respuestas vacías

### `DELETE /api/verification/:guildId`
Eliminar la configuración de verificación.

**Parámetros:**
- `guildId` (string) - ID del servidor

**Ejemplo:**
```bash
curl -X DELETE -H "X-API-Key: tu-clave" \
  http://localhost:3000/api/verification/123456789012345678
```

**Respuesta:**
```json
{
  "success": true,
  "message": "Verification config deleted successfully"
}
```

---

## 🎨 Ejemplos de Integración

### JavaScript/TypeScript (fetch)

```typescript
const API_URL = 'http://localhost:3000';
const API_KEY = 'tu-clave-secreta';

const headers = {
  'Content-Type': 'application/json',
  'X-API-Key': API_KEY,
};

// Obtener auto roles
async function getAutoRoles(guildId: string) {
  const response = await fetch(`${API_URL}/api/autoroles/${guildId}`, {
    headers,
  });
  return response.json();
}

// Crear reaction role
async function createReactionRole(data: {
  guildId: string;
  channelId: string;
  messageId: string;
  emoji: string;
  roleId: string;
  mode?: 'SINGLE' | 'MULTIPLE';
  description?: string;
}) {
  const response = await fetch(`${API_URL}/api/reactionroles`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });
  return response.json();
}

// Actualizar verificación
async function updateVerification(guildId: string, data: {
  roleId?: string;
  difficulty?: 'EASY' | 'MEDIUM' | 'HARD';
  question?: string;
  answers?: string[];
}) {
  const response = await fetch(`${API_URL}/api/verification/${guildId}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(data),
  });
  return response.json();
}
```

### React Example

```typescript
import { useState, useEffect } from 'react';

function AutoRolesList({ guildId }: { guildId: string }) {
  const [autoRoles, setAutoRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAutoRoles() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/autoroles/${guildId}`,
          {
            headers: {
              'X-API-Key': import.meta.env.VITE_API_KEY,
            },
          }
        );
        const data = await response.json();
        if (data.success) {
          setAutoRoles(data.data);
        }
      } catch (error) {
        console.error('Error fetching auto roles:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchAutoRoles();
  }, [guildId]);

  if (loading) return <div>Cargando...</div>;

  return (
    <ul>
      {autoRoles.map((role) => (
        <li key={role.id}>
          Role ID: {role.roleId}
        </li>
      ))}
    </ul>
  );
}
```

---

## 🔧 Formato de Respuestas

### Respuesta Exitosa

```json
{
  "success": true,
  "data": { /* ... datos ... */ },
  "message": "Operación exitosa" // opcional
}
```

### Respuesta de Error

```json
{
  "error": "Mensaje de error descriptivo"
}
```

## 📋 Códigos de Estado HTTP

- `200 OK` - Solicitud exitosa
- `201 Created` - Recurso creado exitosamente
- `400 Bad Request` - Datos inválidos o faltantes
- `401 Unauthorized` - API key faltante o inválida
- `404 Not Found` - Recurso no encontrado
- `409 Conflict` - El recurso ya existe
- `500 Internal Server Error` - Error del servidor

## 🚨 Errores de Validación

Con Zod, los errores de validación son muy descriptivos. Ejemplos:

### Invalid Discord ID
```json
{
  "error": "guildId: Invalid Discord ID format (must be 17-19 digits)"
}
```

### Missing Required Fields
```json
{
  "error": "guildId: Required, question: Required, answers: Required"
}
```

### Invalid Enum Value
```json
{
  "error": "mode: Invalid enum value. Expected 'SINGLE' | 'MULTIPLE', received 'INVALID'"
}
```

### Multiple Validation Errors
```json
{
  "error": "guildId: Invalid Discord ID format (must be 17-19 digits), emoji: Emoji is required, roleId: Required"
}
```

### Empty Array
```json
{
  "error": "answers: Array must contain at least 1 element(s)"
}
```

### String Too Long
```json
{
  "error": "question: String must contain at most 500 character(s)"
}
```

## 🔐 Seguridad

### Producción

1. **Cambia el API_KEY por defecto:**
   ```env
   API_KEY=genera-una-clave-segura-aleatoria-aqui
   ```

2. **Restringe CORS** - Edita `src/api/index.ts`:
   ```typescript
   const corsHeaders = {
     'Access-Control-Allow-Origin': 'https://tu-dashboard.com',
     // ...
   };
   ```

3. **Usa HTTPS** - Despliega detrás de un proxy reverso (nginx, cloudflare)

4. **Rate Limiting** - Considera agregar limitación de requests

### Generación de API Key Segura

```bash
# Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# OpenSSL
openssl rand -hex 32

# Bun
bun -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 🚢 Despliegue

### Wispbyte (con bot)

Si ya tienes el bot desplegado en Wispbyte, puedes correr ambos servicios:

```bash
# Terminal 1: Bot
bun src/index.ts

# Terminal 2: API
bun src/api/index.ts
```

O usando PM2 para gestionar ambos procesos:

```json
// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'discord-bot',
      script: 'src/index.ts',
      interpreter: 'bun',
    },
    {
      name: 'bot-api',
      script: 'src/api/index.ts',
      interpreter: 'bun',
      env: {
        API_PORT: 3000,
        NODE_ENV: 'production',
      },
    },
  ],
};
```

### Docker (opcional)

```dockerfile
# Agrega al Dockerfile existente
EXPOSE 3000

# Puedes correr ambos con supervisor o similar
```

## 🐛 Troubleshooting

### Error: "Route not found"

Verifica que estás usando el método HTTP correcto (GET, POST, PATCH, DELETE) y la URL exacta.

### Error: "Unauthorized"

Asegúrate de incluir el header `X-API-Key` o `Authorization: Bearer <key>` con tu API key correcta.

### Error: "Failed to fetch"

Si estás desarrollando un frontend en localhost:
1. Verifica que el API server esté corriendo (`bun run api:dev`)
2. Revisa que el puerto sea correcto (default: 3000)
3. Confirma que CORS esté habilitado (ya está por defecto)

### Error de conexión a base de datos

Verifica que `DATABASE_URL` esté configurada correctamente en `.env` y que la base de datos esté accesible.

---

## 📚 Referencias

- [Bun Documentation](https://bun.sh/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Discord.js Guide](https://discordjs.guide)
- [Sapphire Framework](https://sapphirejs.dev)

---

## 📄 Licencia

Este proyecto está bajo la misma licencia que el bot principal.
