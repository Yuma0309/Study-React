// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

const name = '鈴木';
root.render(
  <p>こんにちは、{name}です！</p>
);
