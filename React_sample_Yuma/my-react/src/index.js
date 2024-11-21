// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import EventBasic from './chap03/EventBasic';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <EventBasic type="time" />
);
