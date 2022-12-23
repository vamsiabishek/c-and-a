import type { NextApiRequest, NextApiResponse } from 'next';
import { IWeather } from '@c-and-a/shared-types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IWeather>
) {
  const { city } = req.query;

  const result = await fetch(`${process.env.OPENWEATHER_API_URL}?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`)
  const data: IWeather = await result.json()
  
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1000, stale-while-revalidate=1999'
  )

  res.status(200).json(data)
}