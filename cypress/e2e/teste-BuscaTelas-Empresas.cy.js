const { array } = require("assert-plus")
const { forEach } = require("lodash")
const { Array } = require("tcomb")

describe('Filtros de Busca - Empresas', () => {

    beforeEach(() =>{

     cy.visit('/')
     cy.login('matheus.komatsu@destrava.ai','rti$uGDF$2')
     cy.get(':nth-child(4) > .MuiButtonBase-root').click()
     cy.location('pathname').should('equal', '/empresas')
     
    })
context('Utiliza o filtro de busca "Empresas" na página de Empresas', ()=>{

    it('Deve encontrar a nova empresa cadastrada na página de empresas pela razão social', () =>{
        
        cy.get('.MuiAutocomplete-endAdornment').click()
        cy.get('.MuiAutocomplete-endAdornment').type('Teste 2 QA')
        cy.contains('Teste 2 QA').click()
        cy.get('.css-liikrh > .MuiButton-root').click()
        cy.get('.css-dydzna').should('be.visible').and('contain','Você tem 1 empresas cadastradas')
        cy.wait(1000)
 
    }) 
    it('Deve encontrar a nova empresa cadastrada na página de empresas pelo CNPJ', () =>{
        
        cy.get('.MuiAutocomplete-endAdornment').click()
        cy.get('.MuiAutocomplete-endAdornment').type('84254118000136')
        cy.contains('Teste 2 QA').click()
        cy.get('.css-liikrh > .MuiButton-root').click()
        cy.get('.css-dydzna').should('be.visible').and('contain','Você tem 1 empresas cadastradas')
        cy.wait(1000) 
        
    })
    it('Deve tentar encontrar a nova empresa cadastrada na página de empresas pela razão social que não existe', () =>{
        
        cy.get('.MuiAutocomplete-endAdornment').click()
        cy.get('.MuiAutocomplete-endAdornment').type('hgetgsteterer')
        cy.get('.MuiAutocomplete-noOptions').should('contain','Nenhum item encontrado')
        cy.wait(1000) 
        
    })
})
    
context('Utiliza o filtro de busca "Data de Cadastro" na página de Empresas', ()=>{   
    it('Deve selecionar todas as opções de data de cadastro', () =>{
        
        var elemento1 = 'Hoje';
        var elemento2 = 'Todas as datas';
        var elemento3 = 'Últimos 30 dias';
        var elemento4 = 'Últimos 90 dias';
        var elemento5 = 'Período Personalizado';
        
        const elementos = [elemento1, elemento2, elemento3, elemento4];  // Criação de um array com os elementos
        for (let valor = 0; valor < 4; valor++) {
            cy.get(':nth-child(2) > .MuiBox-root > .MuiInputBase-root').click()
            cy.contains(elementos[valor]).click();  // Acessa os elementos dinamicamente pelo índice
            cy.get('.css-liikrh > .MuiButton-root').click()
            cy.wait(1000)
        }
        // cy.get(':nth-child(2) > .MuiBox-root > .MuiInputBase-root').click()
        // cy.contains(elemento5).click();  // Acessa os elementos dinamicamente pelo índice
        // cy.get('.react-calendar__tile--now').click()
        // cy.get('.react-calendar__month-view__days > :nth-child(7) > abbr').click()
        // cy.get('.css-liikrh > .MuiButton-root').click()
        // cy.wait(1000)

        
    })
})
context('Utiliza o filtro de busca "Status de Opt-In" na página de Empresas', ()=>{
    it('Deve filtrar as empresas pelo Status de Opt-in Ativo', () =>{
        cy.get(':nth-child(3) > .MuiBox-root > .MuiInputBase-root').click()
        cy.contains('Ativo').click()
        cy.get('body').click()
        cy.get('.css-liikrh > .MuiButton-root').click()
        cy.get('body').should('contain', 'Ativo')
    }) 
    it('Deve filtrar as empresas pelo Status de Opt-in Ativo e Desativado', () =>{
        cy.get(':nth-child(3) > .MuiBox-root > .MuiInputBase-root').click()
        cy.contains('Ativo').click()
        cy.contains('Desativado').click()
        cy.get('body').click()
        cy.get('.css-liikrh > .MuiButton-root').click()
        cy.get('body').should('contain', 'Ativo').and('contain', 'Desativado')
    }) 
    it('Deve filtrar as empresas pelo Status de Opt-in Desativado', () =>{
        cy.get(':nth-child(3) > .MuiBox-root > .MuiInputBase-root').click()
        cy.contains('Desativado').click()
        cy.get('body').click()
        cy.get('.css-liikrh > .MuiButton-root').click()
        cy.get('body').should('contain', 'Desativado')
    }) 
})
context('Utiliza o filtro de busca "Status de Agenda" na página de Empresas', ()=>{
    it('Deve filtrar as empresas pelo Status de Agenda Inativa', () =>{
        cy.get(':nth-child(4) > .MuiBox-root > .MuiInputBase-root').click()
        cy.contains('Inativa').click()
        cy.get('body').click()
        cy.get('.css-liikrh > .MuiButton-root').click()
        cy.get('body').should('contain', 'Inativa')
    }) 
    it('Deve filtrar as empresas pelo Status de Agenda Performada', () =>{
        cy.get(':nth-child(4) > .MuiBox-root > .MuiInputBase-root').click()
        cy.contains('Performada').click()
        cy.get('body').click()
        cy.get('.css-liikrh > .MuiButton-root').click()
        cy.get('body').should('contain', 'Performada')
    }) 
    it('Deve filtrar as empresas pelo Status de Agenda Não performada', () =>{
        cy.get(':nth-child(4) > .MuiBox-root > .MuiInputBase-root').click()
        cy.contains('Não performada').click()
        cy.get('body').click()
        cy.get('.css-liikrh > .MuiButton-root').click()
        cy.get('body').should('contain', 'Não performada')
    }) 
    it('Deve filtrar as empresas pelo Status de Agenda Não performada e Inativa', () =>{
        cy.get(':nth-child(4) > .MuiBox-root > .MuiInputBase-root').click()
        cy.get('.MuiPaper-root > .MuiList-root').check('Inativa','Não performada')
        cy.contains('Inativa').click()
        cy.contains('Não performada').click()
        cy.get('body').click()
        cy.get('.css-liikrh > .MuiButton-root').click()

    }) 
    it('Deve filtrar as empresas pelo Status de Agenda Não performada e Performada', () =>{
        cy.get(':nth-child(4) > .MuiBox-root > .MuiInputBase-root').click()
        cy.contains('Performada').click()
        cy.contains('Não performada').click()
        cy.get('body').click()
        cy.get('.css-liikrh > .MuiButton-root').click()
        cy.get('body').should('contain', 'Performada').and('contain','Não performada')
    }) 
    it('Deve filtrar as empresas pelo Status de Agenda Performada e Inativa', () =>{
        cy.get(':nth-child(4) > .MuiBox-root > .MuiInputBase-root').click()
        cy.contains('Inativa').click()
        cy.contains('Performada').click()
        cy.get('body').click()
        cy.get('.css-liikrh > .MuiButton-root').click()

    }) 
    it('Deve filtrar as empresas pelo Status de Agenda Não performada, Performada e Inativa', () =>{
        cy.get(':nth-child(4) > .MuiBox-root > .MuiInputBase-root').click()
        cy.contains('Inativa').click()
        cy.contains('Performada').click()
        cy.contains('Não performada').click()
        cy.get('body').click()
        cy.get('.css-liikrh > .MuiButton-root').click()
        
    })
})
    
})