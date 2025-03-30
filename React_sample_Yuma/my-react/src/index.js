// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import LazyBasic from './chap05/LazyBasic';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <LazyBasic />
);
