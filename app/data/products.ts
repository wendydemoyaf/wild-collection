export type ProductGender = "mujer" | "hombre";

export type OlfactoryPyramid = {
  salida: string[];
  corazon: string[];
  fondo: string[];
};

export type ProductTheme = {
  background: string;
  text: string;
  muted: string;
  accent: string;
  accentText: string;
  surface: string;
  border: string;
  panel: string;
  panelText: string;
  header: string;
  bars: string[];
};

export type Product = {
  slug: string;
  name: string;
  inspiration: string;
  /** Referencia para uso interno; no se muestra en la ficha pública. */
  code?: string;
  /** El perfume permanece archivado pero no puede mostrarse ni comprarse si está inactivo. */
  isActive?: boolean;
  gender: ProductGender;
  image: string;
  secondaryImage?: string;
  family: string;
  feeling: string;
  occasion: string;
  description: string;
  pyramid: OlfactoryPyramid;
};

export const products: Product[] = [
  {
    slug: "36b-la-bomba",
    code: "36b",
    isActive: true,
    name: "La Bomba",
    inspiration: "Inspirado en La Bomba de Carolina Herrera",
    gender: "mujer",
    image: "/products/2026/36b_la_bomba.webp",
    family: "Floral · Frutal · Ambarado",
    feeling: "Radiante y atrevida",
    occasion: "Salidas · Citas · Celebraciones",
    description: "Una fragancia dulce, floral y vibrante, con un fondo cálido y envolvente que no pasa desapercibido.",
    // Pirámide publicada para la fragancia de inspiración; no confirma una fórmula idéntica.
    pyramid: { salida: ["Pitaya exótica"], corazon: ["Peonía cereza", "Frangipani rojo"], fondo: ["Vainilla solar"] },
  },
  {
    slug: "50-scandal-woman",
    code: "50",
    isActive: true,
    name: "Scandal",
    inspiration: "Inspirado en Scandal de Jean Paul Gaultier",
    gender: "mujer",
    image: "/products/2026/50_scandal_women.webp",
    family: "Dulce · Floral · Gourmand",
    feeling: "Seductora y provocadora",
    occasion: "Noche · Citas · Celebraciones",
    description: "Una fragancia dulce, intensa y sensual, con un fondo cálido y envolvente que deja huella.",
    // Pirámide publicada para la fragancia comercial de inspiración, no certifica fórmula idéntica.
    pyramid: {
      salida: ["Naranja sanguina", "Mandarina"],
      corazon: ["Miel", "Gardenia", "Flor de azahar", "Jazmín", "Durazno"],
      fondo: ["Cera de abeja", "Caramelo", "Pachulí", "Regaliz"],
    },
  },
  {
    slug: "52-valentino-donna-born-in-roma",
    code: "52",
    isActive: true,
    name: "Valentino Donna",
    inspiration: "Inspirado en Valentino Donna Born in Roma",
    gender: "mujer",
    image: "/products/2026/52_valentino_born_in_roma.webp",
    family: "Floral · Ambarado · Avainillado",
    feeling: "Elegante y audaz",
    occasion: "Día · Citas · Ocasiones especiales",
    description: "Floral, femenina y sofisticada, con un toque floral y vainilla cálida que deja huella.",
    // Notas publicadas para Valentino Donna Born in Roma, perfume comercial de inspiración.
    pyramid: {
      salida: ["Grosella negra", "Pimienta rosa", "Bergamota"],
      corazon: ["Jazmín", "Jazmín sambac", "Té de jazmín"],
      fondo: ["Vainilla Bourbon", "Cashmeran", "Madera de guayaco"],
    },
  },
  {
    slug: "56-sweet-like-candy",
    code: "56",
    isActive: true,
    name: "Sweet Like Candy",
    inspiration: "Inspirado en Sweet Like Candy de Ariana Grande",
    gender: "mujer",
    image: "/products/2026/56_sweet_like_candy.webp",
    family: "Dulce · Frutal · Gourmand",
    feeling: "Coqueta y divertida",
    occasion: "Día · Salidas · Citas",
    description: "Dulce, coqueta y cremosa, con frutas jugosas, vainilla suave y un toque irresistible.",
    // Pirámide de la fragancia comercial que sirve de inspiración; no garantiza la misma fórmula.
    pyramid: {
      salida: ["Mora", "Bergamota italiana", "Pera"],
      corazon: ["Jazmín sambac", "Frangipani", "Madreselva"],
      fondo: ["Crema de cassis", "Malvavisco", "Madera de cachemira", "Vainilla"],
    },
  },
  {
    slug: "72a-berry-on-top",
    code: "72a",
    isActive: true,
    name: "Berry on Top",
    inspiration: "Inspirado en Berry on Top de Lattafa",
    gender: "mujer",
    image: "/products/2026/72a_berry_on_top.webp",
    family: "Dulce · Frutal · Gourmand",
    feeling: "Dulce y tentadora",
    occasion: "Tardes · Citas · Salidas",
    description: "Dulce, cremosa y juguetona, con fresas jugosas y vainilla suave que dejan ganas de más.",
    // Pirámide de la fragancia comercial de inspiración; no certifica la fórmula Wild Collection.
    pyramid: {
      salida: ["Fresa", "Crema chantilly"],
      corazon: ["Mermelada de fresa", "Azúcar cocida", "Flores blancas"],
      fondo: ["Vainilla", "Almizcle"],
    },
  },
  {
    slug: "72b-taraf",
    code: "72b",
    isActive: true,
    name: "Taraf",
    inspiration: "Inspirado en Niche Emarati Taraf de Lattafa",
    gender: "mujer",
    image: "/products/2026/72b_taraf.webp",
    family: "Floral · Frutal · Ambarado",
    feeling: "Romántica y sofisticada",
    occasion: "Citas · Celebraciones · Ocasiones especiales",
    description: "Dulce y sofisticada, con un toque de frutas rojas, flores delicadas y un fondo cálido que envuelve con elegancia.",
    // Pirámide de la fragancia de inspiración; no certifica la fórmula de Wild Collection.
    pyramid: {
      salida: ["Cereza", "Fresa"],
      corazon: ["Jazmín", "Lirio de los valles"],
      fondo: ["Ámbar", "Almizcle", "Vainilla"],
    },
  },
  {
    slug: "74a-mallow-madness",
    code: "74a",
    isActive: true,
    name: "Mallow Madness",
    inspiration: "Inspirado en Mallow Madness de Lattafa",
    gender: "mujer",
    image: "/products/2026/74a_mallow.webp",
    family: "Dulce · Frutal · Gourmand",
    feeling: "Suave y encantadora",
    occasion: "Tardes · Citas · Encuentros especiales",
    description: "Dulce y aterciopelada, con malvavisco, frutos rojos y una vainilla cremosa que envuelve delicadamente.",
    // Pirámide de la fragancia comercial de inspiración; no certifica la fórmula Wild Collection.
    pyramid: {
      salida: ["Fresa", "Frambuesa"],
      corazon: ["Malvavisco", "Fresia"],
      fondo: ["Vainilla", "Crema", "Almizcle"],
    },
  },
  {
    slug: "74b-paradoxe-intense",
    code: "74b",
    isActive: true,
    name: "Paradoxe Intense",
    inspiration: "Inspirado en Paradoxe Intense de Prada",
    gender: "mujer",
    image: "/products/2026/74b_paradoxe.webp",
    family: "Floral · Ambarado · Amaderado",
    feeling: "Intensa y magnética",
    occasion: "Citas · Noches · Ocasiones especiales",
    description: "Floral, intensa y sofisticada, con jazmín luminoso, ámbar cálido y una vainilla envolvente que cautiva.",
    // Pirámide de la fragancia comercial de inspiración; no certifica la fórmula Wild Collection.
    pyramid: {
      salida: ["Bergamota", "Neroli", "Pera"],
      corazon: ["Jazmín", "Esencia de neroli", "Musgo"],
      fondo: ["Ámbar", "Vainilla", "Almizcle blanco"],
    },
  },
  {
    slug: "80-eclaire",
    code: "80",
    isActive: true,
    name: "Eclaire",
    inspiration: "Inspirado en Eclaire de Lattafa",
    gender: "mujer",
    image: "/products/2026/80_eclaire.webp",
    family: "Dulce · Cremoso · Gourmand",
    feeling: "Cálida y reconfortante",
    occasion: "Tardes · Citas · Noches frescas",
    description: "Cremosa y envolvente, con caramelo dorado, miel suave y una vainilla cálida que invita a acercarse.",
    // Pirámide de la fragancia comercial de inspiración; no certifica la fórmula Wild Collection.
    pyramid: {
      salida: ["Caramelo", "Leche", "Azúcar"],
      corazon: ["Miel", "Flores blancas"],
      fondo: ["Vainilla", "Praliné", "Almizcle"],
    },
  },
  {
    slug: "la-vie-est-belle",
    isActive: false,
    name: "La Vie Est Belle",
    inspiration: "Inspirado en La Vie Est Belle",
    gender: "mujer",
    image: "/products/la-vie-est-belle.jpeg",
    family: "Dulce · Floral",
    feeling: "Femenina y luminosa",
    occasion: "Día · Citas · Celebraciones",
    description: "Una fragancia dulce y elegante que envuelve con una sensación alegre, femenina y memorable.",
    pyramid: { salida: ["Pera", "Grosella negra"], corazon: ["Iris", "Jazmín", "Flor de azahar"], fondo: ["Praliné", "Vainilla", "Pachulí", "Haba tonka"] },
  },
  {
    slug: "good-girl",
    isActive: false,
    name: "Good Girl",
    inspiration: "Inspirado en Good Girl",
    gender: "mujer",
    image: "/products/good-girl.jpeg",
    family: "Dulce · Floral oriental",
    feeling: "Seductora y sofisticada",
    occasion: "Noche · Citas · Eventos",
    description: "Una mezcla intensa de flores blancas y dulzura cálida para una presencia segura y sofisticada.",
    pyramid: { salida: ["Almendra", "Café", "Bergamota"], corazon: ["Nardo", "Jazmín", "Flor de azahar"], fondo: ["Haba tonka", "Cacao", "Vainilla", "Sándalo"] },
  },
  {
    slug: "cloud",
    isActive: false,
    name: "Cloud",
    inspiration: "Inspirado en Cloud",
    gender: "mujer",
    image: "/products/cloud.jpeg",
    family: "Dulce · Cremoso",
    feeling: "Suave y reconfortante",
    occasion: "Diario · Tardes · Citas",
    description: "Dulce, esponjosa y cremosa: una fragancia moderna que se siente como una nube sobre la piel.",
    pyramid: { salida: ["Lavanda", "Pera", "Bergamota"], corazon: ["Crema batida", "Praliné", "Coco", "Orquídea"], fondo: ["Almizcle", "Notas amaderadas"] },
  },
  {
    slug: "fame",
    isActive: false,
    name: "Fame",
    inspiration: "Inspirado en Fame",
    gender: "mujer",
    image: "/products/fame.jpeg",
    family: "Frutal · Floral",
    feeling: "Atrevida y radiante",
    occasion: "Día · Salidas · Eventos",
    description: "Mango jugoso, flores blancas y una base cremosa para quien disfruta llamar la atención con elegancia.",
    pyramid: { salida: ["Mango", "Bergamota"], corazon: ["Jazmín", "Incienso"], fondo: ["Vainilla", "Sándalo"] },
  },
  {
    slug: "fantasy",
    isActive: false,
    name: "Fantasy",
    inspiration: "Inspirado en Fantasy",
    gender: "mujer",
    image: "/products/fantasy.jpeg",
    family: "Dulce · Frutal",
    feeling: "Coqueta y divertida",
    occasion: "Diario · Citas · Fines de semana",
    description: "Una fragancia coqueta y deliciosa, con frutas chispeantes y un corazón dulce que se hace notar.",
    pyramid: { salida: ["Kiwi", "Lichi rojo", "Membrillo"], corazon: ["Chocolate blanco", "Quequito", "Orquídea", "Jazmín"], fondo: ["Almizcle", "Raíz de lirio", "Notas amaderadas"] },
  },
  {
    slug: "meow",
    isActive: false,
    name: "Meow",
    inspiration: "Inspirado en Meow",
    gender: "mujer",
    image: "/products/meow.jpeg",
    family: "Dulce · Floral",
    feeling: "Tierna y encantadora",
    occasion: "Diario · Universidad · Citas suaves",
    description: "Delicada, cremosa y femenina, con frutas suaves, flores blancas y un fondo de vainilla.",
    pyramid: { salida: ["Pera", "Mandarina", "Gardenia", "Jazmín"], corazon: ["Madreselva", "Lirio", "Flor de azahar"], fondo: ["Vainilla", "Ámbar", "Sándalo", "Almizcle"] },
  },
  {
    slug: "olympea",
    isActive: false,
    name: "Olympéa",
    inspiration: "Inspirado en Olympéa",
    gender: "mujer",
    image: "/products/olympea.jpeg",
    family: "Floral · Avainillado",
    feeling: "Poderosa y sensual",
    occasion: "Noche · Eventos · Citas",
    description: "Una vainilla salada y luminosa que combina sensualidad, fuerza y una feminidad imponente.",
    pyramid: { salida: ["Jazmín de agua", "Mandarina verde", "Flor de jengibre"], corazon: ["Vainilla", "Sal"], fondo: ["Ámbar gris", "Madera de cachemira", "Sándalo"] },
  },
  {
    slug: "paris-hilton",
    isActive: false,
    name: "Paris Hilton",
    inspiration: "Inspirado en Paris Hilton",
    gender: "mujer",
    image: "/products/paris-hilton.jpeg",
    family: "Frutal · Floral",
    feeling: "Fresca y glamorosa",
    occasion: "Día · Trabajo · Salidas",
    description: "Frutas luminosas y flores femeninas en una fragancia alegre, juvenil y fácil de llevar.",
    pyramid: { salida: ["Melón", "Manzana", "Durazno"], corazon: ["Fresia", "Jazmín", "Mimosa", "Lirio"], fondo: ["Almizcle", "Sándalo", "Musgo de roble"] },
  },
  {
    slug: "vip-rose",
    isActive: false,
    name: "212 VIP Rosé",
    inspiration: "Inspirado en 212 VIP Rosé",
    gender: "mujer",
    image: "/products/vip-rose.jpeg",
    family: "Frutal · Floral",
    feeling: "Festiva y elegante",
    occasion: "Fiestas · Brunch · Citas",
    description: "Una salida burbujeante con corazón floral y fondo suave, perfecta para celebrar y destacar.",
    pyramid: { salida: ["Champaña rosada", "Pimienta rosa"], corazon: ["Flor de durazno", "Rosa"], fondo: ["Almizcle blanco", "Notas amaderadas", "Ámbar"] },
  },
  {
    slug: "09-9-pm",
    code: "09",
    isActive: true,
    name: "9 PM",
    inspiration: "Inspirado en 9 PM de Afnan",
    gender: "hombre",
    image: "/products/2026/09_9pm.webp",
    family: "Dulce · Especiado · Ambarado",
    feeling: "Audaz y magnético",
    occasion: "Noches · Citas · Salidas",
    description: "Dulce, especiado y seductor, con una frescura vibrante y un fondo cálido de vainilla que destaca al caer la noche.",
    // Pirámide publicada para la fragancia comercial de inspiración; no certifica fórmula idéntica.
    pyramid: {
      salida: ["Manzana", "Canela", "Lavandín", "Bergamota"],
      corazon: ["Flor de azahar", "Lirio de los valles"],
      fondo: ["Vainilla", "Haba tonka", "Ámbar", "Pachulí"],
    },
  },
  {
    slug: "legacy-cr7",
    isActive: false,
    name: "Legacy CR7",
    inspiration: "Inspirado en Legacy CR7",
    gender: "hombre",
    image: "/products/legacy-cr7.jpeg",
    family: "Amaderado · Aromático",
    feeling: "Elegante y decidido",
    occasion: "Trabajo · Noche · Eventos",
    description: "Un aroma masculino de carácter elegante, con especias, maderas y una presencia segura.",
    pyramid: { salida: ["Bergamota", "Canela", "Manzana verde", "Lavanda"], corazon: ["Cedro", "Romero", "Salvia", "Violeta"], fondo: ["Ámbar", "Pachulí", "Maderas"] },
  },
  {
    slug: "33-zanzibar-asad",
    code: "33",
    isActive: true,
    name: "Zanzibar Asad",
    inspiration: "Inspirado en Asad Zanzibar de Lattafa",
    gender: "hombre",
    image: "/products/2026/33_asad_zanzibar.webp",
    family: "Especiado · Aromático · Avainillado",
    feeling: "Aventurero y sofisticado",
    occasion: "Día · Salidas · Encuentros especiales",
    description: "Fresco, especiado y envolvente, con un toque marino y un fondo cálido de vainilla e incienso que deja huella.",
    // Pirámide comercial de la fragancia de inspiración; no confirma fórmula Wild Collection.
    pyramid: {
      salida: ["Pimienta negra", "Lavanda marina"],
      corazon: ["Agua de coco salada", "Iris"],
      fondo: ["Vainilla", "Incienso"],
    },
  },
  {
    slug: "eros",
    isActive: false,
    name: "Eros",
    inspiration: "Inspirado en Eros",
    gender: "hombre",
    image: "/products/eros.jpeg",
    family: "Fresco · Dulce aromático",
    feeling: "Magnético y seguro",
    occasion: "Noche · Citas · Fiestas",
    description: "Fresco al inicio y seductor al final, con menta, manzana y vainilla para una presencia magnética.",
    pyramid: { salida: ["Menta", "Manzana verde", "Limón"], corazon: ["Haba tonka", "Geranio", "Ambroxan"], fondo: ["Vainilla", "Cedro", "Vetiver", "Musgo de roble"] },
  },
  {
    slug: "55-asad-lion",
    code: "55",
    isActive: true,
    name: "Asad Lion",
    inspiration: "Inspirado en Asad de Lattafa",
    gender: "hombre",
    image: "/products/2026/55_asad_lion.webp",
    family: "Especiado · Ambarado · Amaderado",
    feeling: "Imponente y seguro",
    occasion: "Noches · Eventos · Climas frescos",
    description: "Especiado, profundo y envolvente, con pimienta negra, tabaco y café intenso sobre un fondo cálido de vainilla y ámbar.",
    // Pirámide comercial de la fragancia de inspiración; no confirma fórmula Wild Collection.
    pyramid: {
      salida: ["Pimienta negra", "Piña", "Tabaco"],
      corazon: ["Café", "Iris", "Pachulí"],
      fondo: ["Ámbar", "Vainilla", "Maderas secas", "Benjuí", "Ládano"],
    },
  },
  {
    slug: "invictus",
    isActive: false,
    name: "Invictus",
    inspiration: "Inspirado en Invictus",
    gender: "hombre",
    image: "/products/invictus.jpeg",
    family: "Fresco · Acuático",
    feeling: "Enérgico y triunfador",
    occasion: "Diario · Gimnasio · Clima cálido",
    description: "Una fragancia fresca, acuática y masculina que transmite energía, limpieza y confianza.",
    pyramid: { salida: ["Notas marinas", "Toronja", "Mandarina"], corazon: ["Hoja de laurel", "Jazmín"], fondo: ["Ámbar gris", "Madera de guayaco", "Musgo de roble", "Pachulí"] },
  },
  {
    slug: "59-le-male-elixir",
    code: "59",
    isActive: true,
    name: "Le Male Elixir",
    inspiration: "Inspirado en Le Male Elixir de Jean Paul Gaultier",
    gender: "hombre",
    image: "/products/2026/59_le_male.webp",
    family: "Ambarado · Dulce · Aromático",
    feeling: "Provocador y sofisticado",
    occasion: "Citas · Noches · Celebraciones",
    description: "Hay hombres que buscan llamar la atención. Y otros que saben cómo dejar huella sin esforzarse. Intenso, cálido y seductor, para esas noches en las que quieres que te recuerden.",
    // Pirámide de la fragancia comercial de inspiración; no certifica fórmula Wild Collection.
    pyramid: {
      salida: ["Lavanda", "Menta"],
      corazon: ["Vainilla", "Benjuí"],
      fondo: ["Miel", "Haba tonka", "Tabaco"],
    },
  },
  {
    slug: "million-lucky",
    isActive: false,
    name: "Million Lucky",
    inspiration: "Inspirado en 1 Million Lucky",
    gender: "hombre",
    image: "/products/million-lucky.jpeg",
    family: "Dulce · Amaderado",
    feeling: "Seductor y moderno",
    occasion: "Noche · Citas · Fines de semana",
    description: "Dulce y masculino, con miel, avellana y maderas para una estela cálida que atrae miradas.",
    pyramid: { salida: ["Ciruela", "Toronja", "Bergamota"], corazon: ["Avellana", "Miel", "Cedro", "Flor de azahar"], fondo: ["Madera de ámbar", "Pachulí", "Vetiver", "Musgo de roble"] },
  },
  {
    slug: "noir",
    name: "Noir",
    inspiration: "Inspirado en L.12.12 Noir",
    gender: "hombre",
    image: "/products/noir.jpeg",
    family: "Aromático · Amaderado",
    feeling: "Misterioso y elegante",
    occasion: "Noche · Citas · Reuniones",
    description: "Oscuro, limpio y elegante, con un contraste atractivo entre frescura, chocolate y maderas.",
    pyramid: { salida: ["Sandía"], corazon: ["Albahaca", "Lavanda", "Verbena"], fondo: ["Chocolate oscuro", "Cumarina", "Cachemira", "Pachulí"] },
  },
  {
    slug: "phantom",
    name: "Phantom",
    inspiration: "Inspirado en Phantom",
    gender: "hombre",
    image: "/products/phantom.jpeg",
    family: "Aromático · Avainillado",
    feeling: "Moderno y carismático",
    occasion: "Noche · Salidas · Fiestas",
    description: "Lavanda, cítricos y vainilla en un aroma moderno, juvenil y con mucha personalidad.",
    pyramid: { salida: ["Lavanda", "Limón", "Cáscara de limón"], corazon: ["Manzana", "Humo", "Pachulí"], fondo: ["Vainilla", "Lavanda", "Vetiver"] },
  },
  {
    slug: "scandal-men",
    name: "Scandal Pour Homme",
    inspiration: "Inspirado en Scandal Pour Homme",
    gender: "hombre",
    image: "/products/scandal.jpeg",
    secondaryImage: "/products/scandal-detail.jpeg",
    family: "Dulce · Amaderado",
    feeling: "Atrevido y seductor",
    occasion: "Noche · Fiestas · Citas",
    description: "Un golpe dulce y masculino de caramelo, haba tonka y vetiver que no pasa desapercibido.",
    pyramid: { salida: ["Mandarina", "Salvia esclarea"], corazon: ["Caramelo", "Haba tonka"], fondo: ["Vetiver"] },
  },
  {
    slug: "vip-men",
    name: "212 VIP Men",
    inspiration: "Inspirado en 212 VIP Men",
    gender: "hombre",
    image: "/products/vip-men.jpeg",
    family: "Aromático · Especiado",
    feeling: "Nocturno y exclusivo",
    occasion: "Fiestas · Noche · Eventos",
    description: "Un aroma de fiesta elegante, fresco y especiado, con un fondo cálido y masculino.",
    pyramid: { salida: ["Maracuyá", "Lima", "Pimienta", "Jengibre"], corazon: ["Vodka", "Ginebra", "Menta", "Especias"], fondo: ["Ámbar", "Cuero", "Notas amaderadas"] },
  },
  {
    slug: "pure-xs",
    name: "Pure XS",
    inspiration: "Inspirado en Pure XS",
    gender: "hombre",
    image: "/products/pure-xs.jpeg",
    family: "Dulce · Especiado",
    feeling: "Intenso y provocador",
    occasion: "Noche · Citas · Clima fresco",
    description: "Especias, vainilla y maderas en una fragancia intensa, cálida y provocadora.",
    pyramid: { salida: ["Jengibre", "Tomillo", "Toronja", "Bergamota"], corazon: ["Vainilla", "Canela", "Cuero", "Licor", "Manzana"], fondo: ["Mirra", "Azúcar", "Cedro", "Cachemira", "Pachulí"] },
  },
];

export const womenProducts = products.filter((product) => product.gender === "mujer" && product.isActive !== false);
export const menProducts = products.filter((product) => product.gender === "hombre" && product.isActive !== false);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

const defaultTheme: ProductTheme = {
  background: "radial-gradient(circle at 78% 34%, rgba(184,137,59,.20), transparent 30%), linear-gradient(135deg,#F6EBDD,#E9D4C2,#F7EFE7)",
  text: "#2B1710",
  muted: "#785C4D",
  accent: "#8B5E2B",
  accentText: "#FFF8EF",
  surface: "rgba(255,255,255,.38)",
  border: "rgba(139,94,43,.28)",
  panel: "rgba(49,28,18,.90)",
  panelText: "#FFF4E8",
  header: "rgba(250,241,231,.88)",
  bars: ["#D3A14B", "#D8B6A2", "#F0E4D4", "#8F5B3E", "#B97355", "#D6B68E", "#A96F32"],
};

const productThemes: Record<string, ProductTheme> = {
  "59-le-male-elixir": {
    background: "radial-gradient(circle at 78% 28%,rgba(214,155,69,.34),transparent 35%),linear-gradient(135deg,#F5E8CF 0%,#EBD4A6 48%,#D69B45 100%)",
    text: "#292523",
    muted: "#6B522F",
    accent: "#A46B28",
    accentText: "#FFFFFF",
    surface: "rgba(255,255,255,.47)",
    border: "rgba(164,107,40,.31)",
    panel: "rgba(41,37,35,.96)",
    panelText: "#F5E8CF",
    header: "rgba(245,232,207,.93)",
    bars: ["#D69B45", "#F5E8CF", "#A46B28", "#E5BB6C", "#8B6539", "#E9D2A2"],
  },

  "55-asad-lion": {
    background: "radial-gradient(circle at 78% 29%,rgba(214,165,94,.25),transparent 36%),linear-gradient(135deg,#17130F 0%,#2D211A 45%,#73401F 100%)",
    text: "#F0DCC1",
    muted: "#D6A55E",
    accent: "#D6A55E",
    accentText: "#17130F",
    surface: "rgba(214,165,94,.09)",
    border: "rgba(214,165,94,.33)",
    panel: "rgba(23,19,15,.97)",
    panelText: "#F0DCC1",
    header: "rgba(23,19,15,.93)",
    bars: ["#D6A55E", "#73401F", "#E7BB76", "#B67B48", "#F0DCC1", "#9C6743"],
  },

  "33-zanzibar-asad": {
    background: "radial-gradient(circle at 76% 26%,rgba(231,188,120,.35),transparent 36%),linear-gradient(135deg,#102844 0%,#173958 40%,#D58B27 100%)",
    text: "#FFF3DF",
    muted: "#E7BC78",
    accent: "#E7BC78",
    accentText: "#102844",
    surface: "rgba(231,188,120,.10)",
    border: "rgba(231,188,120,.36)",
    panel: "rgba(16,40,68,.96)",
    panelText: "#FFF3DF",
    header: "rgba(16,40,68,.94)",
    bars: ["#D58B27", "#E7BC78", "#B8C8D3", "#F2D59D", "#7E9DB4", "#C59D6C"],
  },

  "09-9-pm": {
    background: "radial-gradient(circle at 77% 29%,rgba(30,49,83,.58),transparent 37%),linear-gradient(135deg,#0D1322,#1E3153 55%,#090E1B)",
    text: "#F3F6FC",
    muted: "#B5C0D0",
    accent: "#D39B63",
    accentText: "#0D1322",
    surface: "rgba(181,192,208,.08)",
    border: "rgba(181,192,208,.30)",
    panel: "rgba(13,19,34,.97)",
    panelText: "#F3F6FC",
    header: "rgba(13,19,34,.92)",
    bars: ["#D39B63", "#B5C0D0", "#E8B98B", "#8DA9C7", "#CF9869", "#99A7C2"],
  },

  "80-eclaire": {
    background: "radial-gradient(circle at 77% 29%,rgba(232,200,149,.36),transparent 35%),linear-gradient(135deg,#FFF3DA,#F8E5C4 52%,#E8C895)",
    text: "#38261F",
    muted: "#76513D",
    accent: "#BB702B",
    accentText: "#FFF3DA",
    surface: "rgba(255,255,255,.55)",
    border: "rgba(187,112,43,.25)",
    panel: "rgba(56,38,31,.95)",
    panelText: "#FFF3DA",
    header: "rgba(255,243,218,.92)",
    bars: ["#E8C895", "#BB702B", "#FFF3DA", "#D4A268", "#F0DBB7", "#C38C56"],
  },

  "74b-paradoxe-intense": {
    background: "radial-gradient(circle at 76% 28%,rgba(233,166,156,.28),transparent 34%),linear-gradient(135deg,#321812,#57291F 50%,#A05B3F)",
    text: "#F4D9C4",
    muted: "#E9A69C",
    accent: "#E9A69C",
    accentText: "#321812",
    surface: "rgba(244,217,196,.09)",
    border: "rgba(233,166,156,.27)",
    panel: "rgba(50,24,18,.96)",
    panelText: "#F4D9C4",
    header: "rgba(50,24,18,.91)",
    bars: ["#B66D44", "#E9A69C", "#F4D9C4", "#C78F80", "#DFAD88", "#E3B4A1"],
  },

  "74a-mallow-madness": {
    background: "radial-gradient(circle at 77% 27%,rgba(135,74,155,.35),transparent 34%),linear-gradient(135deg,#2E123A,#5F2A6C 52%,#3B1649)",
    text: "#F3E5D8",
    muted: "#E3C9DF",
    accent: "#DABDAE",
    accentText: "#2E123A",
    surface: "rgba(243,229,216,.09)",
    border: "rgba(218,189,174,.32)",
    panel: "rgba(46,18,58,.96)",
    panelText: "#F3E5D8",
    header: "rgba(46,18,58,.91)",
    bars: ["#874A9B", "#DABDAE", "#F3E5D8", "#B18BC1", "#E5C9DD", "#CFB4C7"],
  },

  "72b-taraf": {
    background: "radial-gradient(circle at 77% 28%,rgba(175,40,70,.35),transparent 34%),linear-gradient(135deg,#35111F,#571C2B 51%,#92233E)",
    text: "#F2DFCB",
    muted: "#E9C4B4",
    accent: "#D9A34C",
    accentText: "#35111F",
    surface: "rgba(242,223,203,.10)",
    border: "rgba(217,163,76,.28)",
    panel: "rgba(53,17,31,.96)",
    panelText: "#F2DFCB",
    header: "rgba(53,17,31,.90)",
    bars: ["#D9A34C", "#AF2846", "#F2DFCB", "#C77C86", "#E2B97B", "#D5A8A4"],
  },

  "72a-berry-on-top": {
    background: "radial-gradient(circle at 78% 27%,rgba(239,152,178,.30),transparent 34%),linear-gradient(135deg,#FFF4ED,#F8E1E5 50%,#F3B9CA)",
    text: "#6E273F",
    muted: "#8B4962",
    accent: "#A31F56",
    accentText: "#FFF4ED",
    surface: "rgba(255,255,255,.52)",
    border: "rgba(163,31,86,.22)",
    panel: "rgba(110,39,63,.95)",
    panelText: "#FFF4ED",
    header: "rgba(255,244,237,.92)",
    bars: ["#EF98B2", "#F2C2CD", "#FFF4ED", "#D77A9B", "#F4B8CB", "#E8CED8"],
  },

  "56-sweet-like-candy": {
    background: "radial-gradient(circle at 77% 28%,rgba(242,119,183,.35),transparent 34%),linear-gradient(135deg,#40152F,#81405F 49%,#CE94C2)",
    text: "#FFF3FC",
    muted: "#E8D8EE",
    accent: "#D9B2E9",
    accentText: "#40152F",
    surface: "rgba(255,242,250,.11)",
    border: "rgba(232,227,233,.34)",
    panel: "rgba(64,21,47,.95)",
    panelText: "#FFF3FC",
    header: "rgba(64,21,47,.90)",
    bars: ["#F277B7", "#D9B2E9", "#E8E3E9", "#C778A4", "#F4B6D4", "#BA8ACB"],
  },

  "52-valentino-donna-born-in-roma": {
    background: "radial-gradient(circle at 77% 28%,rgba(216,165,188,.20),transparent 34%),linear-gradient(140deg,#161B24,#30303D 55%,#111822)",
    text: "#F3E8E4",
    muted: "#D8A5BC",
    accent: "#D8A5BC",
    accentText: "#161B24",
    surface: "rgba(243,232,228,.07)",
    border: "rgba(196,198,203,.28)",
    panel: "rgba(22,27,36,.96)",
    panelText: "#F3E8E4",
    header: "rgba(22,27,36,.92)",
    bars: ["#D8A5BC", "#C4C6CB", "#F3E8E4", "#B98DA7", "#E6D4DB", "#A8A6B2"],
  },

  "50-scandal-woman": {
    background: "radial-gradient(circle at 79% 29%,rgba(213,154,168,.36),transparent 32%),linear-gradient(135deg,#522C3F,#A66F80 55%,#E9C8A2)",
    text: "#FFF7F4",
    muted: "#F0D2DC",
    accent: "#E9C8A2",
    accentText: "#522C3F",
    surface: "rgba(255,238,243,.13)",
    border: "rgba(233,200,162,.34)",
    panel: "rgba(82,44,63,.95)",
    panelText: "#FFF7F4",
    header: "rgba(82,44,63,.90)",
    bars: ["#D59AA8", "#BD8746", "#E9C8A2", "#F2C5D0", "#B87B8F", "#DEB76F"],
  },
  "36b-la-bomba": {
    background: "radial-gradient(circle at 78% 27%,rgba(217,54,120,.32),transparent 35%),linear-gradient(135deg,#3B0D23,#81183E 52%,#4B102D)",
    text: "#FFF0F7",
    muted: "#F3B3C9",
    accent: "#D9AD69",
    accentText: "#361027",
    surface: "rgba(255,235,244,.08)",
    border: "rgba(243,179,201,.30)",
    panel: "rgba(75,16,45,.96)",
    panelText: "#FFF0F7",
    header: "rgba(59,13,35,.92)",
    bars: ["#F3B3C9", "#D9AD69", "#FFDBE8", "#D93678", "#FFD3E2", "#E8BC8A", "#FFE8EF"],
  },
  "la-vie-est-belle": {
    background: "radial-gradient(circle at 78% 35%,rgba(174,128,177,.28),transparent 28%),linear-gradient(135deg,#FBF2EA,#E9DCE8,#F7EDE8)", text: "#32162A", muted: "#81566F", accent: "#9A4F7C", accentText: "#FFF8F2", surface: "rgba(255,255,255,.43)", border: "rgba(154,79,124,.24)", panel: "rgba(82,38,70,.91)", panelText: "#FFF4F7", header: "rgba(251,242,234,.88)", bars: ["#D49B53", "#D6A3BB", "#F3E6DA", "#8F4773", "#C66086", "#E3B9CC", "#B6753F"],
  },
  "good-girl": {
    background: "radial-gradient(circle at 80% 34%,rgba(58,82,143,.40),transparent 30%),linear-gradient(135deg,#060913,#17213D,#080811)", text: "#F7E9D4", muted: "#C5B8C7", accent: "#C59A55", accentText: "#111522", surface: "rgba(255,255,255,.06)", border: "rgba(197,154,85,.28)", panel: "rgba(8,14,30,.94)", panelText: "#F7E9D4", header: "rgba(6,9,19,.88)", bars: ["#D8C7E9", "#C59A55", "#F3E7D5", "#6778A8", "#9B6F45", "#C4A9C9", "#7D91C3"],
  },
  cloud: {
    background: "radial-gradient(circle at 80% 35%,rgba(171,147,216,.32),transparent 30%),linear-gradient(135deg,#FAF7FD,#E7E0F3,#F5EDF7)", text: "#31224C", muted: "#71658A", accent: "#8166AC", accentText: "#FFFFFF", surface: "rgba(255,255,255,.50)", border: "rgba(129,102,172,.23)", panel: "rgba(91,70,128,.91)", panelText: "#FFFFFF", header: "rgba(250,247,253,.88)", bars: ["#E7DDF5", "#B7A2D8", "#F4ECF9", "#8C72B6", "#D9C7E9", "#C8B4D9", "#A893C2"],
  },
  fame: {
    background: "radial-gradient(circle at 78% 32%,rgba(214,177,63,.28),transparent 28%),linear-gradient(135deg,#10120A,#29301A,#090A06)", text: "#F5E7B6", muted: "#C5BD91", accent: "#D4AF37", accentText: "#17170B", surface: "rgba(255,255,255,.06)", border: "rgba(212,175,55,.28)", panel: "rgba(30,37,18,.94)", panelText: "#FFF2C7", header: "rgba(16,18,10,.88)", bars: ["#D9B635", "#8BA84A", "#F1D78A", "#66773A", "#C18C3F", "#E5CBA0", "#AFC96B"],
  },
  fantasy: {
    background: "radial-gradient(circle at 80% 34%,rgba(213,66,128,.34),transparent 29%),linear-gradient(135deg,#2A0B25,#5A1648,#1A0717)", text: "#FFE7F3", muted: "#E0B7D2", accent: "#E84C98", accentText: "#2A0B25", surface: "rgba(255,255,255,.08)", border: "rgba(232,76,152,.30)", panel: "rgba(70,15,58,.94)", panelText: "#FFF0F8", header: "rgba(42,11,37,.88)", bars: ["#E84C98", "#D9A4D0", "#F6D8E9", "#952A70", "#CF3B73", "#EDB5D1", "#B66A92"],
  },
  meow: {
    background: "radial-gradient(circle at 80% 36%,rgba(216,162,194,.34),transparent 30%),linear-gradient(135deg,#FFF7F6,#F0DFEB,#F8EFF4)", text: "#44243E", muted: "#8C687F", accent: "#B85E91", accentText: "#FFFFFF", surface: "rgba(255,255,255,.50)", border: "rgba(184,94,145,.24)", panel: "rgba(116,53,94,.91)", panelText: "#FFF4FA", header: "rgba(255,247,246,.88)", bars: ["#F0C4DD", "#D697BB", "#F8E8EF", "#A45285", "#C878A7", "#E9BCD5", "#B998BF"],
  },
  olympea: {
    background: "radial-gradient(circle at 80% 35%,rgba(196,137,76,.30),transparent 30%),linear-gradient(135deg,#FCF4E8,#E8D5C2,#F7EDE0)", text: "#3C2419", muted: "#806455", accent: "#A76B39", accentText: "#FFF8EE", surface: "rgba(255,255,255,.42)", border: "rgba(167,107,57,.28)", panel: "rgba(101,61,39,.92)", panelText: "#FFF3E3", header: "rgba(252,244,232,.88)", bars: ["#C98D55", "#E3C09D", "#F4E7D3", "#9D6542", "#D2A872", "#E8CFC0", "#B77A56"],
  },
  "paris-hilton": {
    background: "radial-gradient(circle at 80% 35%,rgba(74,186,189,.28),transparent 30%),linear-gradient(135deg,#F4FBF8,#DDF1EC,#F8EEE8)", text: "#163F42", muted: "#5B7E7E", accent: "#2D9B9A", accentText: "#FFFFFF", surface: "rgba(255,255,255,.50)", border: "rgba(45,155,154,.24)", panel: "rgba(27,102,104,.92)", panelText: "#F2FFFC", header: "rgba(244,251,248,.88)", bars: ["#45B8B2", "#F3A689", "#F1E3C9", "#25827F", "#DD7F79", "#A8DCD2", "#7EC1B0"],
  },
  "vip-rose": {
    background: "radial-gradient(circle at 80% 34%,rgba(205,136,157,.32),transparent 29%),linear-gradient(135deg,#FFF6F1,#EEDBD9,#F9EDEA)", text: "#43202C", muted: "#8B6270", accent: "#B8657E", accentText: "#FFFFFF", surface: "rgba(255,255,255,.48)", border: "rgba(184,101,126,.25)", panel: "rgba(117,55,75,.92)", panelText: "#FFF4F6", header: "rgba(255,246,241,.88)", bars: ["#D89AAF", "#E4B77F", "#F4DFD4", "#A84B69", "#C87C94", "#E7BAC4", "#C59D80"],
  },
  "legacy-cr7": {
    background: "radial-gradient(circle at 78% 34%,rgba(72,104,158,.34),transparent 29%),linear-gradient(135deg,#07101D,#182C49,#060A11)", text: "#EDF3FA", muted: "#AFC1D5", accent: "#829CC1", accentText: "#08111E", surface: "rgba(255,255,255,.06)", border: "rgba(130,156,193,.28)", panel: "rgba(15,35,61,.94)", panelText: "#F1F6FC", header: "rgba(7,16,29,.88)", bars: ["#A9BCD5", "#C49A65", "#E7DFD2", "#5D769B", "#8E6F58", "#B5C4D6", "#7184A0"],
  },
  eros: {
    background: "radial-gradient(circle at 80% 35%,rgba(43,157,122,.34),transparent 29%),linear-gradient(135deg,#021712,#064A38,#010B08)", text: "#E9FFF4", muted: "#A6D6C2", accent: "#D1B35B", accentText: "#08251B", surface: "rgba(255,255,255,.06)", border: "rgba(209,179,91,.28)", panel: "rgba(5,73,54,.94)", panelText: "#F2FFF8", header: "rgba(2,23,18,.88)", bars: ["#46B98B", "#D1B35B", "#DDEBDD", "#1D8764", "#84CBAA", "#A5D9BF", "#7E9F69"],
  },
  invictus: {
    background: "radial-gradient(circle at 80% 34%,rgba(78,179,209,.34),transparent 29%),linear-gradient(135deg,#EAF7F8,#CFE7EC,#EFF7F5)", text: "#123646", muted: "#5B7884", accent: "#2D7D98", accentText: "#FFFFFF", surface: "rgba(255,255,255,.50)", border: "rgba(45,125,152,.24)", panel: "rgba(24,92,116,.92)", panelText: "#F2FCFF", header: "rgba(234,247,248,.88)", bars: ["#48AFC9", "#8CCDD8", "#E6F1EC", "#276D88", "#62B4A8", "#B8DBDD", "#759BA3"],
  },
  "million-lucky": {
    background: "radial-gradient(circle at 80% 34%,rgba(190,125,55,.32),transparent 29%),linear-gradient(135deg,#140C07,#513018,#0C0704)", text: "#FFECCF", muted: "#D5B996", accent: "#D09A4B", accentText: "#21130A", surface: "rgba(255,255,255,.07)", border: "rgba(208,154,75,.28)", panel: "rgba(75,42,20,.94)", panelText: "#FFF2DC", header: "rgba(20,12,7,.88)", bars: ["#D09A4B", "#C57B42", "#E9D0A5", "#8A4C28", "#B46B35", "#D6B27E", "#A77446"],
  },
  noir: {
    background: "radial-gradient(circle at 80% 34%,rgba(104,83,126,.30),transparent 29%),linear-gradient(135deg,#050506,#25212A,#030303)", text: "#F2EDF4", muted: "#B8ACBC", accent: "#927BA1", accentText: "#0D0B0F", surface: "rgba(255,255,255,.06)", border: "rgba(146,123,161,.27)", panel: "rgba(30,25,35,.95)", panelText: "#F8F1FA", header: "rgba(5,5,6,.88)", bars: ["#9E89AA", "#B98C67", "#E0D8E3", "#5D4B67", "#7F687E", "#C5BAC8", "#856A52"],
  },
  phantom: {
    background: "radial-gradient(circle at 80% 34%,rgba(123,106,180,.32),transparent 29%),linear-gradient(135deg,#13131B,#343246,#0B0B10)", text: "#F1EEFF", muted: "#C1BBD5", accent: "#9D8BD0", accentText: "#171520", surface: "rgba(255,255,255,.07)", border: "rgba(157,139,208,.28)", panel: "rgba(48,43,72,.94)", panelText: "#F8F5FF", header: "rgba(19,19,27,.88)", bars: ["#AA98DA", "#D0C7E6", "#F0EAF7", "#70639E", "#9584C1", "#C4B8D8", "#837A9E"],
  },
  "scandal-men": {
    background: "radial-gradient(circle at 80% 34%,rgba(210,145,57,.34),transparent 29%),linear-gradient(135deg,#F6EBDD,#E8C8B5,#F5EBDD)", text: "#2A0815", muted: "#7B354D", accent: "#7E1235", accentText: "#FFF1E5", surface: "rgba(255,255,255,.40)", border: "rgba(216,154,43,.32)", panel: "rgba(111,18,50,.90)", panelText: "#F5EBDD", header: "rgba(245,235,221,.88)", bars: ["#D89A2B", "#D9A5AF", "#F5EBDD", "#6F1232", "#B0143B", "#E8B8C2", "#B66A2B"],
  },
  "vip-men": {
    background: "radial-gradient(circle at 80% 34%,rgba(91,79,170,.34),transparent 29%),linear-gradient(135deg,#070813,#202044,#05050B)", text: "#F2F0FF", muted: "#BBB7D8", accent: "#8F84D2", accentText: "#0F1020", surface: "rgba(255,255,255,.06)", border: "rgba(143,132,210,.28)", panel: "rgba(34,32,78,.94)", panelText: "#F7F5FF", header: "rgba(7,8,19,.88)", bars: ["#958AD8", "#BD9F62", "#E3DDF2", "#635DA6", "#A76A8F", "#B7B2D4", "#7E75A9"],
  },
  "pure-xs": {
    background: "radial-gradient(circle at 80% 34%,rgba(177,96,54,.34),transparent 29%),linear-gradient(135deg,#170A08,#4A2118,#0D0504)", text: "#FFEDE2", muted: "#D8B9A8", accent: "#C97946", accentText: "#1E0D09", surface: "rgba(255,255,255,.07)", border: "rgba(201,121,70,.28)", panel: "rgba(72,30,22,.94)", panelText: "#FFF1E9", header: "rgba(23,10,8,.88)", bars: ["#C97946", "#D1A076", "#F0DCCE", "#8F432E", "#B86645", "#DABFAD", "#A97457"],
  },
};

const productAccords: Record<string, string[]> = {
  "59-le-male-elixir": ["Avainillado", "Dulce", "Miel", "Ambarado", "Aromático", "Tabaco"],

  "55-asad-lion": ["Cálido especiado", "Ambarado", "Avainillado", "Tabaco", "Amaderado", "Café"],

  "33-zanzibar-asad": ["Avainillado", "Fresco especiado", "Aromático", "Atalcado", "Salado", "Ambarado"],

  "09-9-pm": ["Dulce", "Avainillado", "Cálido especiado", "Afrutado", "Aromático", "Ambarado"],

  "80-eclaire": ["Dulce", "Avainillado", "Caramelo", "Lactónico", "Miel", "Atalcado"],

  "74b-paradoxe-intense": ["Floral blanco", "Ambarado", "Avainillado", "Dulce", "Amaderado", "Afrutado"],

  "74a-mallow-madness": ["Dulce", "Avainillado", "Cremoso", "Afrutado", "Atalcado", "Almizclado"],

  "72b-taraf": ["Afrutado", "Dulce", "Floral blanco", "Avainillado", "Ambarado", "Almizclado"],

  "72a-berry-on-top": ["Dulce", "Afrutado", "Avainillado", "Cremoso", "Atalcado", "Almizclado"],

  "56-sweet-like-candy": ["Dulce", "Afrutado", "Avainillado", "Cremoso", "Atalcado", "Floral"],

  "52-valentino-donna-born-in-roma": ["Avainillado", "Amaderado", "Afrutado", "Floral blanco", "Dulce", "Especiado suave"],

  "50-scandal-woman": ["Miel", "Dulce", "Floral blanco", "Cítrico", "Caramelo", "Pachulí"],
  "36b-la-bomba": ["Floral", "Tropical", "Afrutado", "Avainillado", "Dulce", "Ambarado"],
  "la-vie-est-belle": ["Dulce", "Vainilla", "Afrutado", "Floral", "Atalcado", "Pachulí", "Amaderado"],
  "good-girl": ["Floral blanco", "Dulce", "Cálido especiado", "Vainilla", "Cacao", "Almendra", "Amaderado"],
  cloud: ["Dulce", "Lactónico", "Vainilla", "Coco", "Lavanda", "Almizclado", "Amaderado"],
  fame: ["Afrutado tropical", "Mango", "Floral blanco", "Dulce", "Amaderado", "Vainilla", "Cítrico"],
  fantasy: ["Dulce", "Frutal", "Chocolate blanco", "Floral", "Tropical", "Avainillado", "Amaderado"],
  meow: ["Floral blanco", "Dulce", "Avainillado", "Afrutado", "Atalcado", "Almizclado", "Amaderado"],
  olympea: ["Avainillado", "Salado", "Floral blanco", "Ámbar", "Dulce", "Acuático", "Amaderado"],
  "paris-hilton": ["Frutal", "Floral", "Fresco", "Acuático", "Ozónico", "Tropical", "Verde"],
  "vip-rose": ["Floral", "Afrutado", "Champaña", "Rosado", "Fresco", "Almizclado", "Amaderado"],
  "legacy-cr7": ["Aromático", "Amaderado", "Cálido especiado", "Canela", "Lavanda", "Fresco especiado", "Ámbar"],
  eros: ["Avainillado", "Aromático", "Fresco especiado", "Verde", "Dulce", "Menta", "Amaderado"],
  invictus: ["Acuático", "Marino", "Fresco", "Cítrico", "Aromático", "Amaderado", "Salado"],
  "million-lucky": ["Dulce", "Amaderado", "Avellana", "Miel", "Afrutado", "Cálido especiado", "Ámbar"],
  noir: ["Aromático", "Cálido especiado", "Chocolate", "Lavanda", "Amaderado", "Acuático", "Verde"],
  phantom: ["Lavanda", "Aromático", "Avainillado", "Cítrico", "Fresco especiado", "Amaderado", "Dulce"],
  "scandal-men": ["Dulce", "Caramelo", "Cálido especiado", "Aromático", "Amaderado", "Ámbar", "Vetiver"],
  "vip-men": ["Aromático", "Cálido especiado", "Vodka", "Tropical", "Fresco especiado", "Amaderado", "Ámbar"],
  "pure-xs": ["Cálido especiado", "Avainillado", "Dulce", "Balsámico", "Canela", "Amaderado", "Atalcado"],
};

export function getProductTheme(product: Product) {
  return productThemes[product.slug] ?? defaultTheme;
}

export function getProductAccords(product: Product) {
  return productAccords[product.slug] ?? [...product.pyramid.salida, ...product.pyramid.corazon, ...product.pyramid.fondo].slice(0, 7);
}

export const promotions = [
  { quantity: 2, price: 19.9, label: "Compra 1 y recibe el segundo gratis" },
  { quantity: 5, price: 45, label: "5 perfumes por $45" },
  { quantity: 7, price: 59, label: "7 perfumes por $59" },
] as const;

export const UNIT_PRICE = 19.9;

const pricingOptions = [
  { quantity: 1, price: UNIT_PRICE, label: "Perfume individual" },
  ...promotions,
] as const;

export type PricingBreakdownItem = {
  quantity: number;
  count: number;
  price: number;
  label: string;
};

export type CartPricing = {
  quantity: number;
  total: number;
  regularTotal: number;
  savings: number;
  breakdown: PricingBreakdownItem[];
};

export type CartSuggestion = {
  additionalQuantity: number;
  targetQuantity: number;
  extraCost: number;
  extraSavings: number;
  targetTotal: number;
};

export function getPromotion(quantity: number) {
  return promotions.find((promotion) => promotion.quantity === quantity);
}

export function calculateCartPricing(quantity: number): CartPricing {
  const safeQuantity = Math.max(0, Math.floor(quantity));
  const states: Array<{ total: number; options: number[] } | undefined> = Array(safeQuantity + 1).fill(undefined);
  states[0] = { total: 0, options: [] };

  for (let current = 1; current <= safeQuantity; current += 1) {
    for (const option of pricingOptions) {
      if (option.quantity > current || !states[current - option.quantity]) continue;
      const previous = states[current - option.quantity]!;
      const candidate = { total: previous.total + option.price, options: [...previous.options, option.quantity] };
      const best = states[current];
      if (!best || candidate.total < best.total - 0.001 || (Math.abs(candidate.total - best.total) < 0.001 && candidate.options.length < best.options.length)) {
        states[current] = candidate;
      }
    }
  }

  const result = states[safeQuantity] ?? { total: safeQuantity * UNIT_PRICE, options: Array(safeQuantity).fill(1) };
  const grouped = result.options.reduce<Record<number, number>>((accumulator, optionQuantity) => {
    accumulator[optionQuantity] = (accumulator[optionQuantity] ?? 0) + 1;
    return accumulator;
  }, {});
  const breakdown = pricingOptions
    .filter((option) => grouped[option.quantity])
    .sort((a, b) => b.quantity - a.quantity)
    .map((option) => ({
      quantity: option.quantity,
      count: grouped[option.quantity],
      price: option.price,
      label: option.label,
    }));
  const regularTotal = safeQuantity * UNIT_PRICE;
  const total = Number(result.total.toFixed(2));

  return {
    quantity: safeQuantity,
    total,
    regularTotal: Number(regularTotal.toFixed(2)),
    savings: Number(Math.max(0, regularTotal - total).toFixed(2)),
    breakdown,
  };
}

export function getCartSuggestion(quantity: number): CartSuggestion | null {
  if (quantity < 1) return null;
  const current = calculateCartPricing(quantity);
  const candidates = [1, 2, 3].map((additionalQuantity) => {
    const target = calculateCartPricing(quantity + additionalQuantity);
    const extraCost = Number((target.total - current.total).toFixed(2));
    const extraSavings = Number((additionalQuantity * UNIT_PRICE - extraCost).toFixed(2));
    return { additionalQuantity, targetQuantity: target.quantity, extraCost, extraSavings, targetTotal: target.total };
  });

  const useful = candidates.filter((candidate) => candidate.extraSavings > 0.01);
  if (!useful.length) return null;
  return useful.sort((a, b) => a.extraCost - b.extraCost || b.additionalQuantity - a.additionalQuantity)[0];
}
