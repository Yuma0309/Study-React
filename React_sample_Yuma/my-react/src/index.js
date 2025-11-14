import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import routesMyLink from './chap08/routesMyLink';

const root = ReactDOM.createRoot(document.getElementById('root'));

// react-helmet-asyncを有効化
root.render(
  <HelmetProvider>
    <RouterProvider router={routesMyLink} />
  </HelmetProvider>
);
