describe('Details View', () => {

    it('Should show Details view on press view', ()=>{
      cy.visit('/') // url route
      cy.wait(1000) // waits for few seconds
      cy.get('button[name=sreverDelete]').click({multiple:true}) // clicks the delete button based on the instances
    })
  })