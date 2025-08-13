import { index, layout, prefix, route, type RouteConfig } from '@react-router/dev/routes';


export default [
  index("./pages/Home/index.tsx"),
  route("about", "./pages/About/index.tsx"),
  layout("./pages/Layout/index.tsx", [
    ...prefix("auth", [
      route("login", "./pages/Auth/Login.tsx"),
      route("register", "./pages/Auth/Register.tsx"),
    ]),
  ]),

  /* concerts */
  ...prefix('concerts', [
    index('./pages/Concerts/ConcertsHome.tsx'),
    route(':city', './pages/Concerts/City.tsx'),
    route('trending', './pages/Concerts/Trending.tsx'),
  ]),
  /* users */
  ...prefix('users', [
    // route(':userId', './pages/User/UserDetail.tsx'),
    route('new', './pages/User/NewUser.tsx'),
  ])
] satisfies RouteConfig;


/*
  기본 내보내기 값이 RouteConfig 타입(규격)을 충족하는지 컴파일 타임에서 체크
*/
