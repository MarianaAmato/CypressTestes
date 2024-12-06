describe('Filtros de Busca - Empresas', () => {
    beforeEach(() =>{
     cy.visit('/')
     cy.login('matheus.komatsu@destrava.ai','rti$uGDF$2')
     cy.get(':nth-child(4) > .MuiButtonBase-root').click()
     
    })
    // it('Deve tentar atualizar a empresa e cancelar', () =>{
    //     cy.wait(1000)
    //     cy.contains('atualizar').click()
    //     cy.get('.css-cdjbrc').click()
    // })

})