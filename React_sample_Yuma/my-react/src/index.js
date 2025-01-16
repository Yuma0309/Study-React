// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import EventMouse from './chap03/EventMouse';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <EventMouse
    alt="ロゴ画像"
    beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
    afterSrc="https://www.web-deli.com/image/home_chara.gif" />
);
