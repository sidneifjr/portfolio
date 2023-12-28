it('Url is correct', () => {
  const page = cy.visit('/')
  page.get('[data-cy="header"]').get('h1').should('have.text', 'SF')
})
