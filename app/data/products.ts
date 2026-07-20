export type ProductGender = "mujer" | "hombre";

export type OlfactoryPyramid = {
  salida: string[];
  corazon: string[];
  fondo: string[];
};

export type Product = {
  slug: string;
  name: string;
  inspiration: string;
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
    slug: "la-vie-est-belle",
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
    slug: "legacy-cr7",
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
    slug: "eros",
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
    slug: "invictus",
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
    slug: "million-lucky",
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

export const womenProducts = products.filter((product) => product.gender === "mujer");
export const menProducts = products.filter((product) => product.gender === "hombre");

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const promotions = [
  { quantity: 2, price: 19.9, label: "Compra 1 y recibe el segundo gratis" },
  { quantity: 5, price: 45, label: "5 perfumes por $45" },
  { quantity: 7, price: 59, label: "7 perfumes por $59" },
] as const;

export function getPromotion(quantity: number) {
  return promotions.find((promotion) => promotion.quantity === quantity);
}
