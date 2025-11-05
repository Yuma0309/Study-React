import { isRouteErrorResponse, useLoaderData, useRouteError } from 'react-router-dom';

const sleep = ms => new Promise(res => setTimeout(res, ms));

// ローダー関数を定義
export async function loader({ params }) {
  await sleep(2000);
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&lang=ja&appid=a3efa5816300843820fe3f35e9540b32`);
  if (res.ok) { return res; }
  switch (res.status) {
    case 404:
      throw new Response(JSON.stringify({ message: 'city is invalid!!' }), { status: 404 });
    case 401:
      throw new Response(JSON.stringify({ message: 'api key is invalid!!' }), { status: 401 });
    default:
      throw new Response(JSON.stringify({ message: 'unknown error...' }), { status: 503 });
  }
};

// コンポーネント関数を定義
export function Component() {
  const data =  useLoaderData();
  return (
    <figure>
      <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
      alt={data?.weather?.[0]?.main} />
      <figcaption>{data?.weather?.[0]?.description}</figcaption>
    </figure>
  );
}
Component.displayName = 'WeatherLazyPage';

// エラーページを定義
export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <p>目的のページが見つかりませんでした。</p>;
      case 401:
        return <p>認証に失敗しています。</p>;
      case 501:
        return <p>サービスが一時的に停止しています。</p>;
      default:
        return <p>不明なエラー：{error.data.message}</p>;
    }
  }
  return (
    <div>
      <h3>問題が発生しました。</h3>
      <p>詳細な問題： {error.message}</p>
    </div>
  );
}
ErrorBoundary.displayName = 'WeatherLazyErrorPage';
