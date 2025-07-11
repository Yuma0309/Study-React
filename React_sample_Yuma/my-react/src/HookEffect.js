import { useState, useLayoutEffect, useEffect } from 'react';

// delay秒だけ処理を休止するsleep関数
const sleep = delay => {
  const start = Date.now();
  // 現在時刻がstart（開始時刻）を超えるまでループを継続
  while (true) {
    if (Date.now() - start > delay) { break; }
  }
};

export default function HookEffect({ init }) {
  const [count, setCount] = useState(0);

  // 2000ミリ秒後にState（count）を設定
  useEffect(() => {
    sleep(2000);
    setCount(init);
  }, []);

  // countが更新されるたびに実行される
  useLayoutEffect(() => {
    console.log('countが更新されました:', count);
  });
  return (
    <div>
      <h1>HookEffect</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>カウントアップ</button>
    </div>
  );
}
