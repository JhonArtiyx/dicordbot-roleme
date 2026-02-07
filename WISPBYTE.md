# Deployment en Wispbyte

## Comando de Inicio (Start Command)

Usa este comando en Wispbyte:

```bash
if [ -f /home/container/package.json ]; then bun install; fi; bun prisma generate; bun prisma migrate deploy; bun src/index.ts
```

**Este comando hace:**
1. `bun install` - Instala dependencias
2. `bun prisma generate` - Genera el cliente de Prisma
3. `bun prisma migrate deploy` - Aplica migraciones de base de datos
4. `bun src/index.ts` - Inicia el bot

## Variables de Entorno (Environment Variables)

Configura estas variables en el panel de Wispbyte:

```env
DISCORD_TOKEN=tu_bot_token_aquí
DATABASE_URL=tu_postgresql_url_aquí
NODE_ENV=production
```

Opcional (para testing):
```env
GUILD_ID=tu_guild_id_para_comandos_instantaneos
```

## Pasos para Desplegar

### 1. Crear Servidor en Wispbyte
- Ir a [Create Server](https://wispbyte.com/client/create)
- **Nombre**: `discord-bot-roleme`
- **Docker Image**: Seleccionar **Bun** o **Node.js 20+**

### 2. Subir Código
- Conecta tu repositorio de Git (GitHub/GitLab), o
- Sube los archivos manualmente via FTP/File Manager

### 3. Configurar Variables de Entorno
En el panel de Wispbyte:
- Agregar `DISCORD_TOKEN`
- Agregar `DATABASE_URL`
- Agregar `NODE_ENV=production`

### 4. Configurar Start Command
Pega el comando de inicio completo (ver arriba) en el campo de comando de Wispbyte.

### 5. Iniciar Bot
- Click en **Start**
- Revisar logs para confirmar: `✅ Bot logged in as YourBotName#1234`

## Requisitos de Recursos

**Mínimo recomendado:**
- RAM: 256 MB (512 MB recomendado)
- CPU: 0.25 vCPU
- Storage: 500 MB

## Troubleshooting

### Bot no inicia
- Verifica que `DISCORD_TOKEN` esté configurado correctamente
- Revisa logs para errores específicos
- Asegúrate que `DATABASE_URL` sea accesible

### Comandos no aparecen en Discord
- Verifica que el bot tenga intents habilitados en Discord Developer Portal
- Intenta remover y re-invitar el bot a tu servidor
- En desarrollo, usa `GUILD_ID` para comandos instantáneos

### Errores de base de datos
- Verifica que `DATABASE_URL` tenga formato correcto
- Asegúrate que la base de datos existe
- Revisa que las migraciones se ejecutaron (`bun prisma migrate deploy`)

## Archivos Importantes

- `src/index.ts` - Archivo principal del bot
- `prisma/schema.prisma` - Esquema de base de datos
- `.env.example` - Ejemplo de variables de entorno
- `package.json` - Dependencias y scripts

## Documentación Adicional

- [Terms of Service](https://wispbyte.com/terms)
- [Fair Use Policy](https://wispbyte.com/fair-use)
- Ver `README.md` para características del bot
- Ver `ROLES_GUIDE.md` para guía de configuración de roles
