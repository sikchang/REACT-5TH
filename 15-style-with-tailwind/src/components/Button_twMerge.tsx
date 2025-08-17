import { twMerge } from 'tailwind-merge';


interface Props {
  children: React.ReactNode;
  className?: string;
  type?: 'primary' | 'secondary';
}


function Button_twMerge({ children, className, type }: Props) {

  // const classNames = `bg-sky-500 px-4 py-2 rounded-full ${className}`;

  return (
    <button
      type="button"
      className={
        twMerge(
          "bg-sky-500 px-4 py-2 rounded-full",
          className,
          type === 'primary' ? 'text-white' : 'text-orange-500',
        )}>
      {children}
    </button>
  );
}
export default Button_twMerge
