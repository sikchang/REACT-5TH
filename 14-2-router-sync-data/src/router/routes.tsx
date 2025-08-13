
/*
  element : JSX 엘리먼트를 직접 전달하는 방식 v6+
  이미 렌더링된 React Element를 라우터에게 전달하는 방식
  매 렌더링 시 JSX가 즉시 생성되므로, 코드 스플리팅 (lazy 로딩) 매우 불편함.
  ex) const a = Root()

  Component : 컴포넌트 함수 본문 자체를 전달하는 방식 v7+
  라우터가 내부적으로 React.createElement를 호출해서 인스턴스를 생성함
  라우터가 필요할 때만 컴포넌트를 생성하므로, lazy 로딩과 Suspense 처리를 더 자연스럽게 할 수 있음
  ex) const b = Root
*/


// import Root from '@/pages';
// import Home from '@/pages/Home';
// import About from '@/pages/About';
// import AuthLayout from '@/pages/Auth/AuthLayout';
// import Login from '@/pages/Auth/Login';
// import Register from '@/pages/Auth/Register';
// import RequireAuth from '@/pages/Auth/RequireAuth';
// import ConcertsHome from '@/pages/Concerts/ConcertsHome';
// import Trending from '@/pages/Concerts/Trending';
// import City from '@/pages/Concerts/City';
// import NotFound from '@/pages/NotFound';
import { loader as trendingLoader } from '@/pages/Concerts/Trending';


import { lazy } from 'react';
import { createBrowserRouter, Outlet, redirect } from 'react-router';

const Root = lazy(() => import('@/pages'));
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));

const AuthLayout = lazy(() => import('@/pages/Auth/AuthLayout'));
const Login = lazy(() => import('@/pages/Auth/Login'));
const Register = lazy(() => import('@/pages/Auth/Register'));
const RequireAuth = lazy(() => import('@/pages/Auth/RequireAuth'));

const ConcertsHome = lazy(() => import('@/pages/Concerts/ConcertsHome'));
const Trending = lazy(() => import('@/pages/Concerts/Trending'));
const City = lazy(() => import('@/pages/Concerts/City'));

const NotFound = lazy(() => import('@/pages/NotFound'));

const UserDetail = lazy(() => import('@/pages/User/UserDetail'));
const NewUser = lazy(() => import('@/pages/User/NewUser'));



export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        handle: { label: "홈", showInNav: true },
      },
      {
        path: "about",
        Component: About,
        handle: { label: "소개", showInNav: true },
      },

      /* Auth route */
      {
        path: "/auth",
        Component: AuthLayout,
        handle: { label: "인증", showInNav: true },
        children: [
          {
            path: "login",
            Component: Login,
            handle: { label: "로그인", showInNav: true },
          },
          {
            path: "register",
            Component: Register,
            handle: { label: "회원가입", showInNav: true },
          },
        ],
      },

      /* Concerts route */
      {
        path: "concerts",
        Component: () => (
          <div>
            <RequireAuth>
              <Outlet></Outlet>
            </RequireAuth>
          </div>
        ),
        children: [
          {
            index: true,
            Component: ConcertsHome,
            handle: { label: "콘서트 홈", showInNav: true },
          },
          { path: ":city", Component: City },
          {
            path: "trending",
            Component: Trending,
            handle: { label: "인기", showInNav: true },
            loader: trendingLoader,
            // loader: async () => {
            //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
            //   return res.json();
            // }
          },
        ],
      },

      /* User route */
      {
        path: "user/:id",
        Component: UserDetail,
        handle: { label: "유저 상세", showInNav: false },
        loader: async ({ params: info }) => {
          // const res = await fetch(`https://jsonplaceholder.typicode.com/users/${info.id}`);
          // return res.json();

          return {
            user: fetch(
              `https://jsonplaceholder.typicode.com/users/${info.id}`
            ).then((res) => {
              if (!res.ok) throw new Error("유저 어디있나요?");
              return res.json();
            }),
          };
        },
      },
      {
        path: "users/new",
        Component: NewUser,
        action: async ({ request }) => {
          const formData = await request.formData();
          const name = formData.get("name") as string;
          const email = formData.get("email") as string;

          console.log(name, email);

          // const {data, error} = await supabase.from('users').insert({name,email}).select().single();

          return redirect('/users')
        },
      },
    ],
  },

  { path: "*", Component: NotFound },
]);
