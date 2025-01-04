// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import TypeProp, { Member } from './chap03/TypeProp';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // 正しい例
  // <TypeProp prop3="鈴木花子" />
  // 誤った例
  <TypeProp prop3={new Member()} />
);
