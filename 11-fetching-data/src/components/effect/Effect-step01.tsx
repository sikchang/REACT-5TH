import { useEffect, useState } from "react";

/* 
사용 이유는 데이터 페칭 작업에서 많이 사용된다.
1. 렌더링 시작
2. DIM 생성 및 그리기 (commit단계)
3. useEffect 실행
4. 사용자 인터렉션 => Dom Or 상태 변경 -> 다시 렌더링
5. 기존 useEffect의 cleanup 실행 -> 새로운 useEffcet 실행
*/

function Effect() {

  const [count, setCount] = useState(0);

  console.log('계속 렌더링 됨');

  // useEffect는 기본적으로 콜백함수를 사용함
  // 의존성 배열을 넣을 수 있다.
  useEffect(() => {
    console.log('useEffect 실행!');
    // 의존성 배열 안하면 데이터 가져오기 계속 반복
    
    const id = setInterval(() => {
      console.log('하이ㅋㅋ;;');
    },1000)

    // 클린업이 먼저 실행 되기 때문에 계속 실행될 때마다  기존의 값을 삭제해주기 때문
    return () => clearInterval(id)
    // 의존성 배열이 비어있다면 딱 한번만 실행한다.
  },[count])

  return (
    <div>
      <p>카운트 {count}</p>
      <button type="button" onClick={()=> setCount(count + 1)}>+1</button>
    </div>
  )
}
export default Effect