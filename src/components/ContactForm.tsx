import { useState, type FormEvent } from 'react'

import { MotionWrapper } from './MotionWrapper'

import { Toaster, toast } from 'sonner'

import loader from '../images/loader.svg'

import { Form } from './Form'

type ContactFormProps = {
  labels: string[]
  placeholders: string[]
  buttonText: string
}

export const ContactForm = ({
  labels,
  placeholders,
  buttonText,
}: ContactFormProps) => {
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
      <Form.Root onSubmit={(e) => handleSubmit(e)} data-cy="form">
        <MotionWrapper
          initial={{ y: '25%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
          exit={{ y: '-15%', opacity: 0 }}
          className="w-full"
        >
          <Form.Fieldset>
            <Form.Label htmlFor="name">{labels[0]}</Form.Label>

            <Form.Input
              name="name"
              placeholder={placeholders[0]}
              onKeyDown={(e: any) => handleInput(e, 'fieldset1')}
              data-cy="nameInput"
            />
          </Form.Fieldset>
        </MotionWrapper>

        {fieldset1 && (
          <MotionWrapper
            initial={{ y: '25%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
            exit={{ y: '-15%', opacity: 0 }}
            className="w-full"
          >
            <Form.Fieldset>
              <Form.Label htmlFor="subject">{labels[1]}</Form.Label>

              <Form.Input
                name="subject"
                placeholder={placeholders[1]}
                onKeyDown={(e: any) => handleInput(e, 'fieldset2')}
                data-cy="subjectInput"
              />
            </Form.Fieldset>
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
            <Form.Fieldset>
              <Form.Label htmlFor="message">{labels[2]}</Form.Label>

              <Form.Textarea
                name="message"
                placeholder={placeholders[2]}
                onKeyDown={(e: any) => handleInput(e)}
                data-cy="messageTextarea"
              />
            </Form.Fieldset>

            <button
              data-cy="submitBtn"
              className="w-24 text-lg min-h-10 font-medium text-white/50 text-center border-2 border-white/50 rounded-md py-1 px-4 mx-auto flex justify-center items-center transition placeholder:text-white placeholder:opacity-50 hover:border-white hover:text-white focus:text-white"
            >
              {isRequestRunning ? (
                <img src={loader.src} alt="loader" />
              ) : (
                buttonText[0]
              )}
            </button>
          </MotionWrapper>
        )}
      </Form.Root>

      <Toaster data-cy="toast" richColors />
    </>
  )
}
