// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import StateNestImmer from './chap04/StateNestImmer';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StateNestImmer />
);
