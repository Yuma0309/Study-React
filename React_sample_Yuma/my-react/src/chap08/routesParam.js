import { createBrowserRouter, createRoutesFromElements, json, Route } from 'react-router-dom';
import RouterParam from './RouterParam';
import TopPage from './TopPage';
import BookPage from './BookPage';
import SearchPage from './SearchPage';
import NotFoundPage from './NotFoundPage';
import BookQueryPage from './BookQueryPage';
import BookStatePage from './BookStatePage';
import InvalidParamsPage from './InvalidParamsPage';
import WeatherPage from './WeatherPage';

const fetchWeather = async ({ params }) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&lang=ja&appid=a3efa5816300843820fe3f35e9540b32`);
  if (res.ok) { return res; }
  // レスポンスステータスに応じて、異なるエラー情報をスロー
  switch (res.status) {
    case 404:
      throw json({ message: 'city is invalid!!' }, { status: 404 });
    case 401:
      throw json({ message: 'api key is invalid!!' }, { status: 401 });
    default:
      throw json({ message: 'api server is in trouble...' }, { status: 501 });
  }
}

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}>
      <Route path="/" element={<TopPage />} />
      <Route path="/book/:isbn?" element={<BookPage />}
        errorElement={<InvalidParamsPage />} />
      <Route path="/bookQuery" element={<BookQueryPage />} />
      <Route path="/bookState" element={<BookStatePage />} />
      {/* 可変長パラメーターを定義 */}
      <Route path="/search/*" element={<SearchPage />} />
      <Route path="/weather/:city" element={<WeatherPage />}
        loader={fetchWeather} />
      {/* 任意のページに対応するルート */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default routesParam;
