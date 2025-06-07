import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './chap06/theme';
import MaterialMode from './chap06/MaterialMode';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MaterialMode />
  </ThemeProvider>
);
