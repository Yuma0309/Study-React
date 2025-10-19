import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routesParam from './chap08/routesParam';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

// react-helmet-asyncを有効化
root.render(
  <RouterProvider router={routesParam} />
);
