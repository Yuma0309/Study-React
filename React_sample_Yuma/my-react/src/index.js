// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));
const dest = 'https://ja.react.dev';

root.render(
  <a href={dest}>React本家サイト</a>
  // <a href="{dest}">React本家サイト</a>
  // <a href="{dest}/docs">React本家サイト</a>
  // <a href={dest + '/docs'}>React本家サイト</a>
);
