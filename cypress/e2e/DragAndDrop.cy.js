describe('Sortable Drag and Drop', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.intercept('GET', '**', { log: false });
  });

  describe('Sortable', () => {
    it('Arrastar (Manual) em loop', () => {
      cy.fixture('userData').then((user) => {
      cy.visit(user.Url);
      cy.contains('Interactions').click()
      cy.contains('Sortable').click()

      const items = ['One', 'Two', 'Three', 'Four', 'Five'];
      items.forEach((item, index) => {
        // Mousedown (Select)
        cy.contains('#demo-tabpane-list .list-group-item', item)
          .trigger('mousedown', { which: 1 });

        // Wait (Para garantir o movimento do mouse)
        cy.wait(200);

        // Mouse Move para o 'SIX', assim ele garante que manterá o Six em primeira posição após o término
        cy.contains('#demo-tabpane-list .list-group-item', 'Six')
          .trigger('mousemove')
          .trigger('mouseup', { force: true });
        cy.wait(200);
      });
    })
  })
})
})
