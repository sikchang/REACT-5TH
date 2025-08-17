import tw from '@/utils/tw';
import { cva, type VariantProps } from 'class-variance-authority';



const buttonVariants = cva(
  'inline-flex items-center rounded-md px-3 py-2',
  {
    variants:{
      intent: {
        primary: 'bg-sky-600 text-white hover:bg-sky-800',
        secondary: 'bg-orange-600 text-white hover:bg-orange-800',
        ghost: 'bg-gray-400 text-white hover:bg-slate-100',
      },
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-lg',
      },
      block: {
        true: 'w-full justify-center',
        false: ''
      },
    },
    defaultVariants:{
      intent: 'primary',
      size:'md',
      block:false
    },
    compoundVariants:[
      // 특정 조건에만 추가되는 클래스
      { intent:'secondary', size:'lg', class: 'border border-slate-300'},

      // intent가 secondary or ghost이면서 size가 lg일 때 해당 클래스 추가
      { intent:['secondary','ghost'], size:'lg', class: 'border border-slate-300'},
    ]
  }
)


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?:boolean;
  }



function Button_cva({children, intent, size, className, loading, block, ...rest}:ButtonProps) {


  return (
    <button
      type="button"
      className={
        tw(
          buttonVariants({intent,size,block}),
          className,
          loading ? 'bg-amber-500' : 'bg-pink-500'
        )
      }
      {...rest}
    >
      {children}
    </button>
  )
}
export default Button_cva
