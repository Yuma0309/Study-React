// React関連のライブラリをインポート
import React from 'react';
import ReactDOM from 'react-dom/client';
import './chap02/class.css';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

const title = 'これからはじめるVue.js 3実践入門';

root.render(
  <div className="main">
    <p>「{title}」（SBクリエイティブ刊）</p>
    <img src="https://wings.msn.to/books/978-4-8156-1336-5/978-4-8156-1336-5.jpg"
      alt={title} />
    絶賛発売中！
  </div>
);

root.render(
  // 上位の<div>要素を生成
  React.createElement(
    'div',
    { className: 'main' },
    // 子要素の<p>、<img>、テキストを列挙
    React.createElement(
      'p',
      null, // 属性は省略
      `「${title}」（SBクリエイティブ刊）`
    ),
    React.createElement(
      'img',
      {
        src: 'https://wings.msn.to/books/978-4-8156-1336-5/978-4-8156-1336-5.jpg',
        alt: title
      }
    ),
    '絶賛発売中！'
  )
);
