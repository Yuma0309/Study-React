import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RouterNav from './RouterNav';
import TopPage from './TopPage';
import ArticlePage from './ArticlePage';
import AboutPage from './AboutPage';
import InfoPage from './InfoPage';

const routesLink = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterNav />}>
      <Route path="/" element={<TopPage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/article/info" element={<InfoPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);

export default routesLink;
