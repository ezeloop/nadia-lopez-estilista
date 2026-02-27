import type { Service, GalleryItem, Testimonial } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "1",
    slug: "diseno-de-color",
    category: "color",
    name: "Diseño de Color",
    tagline: "Tu color, personalizado desde raíz",
    description:
      "Analizamos tu tono de piel, ojos y estilo de vida para diseñar un color 100% personalizado. No existe una fórmula única: cada color se mezcla especialmente para vos.",
    technique: "Colorimetría personalizada con marcas de alta performance",
    benefit: "Un color que te identifica, dura más y cuida la fibra capilar.",
    duration: "2–3 hs",
  },
  {
    id: "2",
    slug: "balayage",
    category: "color",
    name: "Balayage",
    tagline: "La luz que nace naturalmente del cabello",
    description:
      "Técnica de pincelado artesanal aplicada a mano libre que imita el efecto del sol. El resultado es una degradación suave y natural, con movimiento y profundidad.",
    technique: "Pincelado a mano libre con decoloración controlada",
    benefit: "Luminosidad natural, crecimiento de raíz casi imperceptible.",
    duration: "3–4 hs",
  },
  {
    id: "3",
    slug: "reflejos",
    category: "color",
    name: "Reflejos",
    tagline: "Dimensión y brillo en cada mechón",
    description:
      "Técnica clásica renovada: reflejos finos o gruesos que añaden dimensión y luminosidad sin perder la base de tu color natural. Ideales para sumar vida al cabello.",
    technique: "Papel o casquete según densidad y resultado deseado",
    benefit: "Cabello con más volumen visual, brillo y movimiento.",
    duration: "2–3 hs",
  },
  {
    id: "4",
    slug: "tratamientos-capilares",
    category: "tratamiento",
    name: "Tratamientos Capilares",
    tagline: "Recuperá la salud desde adentro",
    description:
      "Protocolos de reconstrucción, hidratación profunda y nutrición capilar adaptados al diagnóstico de tu cabello. Usamos activos de alta concentración que trabajan desde la médula de la fibra.",
    technique: "Diagnóstico previo + activos reconstructores, hidratantes o nutritivos",
    benefit: "Cabello recuperado, suave, manejable y con brillo real.",
    duration: "1–2 hs",
  },
  {
    id: "5",
    slug: "alisado-sin-formol",
    category: "tratamiento",
    name: "Alisado sin Formol",
    tagline: "Domá el frizz sin comprometer tu salud",
    description:
      "Tratamiento progresivo con fórmulas libres de formaldehído que reduce el volumen, elimina el frizz y da suavidad duradera. Seguro, eficaz y respetuoso con la fibra.",
    technique: "Queratina o tanino free formol con sellado de calor",
    benefit: "Hasta 6 meses de cabello liso, sin frizz y más manejable.",
    duration: "3–4 hs",
  },
  {
    id: "6",
    slug: "hidratacion-y-nutricion",
    category: "tratamiento",
    name: "Hidratación y Nutrición",
    tagline: "El ritual que tu cabello necesita",
    description:
      "Dos protocolos distintos según la necesidad: hidratación (para cabello seco y sin vida) o nutrición (para cabello poroso y dañado por químicos). Resultado inmediato desde la primera sesión.",
    technique: "Máscaras profesionales + termoactivación + sellado con agua fría",
    benefit: "Cabello visiblemente más saludable, brillante y flexible.",
    duration: "1 hs",
  },
  {
    id: "7",
    slug: "peinados-eventos",
    category: "peinado",
    name: "Peinados para Eventos",
    tagline: "Lucí única en tu momento especial",
    description:
      "Peinados profesionales para casamientos, quince, egresadas y cualquier evento que merezca una versión extraordinaria de vos. Incluyen peinado de prueba previo para que llegues segura.",
    technique: "Recogidos, ondas, trenzas artesanales y acabados con productos de fijación premium",
    benefit: "Un look que dure toda la noche, con la seguridad de haberlo probado antes.",
    duration: "1,5–2 hs",
  },
  {
    id: "8",
    slug: "cortes-unisex",
    category: "corte",
    name: "Cortes Unisex",
    tagline: "La forma perfecta para cada cabeza",
    description:
      "Corte pensado según la morfología de tu rostro, textura del cabello y rutina diaria. Para hombres y mujeres. Simple de mantener, preciso en su ejecución.",
    technique: "Tijera, navaja o máquina según textura y estilo",
    benefit: "Un corte que cae solo, fácil de peinar y que dura semanas.",
    duration: "45 min–1 hs",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "ad1",
    type: "antes-despues",
    src: "/antes-despues/despues1.jpg",
    srcBefore: "/antes-despues/antes1.jpg",
    alt: "Transformación de color",
    category: "Color",
  },
  {
    id: "ad2",
    type: "antes-despues",
    src: "/antes-despues/despues2.jpeg",
    srcBefore: "/antes-despues/antes2.jpeg",
    alt: "Transformación de color",
    category: "Color",
  },
  {
    id: "p1",
    type: "peinado",
    src: "/peinados-trabajos/peinado1.jpeg",
    alt: "Peinado para evento",
    category: "Peinado",
  },
  {
    id: "p2",
    type: "peinado",
    src: "/peinados-trabajos/peinado2.jpeg",
    alt: "Peinado artesanal",
    category: "Peinado",
  },
  {
    id: "p3",
    type: "peinado",
    src: "/peinados-trabajos/peinado3.jpeg",
    alt: "Recogido elegante",
    category: "Peinado",
  },
  {
    id: "p4",
    type: "trabajo",
    src: "/peinados-trabajos/peinadoycorte.jpeg",
    alt: "Peinado y corte",
    category: "Corte",
  },
  {
    id: "p5",
    type: "trabajo",
    src: "/peinados-trabajos/trabajo1.jpeg",
    alt: "Trabajo capilar",
    category: "Tratamiento",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Valentina R.",
    service: "Balayage",
    quote:
      "Me encantó el resultado. Nadia escuchó exactamente lo que quería y el color quedó natural, luminoso, perfecto. Ya le recomendé a todas mis amigas.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Camila D.",
    service: "Peinado para casamiento",
    quote:
      "El peinado de prueba fue clave para llegar tranquila al día del evento. Nadia tiene mucha paciencia y el resultado fue hermoso, aguantó toda la noche.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Sofía M.",
    service: "Alisado sin formol",
    quote:
      "Después de años con frizz finalmente encontré algo que funciona y no daña el cabello. Nadia explica todo lo que hace, se nota la experiencia.",
    rating: 5,
  },
];

export const CONTACT = {
  address: "Humberto 1° 3398, Córdoba Capital",
  whatsapp: "+543516313274",
  whatsappDisplay: "+54 351 63132 74",
  instagram: "https://instagram.com/nadialopez.estilista",
  email: "nadialopez1920@gmail.com",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.5!2d-64.18!3d-31.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI1JzEyLjAiUyA2NMKwMTAnNDguMCJX!5e0!3m2!1ses!2sar!4v1234567890",
};
