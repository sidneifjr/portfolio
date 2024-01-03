export const languages = {
  pt: {
    name: 'Português',
    alias: 'pt',
  },
  en: {
    name: 'English',
    alias: 'en',
  },
}

export const defaultLang = 'pt'
export const showDefaultLang = false

export const ui = {
  pt: {
    'nav.portfolio': 'Portfólio',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'intro.main':
      'Olá! Eu sou <strong>{userData?.name}</strong>, engenheiro de front-end. Trabalho há mais de cinco anos na criação de interfaces agradáveis e modernas. Sou apaixonado pela área, à procura de novos desafios e soluções eficientes.',
    'intro.sub': 'Atualmente resido em <strong>{userData?.location}</strong>.',
    'contact.label.name': 'Nome',
    'contact.label.subject': 'Assunto',
    'contact.label.message': 'Mensagem',
    'contact.placeholder.name': 'Seu nome',
    'contact.placeholder.subject': 'Seu assunto',
    'contact.placeholder.message': 'Sua mensagem',
    'contact.button': 'Enviar',
    'contact.toaster.success': 'Sucesso: mensagem enviada.',
    'contact.toaster.error': 'Erro: mensagem não enviada.',
  },

  en: {
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'intro.main':
      "Hi! My name is <strong>{userData?.name}</strong> and I am a front-end engineer. I've been working for over five years creating pleasant and modern interfaces. I'm passionate, always looking for challenges and efficient solutions.",
    'intro.sub': 'Currently I reside at <strong>{userData?.location}</strong>.',
    'contact.label.name': 'Name',
    'contact.label.subject': 'Subject',
    'contact.label.message': 'Message',
    'contact.placeholder.name': 'Your name',
    'contact.placeholder.subject': 'Your subject',
    'contact.placeholder.message': 'Your message',
    'contact.button': 'Submit',
    'contact.toaster.success': 'Success: message sent.',
    'contact.toaster.error': 'Error: message not sent.',
  },
} as const

export const routes = {
  en: {
    about: 'about',
    portfolio: 'portfolio',
    contact: 'contact',
  },
  pt: {
    about: 'sobre',
    portfolio: 'portfolio',
    contact: 'contato',
  },
}
