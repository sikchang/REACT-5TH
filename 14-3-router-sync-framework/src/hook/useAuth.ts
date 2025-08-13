function useAuth() {
  // supabase 통신을 통해서 로그인된 사용자 or 게스트 정보를 가져오는 훅

  const isAuth = true;

  return { isAuth };

}
export default useAuth
