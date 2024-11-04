// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <p>現在時刻：{(new Date()).toLocaleString()}</p>
  );
}, 1000);
