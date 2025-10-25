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
  // 応答が成功の場合は、そのまま結果データを返す
  if (res.ok) { return res; }
  // 成功以外の結果ではエラーデータを生成
  return json({
    "weather":[
      {"id":803,"main":"Unknown","description":"不明","icon":"50d"}
    ],
    "name":"不明"
  });
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
