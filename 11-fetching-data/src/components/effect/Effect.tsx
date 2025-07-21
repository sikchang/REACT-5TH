/* 
사용 이유는 데이터 페칭 작업에서 많이 사용된다.
1. 렌더링 시작
2. DIM 생성 및 그리기 (commit단계)
3. useEffect 실행
4. 사용자 인터렉션 => Dom Or 상태 변경 -> 다시 렌더링
5. 기존 useEffect의 cleanup 실행 -> 새로운 useEffcet 실행
*/

import { useUsers } from "@/hook/useUsers"

function Effect() {
  // 범쌤 코드
 
  // 재사용 가능한 유틸 함수로 작성해주는게 좋다.
  // hook도 가능하다. -> 커스텀 Hook
  // hook/useUsers.tsx에 있음 useUsers(커스텀Hook)
  const {users, loading, error} = useUsers()

  if(loading) return <p>기다려봐</p>
  if(error) return <p>야 에러났다 고쳐봐라</p>

  return (
    <ul>
      { /* 범쌤 코드 */
        users && users.map((user) => (
          <li key={user.id}>{user.name}  {user.email}</li>
        ))
      }
    </ul>
  )
}
export default Effect