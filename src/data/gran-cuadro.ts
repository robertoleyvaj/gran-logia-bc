export interface Oficial {
  slug: string;
  cargo: string;
  nombre: string;
  grupo: "Oficiales Principales" | "Oficiales Menores" | "Diputados de Distrito";
  logia?: string;
  mensaje?: string;
  foto?: string;
}

export const oficiales: Oficial[] = [
  // Oficiales Principales
  { slug: "ernesto-girbau-jimenez", cargo: "Muy Respetable Gran Maestro", nombre: "Ernesto Girbau Jiménez", grupo: "Oficiales Principales", foto: "/gran-maestro.jpg", logia: "R∴L∴S∴ 'Fraternidad de Justicia Social' No.48", mensaje: "La Masonería se fortalece cuando trabajamos unidos, con fraternidad y con el compromiso de servir a nuestros hermanos pero sobre todo a nuestra sociedad." },
  { slug: "jonathan-abarca-guzman", cargo: "Diputado Gran Maestro", nombre: "Jonathan Alain Abarca Guzmán", grupo: "Oficiales Principales", foto: "/diputado-gran-maestro.jpg", logia: "D∴L∴y P∴R∴L∴S∴ 'Manuel P. Barbachano' No.18", mensaje: "" },
  { slug: "cristobal-ruiz-leon", cargo: "Primer Gran Vigilante", nombre: "Cristobal Ruiz León", grupo: "Oficiales Principales", foto: "/primer-gran-vigilante.jpg", logia: "R∴L∴S∴ 'Raúl Arturo Gómez Mariscal' No.55", mensaje: "" },
  { slug: "alberto-zuniga-barragan", cargo: "Segundo Gran Vigilante", nombre: "Alberto Zúñiga Barragán", grupo: "Oficiales Principales", logia: "R∴L∴S∴ 'Pueblos Yumanos' No.72", mensaje: "Es obligación del hombre aprender para después enseñar, pues el conocimiento que no se comparte es conocimiento desperdiciado." },
  { slug: "cesar-santos-diaz", cargo: "Gran Orador", nombre: "César Romeo Santos Díaz", grupo: "Oficiales Principales", foto: "/gran-orador.jpg", logia: "R∴L∴S∴ 'Raúl Arturo Gómez Mariscal' No.55", mensaje: "" },
  { slug: "servando-alvarado-lopez", cargo: "Gran Tesorero", nombre: "Servando Alvarado López", grupo: "Oficiales Principales", foto: "/gran-tesorero.jpg", logia: "D∴L∴y B∴R∴L∴S∴ 'Chee Kung Tong' No.9", mensaje: "" },
  { slug: "ricardo-osorio-rueda", cargo: "Gran Secretario", nombre: "Ricardo Elías Osorio Rueda", grupo: "Oficiales Principales", foto: "/gran-secretario.jpg", logia: "R∴L∴S∴ 'Mensajeros de la Fraternidad' No.74", mensaje: "" },
  { slug: "luis-bernal-salas", cargo: "Oficial Mayor", nombre: "Luis Adolfo Bernal Salas", grupo: "Oficiales Principales", logia: "R∴L∴S∴ 'Landmark' No.56", mensaje: "" },

  // Oficiales Menores
  { slug: "arturo-herrera-serrano", cargo: "Primer Gran Diácono", nombre: "Arturo Herrera Serrano", grupo: "Oficiales Menores", foto: "/primer-gran-giacono.jpg", logia: "D∴L∴y P∴R∴L∴S∴ 'Energía' No.13", mensaje: "" },
  { slug: "gustavo-flores-betanzos", cargo: "Gran Maestro de Ceremonias", nombre: "Gustavo Flores Betanzos", grupo: "Oficiales Menores", foto: "/gran-maestrode-ceremonias.png", logia: "R∴L∴S∴ 'Agustín Sanginés' No.45", mensaje: "La Masonería no busca hombres perfectos; busca hombres dispuestos a perfeccionarse. Trabajamos en silencio, con honor, fraternidad y rectitud, para que nuestras acciones hablen por nosotros y nuestra obra contribuya a construir una sociedad más justa y humana. Porque el verdadero masón no se distingue por lo que proclama, sino por lo que hace." },
  { slug: "amado-gil-siqueiros", cargo: "Primer Gran Experto", nombre: "Amado Ovidio Gil Siqueiros", grupo: "Oficiales Menores", foto: "/primer-gran-experto.png", logia: "R∴L∴S∴ 'Cosmos' No.62", mensaje: "Sé quién soy al andar, cada mundo me transforma, crezco al conocer." },
  { slug: "alberto-maya-levi", cargo: "Segundo Gran Diácono", nombre: "Alberto Maya Levi", grupo: "Oficiales Menores", foto: "/segundo-gran-diacono.jpg", logia: "R∴L∴S∴ 'Salomón' No.51", mensaje: "" },
  { slug: "oscar-lopez-perez", cargo: "Segundo Gran Experto", nombre: "Óscar Manuel López Pérez", grupo: "Oficiales Menores", logia: "R∴L∴S∴ 'Xicoténcatl Leyva Alemán' No.68", mensaje: "" },
  { slug: "gregorio-loya-cortez", cargo: "Gran Hospitalario", nombre: "Gregorio Gandhi Loya Cortez", grupo: "Oficiales Menores", foto: "/gran-hospitalario.png", logia: "R∴L∴S∴ 'Alfa y Omega' No.73", mensaje: "" },
  { slug: "javier-loaiza-velez", cargo: "Gran Ecónomo", nombre: "Javier Alejandro Loaiza Vélez", grupo: "Oficiales Menores", foto: "/gran-economo.jpg", logia: "D∴L∴y B∴R∴L∴S∴ 'Prometeo' No.5", mensaje: "La Masonería nos enseña que ninguna obra grande y digna se construye en soledad, la unidad nos fortalece, el trabajo constante nos transforma y la fraternidad nos recuerda que siempre podemos avanzar juntos, con trabajo, respeto y compromiso, nos convencemos que una sociedad mejor empieza cuando cada persona aporta lo mejor de si mismo en beneficio de los demás, larga vida a la M∴R∴G∴L∴ de Estado \"Baja California\"." },
  { slug: "riggel-dehesa-zazueta", cargo: "Gran Porta Estandarte", nombre: "Riggel Alioth Dehesa Zazueta", grupo: "Oficiales Menores", foto: "/gran-portaestandarte.jpg", logia: "R∴L∴S∴ 'Fernando Suárez Núñez' No.65", mensaje: "" },
  { slug: "edgar-reyes-galicia", cargo: "Gran Guarda Templo Interior", nombre: "Edgar Rogelio Reyes Galicia", grupo: "Oficiales Menores", foto: "/gran-guardatemplo-interior.jpg", logia: "R∴L∴S∴ 'Benito Juárez' No.46", mensaje: "" },
  { slug: "carlos-salmeron-canizalez", cargo: "Gran Guarda Templo Exterior", nombre: "Carlos Adrián Salmerón Canizalez", grupo: "Oficiales Menores", logia: "D∴L∴y P∴R∴L∴S∴ 'Manuel P. Barbachano' No.18", mensaje: "" },
  { slug: "gran-comisionado-ajef", cargo: "Gran Comisionado ante la AJEF", nombre: "Roberto Leyva Jaramillo", grupo: "Oficiales Menores", foto: "/gran-comisionado-ajef.jpg", logia: "R∴L∴S∴ 'Fernando Suárez Núñez' No.65", mensaje: "El futuro de la masonería no dependerá de cuántas respuestas seamos capaces de preservar, sino de cuántos hombres seamos capaces de formar para continuar haciéndose preguntas mejor." },

  // Diputados de Distrito
  { slug: "diputado-tijuana-rosarito", cargo: "Diputado de Distrito Tijuana – Rosarito", nombre: "Nombramiento pendiente", grupo: "Diputados de Distrito", logia: "", mensaje: "" },
  { slug: "german-baez-ramirez", cargo: "Diputado de Distrito Mexicali", nombre: "Germán Báez Ramírez", grupo: "Diputados de Distrito", foto: "/diputado-distrito-mexicali.jpg", logia: "D∴L∴y B∴R∴L∴S∴ 'Prometeo' No.5", mensaje: "" },
  { slug: "erasmo-gomez-gomez", cargo: "Diputado de Distrito Valle de Mexicali", nombre: "Erasmo Gomez Gomez", grupo: "Diputados de Distrito", logia: "D∴L∴y P∴R∴L∴S∴ 'Energía' No.13", mensaje: "" },
  { slug: "benjamin-bello-valle", cargo: "Diputado de Distrito Tecate – Ensenada", nombre: "Benjamín Bello Valle", grupo: "Diputados de Distrito", foto: "/diputado-distrito-tecate.jpg", logia: "D∴L∴y B∴R∴L∴S∴ 'Acacia' No.8", mensaje: "" },
];

export function getOficialBySlug(slug: string): Oficial | undefined {
  return oficiales.find(o => o.slug === slug);
}

export const gruposOrdenados = ["Oficiales Principales", "Oficiales Menores", "Diputados de Distrito"] as const;
