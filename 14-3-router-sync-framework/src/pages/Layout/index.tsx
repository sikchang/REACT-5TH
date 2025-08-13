import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        <h1>공통 레이아웃 헤더</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <small>공통 레이아웃 푸터</small>
      </footer>
    </div>
  );
}
