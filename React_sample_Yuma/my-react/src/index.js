// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import StyledComp from './chap05/StyledComp';
import GlobalStyle from './chap05/StyledGlobal';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <GlobalStyle />
    <StyledComp />
  </>
);
