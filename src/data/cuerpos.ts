import type { Locale } from "@/i18n/config";

/**
 * Contenido de las páginas de cuerpos apendantes (/masoneria/[slug]).
 * Para editar textos de una página, cambia aquí sus datos.
 */

export type Cuerpo = {
  slug: string;
  nombre: string;
  subtitulo: string;          // nombre alterno / en inglés
  intro: string;              // texto del encabezado
  img?: string;               // foto del encabezado (opcional)
  imgPos?: string;
  mobileImgPos?: string;

  label: string;              // etiqueta de la sección principal
  titulo: string;             // título de la sección principal
  parrafos: string[];

  itemsLabel?: string;        // p. ej. "Los tres cuerpos", "Lo que nos mueve"
  items?: { titulo: string; desc: string }[];
  cifras?: { numero: string; label: string }[];

  foto?: { src: string; pos?: string; label: string; texto: string; fecha?: string };
  cita?: { texto: string; autor?: string };
  nota?: { label: string; texto: string };
};

/* ── ESPAÑOL (también define fotos y posiciones para los otros idiomas) ── */
const es: Cuerpo[] = [
  {
    slug: "rito-escoces",
    nombre: "Rito Escocés Antiguo y Aceptado",
    subtitulo: "Ancient & Accepted Scottish Rite",
    intro: "Una de las principales tradiciones de la masonería universal, presente en Baja California a través de sus cuerpos filosóficos.",
    img: "/escoses.jpg",
    imgPos: "center 35%",
    mobileImgPos: "center 35%",
    label: "Grados 4° al 33°",
    titulo: "Formación filosófica para el Maestro Masón",
    parrafos: [
      "El Rito Escocés Antiguo y Aceptado es uno de los sistemas masónicos de formación filosófica más extendidos en el mundo. Su estructura comprende los grados del 4° al 33° y ofrece al Maestro Masón la posibilidad de continuar profundizando en el estudio de la filosofía, la ética, la historia y el simbolismo masónico.",
      "En Baja California, miembros de nuestra jurisdicción participan activamente en los cuerpos del Rito, manteniendo una relación fraterna con el Supremo Consejo de México, organismo soberano del Rito en nuestro país.",
      "Esta relación forma parte de los vínculos que nuestra Gran Logia mantiene con instituciones masónicas regulares de México y del extranjero, fortaleciendo el reconocimiento, el intercambio fraternal y la presencia de la Masonería bajacaliforniana más allá de nuestras fronteras.",
    ],
    foto: {
      src: "/mrgmescoses.jpg",
      pos: "center 5%",
      label: "Relaciones fraternales",
      texto: "Encuentro entre autoridades de la Gran Logia de Estado “Baja California” y el Soberano Gran Comendador del Supremo Consejo de México.",
      fecha: "Agosto de 2026",
    },
    nota: {
      label: "Masonería simbólica y Rito Escocés",
      texto: "La Gran Logia de Estado “Baja California” ejerce jurisdicción sobre los tres grados de la Masonería Simbólica. El Rito Escocés Antiguo y Aceptado constituye una vía posterior de formación para Maestros Masones y cuenta con su propia estructura y autoridades.",
    },
  },
  {
    slug: "rito-de-york",
    nombre: "Rito de York",
    subtitulo: "York Rite",
    intro: "Capítulo, Concilio y Encomienda: tres cuerpos que extienden la iniciación masónica hacia la tradición caballeresca.",
    label: "Tres cuerpos, un camino",
    titulo: "La tradición caballeresca de la Orden",
    parrafos: [
      "El Rito de York es uno de los sistemas masónicos más antiguos y está compuesto por tres organismos distintos: el Capítulo, el Concilio y la Encomienda. Cada uno confiere grados adicionales que enriquecen la experiencia del masón y profundizan en el simbolismo cristiano caballeresco.",
      "En Baja California, los cuerpos del Rito de York trabajan en armonía con la Gran Logia de Estado, abiertos a todos los masones que hayan alcanzado el tercer grado.",
    ],
    itemsLabel: "Los tres cuerpos",
    items: [
      { titulo: "Capítulo del Real Arco", desc: "Maestro de Marca, Maestro Pasado Virtual, Muy Excelente Maestro y Real Arco." },
      { titulo: "Concilio",               desc: "Maestro Real, Maestro Selecto y Súper Excelente Maestro." },
      { titulo: "Encomienda",             desc: "Orden de la Cruz Roja, Orden de Malta y Orden del Temple." },
    ],
    cita: { texto: "El Rito de York perpetúa las más antiguas tradiciones de la Orden." },
    nota: { label: "Próximamente", texto: "Información sobre los cuerpos del Rito de York activos en Baja California estará disponible próximamente." },
  },
  {
    slug: "shriners",
    nombre: "Shriners International",
    subtitulo: "Ancient Arabic Order of the Nobles of the Mystic Shrine",
    intro: "Fraternidad masónica dedicada a la filantropía y al cuidado de niños con enfermedades ortopédicas, quemaduras y otras condiciones.",
    label: "Masonería al servicio de los niños",
    titulo: "Fraternidad que se convierte en ayuda",
    parrafos: [
      "Shriners International es una de las fraternidades masónicas más reconocidas en el mundo por su labor filantrópica. Sus miembros son masones en pleno goce de sus derechos que se han comprometido a apoyar los Hospitales Shriners para Niños, una red de centros médicos de especialidad sin fines de lucro.",
      "En México, los Templos Shriners trabajan en coordinación con las Grandes Logias reconocidas, extendiendo el espíritu de servicio a las comunidades locales a través de actividades culturales, deportivas y de beneficencia.",
    ],
    cifras: [
      { numero: "1870", label: "Año de fundación" },
      { numero: "+20",  label: "Hospitales para niños" },
      { numero: "$0",   label: "Costo para las familias" },
    ],
    cita: { texto: "Ningún hombre se ve tan grande como cuando se inclina para ayudar a un niño.", autor: "Lema Shriner" },
    nota: { label: "Próximamente", texto: "Información sobre los Templos Shriners asociados a la jurisdicción de Baja California estará disponible próximamente." },
  },
  {
    slug: "ajef",
    nombre: "AJEF",
    subtitulo: "Organismo apendante",
    intro: "Organismo apendante de la masonería con presencia en la jurisdicción de Baja California, dedicado a la formación de los jóvenes.",
    img: "/ajef.jpg",
    imgPos: "center top",
    mobileImgPos: "center top",
    label: "Formando a las nuevas generaciones",
    titulo: "Valores masónicos para los jóvenes",
    parrafos: [
      "El AJEF es un organismo apendante que trabaja en el ámbito de la formación y el desarrollo de jóvenes vinculados a familias masónicas. Su labor complementa la acción de la Gran Logia al proyectar los valores de fraternidad, servicio y desarrollo moral hacia las nuevas generaciones.",
      "En Baja California, el AJEF trabaja bajo la supervisión y el reconocimiento de la Gran Logia de Estado, participando activamente en actividades cívicas, culturales y de servicio a la comunidad.",
    ],
    cita: { texto: "La juventud es la esperanza de la Orden." },
    nota: { label: "Próximamente", texto: "Información detallada sobre el AJEF en Baja California estará disponible próximamente." },
  },
  {
    slug: "widows-sons",
    nombre: "Widow's Sons",
    subtitulo: "Hijos de la Viuda",
    intro: "Confraternidad masónica de motociclistas comprometidos con la fraternidad, el servicio y la libertad de la carretera.",
    label: "Hermandad sobre ruedas",
    titulo: "Masones primero, motociclistas después",
    parrafos: [
      "Los Widow's Sons, Hijos de la Viuda, son una confraternidad masónica de motociclistas. El nombre hace referencia a Hiram Abiff, el maestro de obras del Templo de Salomón, cuya madre era viuda. Este símbolo une a masones amantes de la motocicleta en un espíritu de fraternidad, aventura y servicio.",
      "En Baja California, los Widow's Sons participan en rodadas, eventos benéficos y actividades que proyectan una imagen positiva de la masonería hacia la comunidad, demostrando que ser masón es un compromiso que se vive en todo momento y lugar.",
    ],
    itemsLabel: "Lo que nos mueve",
    items: [
      { titulo: "Fraternidad", desc: "Hermandad entre masones más allá del taller." },
      { titulo: "Servicio",    desc: "Actividades benéficas y de apoyo comunitario." },
      { titulo: "Libertad",    desc: "El espíritu de la carretera como metáfora masónica." },
    ],
    cita: { texto: "Somos masones primero, motociclistas después, y ambas cosas con orgullo." },
    nota: { label: "Próximamente", texto: "Información sobre los capítulos de Widow's Sons en Baja California estará disponible próximamente." },
  },
];


/** Campos de texto que cambian por idioma (las fotos y posiciones se toman del español) */
type Texto = Omit<Cuerpo, "img" | "imgPos" | "mobileImgPos" | "foto"> & { foto?: { label: string; texto: string; fecha?: string } };

/* ── ENGLISH ── */
const en: Texto[] = [
  {
    slug: "rito-escoces",
    nombre: "Ancient and Accepted Scottish Rite",
    subtitulo: "Rito Escocés Antiguo y Aceptado",
    intro: "One of the principal traditions of universal Freemasonry, present in Baja California through its philosophical bodies.",
    label: "4th to 33rd degrees",
    titulo: "Philosophical education for the Master Mason",
    parrafos: [
      "The Ancient and Accepted Scottish Rite is one of the most widespread systems of Masonic philosophical education in the world. Its structure comprises the 4th to the 33rd degrees and offers the Master Mason the opportunity to continue deepening his study of philosophy, ethics, history and Masonic symbolism.",
      "In Baja California, members of our jurisdiction take an active part in the bodies of the Rite, maintaining a fraternal relationship with the Supreme Council of Mexico, the sovereign body of the Rite in our country.",
      "This relationship is part of the ties our Grand Lodge maintains with regular Masonic institutions in Mexico and abroad, strengthening recognition, fraternal exchange and the presence of Baja California Freemasonry beyond our borders.",
    ],
    foto: {
      label: "Fraternal relations",
      texto: "Meeting between authorities of the Grand Lodge of the State of “Baja California” and the Sovereign Grand Commander of the Supreme Council of Mexico.",
      fecha: "August 2026",
    },
    nota: {
      label: "Symbolic Freemasonry and the Scottish Rite",
      texto: "The Grand Lodge of the State of “Baja California” holds jurisdiction over the three degrees of Symbolic Freemasonry. The Ancient and Accepted Scottish Rite is a further path of education for Master Masons and has its own structure and authorities.",
    },
  },
  {
    slug: "rito-de-york",
    nombre: "York Rite",
    subtitulo: "Rito de York",
    intro: "Chapter, Council and Commandery: three bodies that extend Masonic initiation into the chivalric tradition.",
    label: "Three bodies, one path",
    titulo: "The chivalric tradition of the Order",
    parrafos: [
      "The York Rite is one of the oldest Masonic systems and is made up of three distinct bodies: the Chapter, the Council and the Commandery. Each confers additional degrees that enrich the Mason's experience and delve into Christian chivalric symbolism.",
      "In Baja California, the bodies of the York Rite work in harmony with the Grand Lodge of the State and are open to all Masons who have attained the third degree.",
    ],
    itemsLabel: "The three bodies",
    items: [
      { titulo: "Royal Arch Chapter", desc: "Mark Master, Virtual Past Master, Most Excellent Master and Royal Arch." },
      { titulo: "Council",            desc: "Royal Master, Select Master and Super Excellent Master." },
      { titulo: "Commandery",         desc: "Order of the Red Cross, Order of Malta and Order of the Temple." },
    ],
    cita: { texto: "The York Rite preserves the most ancient traditions of the Order." },
    nota: { label: "Coming soon", texto: "Information about the York Rite bodies active in Baja California will be available soon." },
  },
  {
    slug: "shriners",
    nombre: "Shriners International",
    subtitulo: "Ancient Arabic Order of the Nobles of the Mystic Shrine",
    intro: "A Masonic fraternity devoted to philanthropy and to the care of children with orthopedic conditions, burns and other needs.",
    label: "Freemasonry in service of children",
    titulo: "Brotherhood that becomes help",
    parrafos: [
      "Shriners International is one of the Masonic fraternities best known around the world for its philanthropic work. Its members are Masons in good standing who have pledged to support Shriners Children's, a network of non-profit specialty medical centers.",
      "In Mexico, Shriners Temples work in coordination with the recognized Grand Lodges, extending the spirit of service to local communities through cultural, sporting and charitable activities.",
    ],
    cifras: [
      { numero: "1870", label: "Year founded" },
      { numero: "+20",  label: "Children's hospitals" },
      { numero: "$0",   label: "Cost to families" },
    ],
    cita: { texto: "No man stands so tall as when he stoops to help a child.", autor: "Shriners motto" },
    nota: { label: "Coming soon", texto: "Information about the Shriners Temples associated with the Baja California jurisdiction will be available soon." },
  },
  {
    slug: "ajef",
    nombre: "AJEF",
    subtitulo: "Appendant body",
    intro: "An appendant body of Freemasonry present in the Baja California jurisdiction, devoted to the education of young people.",
    label: "Shaping new generations",
    titulo: "Masonic values for young people",
    parrafos: [
      "AJEF is an appendant body working in the education and development of young people connected to Masonic families. Its work complements that of the Grand Lodge by carrying the values of brotherhood, service and moral development to new generations.",
      "In Baja California, AJEF works under the supervision and recognition of the Grand Lodge of the State, taking an active part in civic, cultural and community service activities.",
    ],
    cita: { texto: "Youth is the hope of the Order." },
    nota: { label: "Coming soon", texto: "Detailed information about AJEF in Baja California will be available soon." },
  },
  {
    slug: "widows-sons",
    nombre: "Widow's Sons",
    subtitulo: "Masonic Riders Association",
    intro: "A Masonic motorcycle fraternity committed to brotherhood, service and the freedom of the open road.",
    label: "Brotherhood on wheels",
    titulo: "Masons first, riders second",
    parrafos: [
      "The Widow's Sons are a Masonic motorcycle fraternity. The name refers to Hiram Abiff, the master builder of King Solomon's Temple, whose mother was a widow. This symbol unites Masons who love riding in a spirit of brotherhood, adventure and service.",
      "In Baja California, the Widow's Sons take part in rides, charity events and activities that project a positive image of Freemasonry to the community, showing that being a Mason is a commitment lived at all times and in every place.",
    ],
    itemsLabel: "What drives us",
    items: [
      { titulo: "Brotherhood", desc: "Fellowship among Masons beyond the lodge room." },
      { titulo: "Service",     desc: "Charitable and community support activities." },
      { titulo: "Freedom",     desc: "The spirit of the open road as a Masonic metaphor." },
    ],
    cita: { texto: "Masons first, riders second, and proud of both." },
    nota: { label: "Coming soon", texto: "Information about Widow's Sons chapters in Baja California will be available soon." },
  },
];

/* ── PORTUGUÊS ── */
const pt: Texto[] = [
  {
    slug: "rito-escoces",
    nombre: "Rito Escocês Antigo e Aceito",
    subtitulo: "Ancient & Accepted Scottish Rite",
    intro: "Uma das principais tradições da Maçonaria universal, presente na Baja California por meio de seus corpos filosóficos.",
    label: "Graus 4° ao 33°",
    titulo: "Formação filosófica para o Mestre Maçom",
    parrafos: [
      "O Rito Escocês Antigo e Aceito é um dos sistemas maçônicos de formação filosófica mais difundidos no mundo. Sua estrutura compreende os graus do 4° ao 33° e oferece ao Mestre Maçom a possibilidade de continuar aprofundando o estudo da filosofia, da ética, da história e do simbolismo maçônico.",
      "Na Baja California, membros de nossa jurisdição participam ativamente dos corpos do Rito, mantendo uma relação fraterna com o Supremo Conselho do México, organismo soberano do Rito em nosso país.",
      "Essa relação faz parte dos vínculos que nossa Grande Loja mantém com instituições maçônicas regulares do México e do exterior, fortalecendo o reconhecimento, o intercâmbio fraternal e a presença da Maçonaria da Baja California além de nossas fronteiras.",
    ],
    foto: {
      label: "Relações fraternais",
      texto: "Encontro entre autoridades da Grande Loja do Estado “Baja California” e o Soberano Grande Comendador do Supremo Conselho do México.",
      fecha: "Agosto de 2026",
    },
    nota: {
      label: "Maçonaria simbólica e Rito Escocês",
      texto: "A Grande Loja do Estado “Baja California” exerce jurisdição sobre os três graus da Maçonaria Simbólica. O Rito Escocês Antigo e Aceito constitui um caminho posterior de formação para Mestres Maçons e possui sua própria estrutura e autoridades.",
    },
  },
  {
    slug: "rito-de-york",
    nombre: "Rito de York",
    subtitulo: "York Rite",
    intro: "Capítulo, Conselho e Comendadoria: três corpos que estendem a iniciação maçônica à tradição cavalheiresca.",
    label: "Três corpos, um caminho",
    titulo: "A tradição cavalheiresca da Ordem",
    parrafos: [
      "O Rito de York é um dos sistemas maçônicos mais antigos e é composto por três organismos distintos: o Capítulo, o Conselho e a Comendadoria. Cada um confere graus adicionais que enriquecem a experiência do maçom e aprofundam o simbolismo cristão cavalheiresco.",
      "Na Baja California, os corpos do Rito de York trabalham em harmonia com a Grande Loja do Estado e estão abertos a todos os maçons que alcançaram o terceiro grau.",
    ],
    itemsLabel: "Os três corpos",
    items: [
      { titulo: "Capítulo do Real Arco", desc: "Mestre de Marca, Past Master Virtual, Mui Excelente Mestre e Real Arco." },
      { titulo: "Conselho",              desc: "Mestre Real, Mestre Escolhido e Super Excelente Mestre." },
      { titulo: "Comendadoria",          desc: "Ordem da Cruz Vermelha, Ordem de Malta e Ordem do Templo." },
    ],
    cita: { texto: "O Rito de York perpetua as mais antigas tradições da Ordem." },
    nota: { label: "Em breve", texto: "Informações sobre os corpos do Rito de York ativos na Baja California estarão disponíveis em breve." },
  },
  {
    slug: "shriners",
    nombre: "Shriners International",
    subtitulo: "Ancient Arabic Order of the Nobles of the Mystic Shrine",
    intro: "Fraternidade maçônica dedicada à filantropia e ao atendimento de crianças com problemas ortopédicos, queimaduras e outras condições.",
    label: "Maçonaria a serviço das crianças",
    titulo: "Fraternidade que se transforma em ajuda",
    parrafos: [
      "Shriners International é uma das fraternidades maçônicas mais reconhecidas no mundo por seu trabalho filantrópico. Seus membros são maçons regulares que se comprometeram a apoiar os Hospitais Shriners para Crianças, uma rede de centros médicos especializados sem fins lucrativos.",
      "No México, os Templos Shriners trabalham em coordenação com as Grandes Lojas reconhecidas, levando o espírito de serviço às comunidades locais por meio de atividades culturais, esportivas e beneficentes.",
    ],
    cifras: [
      { numero: "1870", label: "Ano de fundação" },
      { numero: "+20",  label: "Hospitais infantis" },
      { numero: "$0",   label: "Custo para as famílias" },
    ],
    cita: { texto: "Nenhum homem é tão grande quanto ao se inclinar para ajudar uma criança.", autor: "Lema Shriner" },
    nota: { label: "Em breve", texto: "Informações sobre os Templos Shriners associados à jurisdição da Baja California estarão disponíveis em breve." },
  },
  {
    slug: "ajef",
    nombre: "AJEF",
    subtitulo: "Corpo coligado",
    intro: "Corpo coligado da Maçonaria presente na jurisdição da Baja California, dedicado à formação dos jovens.",
    label: "Formando as novas gerações",
    titulo: "Valores maçônicos para os jovens",
    parrafos: [
      "O AJEF é um corpo coligado que atua na formação e no desenvolvimento de jovens ligados a famílias maçônicas. Seu trabalho complementa a ação da Grande Loja ao levar os valores de fraternidade, serviço e desenvolvimento moral às novas gerações.",
      "Na Baja California, o AJEF trabalha sob a supervisão e o reconhecimento da Grande Loja do Estado, participando ativamente de atividades cívicas, culturais e de serviço à comunidade.",
    ],
    cita: { texto: "A juventude é a esperança da Ordem." },
    nota: { label: "Em breve", texto: "Informações detalhadas sobre o AJEF na Baja California estarão disponíveis em breve." },
  },
  {
    slug: "widows-sons",
    nombre: "Widow's Sons",
    subtitulo: "Filhos da Viúva",
    intro: "Confraria maçônica de motociclistas comprometidos com a fraternidade, o serviço e a liberdade da estrada.",
    label: "Fraternidade sobre rodas",
    titulo: "Maçons primeiro, motociclistas depois",
    parrafos: [
      "Os Widow's Sons, Filhos da Viúva, são uma confraria maçônica de motociclistas. O nome faz referência a Hiram Abiff, o mestre de obras do Templo de Salomão, cuja mãe era viúva. Esse símbolo une maçons amantes da motocicleta em um espírito de fraternidade, aventura e serviço.",
      "Na Baja California, os Widow's Sons participam de passeios, eventos beneficentes e atividades que projetam uma imagem positiva da Maçonaria na comunidade, mostrando que ser maçom é um compromisso vivido a todo momento e em todo lugar.",
    ],
    itemsLabel: "O que nos move",
    items: [
      { titulo: "Fraternidade", desc: "Irmandade entre maçons além da loja." },
      { titulo: "Serviço",      desc: "Atividades beneficentes e de apoio comunitário." },
      { titulo: "Liberdade",    desc: "O espírito da estrada como metáfora maçônica." },
    ],
    cita: { texto: "Maçons primeiro, motociclistas depois, e com orgulho de ambos." },
    nota: { label: "Em breve", texto: "Informações sobre os capítulos dos Widow's Sons na Baja California estarão disponíveis em breve." },
  },
];

/** Combina el texto traducido con las fotos/posiciones definidas en español */
function conFotos(lista: Texto[]): Cuerpo[] {
  return lista.map(t => {
    const base = es.find(e => e.slug === t.slug)!;
    return {
      ...t,
      img: base.img, imgPos: base.imgPos, mobileImgPos: base.mobileImgPos,
      foto: base.foto && t.foto ? { ...base.foto, ...t.foto } : base.foto,
    };
  });
}

export const cuerposPorIdioma: Record<Locale, Cuerpo[]> = { es, en: conFotos(en), pt: conFotos(pt) };

export const getCuerpos = (locale: Locale) => cuerposPorIdioma[locale];
export const getCuerpo  = (slug: string, locale: Locale) => cuerposPorIdioma[locale].find(c => c.slug === slug);
