import { Outlet } from 'react-router';

function AuthLayout() {

  const style = {
    border:'1px solid black',
    padding: '2rem'
  }

  return (
    <div style={style}>
      <h1>Auth Layout Page</h1>
      <hr />
      <Outlet />
    </div>
  );
}
export default AuthLayout
