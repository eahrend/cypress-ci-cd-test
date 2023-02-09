describe('My First Test', () => {
    it('clicks the link "type"', () => {
        cy.visit(Cypress.env('EAHREND_URL'))  
        cy.contains('Username')
    })
  })