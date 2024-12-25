// React関連のライブラリをインポート
import ReactDOM from 'react-dom/client';
import books from './chap03/books';
import ListTemplate from './chap03/ListTemplate';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ListTemplate src={books}>
    {elem => (
      <>
        <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
            {elem.title} ({elem.price}円)
          </a>
        </dt>
        <dd>{elem.summary}</dd>
      </>
    )}
  </ListTemplate>
);
