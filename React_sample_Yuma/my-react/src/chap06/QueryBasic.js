import { useQuery } from 'react-query';

// delay秒だけ処理を休止するsleep関数
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

// 天気情報を取得するための関数
const fetchWeather = async () => {
  // 処理を遅延させるためのダミーの休止処理
  await sleep(2000);
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tokyo&lang=ja&appid=a3efa5816300843820fe3f35e9540b32`);
  if (res.ok) { return res.json(); }
  throw new Error(res.statusText);
};

export default function QuerBasic() {
  // fetchWeather関数でデータを取得
  const { data, isLoading, isError, error } = useQuery('weather', fetchWeather);
  // ロード中であれば、ローディングメッセージを表示
  if (isLoading) {
    return <p>Loading...</p>;
  }
  // 通信エラーが発生した場合には、エラーメッセージを表示
  if (isError) {
    return <p>Error: {error.message}</p>;
  }
  // ロード中でもエラーでもない場合に、結果を表示
  return (
    <figure>
      <img
      src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
      alt={data?.weather?.[0]?.main} />
      <figcaption>{data?.weather?.[0]?.description}</figcaption>
    </figure>
  );
}
