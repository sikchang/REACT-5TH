import { type RefObject } from "react";

interface Props{
  placeholder: string;
  ref:RefObject<HTMLInputElement | null>
}

const Child = ({placeholder,ref}:Props) => {
  console.log('Child : ' ,ref);
  return (
    <input ref={ref} type="text" placeholder={placeholder} />
  )
}
export default Child

/* 
const Child = forwardRef<HTMLInputElement,Props>(({placeholder},ref) => {
  console.log('Child : ' ,ref);
  return (
    <input ref={ref} type="text" placeholder={placeholder} />
  )
})
export default Child
 */