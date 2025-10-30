import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RouterParam from './RouterParam';
import TopPage from './TopPage';
import BookPage from './BookPage';
import SearchPage from './SearchPage';
import NotFoundPage from './NotFoundPage';
import BookQueryPage from './BookQueryPage';
import BookStatePage from './BookStatePage';
import InvalidParamsPage from './InvalidParamsPage';
import WeatherPage from './WeatherPage';
import CommonErrorPage from './CommonErrorPage';

const sleep = ms => new Promise(res => setTimeout(res, ms));

const fetchWeather = async ({ params }) => {
  // ローディングメッセージを表示させるために処理を遅延
  await sleep(2000);
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&lang=ja&appid=a3efa5816300843820fe3f35e9540b32`);
  if (res.ok) { return res; }
  // レスポンスステータスに応じて、異なるエラー情報をスロー
  switch (res.status) {
    case 404:
      throw new Response(JSON.stringify({ message: 'city is invalid!!' }), { status: 404 });
    case 401:
      throw new Response(JSON.stringify({ message: 'api key is invalid!!' }), { status: 401 });
    default:
      throw new Response(JSON.stringify({ message: 'api server is in trouble...' }), { status: 501 });
  }
}

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}
      errorElement={<CommonErrorPage />}>
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
