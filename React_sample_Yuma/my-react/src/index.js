import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import RecoilTodoUp from './chap07/RecoilTodoUp';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RecoilRoot>
    <RecoilTodoUp />
  </RecoilRoot>
);
