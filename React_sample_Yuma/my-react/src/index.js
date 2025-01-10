// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import TypeProp, { Member } from './chap03/TypeProp';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // 正しい例
  // <TypeProp prop6={{ name: '鈴木花子', age: 35, sex: '女性', blood: 'A' }} />
  // 誤った例
  <TypeProp prop6={{ age: 35, sex: '女性' }} />
);
