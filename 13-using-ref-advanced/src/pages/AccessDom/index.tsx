import { useState } from 'react'
import S from './style.module.css'
import CardList from './components/CardList';
import F1 from '@/pages/AccessDom/aassets/f1.png'
import 전독시 from '@/pages/AccessDom/aassets/전독시.png'

const MOVIE_LIST = [
  {
    id: 1,
    href: 'https://cgv.co.kr/cnm/cgvChart/movieChart/89706',
    label: 'F1 더 무비',
    images: {
      src: 'https://cdn.cgv.co.kr/cgvpomsfilm/Movie/Thumbnail/Poster/000089/89706/89706_320.jpg',
      character:F1
    }
  },
  {
    id: 2,
    href: 'https://cgv.co.kr/cnm/cgvChart/movieChart/89478',
    label: '전지적 독자 시점',
    images: {
      src: 'https://cdn.cgv.co.kr/cgvpomsfilm/Movie/Thumbnail/Poster/000089/89478/89478_320.jpg',
      character:전독시
    }
  }
]


function AccessDom() {

  const [movielist] = useState(MOVIE_LIST);
  const [usingPopup, setUsingPopup] = useState(false);

  const handleToggle = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUsingPopup(e.target.checked)
  }

  return (
    <main className={S.container}>
      <h1>Access - DOM</h1>
      <div style={{marginBottom:'5rem'}}>
        <p>리엑트 DOM이 아닌, 실제 DOM 노드에 접근하여 조작하는 방법을 학습합니다.</p>
        <p>
          <a href="https://micku7zu.github.io/vanilla-tilt.js/">vanillaa-tilt.js</a>
          를 사용해 컴포넌트 DOM 노드에 3D 틸트 이펙트를 설정해보세요.
        </p>
        <label htmlFor="">
          <input type="checkbox" checked={usingPopup} onChange={handleToggle} />
          팝업 효과 켜기/끄기
        </label>
      </div>
      <CardList list={movielist} usingPopup={usingPopup} />
    </main>
  )
}
export default AccessDom