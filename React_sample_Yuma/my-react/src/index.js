// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import StateBasic from './chap03/StateBasic';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StateBasic init={0} />
);
