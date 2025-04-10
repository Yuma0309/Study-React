// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import SuspenseResult from './chap05/SuspenseResult';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <SuspenseResult />
);
