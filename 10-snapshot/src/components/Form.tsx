import { useState } from "react"

function Form() {

  const [text, setText] = useState('');

  return (
    <div>
      <h2>Controlled Input</h2>
      <input
        type="text"
        value={text}
        /* onChange={(e)=> setText(e.target.value)}를 둘다 주석 했을 때
        현재 위치 input은 작동이 안돼고 아래 input은 리액트가 관리하지 않기 때문에
        작동한다. */
        onChange={(e)=> setText(e.target.value)}
      />
      <p>입력값 : {text}</p>
      <hr />
      <h2>Uncontrolled Input</h2>
      {/* 리엑트가 관리하지 않는 컴포넌트 내가 직접 제어할 때: defaultvalue
      이럴 때 set함수에 의해서 제어건을 넘길 때는 value를 사용 
      폼 리셋이나 자동완성 할 때 컴포넌트?*/}
      <input
        type="text"
        defaultValue={text}
        // onChange={(e)=> setText(e.target.value)}
      />
      <p>입력값 : {text}</p>
    </div>
  )
}
export default Form