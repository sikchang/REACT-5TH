import { useUserContext } from "@/hook/useUserContext"
import { useTheme } from "./ThemeContext";

function GrandChild() {


  const { username, setUsername } = useUserContext();
  // 구조분해로 간단히 사용
  const {theme:{color,spacing}, toggleTheme} = useTheme();

  return (
    <div style={{
      background: color.background,
      color:color.primary,
      border:'1px solid gray',
      padding:spacing.md
    }}>
      <h4>바뀐다 33333333</h4>
      <button
        type="button"
        onClick={toggleTheme}
        style={{padding:spacing.md,margin:spacing.md}}
      >CHANG THEME</button>
      <p
        style={{
          marginBottom:spacing.lg
        }}
      >ㅎㅇ ㅋㅋ {username} 님</p>
      <button
        type="button"
        onClick={() => {
        setUsername('이순신')
        }
        }>나도 사용자 변경</button>
    </div>
  )
}
export default GrandChild