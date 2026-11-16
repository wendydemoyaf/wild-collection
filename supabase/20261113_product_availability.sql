-- Primera fase: conservar activas las referencias ya publicadas salvo La Vie Est Belle, archivada por aprobación.
-- La Bomba sustituye a La Vie Est Belle, Scandal sustituye a Good Girl,
-- y Valentino Donna sustituye a Cloud. Los otros 18 borradores permanecen inactivos.
-- La tabla no tiene políticas públicas. Solo el backend con service_role puede escribir.
CREATE TABLE IF NOT EXISTS public.product_availability (
  slug TEXT PRIMARY KEY,
  is_active BOOLEAN NOT NULL DEFAULT false,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.product_availability ENABLE ROW LEVEL SECURITY;

INSERT INTO public.product_availability (slug, is_active)
VALUES
  ('la-vie-est-belle', false),
  ('good-girl', false),
  ('cloud', false),
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
  ('36b-la-bomba', true),
  ('50-scandal-woman', true),
  ('52-valentino-donna-born-in-roma', true),
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

-- Asegurar el intercambio aprobado aunque estas filas ya existieran al aplicar la migración.
INSERT INTO public.product_availability (slug, is_active, updated_at)
VALUES
  ('la-vie-est-belle', false, now()),
  ('36b-la-bomba', true, now()),
  ('good-girl', false, now()),
  ('50-scandal-woman', true, now()),
  ('cloud', false, now()),
  ('52-valentino-donna-born-in-roma', true, now())
ON CONFLICT (slug) DO UPDATE
  SET is_active = EXCLUDED.is_active, updated_at = EXCLUDED.updated_at;
