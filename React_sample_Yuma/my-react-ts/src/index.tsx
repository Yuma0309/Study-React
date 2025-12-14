import ReactDOM from 'react-dom/client';
import ListTemplate from './ListTemplate';
import books from './books';
import type { Book } from './Book';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ListTemplate src={books}>
  {(elem: Book) => (
    <>
    <dt>
      <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
          {elem.title}（{elem.price}円）
      </a>
    </dt>
    <dd>{elem.summary}</dd>
    </>
  )}
  </ListTemplate>
);
