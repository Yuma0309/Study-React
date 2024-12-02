// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import books from './chap03/books';
import ForNest from './chap03/ForNest';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ForNest src={books} />
);
