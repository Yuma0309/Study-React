import { render, screen } from '@testing-library/react';
import books from '../chap03/books';
import ForNest from '../chap03/ForNest';

// ForItemコンポーネントのモックを定義
jest.mock('../chap03/ForItem', () => {
  return function ForItemMock({ book }) {
    return (
      <>
        <dt>{book.title}</dt>
        <dd>{book.summary.substring(0, 10)}...</dd>
      </>
    );
  };
});

// テストコードを定義
test('ForNest Test', () => {
  const { debug, baseElement } = render(<ForNest src={books} />);
  const dt = screen.getAllByRole('term');
  // ForNestコンポーネントの出力を確認
  debug(baseElement);
  // <dt>要素が5個あること、最初の<dt>要素が「Vue.js」を含むことを確認
  expect(dt).toHaveLength(5);
  expect(dt[0]).toHaveTextContent('Vue.js');
});
