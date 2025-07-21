import { convertSlug } from "@/utls/convertSlug";
import type { Note } from "../api/getNote";
import './NoteList.css'
import { ROUTES } from "../routes";

interface Pros{
    list: Note[],
    onChangeRoute: (nextRoute:string,pickNoteId?:number) => void
}

function NoteList({list,onChangeRoute}:Pros) {

    // 핸들러 함수를 추가
    // 이렇게 하는 이유는 onClick={handleClick(item.id)} 매개변수를
    // 받아주기 위해서 클로져를 사용한다
    const handleClick = (pickNoteId:number) => (e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        
        // 이럴 떄 클로져를 사용한다.
        onChangeRoute(ROUTES.detail,pickNoteId)
        console.log('pickNoteId: ', pickNoteId);
    }
    // 핸들러 바인딩
    // onChangeRoute 실행

    return (
        <div className="NoteList">
            <h2>노트 필기 목록</h2>
            <ul>
                {
                    list.map(item => {
                        const slug = `#${convertSlug(item.title)}`
                        // console.log(slug);
                        
                        return (
                            <li key={item.id}>
                                <a
                                    href={slug}
                                    onClick={handleClick(item.id)}
                                >{item.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default NoteList;