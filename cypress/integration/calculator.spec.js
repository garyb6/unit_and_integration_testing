describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


  it('should update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number3').click()
    cy.get('.display').should('contain', '23')
  })

  it('should update the display after arithmetical operations', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '30')
  })

  it ('should be able to chain together multiple operations', () =>{
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '20')
  })

  it('should be able to produce an output for a range of numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '33330');
    cy.get('#clear').click();
    cy.get('.display').should('contain', '0');
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-2');
    cy.get('#operator-divide').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-0.4')
  })

  it('should be able to divide by zero and return zero', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '0')
  })
})