
describe('Filtros de Busca - Empresas', () => {
    beforeEach(() =>{
        cy.visit('/')
        cy.login('matheus.komatsu@destrava.ai','rti$uGDF$2')
        cy.get(':nth-child(4) > .MuiButtonBase-root').click()
         
    }) 
    it('Deve cadastrar uma nova empresa no sistema', () => {
    //     cy.get(':nth-child(4) > .MuiButtonBase-root').click()
    //     cy.get('.css-1wj0762 > .MuiButtonBase-root').click()
    //     cy.cadastrarEmpresa('84254118000136','Teste 2 QA')

    })

})