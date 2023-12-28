describe('form submit is working', () => {
  const form = {
    root: "[data-cy='form']",
    nameInput: "[data-cy='nameInput']",
    subjectInput: "[data-cy='subjectInput']",
    messageTextarea: "[data-cy='messageTextarea']",
    submitBtn: "[data-cy='submitBtn']",
  }

  const { root, nameInput, subjectInput, messageTextarea, submitBtn } = form

  beforeEach(() => {
    cy.visit('/contact')
    cy.viewport(1920, 1080)
  })

  it('Happy path', () => {
    cy.wait(1000)
      .get(root)
      .get(nameInput)
      .should('be.visible')
      .focus()
      .type('Cypress Bot{Enter}')

    cy.get(root)
      .wait(1000)
      .get(subjectInput)
      .focus()
      .type('From Russia With Love{Enter}')

    cy.get(root)
      .wait(1000)
      .get(messageTextarea)
      .focus()
      .type("I'm a bot, beep boop. At least, I'm not a discord bot.")

    cy.get(root).wait(1000).get(submitBtn).wait(500).click()
  })
})
