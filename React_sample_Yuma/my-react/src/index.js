// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import MyHello from './chap03/MyHello';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MyHello />
);
