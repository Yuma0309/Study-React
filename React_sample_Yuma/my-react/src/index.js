// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

// JSX式ではなく、ただの文字列リテラル
const content = `<h3>WINGSプロジェクト</h3>
  <img src="https://wings.msn.to/image/wings.jpg" />`;
root.render(
  // <p>{content}</p>
  <p dangerouslySetInnerHTML={{__html: content}}></p>
);
