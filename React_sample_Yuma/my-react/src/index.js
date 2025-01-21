// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import EventError from './chap03/EventError';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <EventError src="./image/wings.jpg"
    alt="サンプル画像" />
);
