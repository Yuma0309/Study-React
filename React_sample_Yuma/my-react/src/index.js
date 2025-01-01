// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import TypeProp, { Member } from './chap03/TypeProp';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // 正しい例
  // <TypeProp prop1={new Member()} />
  // 誤った例
  <TypeProp prop1="hoge" />
);
