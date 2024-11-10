// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <div>{'Tom &amp; Jerry'}</div>
  // <div>Tom &amp; Jerry</div>
  // <div>{'Tom \u0026 Jerry'}</div>
  // <div>{`Tom ${String.fromCodePoint(38)} Jerry`}</div>
  // <div dangerouslySetInnerHTML={{__html: 'Tom &amp; Jerry'}} />
  <ul>
    <li>{true}</li>
    <li>{false}</li>
    <li>{undefined}</li>
    <li>{null}</li>
    <li>{0}</li>
    <li>{String(true)}</li>
  </ul>
);
