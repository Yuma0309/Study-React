import ReactDOM from 'react-dom/client';
import MyThemeProvider from './chap07/MyThemeProvider';
import HookThemeButton from './chap07/HookThemeButton';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MyThemeProvider>
    <HookThemeButton />
  </MyThemeProvider>
);
