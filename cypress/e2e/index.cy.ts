it('Url is correct', () => {
  const page = cy.visit('/')
  page.get('h1').should('have.text', 'SF')
})
