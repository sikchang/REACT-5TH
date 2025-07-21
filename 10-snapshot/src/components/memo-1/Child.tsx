import React from "react";

interface Props{
  label: string;
  onClick: () => void;
  items: string[];
}

function Child({label,onClick,items}:Props) {
  return (
    <>
      <p>{label}</p>
      <button type="button" onClick={onClick}>자식 버튼이다! 어쩔건데!</button>
      <ul>
        {
          items.map((item,i) => (
            <li key={i}>{item}</li>
          ))
        }
      </ul>
    </>
  )
}
// 너가 저장이 필요한 곳이 있으면 리액트의 저장을 해.?
// 컴포넌트 랜더링이 정확하게 알고 싶다면 확인 해보자
export default React.memo(Child)
// export default Child