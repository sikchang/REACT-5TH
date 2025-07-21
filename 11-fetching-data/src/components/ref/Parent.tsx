import { useRef } from "react";
import Child from "./Child"

/* 
1. 전역 탐색은 React의 구조(체계) 무시하는 방식
querySelector는 브라우저 전체의 DOM 트리를 뒤진다.
React의 가상 DIM 흐름을 무시한다. 외부에서 DOm을 추척하는 방식
  => 안정성과 성증 저하 될 수 있다.

2. useRef는 컴포넌트랑 직접 연결됨. (안전)
정확한 DIM 선택이 가능함.
컴포넌트가 언마운트되면 자동으로 null 처리가 됨
  => React의 생명주기 안에서 돌아간다.

3. 동일한 렌더 트리 안에서만 접근한다는 보장 (안전)
querySelector는 예상하지 못한 외부 요소까지 다 탐색한다.
useRef는 해당 요소 1ㅣ1 매핑 연결
  => 예측 가능한 결과

4. 성능상 이점
querySelector는 문서 전체를 탐색
useRef는 이미 컴포넌트 안에서 '직접적인 참조'가 되어있음.
  => 탐색 X
*/

function Parent() {
  
  const inputRef = useRef<HTMLInputElement>(null)
  
  const handleFocus = () => {
    
/*     // 명령형프로그래밍 (문서에서 input 찾아서 너 이거 해)
    // 단점 : 동일한 대상을 찾는다는 보장이 없다.
    const input = document.querySelector('input') as HTMLInputElement

    console.log('focus');
    // input을 찾아서 input.foucs() 실행하려고 함.
    input.focus() */

    //선언형 프로그래밍
    /* DOM을 다시 찾아야한다면 명령형보다 선언형으로 
    대상의 타겟을 잡는것이 좋다.
    즉 useRef는 DOM을 잡는 것이라 생각하면 된다. */
    console.log('inputRef: ', inputRef);
    
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <>
      {/* <input type="text" ref={inputRef}></input> */}
      <Child ref={inputRef} placeholder={'아이디를 입력하세요'} />
      <button onClick={handleFocus} type="button">인풋에 포커스</button>
    </>
  )
}
export default Parent