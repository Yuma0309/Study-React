import { Route, createBrowserRouter, createRoutesFromElements, redirect } from 'react-router-dom';
import RouterParam from './RouterParam';
import TopPage from './TopPage';
import BookPage from './BookPage';
import SearchPage from './SearchPage';
import NotFoundPage from './NotFoundPage';
import BookQueryPage from './BookQueryPage';
import BookStatePage from './BookStatePage';
import InvalidParamsPage from './InvalidParamsPage';
import BookFormPage from './BookFormPage';
import MyStore from '../column/MyStore';
import yup from '../chap04/yup.jp';
import { date, number, string } from 'yup';



const bookAction = async ({ request }) => {
  const form = await request.formData();
  // スキーマを定義
  const bookSchema = yup.object({
    title: string().label('書名').required().max(100),
    price: number().label('価格').integer().positive(),
    published: date().label('刊行日').required().max(new Date(2100, 0, 1))
  });
  let info;
  // 検証を実行&エラー時はメッセージを返す
  try {
    info = await bookSchema.validate({
      title: form.get('title'),
      price: form.get('price') || 0,
      published: new Date(form.get('published') || Date.now()),
    }, {
      abortEarly: false
    });
    console.log(info);
    return redirect('/');
  } catch (e) {
    return e.errors;
  }
};

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />} >
      <Route path="/" element={<TopPage />} />
      <Route path="/books" lazy={async () => {
        const { BookListPage } = await import('./BookNest');
        return { Component: BookListPage };
      }}>
        <Route path=":isbn" lazy={async () => {
          const { BookDetailsPage } = await import('./BookNest');
          return { Component: BookDetailsPage };
        }} />
      </Route>
      <Route path="/book/form" element={<BookFormPage />}
        action={bookAction} />
      <Route path="/book/:isbn?" element={<BookPage />}
        errorElement={<InvalidParamsPage />} />
      <Route path="/bookQuery" element={<BookQueryPage />} />
      <Route path="/bookState" element={<BookStatePage />} />
      <Route path="/mystore" element={<MyStore />} />
      {/* 可変長パラメーターを定義 */}
      <Route path="/search/*" element={<SearchPage />} />
      <Route path="/weather/:city"
        lazy={() => import('./WeatherLazyPage')} />
      {/* 任意のページに対応するルート */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default routesParam;
