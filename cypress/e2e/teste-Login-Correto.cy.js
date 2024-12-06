describe('Página de Login', () => {
  beforeEach(() =>{
   cy.visit('/')
  })
  it('Deve preencher os campos da página de Login com as credenciais do Matheus para logar no sistema', () => {
    
    cy.login('matheus.komatsu@destrava.ai','rti$uGDF$2')

  })
  it('Deve deslogar do sistema', () =>{
    cy.login('matheus.komatsu@destrava.ai','rti$uGDF$2')
    cy.wait(5000)
    cy.get('.css-12d2mry > .MuiButtonBase-root').click()
  })
})