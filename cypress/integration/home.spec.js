describe("acessar home page vr", () => {
    //Acessar o site e aceitar os termos
    it("deve acessar a url do site VR", () => {
      cy.viewport(1440, 900);
      cy.visit("/");
      cy.get("#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm").click();
      cy.get(":nth-child(3) > .vr-quick-navigation__link").click();
    });

    //Navegar até a seção "PRA VOCÊ"
    it("deve navegar até a seção - pra voce e validar se está na página", () => {
      cy.get(":nth-child(3) > .vr-quick-navigation__link").click();
      cy.url().should(
        "be.equal",
        `${Cypress.config("baseUrl")}/onde-aceita.htm`
      );
    });

    //Clicar no botão "Onde usar meu cartão VR? e Validar o mapa"
    it("deve clicar no botão - Onde usar meu cartão VR e validar abertura do mapa", () => {
      cy.get(".vr-hero__actions > .vr-button--negative").click();

      cy.get("#map").should("be.visible").wait(4000);
    });

    // //acessar url do site
    // cy.visit('https://www.vr.com.br');
    // //navegar até a seção "Pra Você"
    // cy.get(':nth-child(3) > .vr-main-navigation__link').trigger('mouseover');
    // //ir até o link "Onde usar meu VR"
    // cy.get(':nth-child(3) > .vr-main-navigation__submenu-trigger > .vr-main-navigation__trigger-arrow').should('be.visible').click();
    // //verificar se o atributo endereço existe na página
    // cy.get('#endereco').should("exist");
    //  //digitar um endereço para busca
    // cy.get('#endereco').type('Santos,SP, Brasil',{force: true});
    // //clicar no botão de busca de endereços
    // cy.get('.icon-search').click({force: true});
    // //clicar no botão de escolha de cartões
    // cy.get('#buttonFiltrar').click({force: true});
    // //definir cartão escolhido
    // cy.get(':nth-child(1) > .vr-map__card--title').click({force: true});
    // //clicar no botão de confirmação
    // cy.get('#buttonFiltrarCards').click({force: true});
    // //clicar no botão de buscar resultados para obter a resposta no mapa
    // cy.get('#buscarResultados').click({force: true});
  });