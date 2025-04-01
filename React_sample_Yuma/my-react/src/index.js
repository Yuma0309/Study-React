// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import LazyMulti from './chap05/LazyMulti';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <LazyMulti />
);
