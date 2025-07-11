import ReactDOM from 'react-dom/client';
import HookEffect from './chap07/HookEffect';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HookEffect init={10} />
);
