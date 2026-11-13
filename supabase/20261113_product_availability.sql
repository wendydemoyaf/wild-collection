-- Primera fase: conservar activas las referencias ya publicadas hasta que se cargue el catálogo nuevo.
-- La tabla no tiene políticas públicas. Solo el backend con service_role puede escribir.
CREATE TABLE IF NOT EXISTS public.product_availability (
  slug TEXT PRIMARY KEY,
  is_active BOOLEAN NOT NULL DEFAULT false,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.product_availability ENABLE ROW LEVEL SECURITY;

INSERT INTO public.product_availability (slug, is_active)
VALUES
  ('la-vie-est-belle', true),
  ('good-girl', true),
  ('cloud', true),
  ('fame', true),
  ('fantasy', true),
  ('meow', true),
  ('olympea', true),
  ('paris-hilton', true),
  ('vip-rose', true),
  ('legacy-cr7', true),
  ('eros', true),
  ('invictus', true),
  ('million-lucky', true),
  ('noir', true),
  ('phantom', true),
  ('scandal-men', true),
  ('vip-men', true),
  ('pure-xs', true)
ON CONFLICT (slug) DO NOTHING;
