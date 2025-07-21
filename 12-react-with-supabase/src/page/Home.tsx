import { useEffect, useRef } from 'react'
import S from './Home.module.css'
import gsap from 'gsap'

function Home() {

  // 리액트에서 1:1 맵핑하는 방법
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // gsap
    if (textRef.current) {
      gsap.fromTo(textRef.current.children, {
        // 처음위치
        x: 40,
        opacity:0
      }, {
        // 도착하는 위치
        x: 0,
        opacity: 1,
        stagger:0.3
      })
    }
    // console.log(textRef.current?.children);
    

  })

  return (
    <div className={S.container}>
      <div ref={textRef}>
        <h2><strong>2.9cm</strong>is</h2>
        <span>everything</span>
      </div>
      <video src="/visual.mp4" /* autoPlay */ muted loop playsInline></video>
    </div>

  )
}
export default Home