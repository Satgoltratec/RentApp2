export interface House {
  id: number;
  imageUrl: string;
  isFavourite: boolean;
  province: string;
  country: string;
  owner: string;
  pricePerNight: number;
}

export const data: House[] = [
  {
    id: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isFavourite: false,
    province: 'Alicante',
    country: 'España',
    owner: 'Pepe Martinez',
    pricePerNight: 1500,
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
  },
];
