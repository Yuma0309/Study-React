// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import books from './chap03/books';
import ForList from './chap03/ForList';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ForList src={books} />
);
