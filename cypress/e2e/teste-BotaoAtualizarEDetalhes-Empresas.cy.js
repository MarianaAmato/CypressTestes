describe('Filtros de Busca - Empresas', () => {
    beforeEach(() =>{
     cy.visit('/')
     cy.login('matheus.komatsu@destrava.ai','rti$uGDF$2')
     cy.get(':nth-child(4) > .MuiButtonBase-root').click()
     
    })
    it('Deve tentar atualizar a agenda de uma empresa', () =>{
        
        cy.get('.infinite-scroll-component').scrollTo('bottom');
        cy.wait(1000)
        cy.get('.infinite-scroll-component').scrollTo('bottom');
        cy.wait(1000)
        cy.get(':nth-child(38) > :nth-child(7) > .MuiButtonBase-root').click()
        cy.wait(1000)
        cy.contains('Você deseja atualizar essa agenda?').should('be.visible')
        cy.contains('Essa operação será tarifada, mesmo que a atualização não altere os valores das URs').should('be.visible')
        cy.contains('Deseja prosseguir e atualizar as agendas dessa empresa?').should('be.visible')
        cy.get('.css-u4p24i > img').should('be.visible')
        cy.get('button').contains('atualizar').click()
        cy.wait(1000)
        cy.contains('Consulta realizada com sucesso!').should('be.visible')
        cy.get('.MuiPaper-root > .MuiBox-root > img').should('be.visible')
        cy.get('.MuiPaper-root > .MuiBox-root > .MuiButtonBase-root').click()

    })
    it('Deve tentar atualizar uma empresa e cancelar', () =>{
        cy.get('.infinite-scroll-component').scrollTo('bottom');
        cy.wait(1000)
        cy.get('.infinite-scroll-component').scrollTo('bottom');
        cy.wait(1000)
        cy.get(':nth-child(38) > :nth-child(7) > .MuiButtonBase-root').click()
        cy.wait(1000)
        cy.contains('Você deseja atualizar essa agenda?').should('be.visible')
        cy.contains('Essa operação será tarifada, mesmo que a atualização não altere os valores das URs').should('be.visible')
        cy.contains('Deseja prosseguir e atualizar as agendas dessa empresa?').should('be.visible')
        cy.get('.css-u4p24i > img').should('be.visible') 
        cy.get('button').contains('cancelar').click()
    })
    it('Deve clicar em detalhes da empresa Destrava Ai', () =>{
        cy.get('.infinite-scroll-component').scrollTo('bottom');
        cy.wait(1000)
        cy.get('.infinite-scroll-component').scrollTo('bottom');
        cy.wait(1000)
        cy.get(':nth-child(39) > :nth-child(4) > .MuiButtonBase-root').click()
        cy.wait(1000)
        cy.location('pathname').should('equal', '/oneracoes')
        cy.get('.css-1ifgayn > .MuiBox-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.contains('Destrava Ai Financas Descomplicadas LTDA').should('be.visible')


    })


})