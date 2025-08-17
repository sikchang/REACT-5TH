import tw from '@/utils/tw';

interface Props {
  children: React.ReactNode
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

function Button_tw({ children, className, size, disabled }: Props) {
  return <button
    type="button"
    className={
      tw(
        'bg-sky-500 font-medium rounded-full px-4 py-2 caret-purple-50',
        size === 'sm' && 'px-4 py-1 text-xs',
        size === 'md' && 'px-4 py-2 text-sm',
        size === 'lg' && 'px-6 py-3 text-lg',
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        className
      )
    }
  >{children}</button>;
}
export default Button_tw
