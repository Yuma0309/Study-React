import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import QueryBasic from './chap06/QueryBasic';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

const cli = new QueryClient();
root.render(
  <QueryClientProvider client={cli}>
    <QueryBasic />
  </QueryClientProvider>
);
