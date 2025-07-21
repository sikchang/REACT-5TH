import { useState } from "react";

function Counter() {
  
  const [number, setNumber] = useState(0);


  const handleClick = () => {
    
    /* 콜백으로 떨어지는 값은 갱신 시키고 다시 받아서 업데이트
    하기 때문에 값 중첩이 가능하다.
    이전의 값(스냅샷)을 받아서 연결해야한다면 callback함수 활용해서 진행.
     */
    setNumber( n => n + 1 )
    setNumber( n => n + 1 )
    setNumber(n => n + 1)
    setNumber(40)

  }

  return (
    <>
      <h1>{number}</h1>
      <button type="button" onClick={handleClick}> + </button>
    </>
  );
}

export default Counter;