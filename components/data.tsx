export interface House {
  id: number;
  imageUrl: string;
  isFavourite: boolean;
  province: string;
  country: string;
  owner: string;
  pricePerNight: number;
  description: string;
}

const data: House[] = [
  {
    id: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavourite: false,
    province: 'Alicante',
    country: 'España',
    owner: 'Pepe Martinez',
    pricePerNight: 1500,
    description:
      'Este acogedor estudio ofrece comodidad en el corazón de la ciudad. Con una cocina compacta pero totalmente equipada y una zona de estar multifuncional, este espacio es ideal para aquellos que buscan la vida urbana sin comprometer el confort.',
  },
  {
    id: 2,
    imageUrl:
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavourite: true,
    province: 'Barcelona',
    country: 'España',
    owner: 'Maria Lopez',
    pricePerNight: 1800,
    description:
      'Este loft de diseño minimalista cuenta con techos altos y detalles industriales que añaden carácter. Con una cocina abierta, zona de estar y dormitorio integrados, este espacio ofrece una experiencia contemporánea de vida urbana.',
  },
  {
    id: 3,
    imageUrl:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavourite: false,
    province: 'Madrid',
    country: 'España',
    owner: 'Juan Garcia',
    pricePerNight: 1200,
    description:
      'Este elegante apartamento de dos habitaciones ofrece vistas panorámicas de la ciudad desde cada ventana. Con acabados de lujo y una ubicación privilegiada, es ideal para aquellos que buscan un estilo de vida sofisticado y conveniente.',
  },
  {
    id: 4,
    imageUrl:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavourite: true,
    province: 'Valencia',
    country: 'España',
    owner: 'Ana Rodriguez',
    pricePerNight: 2000,
    description:
      'Este apartamento de una habitación es un remanso de paz en el centro histórico. Con suelos de madera y una decoración acogedora, ofrece un ambiente tranquilo para descansar después de un día explorando la ciudad.',
  },
  {
    id: 5,
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavourite: false,
    province: 'Sevilla',
    country: 'España',
    owner: 'Pedro Sanchez',
    pricePerNight: 1000,
    description:
      'Este apartamento de tres habitaciones ofrece espacio para toda la familia. Con una cocina moderna, amplias habitaciones y un patio privado, es perfecto para aquellos que buscan comodidad y conveniencia.',
  },
  {
    id: 6,
    imageUrl:
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavourite: true,
    province: 'Málaga',
    country: 'España',
    owner: 'Laura Fernandez',
    pricePerNight: 2200,
    description:
      'Este luminoso estudio ofrece vistas serenas de un parque cercano. Con una cocina compacta y una zona de estar bien diseñada, es ideal para aquellos que buscan un espacio funcional en una ubicación tranquila.',
  },
  {
    id: 7,
    imageUrl:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavourite: false,
    province: 'Bilbao',
    country: 'España',
    owner: 'Carlos Ramirez',
    pricePerNight: 1700,
    description:
      'Este moderno apartamento de dos habitaciones está a solo unos pasos de la playa. Con una decoración contemporánea y una cocina totalmente equipada, es perfecto para aquellos que aman el estilo de vida costero.',
  },
  {
    id: 8,
    imageUrl:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavourite: true,
    province: 'Granada',
    country: 'España',
    owner: 'Elena González',
    pricePerNight: 1900,
    description:
      'Este lujoso ático cuenta con una impresionante terraza privada con vistas panorámicas de la ciudad. Con amplios espacios interiores y acabados de alta gama, ofrece un estilo de vida exclusivo en el corazón de la metrópolis.',
  },
  {
    id: 9,
    imageUrl:
      'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavourite: false,
    province: 'Toledo',
    country: 'España',
    owner: 'Javier Martínez',
    pricePerNight: 1300,
    description:
      'Este moderno loft ofrece un diseño abierto y contemporáneo en una ubicación céntrica. Con techos altos, suelos de concreto pulido y detalles industriales, es perfecto para aquellos que buscan un estilo de vida urbano y moderno.',
  },
  {
    id: 10,
    imageUrl:
      'https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=1213&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavourite: true,
    province: 'Zaragoza',
    country: 'España',
    owner: 'Sofia Navarro',
    pricePerNight: 1600,
    description:
      'Este elegante apartamento de una habitación ofrece vistas impresionantes del río desde su balcón privado. Con una cocina gourmet y una amplia sala de estar, es ideal para profesionales que buscan comodidad y estilo.',
  },
  {
    id: 11,
    imageUrl:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavourite: true,
    province: 'Cádiz',
    country: 'España',
    owner: 'Antonio Fernandez',
    pricePerNight: 1750,
    description:
      'Este encantador apartamento de dos habitaciones está ubicado en un pintoresco barrio histórico. Con una cocina funcional y una sala de estar acogedora, es perfecto para parejas o pequeñas familias que buscan un hogar tranquilo con encanto.',
  },
  {
    id: 12,
    imageUrl:
      'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavourite: false,
    province: 'Tarragona',
    country: 'España',
    owner: 'Carmen Ruiz',
    pricePerNight: 1450,
    description:
      'Este estudio contemporáneo cuenta con un área de trabajo dedicada, perfecta para profesionales remotos. Con acabados de alta calidad y una ubicación conveniente, ofrece lo mejor en comodidad y funcionalidad.',
  },
  {
    id: 13,
    imageUrl:
      'https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavourite: true,
    province: 'Salamanca',
    country: 'España',
    owner: 'Pablo Diaz',
    pricePerNight: 1950,
    description:
      'Este encantador apartamento de una habitación incluye un jardín privado, ideal para relajarse al aire libre o entretener a amigos. Con una cocina bien equipada y una sala de estar luminosa, ofrece un oasis de tranquilidad en medio de la ciudad.',
  },
  {
    id: 14,
    imageUrl:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavourite: false,
    province: 'Segovia',
    country: 'España',
    owner: 'Silvia Gutierrez',
    pricePerNight: 1350,
    description:
      'Este amplio piso de tres habitaciones se encuentra en un complejo residencial con áreas de juego comunitarias y zonas verdes. Con una cocina moderna y espaciosas habitaciones, es perfecto para familias que buscan comodidad y seguridad.',
  },
  {
    id: 15,
    imageUrl:
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavourite: true,
    province: 'Córdoba',
    country: 'España',
    owner: 'Manuel Jiménez',
    pricePerNight: 1650,
    description:
      'Este estudio de estilo bohemio en el corazón del distrito cultural ofrece encanto y comodidad. Con paredes de ladrillo expuesto y detalles artísticos, es un refugio inspirador para aquellos que buscan vivir cerca de la escena cultural de la ciudad.',
  },
];

export const getHouses = (): Promise<House[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export const getOneHouse = (id: number): Promise<House> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const house = data.find(h => h.id === id);
      if (!house) reject('Casa no encontrada');
      else resolve(house);
    }, 1000);
  });
};
