import { HiCodeBracket } from 'react-icons/hi2';

type BadgeProps = {
  label: string;
}
export const Badge:React.FC<BadgeProps> = ({label}) => {
  return (
    <span className="inline-flex items-center justify-center gap-2 rounded-full bg-black/40 px-2.5 py-0.5 text-white transition duration-700 cursor-pointer hover:bg-black/100">
      <HiCodeBracket className="size-4"/>
      <p className="whitespace-nowrap">{label}</p>
    </span>
  )
}
