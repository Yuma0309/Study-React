import ReactDOM from 'react-dom/client';
import HookTimer from './chap07/HookTimer';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HookTimer init={10} />
);
