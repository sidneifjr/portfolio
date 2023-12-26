import { useState, type FormEvent } from 'react'

export const ContactForm = () => {
  const [fieldset1, setFieldset1] = useState(false)
  const [fieldset2, setFieldset2] = useState(false)

  const handleInput = (e: any, reference?: string) => {
    const { target } = e

    const inputValue = target.value.trim()

    if (reference === undefined) {
      target.classList.add('!border-green-400')
    }

    if (inputValue !== '') {
      if (e.key === 'Enter' || e.key === 'Tab') {
        target.classList.add('!border-green-400')

        if (reference === 'fieldset1') {
          setFieldset1(true)
        }

        if (reference === 'fieldset2') {
          setFieldset2(true)
        }
      }
    }
  }

  const handleSubmit = (el: FormEvent<HTMLFormElement>) => {
    el.preventDefault()
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-full max-w-[676px] m-auto flex flex-1 flex-col justify-center items-center gap-7"
    >
      <fieldset className="w-full flex flex-col">
        <label
          className="text-lg font-bold text-white pb-2 block"
          htmlFor="name"
        >
          Nome
        </label>

        <input
          className="w-full bg-transparent text-white border-b-2 border-white/50 pb-1 placeholder:text-white placeholder:opacity-50 focus:border-white outline-0 transition"
          type="text"
          name="name"
          placeholder="Seu nome"
          onKeyDown={(e) => handleInput(e, 'fieldset1')}
        />
      </fieldset>

      {fieldset1 ? (
        <fieldset className="w-full flex flex-col">
          <label
            className="text-lg font-bold text-white pb-2 block"
            htmlFor="subject"
          >
            Assunto
          </label>

          <input
            className="w-full bg-transparent text-white border-b-2 border-white/50 pb-1 placeholder:text-white placeholder:opacity-50 focus:border-white outline-0 transition"
            type="text"
            name="name"
            placeholder="Assunto"
            onKeyDown={(e) => handleInput(e, 'fieldset2')}
          />
        </fieldset>
      ) : (
        ''
      )}

      {fieldset2 ? (
        <>
          <fieldset className="w-full flex flex-col">
            <label
              className="text-lg font-bold text-white pb-2 block"
              htmlFor="message"
            >
              Mensagem
            </label>

            <textarea
              className="w-full h-40 bg-transparent text-white border-2 border-white/50 rounded-md p-1 placeholder:text-white placeholder:opacity-50 focus:border-white outline-0 transition resize-none"
              name="message"
              onKeyDown={(e) => handleInput(e)}
            ></textarea>
          </fieldset>

          <button className="w-20 text-white/50 text-center border-2 border-white/50 rounded-md py-1 px-4 placeholder:text-white placeholder:opacity-50 hover:border-white hover:text-white flex justify-center items-center focus:text-white transition">
            Enviar
          </button>
        </>
      ) : (
        ''
      )}
    </form>
  )
}
