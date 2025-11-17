import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routesScroll from './chap08/routesScroll';

const root = ReactDOM.createRoot(document.getElementById('root'));

// react-helmet-asyncを有効化
root.render(
  <RouterProvider router={routesScroll} />
);
