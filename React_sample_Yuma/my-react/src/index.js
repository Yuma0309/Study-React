import ReactDOM from 'react-dom/client';
import PortalBasic from './chap05/PortalBasic';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <div id="dialog"></div>
    <PortalBasic />
  </>
);
