import { useCallback, useState } from "react";

function slow() {
  console.log('작업중....');
  
  let sum = 0;
  for (let i = 0; i < 999; i++){
    sum += 1
  }
  return sum
}

function Counter() {
  
  const [number, setNumber] = useState(()=>slow());

  // 함수를 여러번 만들어지지 않게 원할 떄 useCallback 사용
  // useCallback : 해당 배열안의 아이템이 변경이 됬다면! 다시 실행
  const handleClick = useCallback(() => {
    setNumber(number + 1)
  },[number])

  return (
    <>
      <h1>{number}</h1>
      <button type="button" onClick={handleClick}> + </button>
    </>
  );
}

export default Counter;