import type { APIRoute } from 'astro'

import { Resend } from 'resend'

const resend = new Resend(import.meta.env.SECRET_RESEND_API_KEY)

/**
 * Ao usar o método GET, seria acessível em "/api/sendEmail.json". Porém, qualquer usuário que acessasse tal tela dispararia o email.
 * Assim, o método POST é ideal para controle do envio e, consequentemente, um Node adapter é necessário.
 */
export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json()

  const { to, from, html, subject, text } = body

  const send = await resend.emails.send({
    from,
    to,
    subject,
    html,
    text,
  })

  const { data, error } = send

  if (!to || !from || !html || !subject || !text) {
    return new Response(null, {
      status: 404,
      statusText: 'Did not provide the right data',
    })
  }

  /**
   * A requisição em "send" pode retornar uma de duas respostas:
   *
   * data -> requisição bem-sucedida.
   * error -> requisição mal-sucedida.
   */
  if (data) {
    return new Response(
      JSON.stringify({
        message: send.data,
      }),
      {
        status: 200,
        statusText: 'OK',
      }
    )
  } else {
    return new Response(
      JSON.stringify({
        message: error,
      }),
      {
        status: 500,
        statusText: 'Internal Server Error',
      }
    )
  }
}
