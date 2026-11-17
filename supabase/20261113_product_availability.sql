-- Primera fase: conservar activas las referencias ya publicadas salvo La Vie Est Belle, archivada por aprobación.
-- La Bomba sustituye a La Vie Est Belle, Scandal sustituye a Good Girl,
-- Valentino Donna sustituye a Cloud y Sweet Like Candy sustituye a Fame.
-- Berry on Top sustituye a Fantasy, Taraf sustituye a Meow y Mallow Madness sustituye a Olympéa.
-- Paradoxe Intense sustituye a Paris Hilton y Eclaire sustituye a 212 VIP Rosé.
-- 9 PM sustituye a Legacy CR7 y Zanzibar Asad sustituye a Eros.
-- Asad Lion sustituye a Invictus. Los otros 9 borradores permanecen inactivos.
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
  ('fame', false),
  ('fantasy', false),
  ('meow', false),
  ('olympea', false),
  ('paris-hilton', false),
  ('vip-rose', false),
  ('legacy-cr7', false),
  ('eros', false),
  ('invictus', false),
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
  ('09-9-pm', true),
  ('22-odyssey-bahamas', false),
  ('33-zanzibar-asad', true),
  ('34-odyssey-marshmallow', false),
  ('36a-l-imperatrice', false),
  ('36b-la-bomba', true),
  ('50-scandal-woman', true),
  ('52-valentino-donna-born-in-roma', true),
  ('55-asad-lion', true),
  ('56-sweet-like-candy', true),
  ('59-le-male-elixir', false),
  ('61-invictus-victory', false),
  ('66-haramain-amber-oud', false),
  ('71-valentino-uomo', false),
  ('72a-berry-on-top', true),
  ('72b-taraf', true),
  ('74a-mallow-madness', true),
  ('74b-paradoxe-intense', true),
  ('80-eclaire', true),
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
  ('52-valentino-donna-born-in-roma', true, now()),
  ('fame', false, now()),
  ('56-sweet-like-candy', true, now()),
  ('fantasy', false, now()),
  ('72a-berry-on-top', true, now()),
  ('meow', false, now()),
  ('72b-taraf', true, now()),
  ('olympea', false, now()),
  ('74a-mallow-madness', true, now()),
  ('paris-hilton', false, now()),
  ('74b-paradoxe-intense', true, now()),
  ('vip-rose', false, now()),
  ('80-eclaire', true, now()),
  ('legacy-cr7', false, now()),
  ('09-9-pm', true, now()),
  ('eros', false, now()),
  ('33-zanzibar-asad', true, now()),
  ('invictus', false, now()),
  ('55-asad-lion', true, now())
ON CONFLICT (slug) DO UPDATE
  SET is_active = EXCLUDED.is_active, updated_at = EXCLUDED.updated_at;
