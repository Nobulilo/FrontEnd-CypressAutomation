describe('Add Elements', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
beforeEach(() => {
  cy.intercept('GET', '**', { log: false });
});

function preencher(user) {
    cy.get('#firstName').clear().type(user.firstName, {delay: 10});
    cy.get('#lastName').clear().type(user.lastName, {delay: 10});
    cy.get('#userEmail').clear().type(user.email, {delay: 10});
    cy.get('#age').clear().type(user.age, {delay: 10});
    cy.get('#salary').clear().type(user.salary, {delay: 10});
    cy.get('#department').clear().type(user.department, {delay: 10});
    cy.get('#submit').click()

}

  it('passes', () => {
    cy.fixture('userData').then((user) => {
    cy.visit(user.Url);
    cy.contains('Elements').click()
    cy.contains('Web Tables').click()
    cy.get('#addNewRecordButton').click()
    cy.fixture('userData').then((user) => {
    preencher(user);
    cy.get('#edit-record-4', { timeout: 6000 }).click();
    preencher(user);
    cy.get('#delete-record-4', { timeout: 2000 }).click();

   });
})
})
})