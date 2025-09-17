describe('ProgressBar', () => {
  Cypress.on('uncaught:exception', () => false);

  beforeEach(() => {
    cy.intercept('GET', '**', { log: false });
  });

  function Progressing(valorAlvo) {
    cy.get('.progress-bar').then(($bar) => {
      const atual = parseInt($bar.attr('aria-valuenow'));
      cy.log(`Progresso atual: ${atual}%`);

      if (atual < valorAlvo) {
        cy.wait(5);
        Progressing(valorAlvo);
      } else {
        cy.get('#startStopButton').click();
        cy.log(`Progress bar parada em ${atual}%`);
      }
    });
  }

  function Ate100() {
    cy.get('.progress-bar').then(($bar) => {
      const atual = parseInt($bar.attr('aria-valuenow'));
      cy.log(`Progresso atual: ${atual}%`);

      if (atual < 100) {
        cy.wait(5);
        Ate100(); // Progress bar até 100%
      } else {
        cy.get('#resetButton').click(); // limpa a barra ao chegar em 100%
        cy.log('Barra resetada em 100%!');
      }
    });
  }

  it('Parar em 25%, continuar e resetar', () => {
    cy.fixture('userData').then((user) => {
    cy.visit(user.Url);
    cy.contains('Widgets').click();
    cy.contains('Progress Bar').click();

    // Start
    cy.get('#startStopButton').click();

    // parar em 25%
    Progressing(25);

    // continuar até 100%
    cy.get('#startStopButton').click(); // retoma a barra
    Ate100();
  });
})
})
