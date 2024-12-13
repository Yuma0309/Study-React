// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import SelectStyle from './chap03/SelectStyle';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <SelectStyle mode="light" />
);
