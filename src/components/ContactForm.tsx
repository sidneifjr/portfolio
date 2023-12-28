import { useState, type FormEvent } from 'react'

import { MotionWrapper } from './MotionWrapper'

import { Toaster, toast } from 'sonner'

import loader from '../images/loader.svg'

export const ContactForm = () => {
  const [fieldset1, setFieldset1] = useState(false)
  const [fieldset2, setFieldset2] = useState(false)

  const [isRequestRunning, setIsRequestRunning] = useState(false)

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

  const handleSubmit = async (el: FormEvent<HTMLFormElement>) => {
    el.preventDefault()

    setIsRequestRunning(true)

    const form = el.target as HTMLFormElement
    const formInputValues = new FormData(form)
    const formDataArray = []

    for (let [key, value] of formInputValues.entries()) {
      formDataArray.push({ [key]: value })
    }

    const newFormData = {
      ...formDataArray[0],
      ...formDataArray[1],
      ...formDataArray[2],
    }

    const { name, subject, message } = newFormData

    try {
      const res = await fetch('/api/sendEmail.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'sfarias.dev@resend.dev',
          to: 'sfarias.dev@gmail.com',
          subject: `${JSON.stringify(subject)} - From ${JSON.stringify(name)}`,
          html: `<p>${JSON.stringify(message)}</p>`,
          text: `${JSON.stringify(message)}`,
        }),
      })

      const data = await res.json()
      setIsRequestRunning(false)
      toast.success('Success: message sent.')

      return data
    } catch (e) {
      toast.error('Error: message not sent.')
      console.log(e)
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full max-w-[676px] m-auto flex flex-1 flex-col justify-center items-center gap-7"
        data-cy="form"
      >
        <MotionWrapper
          initial={{ y: '25%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
          exit={{ y: '-15%', opacity: 0 }}
          className="w-full"
        >
          <fieldset className="w-full flex flex-col">
            <label
              className="font-secondary text-lg text-white pb-2 block"
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
              data-cy="nameInput"
            />
          </fieldset>
        </MotionWrapper>

        {fieldset1 && (
          <MotionWrapper
            initial={{ y: '25%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
            exit={{ y: '-15%', opacity: 0 }}
            className="w-full"
          >
            <fieldset className="w-full flex flex-col">
              <label
                className="font-secondary text-lg text-white pb-2 block"
                htmlFor="subject"
              >
                Assunto
              </label>

              <input
                className="w-full bg-transparent text-white border-b-2 border-white/50 pb-1 placeholder:text-white placeholder:opacity-50 focus:border-white outline-0 transition"
                type="text"
                name="subject"
                placeholder="Assunto"
                onKeyDown={(e) => handleInput(e, 'fieldset2')}
                data-cy="subjectInput"
              />
            </fieldset>
          </MotionWrapper>
        )}

        {fieldset2 && (
          <MotionWrapper
            initial={{ y: '25%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
            exit={{ y: '-15%', opacity: 0 }}
            className="w-full flex flex-col gap-7"
          >
            <fieldset className="w-full flex flex-col">
              <label
                className="font-secondary text-lg text-white pb-2 block"
                htmlFor="message"
              >
                Mensagem
              </label>

              <textarea
                className="w-full h-40 bg-transparent text-white border-2 border-white/50 rounded-md p-1 outline-0 transition resize-none placeholder:text-white placeholder:opacity-50 focus:border-white"
                name="message"
                onKeyDown={(e) => handleInput(e)}
                data-cy="messageTextarea"
              ></textarea>
            </fieldset>

            <button
              data-cy="submitBtn"
              className="w-24 text-lg min-h-10 font-medium text-white/50 text-center border-2 border-white/50 rounded-md py-1 px-4 mx-auto flex justify-center items-center transition placeholder:text-white placeholder:opacity-50 hover:border-white hover:text-white focus:text-white"
            >
              {isRequestRunning ? (
                <img src={loader.src} alt="loader" />
              ) : (
                'Enviar'
              )}
            </button>
          </MotionWrapper>
        )}
      </form>

      <Toaster data-cy="toast" richColors />
    </>
  )
}
