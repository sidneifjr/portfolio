type FormInputProps = {
  name: string
  placeholder: string
  onKeyDown: (e: any) => void
  'data-cy': string
}

export const FormInput = (props: FormInputProps) => {
  return (
    <input
      className="w-full bg-transparent text-white border-b-2 border-white/50 pb-1 placeholder:text-white placeholder:opacity-50 focus:border-white outline-0 transition"
      type="text"
      {...props}
    />
  )
}
