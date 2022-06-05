import cn from 'classnames'
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  onClick: () => void
  disabled: boolean
}
const Button = ({ disabled, children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'focus:outline-none focus:ring-2',
        'focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50',
        'px-3 py-2 rounded-lg w-full flex items-center justify-center ',
        {
          'bg-slate-900 hover:bg-slate-700 font-semibold text-white': !disabled,
          'bg-gray-100 text-gray-500': disabled
        }
      )}
    >
      {children}
    </button>
  )
}

Button.defaultProps = { disabled: false }

export default Button
