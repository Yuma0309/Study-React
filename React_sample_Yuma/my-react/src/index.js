import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routersLink from './chap08/routersLink';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

// React Routerを有効化
root.render(
  <RouterProvider router={routersLink} />
);
