import { Outlet, redirect } from 'react-router';



export async function concertsLoader() {
  if (!localStorage.getItem('token')) {
    throw redirect('/auth/login')
  }
  return null
}

concertsLoader.hydrate = true; // 하이드레이션 중에 실행


function Component() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Component;
