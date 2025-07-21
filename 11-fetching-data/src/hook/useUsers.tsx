import { useEffect, useState } from "react";




export function useUsers() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setEror] = useState<Error | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
      .then(data => {
        setUsers(data)
        // 데이터를 다 불러온 이 시점에 loading을 false로 변경
        setLoading(false)
      })
      .catch(err => {
        console.error('데이터 가져오기 실패', err);
        setLoading(false)
        setEror(err)
    })
  }, [])
  

  return {users,loading,error}



}