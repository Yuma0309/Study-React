// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import StateTodo from './chap04/StateTodo';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StateTodo />
);
