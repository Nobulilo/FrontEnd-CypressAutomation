describe('PopUp Page', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

beforeEach(() => {
  cy.intercept('GET', '**', { log: false });
});
  
  it('passes', () => {
    cy.fixture('userData').then((user) => {
    cy.visit(user.Url);
    cy.contains('Alerts, Frame & Windows').click()
    cy.contains('Browser Windows').click()
    cy.get('#windowButton').click()
    cy.fixture('userData').then((user) => {
    cy.window().then((win) => {
    cy.stub(win, 'open').callsFake((url) => {
    win.location.href = url; //Open in the same Window
  });
});
// get the message
cy.get('#windowButton').click();
cy.get('#sampleHeading').should('contain.text', user.PopupMessage);

})
})
})
})