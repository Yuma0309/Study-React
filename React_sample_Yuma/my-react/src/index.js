import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import routesParam from './chap08/routesParam';

const root = ReactDOM.createRoot(document.getElementById('root'));

// react-helmet-asyncを有効化
root.render(
  <HelmetProvider>
    <RouterProvider router={routesParam} />
  </HelmetProvider>
);
