import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import RecoilTodo from './chap07/RecoilTodo';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RecoilRoot>
    <RecoilTodo />
  </RecoilRoot>
);
