// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

// const props = 'color: White; background-color: Blue; padding: 3px';
const props = {
  color: 'White',
  // backgroundColor: 'Blue',
  'backgroundColor': 'Blue',
  // padding: 3
  padding: '3px'
};

root.render(
  <p style={props}>WINGSプロジェクト</p>
);
