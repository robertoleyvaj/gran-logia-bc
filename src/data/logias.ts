export interface Oficial {
  cargo: string;
  nombre: string;
}

export interface Logia {
  numero: number;
  nombre: string;
  ciudad: string;
  anio: number;
  prefijo: string;
  foto?: string;
  direccion?: string;
  horarios?: string;
  sesiones?: string;
  facebook?: string;
  instagram?: string;
  cuadro?: Oficial[];
}

export const logias: Logia[] = [
  { numero: 4,  nombre: "Obreros del Silencio",                          ciudad: "Tijuana",            anio: 1933, prefijo: "D∴ L∴ y B∴ R∴ L∴ S∴", foto: "/No-4.jpg" },
  { numero: 5,  nombre: "Prometeo",                                       ciudad: "Mexicali",           anio: 1933, prefijo: "D∴ L∴ y B∴ R∴ L∴ S∴", foto: "/No-5.jpg" },
  { numero: 7,  nombre: "Arquitectura Moral",                             ciudad: "Tijuana",            anio: 1935, prefijo: "D∴ L∴ y B∴ R∴ L∴ S∴", foto: "/No-7.jpg" },
  { numero: 8,  nombre: "Acacia",                                         ciudad: "Tecate",             anio: 1937, prefijo: "D∴ L∴ y B∴ R∴ L∴ S∴", foto: "/No-8-300x300.jpg" },
  { numero: 9,  nombre: "Chee Kung Tong",                                 ciudad: "Mexicali",           anio: 1945, prefijo: "D∴ L∴ y B∴ R∴ L∴ S∴", foto: "/No-9-300x300.jpg" },
  { numero: 12, nombre: "Franco Magdaleno Soto",                          ciudad: "Tijuana",            anio: 1949, prefijo: "D∴ L∴ y B∴ R∴ L∴ S∴", foto: "/No-12-300x300.jpg" },
  { numero: 13, nombre: "Energía",                                        ciudad: "Mexicali",           anio: 1953, prefijo: "D∴ L∴ y P∴ R∴ L∴ S∴", foto: "/No-13-300x300.jpg" },
  { numero: 17, nombre: "Artículo 27",                                    ciudad: "Ensenada",           anio: 1963, prefijo: "D∴ L∴ y P∴ R∴ L∴ S∴" },
  { numero: 18, nombre: "Manuel P. Barbachano",                           ciudad: "Playas de Rosarito", anio: 1964, prefijo: "D∴ L∴ y P∴ R∴ L∴ S∴", foto: "/No-18-300x300.jpg" },
  { numero: 34, nombre: "Adolfo López Mateos",                            ciudad: "Tijuana",            anio: 1986, prefijo: "R∴ L∴ S∴", foto: "/No-34-300x300.jpg" },
  { numero: 36, nombre: "Tijuana",                                        ciudad: "Mexicali",           anio: 1986, prefijo: "R∴ L∴ S∴" },
  { numero: 38, nombre: "Occidental No. 226",                             ciudad: "Tijuana",            anio: 1989, prefijo: "R∴ L∴ S∴" },
  { numero: 41, nombre: "Evolución y Orden",                              ciudad: "Tijuana",            anio: 1994, prefijo: "R∴ L∴ S∴", foto: "/No-41-300x300.jpg" },
  { numero: 43, nombre: "Ambrosio I. Lelevier",                           ciudad: "Mexicali",           anio: 2009, prefijo: "R∴ L∴ S∴", foto: "/No-43-300x300.jpg" },
  { numero: 44, nombre: "Abelardo L. Rodríguez",                          ciudad: "Mexicali",           anio: 2009, prefijo: "R∴ L∴ S∴", foto: "/No-44a-300x300.jpg" },
  { numero: 45, nombre: "Agustín Sanginés",                               ciudad: "Ensenada",           anio: 2010, prefijo: "R∴ L∴ S∴" },
  { numero: 46, nombre: "Benito Juárez",                                  ciudad: "Mexicali",           anio: 2010, prefijo: "R∴ L∴ S∴", foto: "/No-46-300x300.jpg" },
  { numero: 47, nombre: "Mexicali",                                       ciudad: "Mexicali",           anio: 2010, prefijo: "R∴ L∴ S∴", foto: "/No-47-300x300.jpg" },
  { numero: 48, nombre: "Fraternidad de Justicia Social",                 ciudad: "Mexicali",           anio: 2012, prefijo: "R∴ L∴ S∴" },
  { numero: 49, nombre: "Libertad – Igualdad – Fraternidad",              ciudad: "Tijuana",            anio: 2013, prefijo: "R∴ L∴ S∴" },
  { numero: 50, nombre: "Mario Rodríguez Nolazco",                        ciudad: "Tijuana",            anio: 2014, prefijo: "R∴ L∴ S∴", foto: "/No-50-300x300.jpg" },
  { numero: 51, nombre: "Salomón",                                        ciudad: "Mexicali",           anio: 2014, prefijo: "R∴ L∴ S∴", foto: "/No-51-300x300.jpg" },
  { numero: 52, nombre: "Universitas",                                    ciudad: "Mexicali",           anio: 2015, prefijo: "R∴ L∴ S∴", foto: "/No-52-300x300.jpg" },
  { numero: 54, nombre: "Benjamín Franklin",                              ciudad: "Tijuana",            anio: 2015, prefijo: "R∴ L∴ S∴", foto: "/No-54-300x300.jpg" },
  { numero: 55, nombre: "Raúl Arturo Gómez Mariscal",                     ciudad: "Mexicali",           anio: 2015, prefijo: "R∴ L∴ S∴", foto: "/No-55-300x300.jpg" },
  { numero: 56, nombre: "Landmark",                                       ciudad: "Mexicali",           anio: 2016, prefijo: "R∴ L∴ S∴", foto: "/No-56-300x300.jpg" },
  { numero: 57, nombre: "Lázaro Cárdenas",                                ciudad: "Mexicali",           anio: 2016, prefijo: "R∴ L∴ S∴" },
  { numero: 58, nombre: "Rafael Esparza Fuentes, Razón y Pensamiento",    ciudad: "Tijuana",            anio: 2016, prefijo: "R∴ L∴ S∴", foto: "/No-58-300x300.jpg" },
  { numero: 59, nombre: "Calmécac, Luz y Saber",                          ciudad: "Mexicali",           anio: 2017, prefijo: "R∴ L∴ S∴", foto: "/No-59-300x300.jpg" },
  { numero: 60, nombre: "Cuitláhuac",                                     ciudad: "Tijuana",            anio: 2018, prefijo: "R∴ L∴ S∴", foto: "/No-60-300x300.jpg" },
  { numero: 61, nombre: "Liberales de Baja California",                   ciudad: "Tijuana",            anio: 2018, prefijo: "R∴ L∴ S∴" },
  { numero: 62, nombre: "Cosmos",                                         ciudad: "Mexicali",           anio: 2018, prefijo: "R∴ L∴ S∴" },
  { numero: 63, nombre: "Centinelas del Valle",                           ciudad: "Mexicali",           anio: 2018, prefijo: "R∴ L∴ S∴", foto: "/No-63-300x300.jpg" },
  { numero: 64, nombre: "Felix Antonio Pérez Jiménez",                    ciudad: "Mexicali",           anio: 2019, prefijo: "R∴ L∴ S∴" },
  { numero: 65, nombre: "Fernando Suárez Núñez",                          ciudad: "Tijuana",            anio: 2019, prefijo: "R∴ L∴ S∴", foto: "/No-65-300x300.jpg" },
  { numero: 66, nombre: "Diógenes de Sínope",                             ciudad: "Tijuana",            anio: 2021, prefijo: "R∴ L∴ S∴", foto: "/No-66-300x300.jpg" },
  { numero: 67, nombre: "Pakal",                                          ciudad: "Mexicali",           anio: 2021, prefijo: "R∴ L∴ S∴", foto: "/No-67-300x300.jpg" },
  { numero: 68, nombre: "Xicoténcatl Leyva Alemán",                       ciudad: "Tijuana",            anio: 2022, prefijo: "R∴ L∴ S∴", foto: "/No-68-300x300.jpg" },
  { numero: 69, nombre: "Antiguo Gremio",                                 ciudad: "Playas de Rosarito", anio: 2023, prefijo: "R∴ L∴ S∴" },
  { numero: 70, nombre: "Nuevo Orden",                                    ciudad: "Tijuana",            anio: 2023, prefijo: "R∴ L∴ S∴", foto: "/No-70-300x300.jpg" },
  { numero: 71, nombre: "Shekinah",                                       ciudad: "Mexicali",           anio: 2023, prefijo: "R∴ L∴ S∴" },
  { numero: 72, nombre: "Pueblos Yumanos",                                ciudad: "Tijuana",            anio: 2024, prefijo: "R∴ L∴ S∴", foto: "/No-72-300x300.jpg" },
  { numero: 73, nombre: "Alfa y Omega",                                   ciudad: "Tijuana",            anio: 2025, prefijo: "R∴ L∴ S∴", foto: "/No-73-300x300.jpg" },
  { numero: 74, nombre: "Mensajeros de la Fraternidad",                   ciudad: "Tijuana",            anio: 2025, prefijo: "R∴ L∴ S∴", foto: "/No-74-300x300.jpg" },
  { numero: 75, nombre: "Melkitzedek",                                    ciudad: "Mexicali",           anio: 2026, prefijo: "R∴ L∴ S∴", foto: "/No-75-1-300x300.jpg" },
];

export const ciudades = [...new Set(logias.map(l => l.ciudad))].sort();

export function getLogiaByNumero(numero: number): Logia | undefined {
  return logias.find(l => l.numero === numero);
}
