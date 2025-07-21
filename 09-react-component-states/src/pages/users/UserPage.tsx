


import userData from '@/data/users.json'
import { useState } from 'react'
import UserList from './components/UserList';
import UserSearchBox from './components/UserSearchBox';
import UserListCount from './components/UserListCount';
import InstantSearch from './components/InstantSearch';



function UserPage() {

  /* [상태 선언 구간] --------------------------- */
  // 검색어, 실시간 여부 상태 저장
  const [users] = useState(userData);
  const [searchTerm, setSearchTerm] = useState('')
  const [isInstantSearch, setIsInstantSearch] = useState(false);
  
  /* [상태 업데이트 구간] --------------------------- */
  // handleSearch, handleReset => UserSearchBox
  // 검색어 입력 시 상태 변경
  const handleSearch = (userInput:string) => { setSearchTerm(userInput) }
  const handleReset = () => setSearchTerm('');
  const handlToggleInstantSearch = () => setIsInstantSearch(!isInstantSearch)
  
  console.log(isInstantSearch);
  


  /* [파생된 상태 구간] ----------------------------- */
  // 사용자 리스트를 검색어에 따라 필터링
  const searchedUsersList = users.filter((user) =>
    user.name.includes(searchTerm) ||
    user.email.includes(searchTerm) ||
    user.city.includes(searchTerm)
  )
  

  /* [마크업 (JSX) 구간] --------------------------- */
  /* 
  [ UserPage ]
   ├── <InstantSearch />    ← 실시간 검색 토글
   ├── <UserSearchBox />    ← 검색창 + 버튼
   ├── <UserList />         ← 검색된 유저들 리스트
   └── <UserListCount />    ← "4 / 10명" 표시
  */
  return (
    <div className="UserPage">
      <InstantSearch
        isInstantSearch={isInstantSearch}
        onToggle={handlToggleInstantSearch}
      />
      <UserSearchBox
        isInstantSearch={isInstantSearch}
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onReset={handleReset}
      />
      <UserList users={searchedUsersList} />
      <UserListCount
        searchUsersCount={searchedUsersList.length}
        totalUsersCount={users.length}
      />
    </div>
  )
}
export default UserPage