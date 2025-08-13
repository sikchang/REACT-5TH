import useAuth from '@/hook/useAuth';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

function RequireAuth({ children }: { children: React.ReactNode }) {

  const { isAuth } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (!isAuth) {
      // state : 로그인 성공 후 location.state.from을 주면 원래 있던 페이지로 돌아갈 수 있음
      // replace : true로 설정하면 현재 페이지를 히스토리에서 제거하고 새로운 페이지로 이동 (뒤로가기 방지)
      // preventScrollReset : true로 설정하면 페이지 이동 시 스크롤 위치를 유지
      navigate("/auth/login", { state: { from: location }, replace: true, preventScrollReset: true });
    }
  }, [isAuth, location, navigate]);

  if (!isAuth) return null;

  return (
    children
  )
}
export default RequireAuth
