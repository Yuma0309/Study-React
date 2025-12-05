import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import MyHeader from './MyHeader';

export default function TopPage() {
  const context = useOutletContext();
  const [, setCount] = context || [];
  useEffect(() => {
    if (setCount) {
      setCount(c => c + 1);
    }
  }, [setCount]);
  return (
    <>
      <MyHeader />
      <p>トップページです。</p>
    </>
  );
}
