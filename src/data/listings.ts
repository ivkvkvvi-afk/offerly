export interface Listing {
  id: string;
  title: string;
  price: number;
  city: string;
  time: string;
}

export const MOCK_LISTINGS: Listing[] = [
  {
    id: "1",
    title: "Продам ноутбук MacBook Pro 14\" M2",
    price: 125000,
    city: "Москва",
    time: "2 часа назад",
  },
  {
    id: "2",
    title: "Нужен дизайнер интерьера для квартиры",
    price: 50000,
    city: "Санкт-Петербург",
    time: "5 часов назад",
  },
  {
    id: "3",
    title: "Продам велосипед Giant TCR Advanced",
    price: 85000,
    city: "Екатеринбург",
    time: "Вчера",
  },
  {
    id: "4",
    title: "Репетитор по английскому языку",
    price: 1500,
    city: "Казань",
    time: "Вчера",
  },
  {
    id: "5",
    title: "Куплю игровую консоль PlayStation 5",
    price: 45000,
    city: "Новосибирск",
    time: "2 дня назад",
  },
  {
    id: "6",
    title: "Аренда офиса в центре города",
    price: 35000,
    city: "Россия, Москва",
    time: "2 дня назад",
  },
  {
    id: "7",
    title: "Продам мебель для гостиной (диван, кресла, столик)",
    price: 65000,
    city: "Самара",
    time: "3 дня назад",
  },
  {
    id: "8",
    title: "Выгул собак и уход за животными",
    price: 300,
    city: "Ростов-на-Дону",
    time: "3 дня назад",
  },
];