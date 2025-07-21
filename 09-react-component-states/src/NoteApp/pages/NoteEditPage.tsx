import { getNoteItem, type Note } from "../api/getNote"
import { ROUTES } from "../routes"
import BackLink from "../components/BackLink"
import NoteForm from "../components/NoteForm"

type Props = {
  onEdit?: (willEditNote:Note) => void,
  onDelete?: (willDeleteNoteID:number) => void
  onChangeRoute: (nextRoute: string, pickNoteId?: number) => void
  noteId:number | null
}

function NoteEditPage({ onEdit, onDelete, onChangeRoute, noteId }: Props) {
  
  if (!noteId) return;
  const note = getNoteItem(noteId);
  console.log('note: ', note);
  
  const handleBackLink = () => onChangeRoute(ROUTES.list)


  return (
    <div className="NoteEditPage">
      <BackLink onClick={handleBackLink}/>
      {
        note && (
          <>
            <h2>노트 편집</h2>
            <NoteForm
              mode="edit"
              onDelete={onDelete}
              onEdit={onEdit}
              note={note}
              onBackLink={handleBackLink}
            />
          </>
        )
      }
    </div>
  )
}

export default NoteEditPage


