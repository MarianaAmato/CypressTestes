describe('Navegando no Painel', () => {
    beforeEach(() =>{
     cy.visit('/')
     cy.login('matheus.komatsu@destrava.ai','rti$uGDF$2')
    })
    
    it('Deve Acessar a página de Cobranças das demais telas', () => {
        //AGENDAS - COBRANÇAS
        cy.get(':nth-child(1) > :nth-child(2) > .MuiButtonBase-root').click()
        cy.location('pathname').should('equal', '/cobrancas')
        //OPERAÇÕES - COBRANÇAS
        cy.get('.MuiList-root > :nth-child(1) > :nth-child(3) > .MuiButtonBase-root').click()
        cy.get(':nth-child(1) > :nth-child(2) > .MuiButtonBase-root').click() 
        cy.location('pathname').should('equal', '/cobrancas')
        //EMPRESAS - COBRANÇAS 
        cy.get(':nth-child(4) > .MuiButtonBase-root').click()
        cy.get(':nth-child(1) > :nth-child(2) > .MuiButtonBase-root').click() 
        cy.location('pathname').should('equal', '/cobrancas')
        //ONERAÇÕES - COBRANÇAS
        cy.get(':nth-child(5) > .MuiButtonBase-root').click()
        cy.get(':nth-child(1) > :nth-child(2) > .MuiButtonBase-root').click() 
        cy.location('pathname').should('equal', '/cobrancas')
    }) 
    it('Deve Acessar a página de Operações das demais telas', () => {
        //AGENDAS - OPERAÇÕES
        cy.get('.MuiList-root > :nth-child(1) > :nth-child(3) > .MuiButtonBase-root').click()
        cy.location('pathname').should('equal', '/operacoes')
        //COBRANÇAS - OPERAÇÕES 
        cy.get(':nth-child(1) > :nth-child(2) > .MuiButtonBase-root').click()
        cy.get('.MuiList-root > :nth-child(1) > :nth-child(3) > .MuiButtonBase-root').click()
        cy.location('pathname').should('equal', '/operacoes')
        //EMPRESAS - OPERAÇÕES
        cy.get(':nth-child(4) > .MuiButtonBase-root').click()
        cy.get('.MuiList-root > :nth-child(1) > :nth-child(3) > .MuiButtonBase-root').click()
        cy.location('pathname').should('equal', '/operacoes')
        //ONERAÇÕES-OPERAÇÕES
        cy.get(':nth-child(5) > .MuiButtonBase-root').click()
        cy.get('.MuiList-root > :nth-child(1) > :nth-child(3) > .MuiButtonBase-root').click()
        cy.location('pathname').should('equal', '/operacoes')

      
    }) 
    it('Deve Acessar a página de Empresas das demais telas', () => {
        //AGENDAS - EMPRESAS
        cy.get(':nth-child(4) > .MuiButtonBase-root').click()
        cy.location('pathname').should('equal', '/empresas')
        //COBRANÇAS - EMPRESAS
        cy.get(':nth-child(1) > :nth-child(2) > .MuiButtonBase-root').click()
        cy.get(':nth-child(4) > .MuiButtonBase-root').click()
        cy.location('pathname').should('equal', '/empresas')
        //OPERAÇÕES - EMPRESAS
        cy.get('.MuiList-root > :nth-child(1) > :nth-child(3) > .MuiButtonBase-root').click()
        cy.get(':nth-child(4) > .MuiButtonBase-root').click()
        cy.location('pathname').should('equal', '/empresas')
        //ONERAÇÕES - EMPRESAS
        cy.get(':nth-child(5) > .MuiButtonBase-root').click()
        cy.get(':nth-child(4) > .MuiButtonBase-root').click()
        cy.location('pathname').should('equal', '/empresas')
          
      
    }) 
    it('Deve Acessar a página de Onerações das demais telas', () => {
        //AGENDAS - ONERAÇÕES
        cy.get(':nth-child(5) > .MuiButtonBase-root').click()
        cy.location('pathname').should('equal', '/oneracoes')
        //COBRANÇAS - ONERAÇÕES
        cy.get(':nth-child(1) > :nth-child(2) > .MuiButtonBase-root').click()
        cy.get(':nth-child(5) > .MuiButtonBase-root').click()
        cy.location('pathname').should('equal', '/oneracoes')
        //OPERAÇÕES - ONERAÇÕES
        cy.get('.MuiList-root > :nth-child(1) > :nth-child(3) > .MuiButtonBase-root').click()
        cy.get(':nth-child(5) > .MuiButtonBase-root').click()
        cy.location('pathname').should('equal', '/oneracoes')
        //EMPRESAS - ONERAÇÕES
        cy.get(':nth-child(4) > .MuiButtonBase-root').click()
        cy.get(':nth-child(5) > .MuiButtonBase-root').click()
        cy.location('pathname').should('equal', '/oneracoes')

      
    }) 
    it('Deve Acessar a página de Agendas das demais telas', () => {
        //COBRANÇAS - AGENDAS
        cy.get(':nth-child(1) > :nth-child(2) > .MuiButtonBase-root').click()
        cy.contains('Agendas') .click()
        cy.location('pathname').should('equal', '/agendas')
        //OPERAÇÕES - AGENDAS
        cy.get('.MuiList-root > :nth-child(1) > :nth-child(3) > .MuiButtonBase-root').click()
        cy.contains('Agendas') .click()
        cy.location('pathname').should('equal', '/agendas')
        //EMPRESAS - AGENDAS
        cy.get(':nth-child(4) > .MuiButtonBase-root').click()
        cy.contains('Agendas') .click()
        cy.location('pathname').should('equal', '/agendas')
        //ONERAÇÕES - AGENDAS
        cy.get(':nth-child(5) > .MuiButtonBase-root').click()
        cy.contains('Agendas') .click()
        cy.location('pathname').should('equal', '/agendas')
      
    }) 
       
      
  

  })