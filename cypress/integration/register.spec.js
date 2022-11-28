describe("Cadastro de usuário", function () {
  beforeEach(() => {
    cy.visit("/treinamento/home");
  });

  it("Criar novo usuário com sucesso", function () {
    cy.AcessaTelaCriarUsuario()
    cy.newUserValid()
    cy.get('p[id="notice"]').should('be.visible')
  });

  it('Criar novo com erro', function(){
    cy.AcessaTelaCriarUsuario()
    cy.newUserInvalid()

    cy.get('div[id="error_explanation"]').should('be.visible')
  })

});
