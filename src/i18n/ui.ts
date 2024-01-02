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
      'Olá! Eu sou <strong>{userData?.name}</strong>, eng. front-end. Trabalho há mais de cinco anos na criação de interfaces agradáveis e modernas. Sempre à procura de novos desafios e soluções eficientes.',
    'intro.sub': 'Atualmente, resido em <strong>{userData?.location}</strong>.',
    'contact.label.name': 'Nome',
    'contact.label.subject': 'Assunto',
    'contact.label.message': 'Mensagem',
    'contact.placeholder.name': 'Seu nome',
    'contact.placeholder.subject': 'Seu assunto',
    'contact.placeholder.message': 'Sua mensagem',
    'contact.button': 'Enviar',
  },

  en: {
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'intro.main':
      "Hi! I am <strong>{userData?.name}</strong>, front-end engineer. I've worked for over five years in the creation of pleasant and modern interfaces. Always looking for challenges and efficient solutions.",
    'intro.sub':
      'Currently, I reside at <strong>{userData?.location}</strong>.',
    'contact.label.name': 'Name',
    'contact.label.subject': 'Subject',
    'contact.label.message': 'Message',
    'contact.placeholder.name': 'Your name',
    'contact.placeholder.subject': 'Your subject',
    'contact.placeholder.message': 'Your message',
    'contact.button': 'Submit',
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
