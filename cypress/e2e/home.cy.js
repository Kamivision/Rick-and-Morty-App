describe('Rick and Morty App Home Page', () => {

  it('displays Rick and Morty on initial load', () => {
    cy.visit('/')
    cy.get('#RnMPic').children().should('have.length', 1);
  });

});