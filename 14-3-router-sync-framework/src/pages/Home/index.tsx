
// @ts-ignore
import type { Route } from "./+types/Home";
import cssUrl from '@/style/main.css?url'

/* 페이지에 필요한 meta 태그 설정 */
export const meta: Route.MetaFunction = () => ([
  { title: 'Main | CRA' },
  { name: 'description', content: 'CRA를 다루는 메인 페이지 입니다.' },
  { property: 'og:type', content: 'website' },
  { property: 'og:title', content: 'Framework' }
])


/* 페이지에 필요한 link 설정 */
export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: cssUrl },
  { rel: 'preload', as: 'image', href: '/vite.svg' },

  // 지금 안 쓰고 다음 화면에서 쓸 확률이 있다면
  // { rel: 'prefetch', as: 'image', href: '/vite.svg' }
];

function Home() {
  return (
    <>
      <h1>Main Page</h1>
      <div>
        <img src="/vite.svg" alt="Vite Logo" />
      </div>
    </>
  );
}
export default Home
