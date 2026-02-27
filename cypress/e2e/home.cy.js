describe('Rick and Morty App Home Page', () => {

    beforeEach(() => { cy.visit('/'); });

  it('displays Rick and Morty on initial load', () => {
    
    cy.get('#RnMPic').children().should('have.length', 1);
  });

  it('displays the correct navigation links', () => {
    cy.get('nav').find('a').should('have.length', 5);
    cy.get('nav').find('a').eq(1).should("be.visible").and("have.text", "Home");
  });
    
});