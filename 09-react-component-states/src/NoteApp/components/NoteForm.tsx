import { useId, useState } from "react";
import type { Note } from "../api/getNote";
import { getUser, getUserList } from "../api/getUser";
import './NoteForm.css'
import { convertHTMLToText, convertTextToHTMLString } from "@/utls/convertHTMLToText";

// 생성하는 폼 입장에서는 필요없기에 옵셔널?
interface Props {
  mode: 'create' | 'edit';
  newNoteId?: number; // 노트를 생성할 때 만드는 옵셔널이 왜 들어갔는지?
  note?: Note;
  onCreate?: (newNoteItem: Note) => void;
  onBackLink: () => void;
  onDelete?: (willDeleteNoteID:number) => void;
  onEdit?: (willEditNote:Note) => void;
}

const userList = getUserList();

type Form = React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>

interface FormData {
  title: string;
  content: string;
  userId: number;
}

function NoteForm({ mode, newNoteId, onCreate, onBackLink, note, onEdit,onDelete }: Props) {

  
  const [formData, setFormData] = useState<FormData>(() => {

    if (mode === 'edit' && note) {
      return {
        title: note.title,
        content: convertHTMLToText(note.content),
        userId: note.userId,
      }
    }

    return {
      title: "",
      content: "",
      userId: 0,
    };
  });

  const titleId = useId();
  const contentId = useId();
  const userId = useId();

  const handleUpdateFormData = (e:Form) => {
    const { name, value } = e.target;

    const nextFormData = {
      ...formData,
      [name]:value
    }

    setFormData(nextFormData);
    
  }

  // console.log( formData );

  const handleCreateNote = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('보내기');

    const { title, content, userId } = formData;

    const newUserId = Number(userId);
    const user = getUser(newUserId);

    // note 객체 만들기 expand: user
    if (!user) return;
    if (!newNoteId) return;

    const newNote = {
      id: newNoteId,
      title: title.trim(),
      content:convertTextToHTMLString(content),
      userId: newUserId,
      createdAt: '',
      updatedAt:'',
      expand: {
        user: user,
      }
    }
    console.log('newNote: ', newNote);
    // onCreate() <- 전달해줘야함
    onCreate?.(newNote)
    onBackLink();

  };


  const handleEdit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    if (note && onEdit) {
      const willEditNote = {
        ...note,
        ...formData
      }
      onEdit?.(willEditNote);
      onBackLink();
    }
  }
  const handleDelete = () => {
    if (!note) return;
    onDelete?.(note.id);
    onBackLink();
  }

  const isCreateMode = mode.includes('create');

  return (
    <form className="NoteForm" onSubmit={isCreateMode ? handleCreateNote : handleEdit}>
      <div className="formControl">
        <label htmlFor={titleId}>제목</label>
        <input
          id={titleId}
          type="text"
          name="title"
          value={formData.title}
          onChange={handleUpdateFormData}
        />
      </div>
      <div className="formControl">
        <label htmlFor={contentId}>내용</label>
        <textarea
          id={contentId}
          name="content"
          value={formData.content}
          onChange={handleUpdateFormData}
        />
      </div>
      <div className="formControl">
        <label htmlFor={userId}>작성자</label>
        <select
          id={userId}
          name="userId"
          value={formData.userId}
          onChange={handleUpdateFormData}
        >
        <option>작성자 선택</option>
        {
          userList.map((user)=>(
            <option key={user.id} value={user.id}>{user.name}</option>
          ))
        }
        </select>
      </div>

      <div className="buttonGroup">
        <button type="submit">{isCreateMode ? '추가' : '수정'}</button>
        {
          isCreateMode ?
            (<button type="reset">초기화</button>) :
            (<button type="button" onClick={handleDelete}>삭제</button>)
        }
      </div>


    </form>
  );
}
export default NoteForm;