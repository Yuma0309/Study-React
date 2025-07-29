import ReactDOM from 'react-dom/client';
import HookReducerInit from './chap07/HookReducerInit';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HookReducerInit init={0} />
);
