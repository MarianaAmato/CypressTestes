describe('Página de Login', () => {
    beforeEach(() =>{
        cy.visit('/')
        cy.intercept('POST', 'https://api.stg.destrava.ai/internal-api/auth/sign_in', {statusCode:400, }).as('stubPost')

    })
    it('Deve preencher o campo Login com um valor aleatório', () => {
      
      cy.login('mari.amato@destrava.ai','rti$uGDF$2')
      cy.contains('Usuário ou senha incorreto').should('be.visible')
    })
    it('Deve preencher o campo senha com um valor aleatório', () => {
        
        cy.login('matheus.komatsu@destrava.ai','123456')
        cy.contains('Usuário ou senha incorreto').should('be.visible')

    })
    it('Deve falhar mesmo com os dados corretos de login', () => {
        cy.login('matheus.komatsu@destrava.ai','rti$uGDF$2')
        cy.wait('@stubPost')
        cy.contains('Usuário ou senha incorreto').should('be.visible')
    })
    it('Deve deixar o campo senha vazio', () => {
        
        cy.get('#text-input-Senha').click()
        cy.get('#text-input-E-mail').type('matheus.komatsu@destrava.ai')
        cy.contains('Campo obrigatório')
        

    })
    it('Deve deixar o campo email vazio', () => {
        
        cy.get('#text-input-E-mail').click()
        cy.get('#text-input-Senha').type('fesgsrtrdgrd')
        cy.contains('Campo obrigatório')

    })
    it('Deve deixar ambos os campos em branco', () => {
        
        cy.get('#text-input-E-mail').click()
        cy.get('#text-input-Senha').click()
        cy.get('#text-input-E-mail').click()
        cy.contains('Campo obrigatório')

    })
    
  })