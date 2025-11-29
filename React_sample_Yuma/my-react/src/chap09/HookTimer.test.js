import { act, render, screen } from '@testing-library/react';
import HookTimer from '../chap07/HookTimer';

describe('HookTimer', () => {
  // テスト前に擬似タイマーを有効化
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    // テスト後に実際のタイマーに戻す
    jest.useRealTimers();
  });

  test('setInterval', async () => {
    const { debug } = render(<HookTimer init={10} />);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    const counter = screen.getByText(/現在のカウント/);
    debug(counter);
    expect(counter).toHaveTextContent('9');
  });
});
