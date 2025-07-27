import ReactDOM from 'react-dom/client';
import HookReducerUp from './chap07/HookReducerUp';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HookReducerUp init={0} />
);
