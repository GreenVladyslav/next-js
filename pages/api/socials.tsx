import { NextApiRequest, NextApiResponse } from 'next';
import { socials } from './data/socials';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // console.log(req.method); // get тип данного запроса

  if (req.method === 'GET') {
    res.status(200).json(socials);
  }
}

// 1.но при создание апи один путь может использовать разніе методы наприме PUT, DELETE
// 2. поддержка env - приватніе данніе
// Localhost Будет использовать только локально разработке при загрузке на сервер не валдин

// .env.local - там у нас апи и мі его легк можем поменять взависимоти от того где мы запускаем наше приложение
