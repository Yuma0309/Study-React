// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import EventPropagation from './chap03/EventPropagation';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <EventPropagation />
);
