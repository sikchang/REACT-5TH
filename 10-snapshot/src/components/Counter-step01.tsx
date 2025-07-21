import { useState } from "react";

function Counter() {
  
  const [number, setNumber] = useState(0);


  const handleClick = () => {
    // 랜더 트리거 -> 컴포넌트를 다시 실행 => DOM commit
    setNumber(number + 1)

    alert(number)
  }

  return (
    <>
      <h1>{number}</h1>
      <button type="button" onClick={handleClick}> + </button>
    </>
  );
}

export default Counter;