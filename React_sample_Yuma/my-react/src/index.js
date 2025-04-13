// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import ProfilerBasic from './chap05/ProfilerBasic';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ProfilerBasic />
);
