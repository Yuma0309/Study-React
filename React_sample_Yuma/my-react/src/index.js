// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import StyledPanel from './chap03/StyledPanel';
import MyHello from './chap03/MyHello';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StyledPanel>
    {/* <p>メンバー募集中！</p>
    <p>ようこそ、WINGSプロジェクトへ！！</p> */}
    <MyHello myName="鈴木" />
  </StyledPanel>
);
