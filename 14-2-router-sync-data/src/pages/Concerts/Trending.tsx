import type { User } from '@/@types/global';
import { Suspense } from 'react';
import { Await, useFetcher, useLoaderData, type LoaderFunctionArgs } from 'react-router';

function Trending() {

  const users = useLoaderData() as User[];
  const fetcher = useFetcher();

  // loader를 재사용
  const handleClick = (userId: number) => {
    fetcher.load(`/user/${userId}`);
    // fetcher.load(`/users/${userId}`, { method: 'get' });
    // fetcher.load(`/users/${userId}`, { method: 'post' });

    console.log(fetcher.data); // fetcher.data는 현재 로딩 중인 데이터
  }



  return (
    <div>
      <h1>트렌드 콘서트 유저 리스트</h1>
      {
        users.map((user) => (
          <li key={user.id}>
            <button type="button" onClick={() => handleClick(user.id)}>{user.name}</button>
          </li>
        ))
      }

      <hr />

      {
        fetcher.data?.user && (
          <Suspense fallback={<div>로딩중...</div>}>
            <Await resolve={fetcher.data.user}>
              {(user: User) => (
                <div>
                  <h2>선택된 유저 정보</h2>
                  <ul>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.phone}</li>
                  </ul>
                </div>
              )}
            </Await>
          </Suspense>
        )
      }

      {/* <ul>
        <li>{ user.name }</li>
        <li>{ user.email }</li>
        <li>{ user.phone }</li>
      </ul> */}

    </div>
  );
}
export default Trending


export async function loader(args:LoaderFunctionArgs) {
  const res = await fetch( "https://jsonplaceholder.typicode.com/users" );
  return res.json();
}
