import { render, screen } from '@testing-library/react';
import HookTimer from '../chap07/HookTimer';

describe('HookTimer', () => {
  test('setInterval', async () => {
    const { debug } = render(<HookTimer init={10} />);
    // カウンター部分を取得
    const counter = screen.getByText(/現在のカウント/);
    // カウンターがデクリメントされた結果を確認
    debug(counter);
    expect(counter).toHaveTextContent('9');
  });
});
