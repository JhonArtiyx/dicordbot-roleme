# Discord Bot - Role Me

Un bot de Discord construido con **Sapphire**, **Bun**, **Prisma**, **TypeScript**, **ESLint** y **Prettier**.

> **Filosofía de Desarrollo:** Este proyecto utiliza una metodología **AI-first/VibeCoding**, donde la IA participa activamente en cada etapa del desarrollo, desde la arquitectura hasta la implementación, permitiendo un desarrollo ágil, iterativo y de alta calidad sin comprometer la creatividad del desarrollador.

## 📋 Requisitos

- [Bun](https://bun.sh) (runtime)
- Node.js 18+ (para Prisma)
- Una base de datos PostgreSQL

## 🚀 Instalación

1. Instala las dependencias con Bun:

```bash
bun install
```

2. Configura las variables de entorno en `.env.local`:

```env
DISCORD_TOKEN=tu_token_aqui
CLIENT_ID=tu_client_id
GUILD_ID=tu_guild_id              # Guild ID para desarrollo (comandos instantáneos)
OWNER_IDS=tu_owner_id
DATABASE_URL=tu_database_url
NODE_ENV=development               # 'development' = comandos de guild, 'production' = comandos globales
LOG_LEVEL=debug
```

> **Nota:** En desarrollo (`NODE_ENV=development`), los comandos slash se registran automáticamente como comandos de guild para actualizaciones instantáneas. En producción (`NODE_ENV=production`), se usan comandos globales que tardan hasta 1 hora en sincronizarse.

3. Genera el cliente de Prisma:

```bash
bun prisma:generate
```

4. Crea las tablas en la base de datos:

```bash
bun prisma:migrate
```

> **Nota:** Se crearán las tablas `auto_roles` y `reaction_roles` automáticamente.

## 📝 Scripts Disponibles

- `bun dev` - Ejecuta el bot en modo desarrollo con watch
- `bun start` - Inicia el bot
- `bun build` - Compila TypeScript
- `bun lint` - Ejecuta ESLint
- `bun lint:fix` - Corrige problemas de ESLint automáticamente
- `bun format` - Formatea el código con Prettier
- `bun prisma:generate` - Genera el cliente de Prisma
- `bun prisma:migrate` - Crea una nueva migración
- `bun prisma:studio` - Abre Prisma Studio

## 📚 Estructura del Proyecto

```
.
├── src/
│   ├── index.ts                     # Punto de entrada del bot
│   ├── commands/                    # Comandos slash del bot
│   │   ├── ping.ts                  # Comando ping de ejemplo
│   │   ├── level.ts                 # Sistema de niveles/XP
│   │   ├── stats.ts                 # Estadísticas del servidor
│   │   ├── verify-setup.ts          # Setup de verificación (Admin)
│   │   ├── verify-config.ts         # Configuración de verificación (Admin)
│   │   ├── autorole.ts              # Gestión de auto roles (Admin)
│   │   └── reactionrole.ts          # Gestión de reaction roles (Admin)
│   ├── listeners/                   # Event listeners
│   │   ├── ready.ts                 # Bot ready event + stats channels
│   │   ├── mentionPrefixOnly.ts     # Mention prefix handler
│   │   ├── buttonInteraction.ts     # Click en botón de verificación
│   │   ├── modalInteraction.ts      # Validación de respuestas
│   │   ├── guildMemberAdd.ts        # Welcome + auto roles + XP + stats
│   │   ├── guildMemberRemove.ts     # Stats update en miembro que se va
│   │   ├── presenceUpdate.ts        # Stats online count update
│   │   ├── messageReactionAdd.ts    # Agregar rol por reacción
│   │   ├── messageReactionRemove.ts # Remover rol por reacción
│   │   ├── messageCreateLevel.ts    # XP automático por mensajes
│   │   └── commands/                # Command listeners
│   ├── api/                         # API REST endpoints
│   │   ├── routes/
│   │   │   ├── levels.ts            # Endpoints para niveles
│   │   │   ├── stats.ts             # Endpoints para estadísticas
│   │   │   └── ... otros endpoints
│   │   └── schemas.ts               # Validación con Zod
│   ├── lib/
│   │   ├── constants.ts             # Constantes del bot
│   │   ├── setup.ts                 # Configuración inicial
│   │   ├── utils.ts                 # Funciones utilitarias
│   │   ├── prisma.ts                # Cliente de Prisma (singleton)
│   │   ├── level/
│   │   │   └── helpers/
│   │   │       ├── levelCalculator.ts  # Fórmulas y cálculos
│   │   │       └── ... otros helpers
│   │   └── stats/
│   │       └── handlers/
│   │           └── statsChannels.ts # Crear y actualizar canales
│   └── generated/
│       └── prisma/                  # Cliente de Prisma generado
├── prisma/
│   ├── schema.prisma                # Schema de Prisma
│   └── migrations/                  # Migraciones de la BD
├── package.json                     # Dependencias
├── tsconfig.json                    # Configuración de TypeScript
├── .eslintrc.json                   # Configuración de ESLint
├── .prettierrc.json                 # Configuración de Prettier
├── .prettierignore                  # Exclusiones de formato
└── .env.local                       # Variables de entorno
```

## 🤖 Comandos Disponibles

### `/ping`
Verifica la latencia del bot y la API de Discord.

```
User: /ping
Bot: Pong 🏓! (Round trip took: 45ms. Heartbeat: 120ms.)
```

### Sistema de Niveles y XP

#### `/level view [usuario]`
Muestra el nivel actual, XP acumulado y progreso hacia el siguiente nivel del usuario (tu mismo si no especificas).

**Características:**
- Barra de progreso visual
- Experiencia acumulada total
- Próximo nivel y XP faltante
- Rango en el leaderboard

#### `/level leaderboard [tipo]`
Muestra el leaderboard global del servidor.

**Tipos disponibles:**
- `total` - Jugadores con más XP total
- `level` - Jugadores con mayor nivel

#### `/level config [opción]`
Configura el sistema de XP del servidor (Admin).

**Opciones:**
- `view` - Ver configuración actual
- `set-xp-per-message` - XP ganado por mensaje
- `set-cooldown` - Cooldown entre ganancias de XP (en segundos)
- `set-multiplier` - Multiplicador global de XP
- `set-base-xp` - XP base para el nivel 1

**Estructura de Niveles:**
- Fórmula: `nivel = piso(0.1 × √xp)`
- Los usuarios ganan XP automáticamente por enviar mensajes
- Sistema de cooldown para evitar spam
- Recompensas de rol automáticas al alcanzar niveles específicos

#### `/level reward [acción]` (Admin)
Gestiona las recompensas de rol por nivel.

**Acciones:**
- `add` - Agregar un rol como recompensa
- `remove` - Remover una recompensa
- `list` - Ver todas las recompensas configuradas

**Ejemplo:**
```
# Dar rol @Legend al alcanzar nivel 50
/level reward add level:50 role:@Legend

# Ver recompensas
/level reward list
```

#### `/level admin [acción]` (Admin)
Herramientas administrativas para gestionar el sistema de XP.

**Acciones:**
- `set-xp` - Establecer XP de un usuario
- `add-xp` - Agregar XP a un usuario
- `reset` - Resetear XP de un usuario

### Sistema de Estadísticas del Servidor

#### `/stats`
Muestra estadísticas completas del servidor en tiempo real.

**Información mostrada:**
- 📊 Estadísticas globales (miembros, bots, roles, canales)
- 💬 Estadísticas de mensajes
- 🎮 Información de niveles/XP
- 🎫 Estadísticas de tickets
- 🏆 Top 5 usuarios por nivel
- 📅 Información de creación del servidor

#### `/stats channels setup` (Admin)
Crea canales de voz que muestren estadísticas en vivo del servidor.

**Canales creados:**
- `👥 Members: X` - Total de miembros
- `🧑 Humans: X` - Total de usuarios humanos
- `🤖 Bots: X` - Total de bots
- `🟢 Online: X` - Usuarios conectados

Estos canales se actualizan automáticamente cuando:
- Se une un nuevo miembro
- Un miembro se va
- Usuarios cambian de estado online/offline

**Características:**
- Los canales son de solo lectura (Click para ver)
- Se actualizan en tiempo real
- Se pueden crear en una categoría específica
- Persisten incluso después de reiniciar el bot

#### `/stats channels refresh` (Admin)
Actualiza manualmente los nombres de los canales de estadísticas.

#### `/stats channels remove` (Admin)
Elimina los canales de estadísticas del servidor.

### Sistema de Verificación

#### `/verify-setup` (Admin)
Envía un mensaje persistente con un botón de verificación al canal actual.

**Características:**
- Solo administradores pueden ejecutarlo
- El botón permanece funcional incluso después de reiniciar el bot
- Al hacer clic, muestra un modal con una pregunta de verificación
- Respuestas correctas otorgan el rol "Verified"

#### `/verify-config` (Admin)
Configura el sistema de verificación.

**Opciones:**
- `action: view` - Ver configuración actual
- `action: difficulty` - Cambiar dificultad (easy, medium, hard)
- `action: role` - Configurar el rol que se asigna al verificarse

**Ejemplos:**
```
# Ver configuración actual
/verify-config action:view

# Cambiar dificultad
/verify-config action:difficulty difficulty:easy

# Configurar rol de verificación
/verify-config action:role role:@Verified
```

### Sistema de Auto Roles

#### `/autorole add` (Admin)
Agrega un rol que se asignará automáticamente a nuevos miembros.

**Uso:**
```
/autorole add role:@Member
```

#### `/autorole remove` (Admin)
Remueve un rol de la lista de auto roles.

**Uso:**
```
/autorole remove role:@Member
```

#### `/autorole list` (Admin)
Muestra todos los roles configurados para asignación automática.

### Sistema de Reaction Roles

#### `/reactionrole create` (Admin)
Crea un nuevo panel de reaction roles.

**Parámetros:**
- `title`: Título del panel
- `description`: Descripción
- `mode`: `SINGLE` (un solo rol) o `MULTIPLE` (múltiples roles)

**Ejemplo:**
```
/reactionrole create 
  title:"Elige tus roles" 
  description:"Reacciona para obtener roles" 
  mode:MULTIPLE
```

#### `/reactionrole add` (Admin)
Agrega un reaction role a un mensaje existente.

**Parámetros:**
- `message_id`: ID del mensaje
- `emoji`: Emoji a usar (Unicode o custom)
- `role`: Rol a asignar
- `description`: (Opcional) Descripción del rol

**Ejemplo:**
```
/reactionrole add 
  message_id:1234567890 
  emoji:🎮 
  role:@Gamer 
  description:"Para jugadores"
```

#### `/reactionrole remove` (Admin)
Remueve un reaction role de un mensaje.

**Ejemplo:**
```
/reactionrole remove message_id:1234567890 emoji:🎮
```

#### `/reactionrole mode` (Admin)
Cambia el modo de un mensaje (SINGLE/MULTIPLE).

**Ejemplo:**
```
/reactionrole mode message_id:1234567890 mode:SINGLE
```

#### `/reactionrole list` (Admin)
Muestra todos los reaction roles configurados en el servidor.

## 🔐 Sistemas Implementados

### 1. Sistema de Niveles y XP
Un sistema completo de experiencia y rangos para mecanizar la progresión de usuarios:

**Características:**
- **Ganancia Automática**: Los usuarios ganan XP por cada mensaje enviado
- **Sistema de Cooldown**: Previene spam con cooldown configurable
- **Fórmula Matemática**: Niveles escalables usando raíz cuadrada
- **Recompensas de Rol**: Asigna roles automáticamente al alcanzar niveles específicos
- **Leaderboard**: Compite por XP total o por nivel
- **Multipicadores**: Bonificadores de XP por servidor
- **Configuración Flexible**: Cada servidor puede ajustar ganancia de XP, cooldown, multiplicadores
- **Persistencia de Datos**: Todo se guarda en la base de datos

**Base de Datos:**
- `LevelConfig` - Configuración global del servidor
- `UserLevel` - Progreso individual de cada usuario
- `LevelReward` - Recompensas de rol por nivel

**API REST:**
- `GET /api/levels/config/:guildId` - Ver configuración
- `PUT /api/levels/config/:guildId` - Actualizar configuración
- `GET /api/levels/user/:guildId/:userId` - Ver progreso
- `PUT /api/levels/user/:guildId/:userId` - Actualizar XP
- `GET /api/levels/leaderboard/:guildId` - Leaderboard
- `GET /api/levels/rewards/:guildId` - Ver recompensas
- Y más...

**Casos de uso:**
- Sistemas de rango/prestigio
- Gamificación de comunidad
- Roles de antigüedad
- Sistemas de beneficios por nivel

---

### 2. Sistema de Estadísticas del Servidor
Monitorea y muestra estadísticas detalladas del servidor en tiempo real:

**Características:**
- **Estadísticas en Vivo**: Información actualizada en tiempo real via canales de voz
- **Canales Automáticos**: Crea canales que muestran contadores en sus nombres
- **Auto-Actualización**: Se actualiza cuando miembros entran/salen o cambian status
- **Dashboard Completo**: Comando `/stats` con información agregada
- **Configuración Persistente**: Guarda qué canales mostrar y en qué categoría
- **Actualizaciones Debounced**: Previene spam de actualizaciones

**Estadísticas Mostradas:**
- 👥 Total de miembros
- 🧑 Usuarios humanos
- 🤖 Bots
- 🟢 Usuarios online
- 💬 Mensajes totales procesados
- 🎮 Jugadores activos del sistema de niveles
- 🎫 Tickets abiertos
- ✨ Características habilitadas

**Base de Datos:**
- `StatsChannelConfig` - Configuración de canales por servidor

**API REST:**
- `GET /api/stats/server/:guildId` - Estadísticas agregadas
- `GET /api/stats/channels/:guildId` - Config de canales
- `POST /api/stats/channels/:guildId` - Crear canales
- `PUT /api/stats/channels/:guildId` - Actualizar config
- `DELETE /api/stats/channels/:guildId` - Eliminar canales

**Casos de uso:**
- Dashboards de servidor
- Monitoreo de actividad
- Información visual para miembros
- Conteo de bots/humanos

---

### 3. Sistema de Verificación
El bot incluye un sistema completo de verificación de usuarios:

- **Welcome Message**: Saluda nuevos miembros automáticamente
- **Button Verification**: Botón persistente para iniciar verificación
- **Modal Interaction**: Pregunta de seguridad en un formulario modal
- **Role Assignment**: Asigna rol configurado tras respuesta correcta
- **Configurable**: Pregunta, respuestas y rol personalizables por servidor
- **Anti-Bot Protection**: Previene que bots automatizados se unan

**Configuración:**
1. Crea un rol para usuarios verificados (ej: "Verified", "Member")
2. Configura el rol: `/verify-config action:role role:@Verified`
3. (Opcional) Cambia la dificultad: `/verify-config action:difficulty difficulty:easy`
4. Envía el mensaje de verificación: `/verify-setup` en el canal deseado

> **Nota:** Si no configuras un rol, el bot buscará automáticamente un rol llamado "Verified".

### 4. Sistema de Auto Roles
Los auto roles se asignan automáticamente cuando un usuario se une al servidor:

- **Configuración Simple**: Usa `/autorole add` para agregar roles
- **Múltiples Roles**: Puedes configurar varios roles simultáneamente
- **Gestión Flexible**: Agrega o remueve roles fácilmente
- **Asignación Automática**: Los roles se asignan al momento de unirse

**Casos de uso:**
- Rol "Member" para todos los usuarios nuevos
- Rol "Unverified" hasta completar verificación
- Roles de bienvenida o tutoriales

### 5. Sistema de Reaction Roles
Los reaction roles permiten a los usuarios auto-asignarse roles mediante reacciones:

**Características:**
- **Modo Single**: Usuarios solo pueden tener un rol del panel
  - Al seleccionar uno nuevo, se remueve el anterior automáticamente
  - Útil para roles mutuamente exclusivos (equipos, rangos)
  
- **Modo Multiple**: Usuarios pueden tener varios roles del panel
  - Acumulación de roles según intereses
  - Útil para roles de notificaciones, juegos, etc.

- **Persistencia**: Los reaction roles funcionan incluso después de reiniciar el bot

- **Gestión Dinámica**: Agrega o remueve roles en tiempo real

- **Auto-Cleanup**: Remover la reacción remueve el rol automáticamente

**Casos de uso:**
- Selección de colores (modo SINGLE)
- Roles de notificaciones (modo MULTIPLE)
- Selección de juegos (modo MULTIPLE)
- Pronombres (modo MULTIPLE)
- Equipos o facciones (modo SINGLE)

## ⚡ Desarrollo vs Producción

### Desarrollo (`NODE_ENV=development`)
- **Comandos instantáneos**: Los slash commands se actualizan inmediatamente
- **Guild Commands**: Solo visibles en el servidor especificado en `GUILD_ID`
- **Ideal para testing**: Prueba cambios sin esperar la cache de Discord

### Producción (`NODE_ENV=production`)  
- **Comandos globales**: Disponibles en todos los servidores donde esté el bot
- **Cache de Discord**: Puede tardar hasta 1 hora en actualizar
- **Mejor rendimiento**: Discord cachea los comandos para respuestas más rápidas

**¿Cómo funciona?** El bot detecta automáticamente el entorno mediante `NODE_ENV` y registra los comandos en consecuencia. No necesitas cambiar código, solo la variable de entorno.

## 📖 Documentación

- [Sapphire Framework](https://sapphirejs.dev/)
- [Discord.js](https://discord.js.org/)
- [Prisma ORM](https://www.prisma.io/)
- [Bun](https://bun.sh)

## 🤖 Metodología: AI-first / VibeCoding

Este proyecto utiliza una filosofía de desarrollo innovadora llamada **AI-first/VibeCoding**, que combina:

### ¿Qué es AI-first/VibeCoding?

Es una metodología donde:

1. **La IA participa activamente** en todas las etapas del desarrollo:
   - Diseño de arquitectura y estructura
   - Implementación de features
   - Identificación y corrección de bugs
   - Refactorización y optimización
   - Documentación y buenas prácticas

2. **El desarrollador mantiene el control creativo**:
   - Define requerimientos y dirección
   - Hace decisiones de diseño finales
   - Integra el feedback en iteraciones
   - Mantiene la visión global del proyecto

3. **Desarrollo ágil e iterativo**:
   - Ciclos rápidos de implementación
   - Múltiples iteraciones por feature
   - Retroalimentación inmediata
   - Corrección de errores en tiempo real

### Beneficios en este Proyecto

- ⚡ **Velocidad**: Implementación rápida de features complejas
- 🎯 **Calidad**: Código limpio, tipado correctamente, sin errores
- 🔧 **Robustez**: Manejo de edge cases considerados
- 📚 **Documentación**: Código autodocumentado y bien estructurado
- 🚀 **Escalabilidad**: Arquitectura pensada para crecimiento
- 🐛 **Mantenibilidad**: Errores identificados y corregidos antes de producción

### Stack Tecnológico Alineado

La selección de herramientas refleja esta metodología:

| Herramienta | Razón |
|---|---|
| **Bun Runtime** | Desarrollo local ultra-rápido, ideal para iteraciones |
| **TypeScript** | Tipado estricto reduce bugs antes de runtime |
| **Sapphire Framework** | Estructura modular, ideal para crecimiento IA-first |
| **Prisma ORM** | Type-safe data layer, auto-generación de tipos |
| **PostgreSQL** | Base de datos robusta y escalable |
| **ESLint + Prettier** | Consistencia automática de código |

## 📄 Licencia

MIT
