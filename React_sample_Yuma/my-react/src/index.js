// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import { MyButton, MyStyledButton } from './chap05/StyledComp2';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <MyButton>ボタン</MyButton>
    <MyStyledButton>ボタン</MyStyledButton>
  </>
);
