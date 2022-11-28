Cypress.Commands.add("AcessaTelaCriarUsuario", () => {
  cy.get("a:contains(Formulário)").click();
  cy.get("a:contains(Criar Usuários)").click();
  cy.get('h5[class="center"]')
    .should("have.text", "Novo Usuário!!");
});


Cypress.Commands.add("newUserValid", () => {
  cy.get('input[id="user_name"]')
  .type('Jude')
cy.get('input[id="user_lastname"]')
  .type('Duarte')
cy.get('input[id="user_email"]')
  .type('jude_duarte@gmail.com')
cy.get('input[id="user_address"]')
  .type('São Paulo')
cy.get('input[id="user_university"]')
  .type('MIT')
cy.get('input[id="user_profile"]')
  .type('Professora')
cy.get('input[id="user_gender"]')
  .type('Feminino')
cy.get('input[id="user_age"]')
  .type('22')
cy.get('input[type="submit"]').click()
});


Cypress.Commands.add("newUserInvalid", () => {
  cy.get('input[id="user_name"]').type('Ada')
  cy.get('input[type="submit"]').click()
})