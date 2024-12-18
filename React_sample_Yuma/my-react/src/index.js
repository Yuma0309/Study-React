// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import TitledPanel from './chap03/TitledPanel';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <TitledPanel
    title={
      <p>メンバー募集中！</p>
    }
    body={
      <p>ようこそ、WINGSプロジェクトへ！！</p>
    }
  >
  </TitledPanel>
);
