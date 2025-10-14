import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routesHandle from './chap08/routesHandle';
import { HelmetProvider } from 'react-helmet-async';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

// react-helmet-asyncを有効化
root.render(
  <HelmetProvider>
    <RouterProvider router={routesHandle} />
  </HelmetProvider>
);
