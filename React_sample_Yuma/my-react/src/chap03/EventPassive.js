import './css/EventPassive.css';

export default function EventPassive() {
  const handleWheel = e => e.preventDefault();
  return (
    <div className="box"
      onWheel={handleWheel}
    >
      たとえばwheelイベントをハンドラーで処理する状況を考えてみましょう。wheelイベントの既定の動作は、ページ／要素のスクロールです。
    </div>
  );
}
