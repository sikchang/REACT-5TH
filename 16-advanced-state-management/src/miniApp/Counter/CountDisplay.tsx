import { useCounterStore } from '@/miniApp/Counter/@store'
import S from './style.module.css'

function CountDisplay() {

  // const {count} = useCounterStore()
  const count = useCounterStore((s) => s.count)

  return (
    <output className={S.output}>{count}</output>
  )
}
export default CountDisplay
