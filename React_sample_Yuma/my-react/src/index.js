// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import StateNest from './chap04/StateNest';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StateNest />
);
