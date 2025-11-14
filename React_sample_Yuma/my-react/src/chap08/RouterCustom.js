import { Outlet } from 'react-router-dom';
import { MyLink } from './MyLink';
import { useState } from 'react';

export default function RouterCustom() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* 自作リンクでメニュー部分を置き換え */}
      <ul>
        <li><MyLink to="/">トップ</MyLink></li>
        <li><MyLink to="/article">公開記事</MyLink></li>
        <li><MyLink to="/about">このサイトについて</MyLink></li>
      </ul>
      <hr />
      <Outlet context={[count, setCount]} />
    </>
  );
}
