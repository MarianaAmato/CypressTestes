describe('Cadastro Empresas - Cenários Infelizes', () => {
    beforeEach(() =>{
     cy.visit('/')
     cy.login('matheus.komatsu@destrava.ai','rti$uGDF$2')
     cy.get(':nth-child(4) > .MuiButtonBase-root').click()
     
    })
    it('Deve cadastrar uma nova empresa no sistema com CNPJ Inválido', () => {
        cy.get(':nth-child(4) > .MuiButtonBase-root').click()
        cy.get('.css-1wj0762 > .MuiButtonBase-root').click()
        cy.cadastrarEmpresa('123456789','Teste QA')
        cy.contains('CPF ou CNPJ inválido')

    })
    it('Deve deixar de preencher o campo CNPJ/CPF', () =>{
        
        cy.get(':nth-child(4) > .MuiButtonBase-root').click()
        cy.get('.css-1wj0762 > .MuiButtonBase-root').click()
        cy.contains('CNPJ/CPF*').type(' ')
        cy.contains('Razão social*').type('razaoSocial')
        cy.contains('Preenchimento obrigatório')
        
        
    })
    it('Deve deixar de preencher o campo Razão Social', () =>{
        
        cy.get(':nth-child(4) > .MuiButtonBase-root').click()
        cy.get('.css-1wj0762 > .MuiButtonBase-root').click()
        cy.contains('Razão social*').click()
        cy.contains('CNPJ/CPF').type('51383493847')
        cy.contains('Preenchimento obrigatório')
        
        
        
    })
    it('Deve preencher o campo Razão Social com um espaço', () =>{
        
        cy.get(':nth-child(4) > .MuiButtonBase-root').click()
        cy.get('.css-1wj0762 > .MuiButtonBase-root').click()
        cy.contains('Razão social*').type(' ')
        cy.contains('CNPJ/CPF*').type('51383493847')
        cy.contains('Não é permitido apenas espaços')
        
        
        
    })
})