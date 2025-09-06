// React Router本体をインポート
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// ルーティングで利用するページをインポート
import TopPage from './TopPage';
import ArticlePage from './ArticlePage';
import AboutPage from './AboutPage';

// ルーティングテーブルを定義
const routesBasic = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<TopPage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/about" element={<AboutPage />} />
    </>
  )
);

export default routesBasic;
