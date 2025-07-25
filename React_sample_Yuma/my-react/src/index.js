import ReactDOM from 'react-dom/client';
import HookReducer from './chap07/HookReducer';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HookReducer init={0} />
);
