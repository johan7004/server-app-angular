describe('Details View', () => {

    it('Should show Details view on press view', ()=>{
      cy.visit('/')
      cy.wait(1000)
      cy.get('button[name=sreverDelete]').click({multiple:true})
    })
  })