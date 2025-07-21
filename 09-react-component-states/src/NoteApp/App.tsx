import { useState } from "react";
import { getNoteList, type Note } from "./api/getNote";
import NoteListPage from "./pages/NoteListPage";
import { ROUTES } from "./routes";
import NoteDetailPage from "./pages/NoteDetailPage";
import NoteCreatePage from "./pages/NoteCreatePage";
import NoteEditPage from "./pages/NoteEditPage";

// 컴포넌트가 어디서 받았고 어디서 가져왔는지.
function NoteApp() {

    const [routeInfo, setRouteInfo] = useState<{
        route:string;
        noteId: number | null;
      }>({
        route:'list',
        noteId:null
      });
    // 모든 노트의 데이터 & user 정보
    // 관계형 데이터
    // 화살표 함수로 보내주면 매번 랜더링이 아닌 딱 한번만 호출한 데이터를 list에 넣어줌.
    // 나중에 useEffect을 사용하게 돼면 상관이 없어진다.
    const [list,setList] = useState(()=> getNoteList())

    // 라우트 변경 함수
    const handleChangeRoute = (nextRoute:string,pickNoteId:number = 0) => {
        setRouteInfo({
            ...routeInfo,
            route: nextRoute,
            noteId: pickNoteId ? pickNoteId : routeInfo.noteId
        })
    }
    // console.log('routeInfo: ', routeInfo);
    // console.log('routeInfo.route: ', routeInfo.route);
    
    // 노트 생성 함수
    const handleCreateNote = (newNoteItem:Note) => {
        setList([
            ...list,
            newNoteItem
        ])
    }

    // 노트 수정 함수
    const handleEditNote = (willEditNote:Note) => {
        const nextList = list.map((item) =>
            item.id == willEditNote.id ? willEditNote : item
        )
        setList(nextList)
    }

    // 노트 제거 함수
    const handleDeleteNote = (willDeleteNoteId:number) => {
        const nextList = list.filter((item)=>item.id !==  willDeleteNoteId)
        setList(nextList)


    }

    // 파생 상태
    // 기존의 상태를 가지고 복잡한 형태로 만든 것
    const newNoteId = list.length + 1;

    // 함수에서 받아 쓰기 때문에 조건이 맞으면 바로 실행 후 밑에는 실행하지 않음
    switch (routeInfo.route) {
        case ROUTES.list:
            return <NoteListPage list={list} onChangeRoute={handleChangeRoute} />
        case ROUTES.detail:
            return <NoteDetailPage
                noteId={routeInfo.noteId}
                onChangeRoute={handleChangeRoute}
            />
        case ROUTES.create:
            return <NoteCreatePage
                newNoteId={newNoteId}
                onCreate={handleCreateNote}
                onChangeRoute={handleChangeRoute}
            />
        case ROUTES.edit:
            return <NoteEditPage
                noteId={routeInfo.noteId}
                onChangeRoute={handleChangeRoute}
                onEdit={handleEditNote}
                onDelete={handleDeleteNote}
            />
        default: 
            return <div>404 not found</div>
    }
}
export default NoteApp




