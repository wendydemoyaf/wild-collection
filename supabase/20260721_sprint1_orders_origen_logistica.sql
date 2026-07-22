-- Sprint 1 · Ejecuta este archivo una sola vez en Supabase > SQL Editor.
-- Amplía la tabla existente public.orders sin borrar, sustituir ni modificar
-- los pedidos actuales ni sus estados.

alter table public.orders
  add column if not exists origen_registro text,
  add column if not exists id_pedido_externo text,
  add column if not exists lead_id_kommo text,
  add column if not exists telefono_normalizado text,
  add column if not exists id_registro_airtable text,
  add column if not exists id_orden_dropi text,
  add column if not exists numero_guia text,
  add column if not exists estado_logistico text,
  add column if not exists fecha_entrega timestamptz,
  add column if not exists actualizado_logistica_en timestamptz;

-- PostgreSQL permite varios valores NULL en este índice. Solo un identificador
-- externo que tenga contenido puede repetirse.
create unique index if not exists orders_id_pedido_externo_unique_idx
  on public.orders (id_pedido_externo)
  where id_pedido_externo is not null;

comment on column public.orders.origen_registro is
  'Origen técnico del registro cuando exista: web, bot, Airtable, Kommo u otro.';
comment on column public.orders.id_pedido_externo is
  'Identificador externo único solamente cuando tiene valor; no se usa para fusionar por teléfono.';
comment on column public.orders.lead_id_kommo is
  'Identificador del lead de Kommo, si está disponible.';
comment on column public.orders.telefono_normalizado is
  'Teléfono en formato internacional para detectar posibles coincidencias que requieren revisión manual.';
comment on column public.orders.id_registro_airtable is
  'Identificador del registro operativo de Airtable, si existe.';
comment on column public.orders.id_orden_dropi is
  'Identificador de la orden logística de Dropi, si existe.';
comment on column public.orders.numero_guia is
  'Número de guía logística, si se ha generado.';
comment on column public.orders.estado_logistico is
  'Estado logístico informado por la operación, independiente del estado actual del pedido.';
comment on column public.orders.fecha_entrega is
  'Fecha y hora de entrega real, si se conoce.';
comment on column public.orders.actualizado_logistica_en is
  'Fecha y hora de la última actualización logística recibida.';
