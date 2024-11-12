// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

// あまりよくない例
const attrs = {
  href: 'https://wings.msn.to/',
  download: false,
  target: '_blank',
  rel: 'help'
};

root.render(
  <a href={attrs.href} download={attrs.download}
    target={attrs.target} rel={attrs.rel}>サポートページへ</a>
  // <a {...attrs}>サポートページへ</a>
  // <a href="index.html" download>トップへ</a>
  // <a href="index.html" download={true}>トップへ</a>
);
