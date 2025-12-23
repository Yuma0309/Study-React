import { use } from 'react';

export default function EditPage({ params }) {
  const p = use(params);
  return <p>No. {p.id}のレビューを表示しています。</p>;
}
