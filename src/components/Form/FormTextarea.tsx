type FormTextareaProps = {
  name: string
  placeholder: string
  onKeyDown: (e: any) => void
  'data-cy': string
}

export const FormTextarea = (props: FormTextareaProps) => {
  return (
    <textarea
      className="w-full h-40 bg-transparent text-white border-2 border-white/50 rounded-md p-1 outline-0 transition resize-none placeholder:text-white placeholder:opacity-50 focus:border-white"
      {...props}
    ></textarea>
  )
}
