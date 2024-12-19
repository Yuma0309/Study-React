// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import TitledPanel from './chap03/TitledPanel';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));
const title = <p>メンバー募集中！</p>;
const body = <p>ようこそ、WINGSプロジェクトへ！！</p>;

root.render(
  <TitledPanel title={title} body={body}></TitledPanel>
);
