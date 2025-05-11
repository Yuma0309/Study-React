/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import EmotionJsx from './chap05/EmotionJsx';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

const global = css`
  body {
    background-color: Yellow;
  }
`;

root.render(
  <>
    <Global styles={global} />
    <EmotionJsx />
  </>
);
