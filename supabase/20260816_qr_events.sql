create extension if not exists pgcrypto;

create table if not exists public.qr_events (
  id uuid primary key default gen_random_uuid(),

  event_name text not null,
  channel text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  page_path text not null default '/qr',

  created_at timestamptz not null default now(),

  constraint qr_events_event_name_check check (
    event_name in (
      'qr_page_view',
      'qr_click_whatsapp',
      'qr_click_instagram',
      'qr_click_facebook',
      'qr_click_website'
    )
  ),

  constraint qr_events_channel_check check (
    channel is null
    or channel in (
      'whatsapp',
      'instagram',
      'facebook',
      'website'
    )
  ),

  constraint qr_events_page_path_check check (
    page_path = '/qr'
  )
);

alter table public.qr_events enable row level security;

create index if not exists qr_events_created_at_idx
on public.qr_events (created_at desc);

create index if not exists qr_events_event_name_idx
on public.qr_events (event_name);

create index if not exists qr_events_channel_idx
on public.qr_events (channel);

create index if not exists qr_events_utm_source_medium_campaign_idx
on public.qr_events (utm_source, utm_medium, utm_campaign);
