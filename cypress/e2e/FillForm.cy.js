describe('Preenchimento de Formulário', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

  
  it('passes', () => {
    cy.fixture('userData').then((user) => {
    cy.visit(user.Url);
    cy.contains('Forms').click()
    cy.contains('Practice Form').click()
    cy.fixture('userData').then((user) => {
    cy.get('#firstName').should('be.visible').focus().type(user.firstName, { delay: 50 })
    cy.get('#lastName').should('be.visible').focus().type(user.lastName, { delay: 50 })
    cy.get('#userEmail').should('be.visible').focus().type(user.email, { delay: 50 })
    cy.contains('label', 'Male').click()
    cy.get('#userNumber').focus().type(user.mobile, { delay: 50 })
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select('September')
    cy.get('.react-datepicker__year-select').select('1993')
    cy.get('.react-datepicker__day--007').should('be.visible')
    cy.get('.react-datepicker__day').contains(/^7$/).filter(':visible').then($day => {
              cy.wrap($day).click();     
  })
    cy.get('.subjects-auto-complete__value-container').click();
    cy.get('.subjects-auto-complete__value-container').type(user.subject1);
    cy.get('.subjects-auto-complete__menu-list').contains(user.subject1).should('be.visible').click();
    cy.get('.subjects-auto-complete__value-container').type(user.subject2);
    cy.get('.subjects-auto-complete__menu-list').contains(user.subject2).should('be.visible').click();
    cy.contains('label', 'Sports').click()
    cy.contains('label', 'Music').click()
    cy.get('#currentAddress').focus().type(user.address, { delay: 50 })
    cy.get('#state').click()
    cy.get('#state').contains('Haryana').should('be.visible').click();
    cy.get('#city').click()
    cy.get('div[id*="-option-"]').contains('Karnal').click();
    cy.get('input[type="file"]').attachFile('exampleupload.txt');
    cy.get('#submit').click()
    cy.get('body').wait(250).click(10, 10);

})
})
})
})