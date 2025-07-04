import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import QueryBasic from './chap06/QueryBasic';
import { ErrorBoundary } from 'react-error-boundary';
import QuerySuspense from './chap06/QuerySuspense';

// Reactアプリ（Appコンポーネント）を描画
const root = ReactDOM.createRoot(document.getElementById('root'));

// Suspenseモードを有効化
const cli = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

root.render(
  <Suspense fallback={<p>Loading...</p>}>
    <ErrorBoundary fallback={<div>エラーが発生しました。</div>}>
      <QueryClientProvider client={cli}>
        <QuerySuspense />
      </QueryClientProvider>
    </ErrorBoundary>
  </Suspense>
);
