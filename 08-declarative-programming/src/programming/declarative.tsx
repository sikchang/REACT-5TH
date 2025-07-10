import React, { useState } from "react";

// 설명?
/* 
1. 선언형 프로그래밍은 내가 제어하고 싶은 것을 먼저 작성
2. 글을 받는 것 answer
3. 현재 눌렀을 때 에러? 타이핑? 어떤 작업이 되어야하지?
상태를 선언해 놓고 그 상태에 따라서 화면에 다시 렌더링 하는 것인데
setStatus선언시 계속 리랜더링이 되는 것이다.
순서? 예를 들어 input에 success가 들어오면 setStatus('success')실행 되어
다시 form의 최상단으로 가서 실행하는데 실행되다가 24번째 줄을 만나
실행되어서 정답입니다~~!!!가 화면에 노출 후 멈춘다
*/

// 정리 흐름
/* 
[초기 상태]
↓ (입력)
setAnswer → 리렌더링
↓ (버튼 클릭)
setStatus('submitting') → 리렌더링 (loading 표시)
↓ (1.5초 후 submitForm)
   └─ 정답 → setStatus('success') → <h1>출력
   └─ 오답 → setStatus('typing') + setError(...) → 에러 메시지 출력

*/

/* 
🟢 초기 상태
answer: ''   
status: 'typing'   
error: null

       ⬇️ 사용자 입력
       setAnswer(e.target.value)
       🔁 리렌더링

✍️ 사용자가 "신섬범" 입력 후 Submit 클릭
       ⬇️
 setStatus('submitting')
       ⬇️
 🔁 리렌더링 (textarea/버튼 disabled + "loading..." 출력)
       ⬇️
  submitForm(answer) 호출
       ⬇️ 1.5초 후 검사
       ┌────────────────────────────────────────┐
       │                                        │
       ▼                                        ▼

✅ 정답                              ❌ 오답
answer === "신섬범"         answer !== "신섬범"
setStatus('success')         setStatus('typing')
                              setError(new Error(...))
       ⬇️                              ⬇️
 🔁 리렌더링                       🔁 리렌더링
 <h1>정답입니다!</h1>         폼 다시 활성화 + 에러 메시지 표시

*/

type Status = 'success' | 'typing' | 'submitting'

function Form() {
  
  const [answer,setanswer] = useState('')
  // useState()
  // 사용자가 글 작성중 상태 | 글을 성공적으로 완료 했을 때 | 제출 중인 상태
  const [status, setStatus] = useState<Status>('typing');
  const [error, setError] = useState<Error | null>(null);
  
  if (status === 'success') {
    return <h1>정답입니다~~~!!!</h1>
  }


  const handleTextareaChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setanswer(e.target.value)
    
  }

  const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus('submitting')
    try {
      await submitForm(answer)
      setStatus('success')
    } catch(err){
      setStatus('typing');
      if(err instanceof Error){
        setError(err)
      }
    }
  }

  return (
    <form id="form">
      <h2>프로그래머스 퀴즈!</h2>
      <p>프로그래머스에서 가장 잘생긴 사람은?</p>
      <textarea
        id="textarea"
        onChange={handleTextareaChange}
        disabled={ status === 'submitting'}
      ></textarea>
      <br />
      <button
        type="submit"
        id="button"
        onClick={handleSubmit}
        disabled={answer.length === 0 && status === 'submitting'}
      >Submit</button>
      {error !== null && <p style={{color:'red'}}>{error.message}</p>}
      {status === 'submitting' && <p>loading....</p>}
    </form>
  )
}

export default Form;


const submitForm = (answer: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "신섬범") {
        resolve("최고");
      } else {
        reject(new Error("땡!! 너는 이미 정답을 알고 있다."));
      }
    }, 1500);
  });
};














































