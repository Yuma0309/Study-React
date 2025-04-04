// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import SuspenseSimple from './chap05/SuspenseSimple';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <SuspenseSimple />
);
