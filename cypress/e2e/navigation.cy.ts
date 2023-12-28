describe('Nav links are working', () => {
  const header = '[data-cy="header"]'
  const nav = '[data-cy="nav"]'

  beforeEach(() => {
    cy.visit('/')
    cy.viewport(1920, 1080)
  })

  it('Portfolio', () => {
    cy.get(header)
      .get(nav)
      .get('li:first-child a')
      .should('have.text', 'Portfolio')
  })

  it('About', () => {
    cy.get(header)
      .get(nav)
      .get('li:nth-child(2) a')
      .should('have.text', 'About')
  })

  it('Contact', () => {
    cy.get(header)
      .get(nav)
      .get('li:nth-child(3) a')
      .should('have.text', 'Contact')
  })
})
