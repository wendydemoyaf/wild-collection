# Pedidos de Wild Collection en Supabase

La web ya está preparada para guardar cada pedido contra entrega en una tabla privada de Supabase. El registro incluye cliente, WhatsApp, dirección, perfumes, cantidades, promociones, ahorro, total, estado y fecha.

## 1. Crear o conectar Supabase

La opción más sencilla es abrir el proyecto **wild-collection** en Vercel y entrar a **Storage / Integrations → Supabase**. También puedes crear el proyecto directamente en Supabase y conectarlo después.

## 2. Crear la tabla de pedidos

En Supabase:

1. Abre **SQL Editor**.
2. Crea una consulta nueva.
3. Copia todo el contenido de `supabase/orders.sql`.
4. Pulsa **Run**.

La tabla `orders` quedará con Row Level Security activado y sin acceso público desde el navegador.

## 3. Añadir las llaves en Vercel

Si utilizas la integración de Supabase, Vercel normalmente las crea automáticamente. Confirma que existan estas variables en **Project Settings → Environment Variables**:

- `SUPABASE_URL`
- `SUPABASE_SECRET_KEY`

En proyectos antiguos, la llave privada puede llamarse `SUPABASE_SERVICE_ROLE_KEY`; la web acepta ambos nombres.

Activa las variables para **Preview** y **Production**. Nunca agregues `NEXT_PUBLIC_` al nombre de la llave secreta.

## 4. Volver a desplegar

Después de crear o cambiar variables, realiza un nuevo deployment. Las variables nuevas no se aplican a despliegues anteriores.

## 5. Ver clientes y pedidos

En Supabase abre **Table Editor → orders**. Cada fila corresponde a un pedido e incluye:

- `order_id`: número que recibe el cliente.
- `customer_name` y `phone`: datos del cliente.
- `city`, `province`, `address`, `reference`: entrega.
- `items`: perfumes y cantidades.
- `pricing`, `savings`, `total`: promociones y valor cobrado.
- `status`: `nuevo`, `confirmado`, `preparando`, `enviado`, `entregado` o `cancelado`.
- `created_at`: fecha y hora.

Puedes filtrar por teléfono para ver el historial de un cliente y por estado para organizar la operación. Una siguiente etapa puede añadir un panel privado dentro de la web para gestionar esta tabla sin entrar a Supabase.

## 6. Activar el panel privado de pedidos

La ruta `/admin/pedidos` permite consultar pedidos, buscar clientes, contactar por WhatsApp, cambiar estados y exportar la lista en CSV sin entrar al editor técnico de Supabase.

En **Vercel → wild-collection → Settings → Environment Variables** crea:

- Nombre: `ADMIN_PANEL_PASSWORD`
- Valor: una contraseña privada de al menos 10 caracteres
- Entorno: `Preview` mientras se valida la rama de prueba

Marca la variable como sensible y realiza un nuevo despliegue de la rama `codex/ecommerce-contraentrega`. No escribas la contraseña en el código, GitHub, documentación ni chats.

La sesión del panel dura 12 horas, usa una cookie privada que JavaScript no puede leer y todas las consultas a Supabase se realizan desde el servidor. La tabla continúa sin acceso público.
