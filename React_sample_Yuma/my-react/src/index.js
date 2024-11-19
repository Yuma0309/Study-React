// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import MyHello from './chap03/MyHello';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <MyHello myName="鈴木" />
  <MyHello myName={13} />
  // <MyHello myName={['山田', '鈴木', '佐藤']} />
  // <MyHello myName={() => {console.log('Hoge'); }} />
  // <MyHello myName={{ name: '鈴木', age: 48 }} />
);
