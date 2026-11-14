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

-- Nuevas referencias preparadas como inactivas hasta verificar fotografías y fichas.
INSERT INTO public.product_availability (slug, is_active)
VALUES
  ('09-9-pm', false),
  ('22-odyssey-bahamas', false),
  ('33-zanzibar-asad', false),
  ('34-odyssey-marshmallow', false),
  ('36a-l-imperatrice', false),
  ('36b-la-bomba', false),
  ('50-scandal-woman', false),
  ('52-valentino-donna-born-in-roma', false),
  ('55-asad-lion', false),
  ('56-sweet-like-candy', false),
  ('59-le-male-elixir', false),
  ('61-invictus-victory', false),
  ('66-haramain-amber-oud', false),
  ('71-valentino-uomo', false),
  ('72a-berry-on-top', false),
  ('72b-taraf', false),
  ('74a-mallow-madness', false),
  ('74b-paradoxe-intense', false),
  ('80-eclaire', false),
  ('88-khamrah', false),
  ('99-honor-glory', false)
ON CONFLICT (slug) DO NOTHING;
