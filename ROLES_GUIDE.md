# 🎭 Guía de Roles - Auto Roles y Reaction Roles

## 📋 Tabla de Contenidos
- [Auto Roles](#auto-roles)
- [Reaction Roles](#reaction-roles)
- [Ejemplos de Uso](#ejemplos-de-uso)
- [Consejos y Mejores Prácticas](#consejos-y-mejores-prácticas)
- [Solución de Problemas](#solución-de-problemas)

## 🤖 Auto Roles

### ¿Qué son los Auto Roles?
Los auto roles se asignan automáticamente a los usuarios cuando se unen al servidor.

### Configuración

#### 1. Agregar un Auto Role
```
/autorole add role:@Member
```

#### 2. Ver Auto Roles Configurados
```
/autorole list
```

#### 3. Remover un Auto Role
```
/autorole remove role:@Member
```

### Casos de Uso Comunes
- **Rol "Member"**: Dar acceso básico a todos
- **Rol "Unverified"**: Antes de completar verificación
- **Rol "Newcomer"**: Para usuarios nuevos con tutoriales

## 🎨 Reaction Roles

### ¿Qué son los Reaction Roles?
Los reaction roles permiten a los usuarios auto-asignarse roles mediante reacciones en mensajes específicos.

### Modos Disponibles

#### Modo SINGLE
- Los usuarios solo pueden tener **un rol** del panel
- Al seleccionar uno nuevo, se remueve el anterior automáticamente
- **Ideal para**: Colores, equipos, rangos

#### Modo MULTIPLE  
- Los usuarios pueden tener **varios roles** del panel
- Acumulación de roles según preferencias
- **Ideal para**: Notificaciones, juegos, intereses

### Configuración Paso a Paso

#### 1. Crear un Panel de Reaction Roles

```
/reactionrole create 
  title:"🎮 Selecciona tus juegos" 
  description:"Reacciona para recibir notificaciones de tus juegos favoritos" 
  mode:MULTIPLE
```

Esto enviará un mensaje embed al canal actual con el título y descripción especificados.

#### 2. Copiar el Message ID

**Discord Desktop:**
1. Activa el "Modo Desarrollador" en Ajustes → Avanzado
2. Click derecho en el mensaje → "Copiar ID"

**Discord Web/Mobile:**
1. Mantén presionado el mensaje
2. Selecciona "Copiar ID del mensaje"

#### 3. Agregar Reaction Roles al Panel

```
/reactionrole add 
  message_id:1234567890123456 
  emoji:🎮 
  role:@Minecraft 
  description:"Jugadores de Minecraft"
```

Repite este paso para cada rol que quieras agregar:

```
/reactionrole add message_id:1234567890123456 emoji:🔫 role:@Valorant
/reactionrole add message_id:1234567890123456 emoji:⚽ role:@Rocket League
/reactionrole add message_id:1234567890123456 emoji:🎯 role:@Fortnite
```

#### 4. Verificar Configuración

```
/reactionrole list
```

Esto mostrará todos los reaction roles configurados en el servidor.

### Gestión de Reaction Roles

#### Cambiar Modo (SINGLE ↔ MULTIPLE)

```
/reactionrole mode message_id:1234567890123456 mode:SINGLE
```

Esto cambiará el comportamiento del panel entero.

#### Remover un Reaction Role

```
/reactionrole remove message_id:1234567890123456 emoji:🎮
```

Esto eliminará la reacción y dejará de asignar ese rol.

## 💡 Ejemplos de Uso

### Ejemplo 1: Panel de Colores (SINGLE)

```bash
# 1. Crear panel
/reactionrole create 
  title:"🎨 Elige tu color" 
  description:"Selecciona el color de tu nombre (solo uno)" 
  mode:SINGLE

# 2. Agregar colores
/reactionrole add message_id:... emoji:🔴 role:@Rojo
/reactionrole add message_id:... emoji:🔵 role:@Azul
/reactionrole add message_id:... emoji:🟢 role:@Verde
/reactionrole add message_id:... emoji:🟡 role:@Amarillo
/reactionrole add message_id:... emoji:🟣 role:@Morado
```

**Comportamiento**: Si un usuario reacciona 🔴 y luego 🔵, el rol Rojo se remueve automáticamente.

### Ejemplo 2: Panel de Notificaciones (MULTIPLE)

```bash
# 1. Crear panel
/reactionrole create 
  title:"🔔 Notificaciones" 
  description:"Elige qué notificaciones quieres recibir (puedes elegir varios)" 
  mode:MULTIPLE

# 2. Agregar opciones
/reactionrole add message_id:... emoji:📢 role:@Announcements description:"Anuncios importantes"
/reactionrole add message_id:... emoji:🎉 role:@Events description:"Eventos del servidor"
/reactionrole add message_id:... emoji:🎁 role:@Giveaways description:"Sorteos"
/reactionrole add message_id:... emoji:📰 role:@News description:"Noticias"
```

**Comportamiento**: Los usuarios pueden seleccionar todas las notificaciones que quieran.

### Ejemplo 3: Panel de Pronombres (MULTIPLE)

```bash
# 1. Crear panel
/reactionrole create 
  title:"🏳️‍🌈 Pronombres" 
  description:"Selecciona tus pronombres" 
  mode:MULTIPLE

# 2. Agregar opciones
/reactionrole add message_id:... emoji:♂️ role:@He/Him
/reactionrole add message_id:... emoji:♀️ role:@She/Her
/reactionrole add message_id:... emoji:⚧️ role:@They/Them
/reactionrole add message_id:... emoji:❓ role:@Ask Me
```

### Ejemplo 4: Panel de Equipos (SINGLE)

```bash
# 1. Crear panel
/reactionrole create 
  title:"⚔️ Únete a un equipo" 
  description:"Elige tu equipo (solo uno)" 
  mode:SINGLE

# 2. Agregar equipos
/reactionrole add message_id:... emoji:🔴 role:@Team Red
/reactionrole add message_id:... emoji:🔵 role:@Team Blue
/reactionrole add message_id:... emoji:🟢 role:@Team Green
```

## 🎯 Consejos y Mejores Prácticas

### Auto Roles
✅ **Recomendado:**
- Usar para permisos básicos que todos deben tener
- Combinar con sistema de verificación (dar más roles después de verificarse)
- Mantener lista pequeña (1-3 roles máximo)

❌ **Evitar:**
- Dar roles con permisos administrativos automáticamente
- Asignar demasiados roles (puede ser abrumador)

### Reaction Roles

✅ **Recomendado:**
- Usar emojis relevantes y fáciles de entender
- Agregar descripciones claras en cada rol
- Organizar por categorías (un panel por tema)
- Usar SINGLE para opciones mutuamente exclusivas
- Usar MULTIPLE para preferencias acumulativas
- Limitar a 10-15 opciones por panel

❌ **Evitar:**
- Mezclar categorías diferentes en un panel
- Usar emojis confusos o similares
- Dar permisos importantes vía reaction roles
- Paneles con más de 20 opciones (difícil de usar)

### Organización de Roles

**Estructura recomendada:**

```
├── 👮 Staff Roles (manual)
├── 🎨 Color Roles (reaction - SINGLE)
├── 🔔 Notification Roles (reaction - MULTIPLE)
├── 🎮 Gaming Roles (reaction - MULTIPLE)
├── 🌍 Region Roles (reaction - SINGLE)
└── 👤 Member (auto role)
```

## 🔧 Solución de Problemas

### El bot no asigna roles automáticamente

**Causa común:** El bot no tiene permisos suficientes.

**Solución:**
1. Ve a Configuración del Servidor → Roles
2. Asegúrate de que el rol del bot esté **por encima** de los roles que intenta asignar
3. Dale el permiso "Gestionar Roles" al bot

### Las reacciones no funcionan

**Posibles causas:**
1. **Message ID incorrecto**: Verifica que copiaste el ID correcto
2. **Emoji inválido**: Si usas emoji custom, asegúrate de que el bot tenga acceso
3. **Permisos del bot**: El bot necesita "Agregar Reacciones" y "Gestionar Roles"
4. **Canal incorrecto**: El mensaje debe estar en un canal donde el bot tenga permisos

### Al reaccionar no pasa nada

**Debug:**
1. Verifica que el reaction role esté configurado:
   ```
   /reactionrole list
   ```
2. Comprueba que el emoji coincida exactamente
3. Revisa los logs del bot para errores
4. Confirma que el rol existe en el servidor

### Los auto roles no se asignan a nuevos miembros

**Solución:**
1. Verifica la configuración:
   ```
   /autorole list
   ```
2. Confirma que el rol existe
3. Revisa los permisos del bot
4. Comprueba que el bot esté online cuando los usuarios se unen

### Modo SINGLE no remueve roles anteriores

**Causa:** Es posible que los roles estén en diferentes paneles.

**Aclaración:** El modo SINGLE solo remueve roles del **mismo mensaje**. Si quieres que roles de diferentes mensajes sean mutuamente exclusivos, debes gestionarlos manualmente o crear un solo panel.

## 📊 Límites y Consideraciones

### Límites de Discord
- Máximo **20 reacciones** por mensaje
- Máximo **250 roles** por servidor
- El bot debe estar **por encima** de los roles que gestiona

### Límites del Bot
- Los reaction roles requieren que el bot esté **online**
- Los auto roles se asignan al **unirse** (no retroactivo)
- Los paneles de reaction roles deben estar en canales donde el bot tiene **permisos**

### Rendimiento
- Reaction roles con modo SINGLE son más lentos (deben remover roles existentes)
- Auto roles se asignan instantáneamente al unirse
- La base de datos almacena toda la configuración (persiste al reiniciar)

## 🆘 Obtener Ayuda

Si encuentras problemas no cubiertos aquí:
1. Revisa los logs del bot para mensajes de error
2. Verifica los permisos del bot en el servidor
3. Confirma que la base de datos esté configurada correctamente
4. Usa `/reactionrole list` y `/autorole list` para verificar configuración

---

**¿Necesitas agregar nuevas funcionalidades?** Considera modificar el código en:
- `src/commands/autorole.ts` - Lógica de auto roles
- `src/commands/reactionrole.ts` - Lógica de reaction roles
- `src/listeners/messageReactionAdd.ts` - Evento de agregar reacción
- `src/listeners/messageReactionRemove.ts` - Evento de remover reacción
- `prisma/schema.prisma` - Estructura de la base de datos
