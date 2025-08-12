
import { animate, spring } from 'motion';
import S from '../style.module.css'
import { useRef } from 'react';
import { motion } from 'motion/react';

function AnimationDemo() {

  const lollipopRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLOutputElement>(null);
  
  const handleMoveAnimation = async () => {
    const { current: element } = lollipopRef;
    if (!element) return;
    animate(element, {y: -100, x: 400, rotate:360 * 7},{duration:4})
    /* await animate(element, {y: -100, x: 400, rotate:360 * 7},{duration:4})
    animate(element, {y: 100, x: 0, rotate: -(360 * 7)},{duration:4}) */
  }

  const handleProgressAnimation = () => {
    const { current: element } = progressRef;
    if (!element) return;
    animate(0, 100, {
      duration: 4,
      onUpdate: latest => element.value = Math.round(latest) + '%'
    })
  }


  return (
    <div className={S.animation}>
      <button
        className={S.button}
        type="button"
        onClick={handleMoveAnimation}
      >무빙 애니메이션</button>

      <figure ref={lollipopRef} className={S.lollipop}></figure>
      
      <hr />
      
      <motion.figure
        ref={lollipopRef}
        className={S.lollipop}
        animate={{ scale: 2, x: 100, rotate: -360 }}
        transition={{ type: spring }}
        onUpdate={latest => console.log(latest)}
        // 종료 시점에 무언가를 해야할 때
        onAnimationComplete={() => console.log('완료')}
        whileHover={{ scale: 1.2 }}
        drag
        dragConstraints={{left:0,right:300}}
      />

      <div className={S.wrapper}>
        <button
          type="button"
          className={S.button}
          onClick={handleProgressAnimation}
        >진행률 애니메이션</button>
        <output
          ref={progressRef}
          className={S.output}>
          0%
        </output>
      </div>

    </div>
  )
}
export default AnimationDemo