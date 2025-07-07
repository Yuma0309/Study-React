import ReactDOM from 'react-dom/client';
import StateEffect from './chap07/StateEffect';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StateEffect init={0} />
);
