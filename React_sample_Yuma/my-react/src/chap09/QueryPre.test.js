import { render, screen } from '@testing-library/react';
import QueryPre from '../chap06/QueryPre';

describe('QueryPre', () => {
  test('fetch関数を伴うテスト', async () => {
    render(<QueryPre />);
    // <img>要素を取得
    const img = await screen.findByRole('img', {}, { timeout: 3000 });
    // alt属性の値がClouds（曇り）であることを確認
    expect(img).toHaveAttribute('alt', 'Clouds');
  });
});
