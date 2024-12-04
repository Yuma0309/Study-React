// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import books from './chap03/books';
import ForFilter from './chap03/ForFilter';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ForFilter src={books} />
);
