import { useState } from "react";
import type { Note } from "../api/getNote";
import { getUserList } from "../api/getUser";


interface Props {
  mode: string;                      // create | edit (현재는 create 기준)
  newNoteId: number;                 // 생성할 노트의 id
  onCreate: (newNoteItem: Note) => void;
  onBackLink: () => void;
}

const userlist = getUserList()

function NoteForm({ mode, newNoteId, onCreate, onBackLink }: Props) {

  // 폼 상태 초기값
  const [formData, setFormData] = useState(() => ({
    title: '',
    content: '',
    userId: 0
  }));

  // 입력값 변경 핸들러 (공통)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'userId' ? +value : value, // userId는 숫자로 변환
    }));
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newNote: Note = {
      id: newNoteId,
      ...formData,
    };

    onCreate(newNote);    // 부모에게 새 노트 전달
    onBackLink();         // 뒤로 이동
  };

  return (
    <form className="NoteForm" onSubmit={handleSubmit}>
      <h2>노트 필기 {mode === 'edit' ? '수정' : '생성'}</h2>

      {/* 제목 입력 */}
      <div>
        <label htmlFor="title">제목</label><br />
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      {/* 내용 입력 */}
      <div>
        <label htmlFor="content">내용</label><br />
        <textarea
          name="content"
          id="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>

      {/* 작성자 선택 */}
      <div>
        <label htmlFor="userId">작성자</label><br />
        <select
          name="userId"
          id="userId"
          value={formData.userId}
          onChange={handleChange}
          required
        >
          <option>작성자 선택</option>
          {
            userlist.map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))
          }
        </select>
      </div>

      {/* 버튼 */}
      <div style={{ marginTop: '1rem' }}>
        <button type="submit">추가</button>
        <button type="button" onClick={onBackLink} style={{ marginLeft: '1rem' }}>
          뒤로가기
        </button>
      </div>
    </form>
  );
}

export default NoteForm;
