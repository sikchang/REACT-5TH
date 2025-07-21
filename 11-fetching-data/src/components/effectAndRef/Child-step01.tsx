import React from "react"


function Child({ message }: { message: string }) {
  return (
    <p>{message}</p>
  )
}
// 요거 아래가 뭐였지?
export default React.memo(Child)