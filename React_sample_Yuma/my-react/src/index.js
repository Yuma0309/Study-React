import ReactDOM from 'react-dom/client';
import HookDeferredTransition from './chap07/HookDeferredTransition';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HookDeferredTransition />
);
