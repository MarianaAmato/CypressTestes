describe('API Destrava ai STG', () =>{
    
    // FLAKY TESTE
    // const tempoEsperado = Math.random()*1000

    it('Mensagens da API', () =>{
        cy.request({
            method: 'GET',
            url: 'https://api.stg.destrava.ai/internal-api/utils/register/available',
            headers: Cypress.env()
        }).then((res) =>{
            expect(res.status).to.be.equal(200)
            // FLAKY TESTE
            // expect(res.duration).to.be.lte(tempoEsperado)
            expect(res.statusText).to.be.equal('OK')
            expect(res.duration).to.be.lte(1000)
        })

    })
})