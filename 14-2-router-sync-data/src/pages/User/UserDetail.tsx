// 페이지를 하나를 만드는데 주소는 user/1 or user/5 이렇게 입력하면 해당 데이터가 뿌려지는 페이지를 만들면된다.
// https://jsonplaceholder.typicode.com/users/${id}가 해당 페이지에 뿌려지면 된다.

import type { User } from '@/@types/global';
import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router'


function UserDetail() {

  const { user } = useLoaderData < { user: Promise<User> }>();

  return (
    <div>
      {/* <h1>유저 이름 : {user.name}</h1>
      <h1>유저 이메일 : {user.email}</h1>
      <h1>유저 전화번호 : {user.phone}</h1> */}

      <Suspense fallback={<div>유저 정보 가져오는 중...</div>}>
        <Await resolve={user} errorElement={<div>어잌후!</div>}>
          {
            (user: User) => (
              <ul>
                <li>유저 이름 : {user.name}</li>
                <li>유저 이메일 : {user.email}</li>
                <li>유저 전화번호 : {user.phone}</li>
              </ul>
            )
          }
        </Await>
      </Suspense>

    </div>
  )
}
export default UserDetail
