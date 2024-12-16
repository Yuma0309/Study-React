// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import StyledPanel from './chap03/StyledPanel';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StyledPanel>
    <p>メンバー募集中！</p>
    <p>ようこそ、WINGSプロジェクトへ！！</p>
  </StyledPanel>
);
