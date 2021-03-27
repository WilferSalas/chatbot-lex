<reference types="cypress" />

describe('visit Chatea con Lex', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  describe('when user type and send a message', () => {
  it('then the message should be visible on the screen', () => {
    // Arrange
    cy.get('[data-automation="chat-input"]').type('Hola');

    // Act
    cy.get('[data-automation="send-message-button"]').click();

    // Assert
    cy.get('[data-automation="messages"]').should('have.length', 1)
      .then(($lis) => {
        expect($lis).to.have.length(1)
    });
  });
});
