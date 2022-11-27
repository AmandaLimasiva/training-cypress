describe("Cadastro de usuário", function () {
  beforeEach(() => {
    cy.visit("/treinamento/home");
  });

  it("Criar novo usuário", function () {
    cy.get("a:contains(Formulário)")
      .click();
    cy.get('a:contains(Criar Usuários)')
      .click()
    
    cy.get('h5[class="center"]')
      .should('have.text', 'Novo Usuário!!')

  });

});
