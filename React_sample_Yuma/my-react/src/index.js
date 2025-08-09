import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import RecoilCounter from './chap07/RecoilCounter';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RecoilRoot>
    <RecoilCounter />
  </RecoilRoot>
);
