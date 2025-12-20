import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import QuerBasic from './QueryBasic';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <QuerBasic />
  </QueryClientProvider>
);
